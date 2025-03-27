<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { computed, defineProps, withDefaults, ref, watch, onMounted, defineEmits } from 'vue'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

import {
  Combobox,
  ComboboxAnchor,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxList,
  ComboboxTrigger,
} from '@/components/ui/combobox'
import { Check, ChevronsUpDown, Search } from 'lucide-vue-next'

import { countries } from './countries_list'
import type { CusInputMobileProps, CusInputMobileFormats } from '.'
import { cusInputMobileVariants } from '.'

defineOptions({ inheritAttrs: false })

const emit = defineEmits<{
  (e: 'update:formats', formats: CusInputMobileFormats): void
}>()

const props = withDefaults(defineProps<CusInputMobileProps>(), {
  error: null,
  defaultCountry: 'fr',
  favoriteCountries: () => [],
  placeholder: 'Enter phone number',
  searchPlaceholder: 'Search country...',
  noResultsText: 'No country found.',
  variant: 'default',
  size: 'default',
})

const inputValue = ref('')
const valueCombobox = ref<(typeof countries)[0]>()
const phoneFormats = ref<Record<string, string | boolean>>({})

const hasError = computed(() => !!props.error)

const sortedCountries = computed(() => {
  const countriesList = [...countries]

  if (!props.favoriteCountries?.length) {
    return countriesList.sort((a, b) => a.label.localeCompare(b.label))
  }

  const favoriteCountries = props.favoriteCountries
    .map((code) => countriesList.find((country) => country.value === code))
    .filter((country): country is (typeof countries)[0] => country !== undefined)

  const otherCountries = countriesList.filter(
    (country) => !props.favoriteCountries.includes(country.value),
  )

  const sortedOthers = otherCountries.sort((a, b) => a.label.localeCompare(b.label))

  return [...favoriteCountries, ...sortedOthers]
})

const cleanInputValue = (value: string): string => {
  return value.replace(/[a-zA-Z]/g, '')
}

const ensureCountryCode = (value: string): string => {
  if (!value.startsWith(valueCombobox.value.code)) {
    return valueCombobox.value.code
  }
  return value
}

const createFormatRegex = (countryFormat: string): RegExp => {
  return new RegExp(
    '^' +
      valueCombobox.value.code.replace(/[^0-9]/g, '') +
      countryFormat
        .replace(/c/g, '\\d')
        .replace(/z/g, '[1-9]')
        .replace(/x/g, '[0-9]')
        .replace(/\s/g, '')
        .replace(/[()]/g, '\\$&') +
      '$',
  )
}

const formatPhoneNumber = (cleanValue: string, countryFormat: string): string => {
  let formattedNumber = valueCombobox.value.code + ' '
  let currentIndex = valueCombobox.value.code.replace(/[^0-9]/g, '').length
  let digitsEntered = cleanValue.length - currentIndex

  for (let i = 0; i < countryFormat.length && digitsEntered > 0; i++) {
    const char = countryFormat[i]
    if (char === ' ') {
      formattedNumber += ' '
    } else if (['c', 'z', 'x'].includes(char)) {
      if (currentIndex < cleanValue.length) {
        formattedNumber += cleanValue[currentIndex]
        currentIndex++
        digitsEntered--
      }
    }
  }

  return formattedNumber
}

const truncateAndFormatNumber = (
  cleanValue: string,
  countryFormat: string,
  maxLength: number,
): string => {
  const truncatedValue = cleanValue.slice(0, maxLength)
  let formattedNumber = valueCombobox.value.code + ' '
  let currentIndex = valueCombobox.value.code.replace(/[^0-9]/g, '').length

  for (let i = 0; i < countryFormat.length; i++) {
    const char = countryFormat[i]
    if (char === ' ') {
      formattedNumber += ' '
    } else if (['c', 'z', 'x'].includes(char)) {
      if (currentIndex < truncatedValue.length) {
        formattedNumber += truncatedValue[currentIndex]
        currentIndex++
      }
    }
  }

  return formattedNumber
}

const generatePhoneFormats = (cleanValue: string): Record<string, string | boolean> => {
  const countryCode = valueCombobox.value.code
  const countryCodeWithoutPlus = countryCode.replace('+', '')
  const numberWithoutCountryCode = cleanValue.slice(countryCodeWithoutPlus.length)
  const nationalNumber = `0${numberWithoutCountryCode}`

  return {
    isValid: true,
    country: valueCombobox.value.label,
    country_code: valueCombobox.value.code,
    country_initial: valueCombobox.value.value,
    country_flag: valueCombobox.value.flag,
    international_with_spaces: `${countryCode} ${numberWithoutCountryCode.slice(0, 2)} ${numberWithoutCountryCode.slice(2, 4)} ${numberWithoutCountryCode.slice(4, 6)} ${numberWithoutCountryCode.slice(6, 8)} ${numberWithoutCountryCode.slice(8, 10)}`,
    international_without_spaces: `${countryCode}${numberWithoutCountryCode}`,
    international_with_dashes: `${countryCode}-${numberWithoutCountryCode.slice(0, 2)}-${numberWithoutCountryCode.slice(2, 4)}-${numberWithoutCountryCode.slice(4, 6)}-${numberWithoutCountryCode.slice(6, 8)}-${numberWithoutCountryCode.slice(8, 10)}`,
    international_with_dots: `${countryCode}.${numberWithoutCountryCode.slice(0, 2)}.${numberWithoutCountryCode.slice(2, 4)}.${numberWithoutCountryCode.slice(4, 6)}.${numberWithoutCountryCode.slice(6, 8)}.${numberWithoutCountryCode.slice(8, 10)}`,
    national_with_spaces: `${nationalNumber.slice(0, 2)} ${nationalNumber.slice(2, 4)} ${nationalNumber.slice(4, 6)} ${nationalNumber.slice(6, 8)} ${nationalNumber.slice(8, 10)}`,
    national_without_spaces: nationalNumber,
    national_with_dashes: `${nationalNumber.slice(0, 2)}-${nationalNumber.slice(2, 4)}-${nationalNumber.slice(4, 6)}-${nationalNumber.slice(6, 8)}-${nationalNumber.slice(8, 10)}`,
    national_with_dots: `${nationalNumber.slice(0, 2)}.${nationalNumber.slice(2, 4)}.${nationalNumber.slice(4, 6)}.${nationalNumber.slice(6, 8)}.${nationalNumber.slice(8, 10)}`,
    compact_international: `${countryCode} ${numberWithoutCountryCode}`,
    compact_national: nationalNumber,
    E164: `${countryCode}${numberWithoutCountryCode}`,
  }
}

const validatePhoneFormat = (cleanValue: string, formatRegex: RegExp): void => {
  if (!formatRegex.test(cleanValue)) {
    phoneFormats.value = { isValid: false }
    emit('update:formats', phoneFormats.value)
  } else {
    phoneFormats.value = generatePhoneFormats(cleanValue)
    console.log(phoneFormats.value)
    emit('update:formats', phoneFormats.value)
  }
}

const handleInput = (event: Event) => {
  const value = (event.target as HTMLInputElement).value
  inputValue.value = cleanInputValue(value)
  inputValue.value = ensureCountryCode(inputValue.value)

  const countryFormat = valueCombobox.value?.format[0]
  if (!countryFormat) return

  const formatRegex = createFormatRegex(countryFormat)
  const cleanValue = inputValue.value.replace(/[^0-9]/g, '')
  const maxLength =
    valueCombobox.value.code.replace(/[^0-9]/g, '').length +
    countryFormat.replace(/[^cxz]/g, '').length

  if (cleanValue.length > maxLength) {
    inputValue.value = truncateAndFormatNumber(cleanValue, countryFormat, maxLength)
    return
  }

  inputValue.value = formatPhoneNumber(cleanValue, countryFormat)

  if (cleanValue.length === maxLength) {
    validatePhoneFormat(cleanValue, formatRegex)
  }
}

const getBrowserLocale = (): string => {
  const locale = navigator.language || navigator.languages[0]
  return locale.split('-')[1]?.toLowerCase() || 'fr'
}

const defaultCountry = () => {
  if (props.defaultCountry) {
    const defaultCountryData = countries.find((country) => country.value === props.defaultCountry)
    if (defaultCountryData) {
      valueCombobox.value = defaultCountryData
      inputValue.value = defaultCountryData.code
    } else {
      inputValue.value = ''
      valueCombobox.value = ''
    }
  } else {
    const browserLocale = getBrowserLocale()
    const countryByLocale = countries.find((country) => country.value === browserLocale)
    if (countryByLocale) {
      valueCombobox.value = countryByLocale
      inputValue.value = countryByLocale.code
    } else {
      inputValue.value = ''
      valueCombobox.value = ''
    }
  }
}

watch(valueCombobox, (newValue) => {
  inputValue.value = newValue?.code
  emit('update:formats', {})
})

onMounted(() => {
  defaultCountry()
})
</script>

<template>
  <div
    :class="
      cn(
        cusInputMobileVariants({ variant: hasError ? 'error' : props.variant, size: props.size }),
        $attrs.class,
      )
    "
  >
    <Combobox v-model="valueCombobox" by="label">
      <ComboboxAnchor as-child>
        <ComboboxTrigger as-child>
          <Button
            variant="outline"
            class="flex w-[50px] max-w-[50px] items-center justify-between gap-1 border-none bg-transparent px-2 hover:bg-transparent"
          >
            <div v-if="valueCombobox?.flag" class="text-sm">
              {{ valueCombobox?.flag }}
            </div>
            <div v-else>
              <div class="h-3 w-[20px] rounded-sm bg-gray-400"></div>
            </div>

            <ChevronsUpDown class="size-4 shrink-0 opacity-50" />
          </Button>
        </ComboboxTrigger>
      </ComboboxAnchor>

      <ComboboxList>
        <div class="relative w-full max-w-sm items-center">
          <ComboboxInput
            class="h-10 rounded-none border-0 border-b pl-9 focus-visible:ring-0"
            :placeholder="searchPlaceholder"
          />
          <span class="absolute inset-y-0 start-0 flex items-center justify-center px-3">
            <Search class="size-4 text-muted-foreground" />
          </span>
        </div>

        <ComboboxEmpty> {{ noResultsText }} </ComboboxEmpty>

        <ComboboxGroup>
          <div class="h-72 overflow-y-auto pr-2">
            <ComboboxItem v-for="country in sortedCountries" :key="country.value" :value="country">
              <div class="flex items-center gap-2">
                <span class="text-sm">{{ country.flag }}</span>
                <span class="text-sm">{{ country.label }}</span>
              </div>

              <div class="flex items-center gap-2">
                <span class="text-[11px] text-gray-500">{{ country.code }}</span>

                <ComboboxItemIndicator class="flex items-center gap-2">
                  <Check :class="cn('ml-auto h-4 w-4')" />
                </ComboboxItemIndicator>
              </div>
            </ComboboxItem>
          </div>
        </ComboboxGroup>
      </ComboboxList>
    </Combobox>

    <Input
      :value="inputValue"
      @input="handleInput"
      v-bind="$attrs"
      :placeholder="placeholder"
      class="rounded-none border-none focus-visible:ring-0"
    />
  </div>
</template>

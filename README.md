### Feature description

# InputSelectPhone

A sleek and functional Vue 3 component for phone number input with country selection.

I am a French developer, I apologize if my English translation is not good.

## ✨ Features

- 🎯 Modern and intuitive user interface
- 🌍 Multilingual support (French by default)
- 🎨 Fully customizable styling
- 🔍 Quick country search
- 📱 Automatic number formatting based on country
- ⚡️ Real-time validation
- 🎨 Customizable theme
- 📦 Zero-dependency (uses Vue 3 only)

## Code

### index.ts
```ts
import { cva, type VariantProps } from 'class-variance-authority'

export { default as CusInputMobile } from './InputSelectPhone.vue'

export const cusInputMobileVariants = cva(
  'flex items-center rounded-lg border-[1px]',
  {
    variants: {
      variant: {
        default: 'border-gray-200 focus-within:border-primary',
        error: 'border-red-500 focus-within:border-red-500',
      },
      size: {
        default: 'h-10',
        sm: 'h-8',
        lg: 'h-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export type CusInputMobileVariants = VariantProps<typeof cusInputMobileVariants>

export interface CusInputMobileProps
  extends /* @vue-ignore */ CusInputMobileVariants {
  error?: string | null
  defaultCountry?: string
  favoriteCountries?: string[]
  placeholder?: string
  searchPlaceholder?: string
  noResultsText?: string
}

export interface CusInputMobileFormats {
  isValid: boolean
  international_with_spaces?: string
  international_without_spaces?: string
  international_with_dashes?: string
  international_with_dots?: string
  national_with_spaces?: string
  national_without_spaces?: string
  national_with_dashes?: string
  national_with_dots?: string
  compact_international?: string
  compact_national?: string
  E164?: string
}
```

### countries_list.ts
```ts
export const countries = [
  {
    value: 'fr',
    label: 'France',
    code: '+33',
    flag: '🇫🇷',
    format: ['c cc cc cc cc'],
  },
  {
    value: 'be',
    label: 'Belgique',
    code: '+32',
    flag: '🇧🇪',
    format: ['z(z) cc cc cc', 'z ccc cc cc'],
  },
  {
    value: 'de',
    label: 'Allemagne',
    code: '+49',
    flag: '🇩🇪',
    format: ['code régional + ccc ccc ccc', '1cc ccc cc ccc'],
  },
  {
    value: 'it',
    label: 'Italie',
    code: '+39',
    flag: '🇮🇹',
    format: ['0c cccc cccc', '3cc ccc cccc'],
  },
  {
    value: 'af',
    label: 'Afghanistan',
    code: '+93',
    flag: '🇦🇫',
    format: ['cc ccc cccc'],
  },
  {
    value: 'za',
    label: 'Afrique du Sud',
    code: '+27',
    flag: '🇿🇦',
    format: ['cc ccc cc cc'],
  },
  {
    value: 'al',
    label: 'Albanie',
    code: '+355',
    flag: '🇦🇱',
    format: ['cccc cccc'],
  },
  {
    value: 'dz',
    label: 'Algérie',
    code: '+213',
    flag: '🇩🇿',
    format: ['cc cc cc cc cc'],
  },
  {
    value: 'ar',
    label: 'Argentine',
    code: '+54',
    flag: '🇦🇷',
    format: ['code régional + ccc-cccc', '9 + code régional + ccc-cccc'],
  },
  {
    value: 'am',
    label: 'Arménie',
    code: '+374',
    flag: '🇦🇲',
    format: ['cc ccc ccc'],
  },
  {
    value: 'au',
    label: 'Australie',
    code: '+61',
    flag: '🇦🇺',
    format: ['x cccc cccc', '4.. ccc ccc'],
  },
  {
    value: 'at',
    label: 'Autriche',
    code: '+43',
    flag: '🇦🇹',
    format: ['c ccc ccc'],
  },
  {
    value: 'az',
    label: 'Azerbaïdjan',
    code: '+994',
    flag: '🇦🇿',
    format: ['cc ccc cccc'],
  },
  {
    value: 'bg',
    label: 'Bulgarie',
    code: '+359',
    flag: '🇧🇬',
    format: ['cc ccc cccc'],
  },
  {
    value: 'es',
    label: 'Espagne',
    code: '+34',
    flag: '🇪🇸',
    format: ['ccc cc cc cc', '6cc ccc ccc'],
  },
  {
    value: 'ee',
    label: 'Estonie',
    code: '+372',
    flag: '🇪🇪',
    format: ['cc cccc', 'c ccc ccc', '5cc cccc', '5c ccc ccc', '5ccc cccc'],
  },
  {
    value: 'gp',
    label: 'Guadeloupe',
    code: '+590',
    flag: '🇬🇵',
    format: ['590 cc cc cc'],
  },
  {
    value: 'gf',
    label: 'Guyane',
    code: '+594',
    flag: '🇬🇫',
    format: ['594 cc cc cc'],
  },
  {
    value: 'ge',
    label: 'Géorgie',
    code: '+995',
    flag: '🇬🇪',
    format: ['cc ccc cccc'],
  },
  {
    value: 'hk',
    label: 'Hong Kong',
    code: '+852',
    flag: '🇭🇰',
    format: ['cc cc cc cc'],
  },
  {
    value: 'hu',
    label: 'Hongrie',
    code: '+36',
    flag: '🇭🇺',
    format: ['1 ccc cccc', 'cc ccc ccc', '20|30|70 ccc cccc'],
  },
  {
    value: 'kg',
    label: 'Kirghizistan',
    code: '+996',
    flag: '🇰🇬',
    format: ['cc ccc cccc'],
  },
  {
    value: 'lv',
    label: 'Lettonie',
    code: '+371',
    flag: '🇱🇻',
    format: ['cccc cccc'],
  },
  {
    value: 'lt',
    label: 'Lituanie',
    code: '+370',
    flag: '🇱🇹',
    format: ['cc cccc cccc'],
  },
  {
    value: 'mo',
    label: 'Macao',
    code: '+853',
    flag: '🇲🇴',
    format: ['28 cc cc cc', '6c cc cc cc'],
  },
  {
    value: 'mq',
    label: 'Martinique',
    code: '+596',
    flag: '🇲🇶',
    format: ['596 cc cc cc'],
  },
  {
    value: 'yt',
    label: 'Mayotte',
    code: '+262',
    flag: '🇾🇹',
    format: ['262 cc cc cc'],
  },
  {
    value: 'md',
    label: 'Moldavie',
    code: '+373',
    flag: '🇲🇩',
    format: ['cc cccc cccc'],
  },
  {
    value: 'nc',
    label: 'Nouvelle-Calédonie',
    code: '+687',
    flag: '🇳🇨',
    format: ['cc cc cc'],
  },
  {
    value: 'uz',
    label: 'Ouzbékistan',
    code: '+998',
    flag: '🇺🇿',
    format: ['cc ccc cccc'],
  },
  {
    value: 'pl',
    label: 'Pologne',
    code: '+48',
    flag: '🇵🇱',
    format: ['cc ccc cc cc'],
  },
  {
    value: 'pt',
    label: 'Portugal',
    code: '+351',
    flag: '🇵🇹',
    format: ['ccc ccc ccc', '800 ccc ccc', '808 ccc ccc', '7cc ccc ccc'],
  },
  {
    value: 'ro',
    label: 'Roumanie',
    code: '+40',
    flag: '🇷🇴',
    format: ['cc ccc cccc', '70|71|72|73|74|75|76|77 ccc cccc'],
  },
  {
    value: 'ru',
    label: 'Russie',
    code: '+7',
    flag: '🇷🇺',
    format: ['code régional + ccc-cc-cc'],
  },
  {
    value: 'cz',
    label: 'République Tchèque',
    code: '+420',
    flag: '🇨🇿',
    format: ['ccc ccc ccc'],
  },
  {
    value: 're',
    label: 'Réunion',
    code: '+262',
    flag: '🇷🇪',
    format: ['262 cc cc cc'],
  },
  {
    value: 'sk',
    label: 'Slovaquie',
    code: '+421',
    flag: '🇸🇰',
    format: ['ccc ccc cccc'],
  },
  {
    value: 'ch',
    label: 'Suisse',
    code: '+41',
    flag: '🇨🇭',
    format: ['cc ccc cc cc', '075|076|077|078|079 ccc cccc'],
  },
  {
    value: 'se',
    label: 'Suède',
    code: '+46',
    flag: '🇸🇪',
    format: ['c cc cc ccc'],
  },
  {
    value: 'tw',
    label: 'Taïwan',
    code: '+886',
    flag: '🇹🇼',
    format: ['c cccc cccc'],
  },
  {
    value: 'tl',
    label: 'Timor oriental',
    code: '+670',
    flag: '🇹🇱',
    format: ['cccc cccc'],
  },
  {
    value: 'ua',
    label: 'Ukraine',
    code: '+380',
    flag: '🇺🇦',
    format: ['cc ccc cccc'],
  },
  {
    value: 'va',
    label: 'Vatican',
    code: '+39',
    flag: '🇻🇦',
    format: ['0c cccc cccc'],
  },
  {
    value: 'us',
    label: 'États-Unis',
    code: '+1',
    flag: '🇺🇸',
    format: ['(ccc) ccc-cccc'],
  },
]
```

### InputSelectPhone.vue
```vue
<script setup lang="ts">
import { Input } from '@/components/ui/input'
import {
  computed,
  defineProps,
  withDefaults,
  ref,
  watch,
  onMounted,
  defineEmits,
} from 'vue'
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
    .filter(
      (country): country is (typeof countries)[0] => country !== undefined
    )

  const otherCountries = countriesList.filter(
    (country) => !props.favoriteCountries.includes(country.value)
  )

  const sortedOthers = otherCountries.sort((a, b) =>
    a.label.localeCompare(b.label)
  )

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
      '$'
  )
}

const formatPhoneNumber = (
  cleanValue: string,
  countryFormat: string
): string => {
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
  maxLength: number
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

const generatePhoneFormats = (
  cleanValue: string
): Record<string, string | boolean> => {
  const countryCode = valueCombobox.value.code
  const countryCodeWithoutPlus = countryCode.replace('+', '')
  const numberWithoutCountryCode = cleanValue.slice(
    countryCodeWithoutPlus.length
  )
  const nationalNumber = `0${numberWithoutCountryCode}`

  return {
    isValid: true,
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
    inputValue.value = truncateAndFormatNumber(
      cleanValue,
      countryFormat,
      maxLength
    )
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
    const defaultCountryData = countries.find(
      (country) => country.value === props.defaultCountry
    )
    if (defaultCountryData) {
      valueCombobox.value = defaultCountryData
      inputValue.value = defaultCountryData.code
    } else {
      inputValue.value = ''
      valueCombobox.value = ''
    }
  } else {
    const browserLocale = getBrowserLocale()
    const countryByLocale = countries.find(
      (country) => country.value === browserLocale
    )
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
})

onMounted(() => {
  defaultCountry()
})
</script>

<template>
  <div
    :class="
      cn(
        cusInputMobileVariants({ variant: hasError ? 'error' : variant, size }),
        $attrs.class
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
          <span
            class="absolute inset-y-0 start-0 flex items-center justify-center px-3"
          >
            <Search class="size-4 text-muted-foreground" />
          </span>
        </div>

        <ComboboxEmpty> {{ noResultsText }} </ComboboxEmpty>

        <ComboboxGroup>
          <div class="h-72 overflow-y-auto pr-2">
            <ComboboxItem
              v-for="country in sortedCountries"
              :key="country.value"
              :value="country"
            >
              <div class="flex items-center gap-2">
                <span class="text-sm">{{ country.flag }}</span>
                <span class="text-sm">{{ country.label }}</span>
              </div>

              <div class="flex items-center gap-2">
                <span class="text-[11px] text-gray-500">{{
                  country.code
                }}</span>

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
```

### Affected component/components

_No response_

### Additional Context

## 🎨 Variants

The component offers several style variants:

- `default`: Default style
- `error`: Style for error states
- Available sizes: `default`, `sm`, `lg`

## 📝 Output Formats

The component automatically generates multiple phone number formats:

- International format with spaces
- International format without spaces
- International format with dashes
- International format with dots
- National format with spaces
- National format without spaces
- National format with dashes
- National format with dots
- Compact international format
- Compact national format
- E.164 format

## 💡 Usage

```vue
<template>
<InputSelectPhone
    default-country="fr"
    placeholder="Téléphone"
    search-placeholder="Rechercher un pays"
    no-results-text="Aucun pays trouvé"
    :favorite-countries="['fr', 'es', 'be', 'pt', 'us']"
  />
</template>

<script setup>
import InputSelectPhone from '@/components/ui/input-select-phone/InputSelectPhone.vue'
</script>
```

## ⚙️ Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `error` | `string \| null` | `null` | Error message to display |
| `defaultCountry` | `string` | `'fr'` | Default country code |
| `favoriteCountries` | `string[]` | `[]` | List of favorite countries |
| `placeholder` | `string` | `'Enter phone number'` | Input field placeholder |
| `searchPlaceholder` | `string` | `'Search country...'` | Search field placeholder |
| `noResultsText` | `string` | `'No country found.'` | Text when no results found |
| `variant` | `'default' \| 'error'` | `'default'` | Visual variant |
| `size` | `'default' \| 'sm' \| 'lg'` | `'default'` | Component size |

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull 

### Before submitting

- [x] I've made research efforts and searched the documentation
- [x] I've searched for existing issues and PRs

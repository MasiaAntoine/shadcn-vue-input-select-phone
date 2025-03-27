import { cva, type VariantProps } from 'class-variance-authority'

export { default as CusInputMobile } from './InputSelectPhone.vue'

export const cusInputMobileVariants = cva(
  'flex items-center rounded-lg border-[1px] bg-white text-black',
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
  },
)

export type CusInputMobileVariants = VariantProps<typeof cusInputMobileVariants>

export interface CusInputMobileProps extends /* @vue-ignore */ CusInputMobileVariants {
  error?: string | null
  defaultCountry?: string
  favoriteCountries?: string[]
  placeholder?: string
  searchPlaceholder?: string
  noResultsText?: string
}

export interface CusInputMobileFormats {
  isValid: boolean
  country: string
  country_code: string
  country_initial: string
  country_flag: string
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

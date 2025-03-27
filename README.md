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

## 🛠️ Prerequisites

- Install Tailwind CSS
- Install lucide-vue-next
- Install shadcn

This component requires the following ShadCN components:

- pnpm dlx shadcn-vue@latest add combobox
- pnpm dlx shadcn-vue@latest add button
- pnpm dlx shadcn-vue@latest add command
- pnpm dlx shadcn-vue@latest add input

Then, copy the folder `src/components/ui/input-select-phone` into your own `src/components/ui/` directory.

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
<script setup lang="ts">
import { ref } from 'vue'
import InputSelectPhone from '@/components/ui/input-select-phone/InputSelectPhone.vue'

const phoneFormats = ref()
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-800 text-white space-y-4">
    <InputSelectPhone
      default-country="fr"
      placeholder="Téléphone"
      search-placeholder="Rechercher un pays"
      no-results-text="Aucun pays trouvé"
      :favorite-countries="['fr', 'es', 'be', 'pt', 'us']"
      @update:formats="(formats) => (phoneFormats = formats)"
    />

    <pre class="bg-gray-900 p-4 rounded text-sm w-full max-w-xl overflow-auto">
      {{ phoneFormats }}
    </pre>
  </div>
</template>
```

## ⚙️ Props

| Prop                | Type                        | Default                | Description                |
| ------------------- | --------------------------- | ---------------------- | -------------------------- |
| `error`             | `string \| null`            | `null`                 | Error message to display   |
| `defaultCountry`    | `string`                    | `'fr'`                 | Default country code       |
| `favoriteCountries` | `string[]`                  | `[]`                   | List of favorite countries |
| `placeholder`       | `string`                    | `'Enter phone number'` | Input field placeholder    |
| `searchPlaceholder` | `string`                    | `'Search country...'`  | Search field placeholder   |
| `noResultsText`     | `string`                    | `'No country found.'`  | Text when no results found |
| `variant`           | `'default' \| 'error'`      | `'default'`            | Visual variant             |
| `size`              | `'default' \| 'sm' \| 'lg'` | `'default'`            | Component size             |

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull

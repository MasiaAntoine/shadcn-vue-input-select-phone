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

<script setup lang="ts">import { PropType } from '@vue/runtime-core';

defineProps({
  /* 
  When someone installs and imports our MyButton.vue component form our library,
  Volar should offer "calamari" and "tuna" autocompletions for it
  */
  seafood: {type: String as PropType<"calamari" | "tuna">, required: true} 
})
</script>
<template>
<button>
  I'm a button, my prop is {{ seafood }}
</button>
</template>

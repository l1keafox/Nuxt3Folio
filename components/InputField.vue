<template>
  <div>

  </div>
</template>

<script setup>
const { label, modelValue , error } = defineProps({
  label: {
    type: String,
    default: ''
  },
  modelValue: {
    type: [String,Number],
    default: ''
  },
  error: {
    type: String,
    default: ''
  },
})
</script>

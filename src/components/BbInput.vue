<template>
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    class="text-15 text-black border border-gray-light rounded py-12 px-15 focus:border-blue"
  />
</template>

<script lang="ts" setup>
const { modelValue } = defineProps<{
      modelValue: string;
}>();

defineEmits<{
  (e: "update:modelValue", value: string): void;
}>()
</script>

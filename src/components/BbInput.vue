<template>
  <input
    :type="type"
    class="text-15 text-black border border-gray-light rounded py-12 px-15 focus:border-blue"
  />
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    type?: string;
  }>(),
  {
    type: "text",
  }
);
</script>

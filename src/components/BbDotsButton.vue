<template>
  <button type="button" :title="title"
          class="inline-flex items-center justify-center
          w-[40px] h-[40px] rounded-[20px]
          text-gray hover:text-black focus:text-black hover:bg-gray focus:bg-gray"
  >
    <BbIcon name="dots" width="22"/>
  </button>
</template>

<script setup lang="ts">
import BbIcon from "./BbIcon.vue";

const {title} = defineProps<{
  title?: string,
}>();
</script>
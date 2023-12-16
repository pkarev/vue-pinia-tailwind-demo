<template>
  <div class="flex max-md:flex-wrap">
    <BbInput :model-value="search"
             @update:modelValue="(text: string) => emit('update:search', text)"
             class="w-full mr-auto max-md:w-full"/>
    <div class="shrink-0 max-md:w-full max-md:flex max-md:justify-between max-md:mt-[16px] max-md:gap-[16px]">
      <BbButton @click="emit('update:filter', 'ByName')"
          class="md:ml-16 max-md:grow">
        Sort by Name
      </BbButton>
      <BbButton @click="emit('update:filter', 'ByDate')"
          class="md:ml-16 max-md:grow">
        Sort by Date
      </BbButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import BbInput from "../components/BbInput.vue";
import BbButton from "../components/BbButton.vue";

const search = ref("");

defineProps<{
  filter: FilterType;
}>();

const emit = defineEmits<{
  (e: "update:filter", value: FilterType): void;
  (e: "update:search", value: string): void;
}>();

export type FilterType = 'ByDate' | 'ByName';
</script>

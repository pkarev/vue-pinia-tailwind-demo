<template>
  <label class="flex items-start cursor-pointer" tabindex="0">
    <input type="checkbox" :checked="isChecked" @change="onChange" class="sr-only" tabindex="-1"/>
    <span class="w-[24px] h-[24px] shrink-0 mr-8 rounded-3xl border border-gray flex items-center justify-center"
          :class="boxClass">
      <BbIcon name="check" width="12" height="12" v-if="isChecked" class="text-white"/>
    </span>
    <span class="block text-15 leading-[24px]">
      <slot>
      </slot>
    </span>
  </label>
</template>

<script setup lang="ts">
import {computed} from "vue";
import BbIcon from "./BbIcon.vue";

const props = defineProps<{
  isChecked: boolean,
}>();

const emit = defineEmits<{
  (e: "update:isChecked", value: boolean): void
}>();

const onChange = () => {
  emit("update:isChecked", !props.isChecked);
}

const boxClass = computed((): Record<string, boolean> => ({
  "bg-blue": props.isChecked,
}));
</script>
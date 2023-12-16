<template>
  <BbCheckbox :is-checked="item.isDone" @update:is-checked="onUpdate">
    <span class="block" :class="checkedTextClass">{{ item.text }}</span>
    <span class="block text-gray text-10 leading-[12px]" :class="checkedTextClass">{{ formattedDate(item.created) }}</span>
  </BbCheckbox>
</template>

<script setup lang="ts">
import {computed} from "vue";
import BbCheckbox from "./BbCheckbox.vue";
import {Todo} from "../stores/TodoListStore.ts";

const { item } = defineProps<{
  item: Todo,
}>();

const emit = defineEmits<{
  (e: "update:isChecked", value: boolean): void
}>();

const onUpdate = () => {
  emit("update:isChecked", !item.isDone);
}

const checkedTextClass = computed((): Record<string, boolean> => ({
  "text-gray line-through": item.isDone,
}));

const formattedDate = (date: Date): string => {
  return date.toLocaleDateString("de", {
    hour: "numeric",
    minute: "numeric",
  })
}
</script>
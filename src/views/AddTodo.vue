<template>
  <div class="box-border flex justify-between max-md:px-[16px]">
    <BbInput class="w-full" v-model="text"/>
    <BbButton v-model="text" :disabled="!text" @click="onClick" class="shrink-0 ml-16">Add Item</BbButton>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import BbInput from "../components/BbInput.vue";
import BbButton from "../components/BbButton.vue";

const text = ref('');

const emit = defineEmits<{
  (e: "add", text: string): void
}>();

const onClick = () => {
  emit("add", text.value);
  text.value = "";
};
</script>
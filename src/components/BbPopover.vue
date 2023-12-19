<template>
<div v-click-outside="onClickOutside">
  <span ref="triggerSlot" @click="onClickToggle" >
    <slot></slot>
  </span>
  <div ref="contentSlot" v-show="isActive">
    <slot name="content"></slot>
  </div>
</div>
</template>

<script setup lang="ts">
import {createPopper, Instance} from "@popperjs/core";
import {onMounted, onUpdated, ref} from "vue";
import {clickOutside as vClickOutside} from "../directives/clickOutside.ts";

const triggerSlot = ref();
const contentSlot = ref();
const isActive = ref(false);
let popper: Instance;

const toggle = () => {
  isActive.value = !isActive.value;
}

const onClickToggle = () => {
  toggle();
}
const onClickOutside = () => {
  isActive.value = false;
}

onMounted(() => {
  popper = createPopper(triggerSlot.value as HTMLElement, contentSlot.value as HTMLElement, {
    placement: 'left-start',
  });
});

onUpdated(() => {
  popper.update();
});
</script>

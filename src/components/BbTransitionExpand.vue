<template>
  <Transition
             name="expand"
             @enter="enter"
             @after-enter="afterEnter"
             @leave="leave"
  >
    <slot></slot>
  </Transition>
</template>

<script setup lang="ts">
const enter = (element: any) => {
  const width = getComputedStyle(element).width;

  element.style.width = width;
  element.style.position = 'absolute';
  element.style.visibility = 'hidden';
  element.style.height = 'auto';

  const height = getComputedStyle(element).height;

  element.style.width = null;
  element.style.position = null;
  element.style.visibility = null;
  element.style.height = 0;

  getComputedStyle(element).height;

  requestAnimationFrame(() => {
    element.style.height = height;
  });
}

const afterEnter = (element: any) => {
  element.style.height = 'auto';
};

const leave = (element: any) => {
  element.style.height = getComputedStyle(element).height;
  getComputedStyle(element).height;
  requestAnimationFrame(() => {
    element.style.height = 0;
  });
};

</script>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: height .1s ease-in-out;
  overflow: hidden;
}

.expand-enter,
.expand-leave-to {
  height: 0;
}

* {
  will-change: height;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}
</style>
<template>
  <TransitionGroup
             name="list"
             tag="ul"
  >
    <slot></slot>
  </TransitionGroup>
</template>

<script setup lang="ts"></script>

<style>
.list-enter-active,
.list-leave-active {
  transition: all .5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-leave-active {
  animation: bounce-in .5s reverse;
}
</style>
<template>
  <div class="container pt-14 pb-48 min-h-screen flex flex-col">
    <TodoListNav class="border-b border-chrome"/>

    <div class="flex-grow" :class="routerViewWrapClass">
      <router-view />
    </div>

    <AddTodo class="mt-16" @add="onAdd"/>
  </div>
</template>

<script setup lang="ts">
import {computed} from "vue";
import {useRoute} from "vue-router";
import {paths} from "./router";
import useTodoListStore from "./stores/TodoListStore";
import TodoListNav from "./views/AppNav.vue";
import AddTodo from "./views/AddTodo.vue";

const route = useRoute();
const routerViewWrapClass = computed(() => ({
  "mt-[-1px]": route.path === paths.main,
}));

const store = useTodoListStore();
const onAdd = (text: string) => {
  store.addTodo({
    text,
    created: new Date(),
    isDone: false,
    isBacklog: route.path === paths.backlog,
  });
}
</script>
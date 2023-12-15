<template>
  <nav>
    <ul class="flex">
      <li v-for="route in routeList" :key="route.title" class="mx-16 first:md:ml-[0px]">
        <router-link :to="route.path"
                     class="text-28 font-bold inline-flex py-16 leading-8 border-bottom relative"
                     :class="linkClass(route.path)"
        >
          {{ route.title }}

          <span v-if="isActiveRoute(route.path)"
                class="w-full h-[4px] bg-blue br-2 rounded-[4px] absolute  bottom-[0px] left-[0px] absolute block"
          ></span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {paths} from "../router";

const route = useRoute();

const routeList = [
  {
    title: "To Do List",
    path: paths.main,
  },
  {
    title: "Backlog",
    path: paths.backlog,
  }
];

const isActiveRoute = (path: string) => {
  return route.path === path;
}

const linkClass = (path: string): Record<string, boolean> => {
  return {
    'text-gray hover:text-black': !isActiveRoute(path),
  }
}
</script>
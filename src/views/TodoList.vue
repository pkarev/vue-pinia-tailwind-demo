<template>
  <BbCollapse :title="doneTitle" v-if="isDoneListShown">
    <div>
      <ul>
        <li v-for="(item) in frontLogDoneList" :key="item.created.toISOString()"
            class="my-[8px]"
        >
          <BbTodoItem :item="item"
                      @update:is-checked="toggleTodo(item.created)"
          />
        </li>
      </ul>
    </div>
  </BbCollapse>
  <ul class="pt-[4px] max-md:px-[16px] w-full" v-if="hasFrontLogList">
    <li v-for="(item, index) in frontLogNotDoneList" :key="item.created.toISOString()"
        class="flex justify-stretch my-[8px]"
    >
      <BbTodoItem :item="item"
                  @update:is-checked="toggleTodo(item.created)"
                  class="grow"
      />
      <div class="relative shrink-0 ml-8">
        <BbDotsButton @click="toggleControls(index)"/>
        <div v-if="areControlsVisible(index)"
             class="flex flex-col absolute right-[100%] top-[0px] mr-[12px] bg-white"
        >
          <BbButton variant="outlined" small
                    @click="deleteTodo(item.created, index)"
                    class="whitespace-nowrap rounded-b-none">
            Delete
          </BbButton>
          <BbButton variant="outlined" small
                    @click="moveTodoToBacklog(item.created, index)"
                    class="whitespace-nowrap rounded-t-none mt-[-1px]">
            Move to Backlog
          </BbButton>
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import BbCollapse from "../components/BbCollapse.vue";
import BbTodoItem from "../components/BbTodoItem.vue";
import useTodoListStore from "../stores/TodoListStore.ts";
import BbDotsButton from "../components/BbDotsButton.vue";
import BbButton from "../components/BbButton.vue";
import {storeToRefs} from "pinia";
import {useTodoItem} from "../composables/useTodoItem.ts";

const store = useTodoListStore();
const { frontLogList, frontLogDoneList, frontLogNotDoneList } = storeToRefs(store);

const activeControlsIndex = ref(-1);

const toggleControls = (index: number) => {
  if (activeControlsIndex.value === index) {
    activeControlsIndex.value = -1;

    return;
  }

  activeControlsIndex.value = index;
}

const areControlsVisible = (index: number): boolean => {
  return activeControlsIndex.value === index;
};

const doneTitle = computed((): string => {
  return `${frontLogDoneList.value.length} Done`;
});

const isDoneListShown = computed(() => {
  return frontLogDoneList.value.length;
});

const deleteTodo = (date: Date, index: number): void => {
  toggleControls(index);
  store.deleteTodo(date);
}

const moveTodoToBacklog = (date: Date, index: number): void => {
  toggleControls(index);
  store.toggleIsBackLog(date);
}

const { toggleTodo } = useTodoItem(store);

const hasFrontLogList = computed((): boolean => {
  return frontLogList.value.length > 0;
});
</script>
<template>
  <BbCollapse :title="doneTitle" v-if="isDoneListShown">
    <div>
      <BbTransitionGroupList>
        <li v-for="item in frontLogDoneList" :key="item.created.toISOString()"
            class="my-[8px]"
        >
          <BbTodoItem :item="item"
                      @update:is-checked="toggleTodo(item.created)"
          />
        </li>
      </BbTransitionGroupList>
    </div>
  </BbCollapse>
  <BbTransitionGroupList class="pt-[4px] max-md:px-[16px] w-full" v-if="hasFrontLogList">
    <li v-for="item in frontLogNotDoneList" :key="item.created.toISOString()"
        class="flex justify-stretch my-[8px]"
    >
      <BbTodoItem :item="item"
                  @update:is-checked="toggleTodo(item.created)"
                  class="grow"
      />
      <div class="shrink-0 ml-8">
        <BbPopover>
          <BbDotsButton />

          <template #content>
            <div class="flex flex-col mr-[12px] bg-white">
              <BbButton variant="outlined" small
                        @click="deleteTodo(item.created)"
                        class="whitespace-nowrap rounded-b-none"
              >
                Delete
              </BbButton>
              <BbButton variant="outlined" small
                    @click="moveTodoToBacklog(item.created)"
                        class="whitespace-nowrap rounded-t-none mt-[-1px]"
              >
                Move to Backlog
              </BbButton>
            </div>
          </template>
        </BbPopover>
      </div>
    </li>
  </BbTransitionGroupList>
</template>

<script setup lang="ts">
import {computed} from "vue";
import {storeToRefs} from "pinia";
import useTodoListStore from "../stores/TodoListStore.ts";
import BbCollapse from "../components/BbCollapse.vue";
import BbTodoItem from "../components/BbTodoItem.vue";
import BbDotsButton from "../components/BbDotsButton.vue";
import BbButton from "../components/BbButton.vue";
import BbTransitionGroupList from "../components/BbTransitionGroupList.vue";
import {useTodoItem} from "../composables/useTodoItem.ts";
import BbPopover from "../components/BbPopover.vue";

const store = useTodoListStore();
const { frontLogList, frontLogDoneList, frontLogNotDoneList } = storeToRefs(store);

const doneTitle = computed((): string => {
  return `${frontLogDoneList.value.length} Done`;
});

const isDoneListShown = computed(() => {
  return frontLogDoneList.value.length;
});

const deleteTodo = (date: Date): void => {
  store.deleteTodo(date);
}

const moveTodoToBacklog = (date: Date): void => {
  store.toggleIsBackLog(date);
}

const { toggleTodo } = useTodoItem(store);

const hasFrontLogList = computed((): boolean => {
  return frontLogList.value.length > 0;
});
</script>
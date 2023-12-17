<template>
  <div class="sm">
    <TodoListFilter v-if="areFiltersShown"
                    v-model:filter="activeFilter"
                    v-model:search="search"
                    class="mt-16 max-md:px-[16px]"
    />
    <BbTransitionGroupList class="pt-[4px] max-md:px-[16px] mt-[16px]" v-if="hasBackLogList">
      <li v-for="item in sortedBacklog.value" :key="item.text"
          class="flex justify-stretch my-[8px] first:mt-[0px] last:mb-[0px]"
      >
        <BbTodoItem :item="item"
                    @update:is-checked="toggleTodo(item.created)"
                    class="grow"
        />
        <BbButton variant="outlined" small
                  @click="moveTodoToFrontLog(item.created)"
                  class="shrink-0 self-start ml-[8px] md:ml-[16px]">
          Move to list
        </BbButton>
      </li>
    </BbTransitionGroupList>
  </div>
</template>

<script setup lang="ts">
import {computed, Ref, ref} from "vue";
import useTodoListStore, {Todo} from "../stores/TodoListStore.ts";
import {storeToRefs} from "pinia";
import BbTodoItem from "../components/BbTodoItem.vue";
import BbButton from "../components/BbButton.vue";
import TodoListFilter, {FilterType} from "./TodoListFilter.vue";
import BbTransitionGroupList from "../components/BbTransitionGroupList.vue";
import {useTodoItem} from "../composables/useTodoItem.ts";
import {sortDatesChronologically, sortStringsAlphabetically} from "../utils/sort.ts";

const store = useTodoListStore();
const {backLogList} = storeToRefs(store);

const areFiltersShown = computed((): boolean => {
  return backLogList.value.length > 1 && hasBackLogList.value;
})

const search = ref("");
const searchedBackLogList: Ref<Todo[]> = computed(() => {
  if (!search.value) {
    return backLogList.value;
  }

  return backLogList.value?.filter((todo) => {
    return todo.text.toLowerCase().includes(search.value.toLowerCase());
  });
});

const activeFilter: Ref<FilterType> = ref("ByName" as FilterType);

const sortedBacklogByText = computed(() => {
  return [...searchedBackLogList.value]
      .sort((current, next) => sortStringsAlphabetically(current.text, next.text));
});

const sortedBacklogByDate = computed(() => {
  return [...searchedBackLogList.value]
      .sort((current, next) => sortDatesChronologically(current.created, next.created));
});

const sortedBacklog = computed(() => {
  return activeFilter.value === "ByName" ? sortedBacklogByText : sortedBacklogByDate;
});

const moveTodoToFrontLog = (date: Date) => {
  store.toggleIsBackLog(date);
}

const hasBackLogList = computed((): boolean => {
  return !!backLogList.value.length;
});

const { toggleTodo } = useTodoItem(store);
</script>

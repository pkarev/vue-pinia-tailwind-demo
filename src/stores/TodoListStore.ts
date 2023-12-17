import {defineStore} from "pinia";
import {StoreName} from "./model.ts";
import {computed, reactive} from "vue";
import {TODO_LIST_FIXTURE} from "./fixture.ts";

const useTodoListStore = defineStore(`${StoreName.TodoList}`, () => {
    let todoList: Todo[] = reactive(TODO_LIST_FIXTURE);

    const frontLogList = computed((): Todo[] => todoList.filter((item) => !item.isBacklog));
    const frontLogNotDoneList = computed(() => frontLogList.value.filter((item) => !item.isDone));
    const frontLogDoneList = computed(() => frontLogList.value.filter((item) => item.isDone));
    const backLogList = computed((): Todo[] => todoList.filter((item) => item.isBacklog));

    const addTodo = (todo: Todo) => {
        todoList.push(todo);
    }

    const deleteTodo = (date: Date) => {
        const indexToRemove = todoList.findIndex((todo) => todo.created.toISOString() === date.toISOString());
        todoList.splice(indexToRemove, 1);
    }

    const toggleIsBackLog = (date: Date) => {
        const item = todoList.find((todo) => todo.created.toISOString() === date.toISOString());

        if (!item) {
            return;
        }

        item.isBacklog = !item.isBacklog;
    }

    return {
        todoList,
        backLogList,
        frontLogList,
        frontLogNotDoneList,
        frontLogDoneList,
        addTodo,
        deleteTodo,
        toggleIsBackLog,
    }
});

export default useTodoListStore;

export type Todo = {
    created: Date,
    text: string,
    isDone: boolean,
    isBacklog: boolean,
}
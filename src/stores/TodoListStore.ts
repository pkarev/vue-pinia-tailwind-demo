import {defineStore} from "pinia";
import {StoreName} from "./model.ts";
import {computed, reactive} from "vue";
import {DEFAULT_TODO_LIST} from "./fixture.ts";

const LOCALSTORAGE_TODOS_KEY = "bb.todos";

const useTodoListStore = defineStore(`${StoreName.TodoList}`, () => {
    const getItems = (): Todo[] => {
        const storaged = localStorage.getItem(LOCALSTORAGE_TODOS_KEY);

        if (!storaged) {
            return [];
        }

        const storageItems: Todo[] = JSON.parse(storaged);

        if (!storageItems.length) {
            return [];
        }

        return storageItems.map((item) => ({
            ...item,
            created: new Date(item.created)
        }))
    }

    const setItems = (): void => {
        localStorage.setItem(LOCALSTORAGE_TODOS_KEY, JSON.stringify(todoList));
    }

    const todoList: Todo[] = reactive(getItems().length ? getItems() : DEFAULT_TODO_LIST);
    const frontLogList = computed((): Todo[] => todoList.filter((item) => !item.isBacklog));
    const frontLogNotDoneList = computed(() => frontLogList.value.filter((item) => !item.isDone));
    const frontLogDoneList = computed(() => frontLogList.value.filter((item) => item.isDone));
    const backLogList = computed((): Todo[] => todoList.filter((item) => item.isBacklog));
    const addTodo = (todo: Todo) => {
        todoList.push(todo);
        setItems();
    }

    const deleteTodo = (date: Date) => {
        const indexToRemove = todoList.findIndex((todo) => todo.created.toISOString() === date.toISOString());
        todoList.splice(indexToRemove, 1);
        setItems();
    }

    const toggleIsBackLog = (date: Date) => {
        const item = todoList.find((todo) => todo.created.toISOString() === date.toISOString());

        if (!item) {
            return;
        }

        item.isBacklog = !item.isBacklog;
        setItems();
    }

    const toggleIsDone = (date: Date) => {
        const item = todoList.find((todo) => todo.created.toISOString() === date.toISOString());

        if (!item) {
            return;
        }

        item.isDone = !item.isDone;
        setItems();
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
        toggleIsDone,
    }
});

export default useTodoListStore;

export type Todo = {
    created: Date,
    text: string,
    isDone: boolean,
    isBacklog: boolean,
}
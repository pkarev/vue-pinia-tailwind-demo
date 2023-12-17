import useTodoListStore from "../stores/TodoListStore.ts";

export const useTodoItem = (store: ReturnType<typeof useTodoListStore>) => {
    return {
        toggleTodo: (date: Date) => store.toggleIsDone(date),
    };
}

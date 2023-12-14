import {defineStore} from "pinia";
import {StoreName} from "./model.ts";
import {reactive, UnwrapNestedRefs} from "vue";

const useTodoListStore = defineStore(`${StoreName.TodoList}`, () =>{
    const todoList: UnwrapNestedRefs<Todo[]> = reactive([]);

    const addTodo = (todo: Todo) => {
        todoList.push(todo);
    }

    return {todoList, addTodo}
});

export default useTodoListStore;

type Todo = {
    created: Date,
    text: string,
}
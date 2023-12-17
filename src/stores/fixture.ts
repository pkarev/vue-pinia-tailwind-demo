import {Todo} from "./TodoListStore.ts";

export const DEFAULT_TODO_LIST: Todo[] = [
    {
        created: new Date("Sat Dec 16 2023 21:58:52 GMT+0100 (Central European Standard Time)"),
        text: "Hire this fellow",
        isDone: false,
        isBacklog: false,
    },
    {
        created: new Date("Sat Dec 16 2023 21:56:52 GMT+0100 (Central European Standard Time)"),
        text: "Boost frontend development",
        isDone: false,
        isBacklog: false,
    },
    {
        created: new Date("Sat Dec 16 2023 21:54:52 GMT+0100 (Central European Standard Time)"),
        text: "Empower frontend team",
        isDone: false,
        isBacklog: false,
    },
    {
        created: new Date("Sat Dec 16 2023 21:52:52 GMT+0100 (Central European Standard Time)"),
        text: "Develop a To-Do application using YueJS 3 Composition API and TypeScript",
        isDone: true,
        isBacklog: false,
    },
    {
        created: new Date("Sat Dec 16 2023 21:50:52 GMT+0100 (Central European Standard Time)"),
        text: "Use Tailwind for styling & make it responsive with Tailwind according to the Styleguide",
        isDone: true,
        isBacklog: false,
    },
    {
        created: new Date("Sat Dec 16 2023 21:48:52 GMT+0100 (Central European Standard Time)"),
        text: "Use Pinia to handle the Todo items",
        isDone: true,
        isBacklog: false,
    },
    {
        created: new Date("Sat Dec 16 2023 21:46:52 GMT+0100 (Central European Standard Time)"),
        text: "Use Vue Router to handle the routes",
        isDone: true,
        isBacklog: false,
    },
    {
        created: new Date("Sat Dec 16 2023 21:44:52 GMT+0100 (Central European Standard Time)"),
        text: "Every To-Do item should have a creation date",
        isDone: true,
        isBacklog: false,
    },
    {
        created: new Date("Sat Dec 16 2023 21:42:52 GMT+0100 (Central European Standard Time)"),
        text: "Do not use any other UI library",
        isDone: true,
        isBacklog: false,
    },
    {
        created: new Date("Sat Dec 16 2023 21:40:52 GMT+0100 (Central European Standard Time)"),
        text: "Animate the list items with Vue Transitions",
        isDone: false,
        isBacklog: false,
    },
    {
        created: new Date("Sat Dec 16 2023 21:38:52 GMT+0100 (Central European Standard Time)"),
        text: "Create a public Github or Gitlab repository and upload your work there",
        isDone: false,
        isBacklog: true,
    },
];
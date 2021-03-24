import Todo from "./Todo";
import { storiesOf } from "@storybook/react";
// import { action } from '@storybook/addon-actions';

const DefaultStoryParameters = {
    color: "blue",
    type: "all",
    values: [
        { id: 1, value: "hello", status: "pending" },
        { id: 2, value: "hello2", status: "completed" },
        { id: 3, value: "hello3", status: "completed" },
        { id: 4, value: "hello4", status: "pending" },
        { id: 5, value: "hello5", status: "completed" },
        { id: 6, value: "hello6", status: "pending" },
        { id: 7, value: "hello7", status: "completed" },
    ]
};

const PendingParameters = {
    color: "red",
    type: "pending",
    values: [
        { id: 1, value: "hello", status: "pending" },
        { id: 4, value: "hello2", status: "pending" },
        { id: 6, value: "hello2", status: "pending" },

    ]
};
const CompletedParameters = {
    color: "green",
    type: "completed",
    values: [
        { id: 2, value: "hello2", status: "completed" },
        { id: 3, value: "hello2", status: "completed" },
        { id: 5, value: "hello2", status: "completed" },
        { id: 7, value: "hello2", status: "completed" },
    ]
};


storiesOf('Todo', module)
    .addParameters({ backgrounds: { values: [{ name: "red", value: "#f00" }] } })
    .add('All Todo', () => <Todo {...DefaultStoryParameters}>Hello Todo</Todo>)
    .add('Pending Todo', () => <Todo {...PendingParameters}>Todo</Todo>)
    .add('Completed Todo', () => <Todo {...CompletedParameters}>Todo</Todo>);

import { CompletedToPending, pendingToCompleted, addTodo } from "../types";

export const toggleTodo = value => dispatch => {
    let type;
    if (value.status === "pending") {
        type = pendingToCompleted
        value.status = "completed";
    } else {
        type = CompletedToPending
        value.status = "pending";
    }

    return dispatch({ type, value });
}


export const addTodoList = (value) => dispatch => dispatch({ type: addTodo, value });
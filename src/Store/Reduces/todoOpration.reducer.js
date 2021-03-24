import { addTodo, CompletedToPending, pendingToCompleted } from "./../types"


export default function (store = [{ id: 0, value: "initialize", status: "pending" }], { type, value }) {
    switch (type) {
        case pendingToCompleted:
            if (store.find((todo) => todo.id === value.id && (todo.status = value.status))) {
                return store;
            }
            return [...store, value];
        case CompletedToPending:
            if (store.find((todo) => todo.id === value.id && (todo.status = value.status))) {
                return store;
            }
            return [...store, value];
        case addTodo:
            {
                return [...store, value]
            }
        default:
            return store;
    }
}
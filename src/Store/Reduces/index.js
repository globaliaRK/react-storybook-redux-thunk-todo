import { combineReducers } from "redux";
import todoOprationReducer from "./todoOpration.reducer";

export default combineReducers({
    todos: todoOprationReducer
})
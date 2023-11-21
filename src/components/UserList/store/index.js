import { createStore } from "react";

const initialState = {
    todoList: [],
    posts: [],
    users: [],

};

function todoReducer (state = initialState, action) {
    return state;
}

const store =  createStore(todoReducer)
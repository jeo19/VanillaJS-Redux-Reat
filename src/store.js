import { createStore } from 'redux';
import { createAction, createReducer } from '@reduxjs/toolkit';
const ADD = 'ADD';
const DELETE = 'DELETE';
const addToDo = createAction(ADD);
const deleteToDo = createAction(DELETE);

const reducer = createReducer([], {
    ADD: (state, action) => [
        { text: action.payload, id: Date.now() },
        ...state,
    ],
    DELETE: (state, action) =>
        state.filter((todo) => todo.id !== action.payload),
});

const store = createStore(reducer);
export const actionCreators = {
    addToDo,
    deleteToDo,
};
export default store;

import { createStore } from 'redux';
const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            const addToDo = { text: action.text, id: Date.now() };
            return [addToDo, ...state];
        case DELETE_TODO:
            return state.filter((todo) => todo.id !== action.id);
        default:
            return state;
    }
};

const store = createStore(reducer);
const addToDo = (text) => {
    return {
        type: ADD_TODO,
        text,
    };
};
const deleteToDo = (id) => {
    return {
        type: DELETE_TODO,
        id,
    };
};
store.subscribe(() => {
    console.log(store.getState());
});

const paintToDos = () => {
    const toDos = store.getState();
    ul.innerText = '';
    toDos.forEach((toDo) => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.addEventListener('click', dispattchdeleteToDo);
        li.id = toDo.id;
        li.innerText = toDo.text;
        btn.innerText = 'Del';
        li.appendChild(btn);
        ul.appendChild(li);
    });
};
const dispatchaddToDo = (text) => {
    store.dispatch(addToDo(text));
};
const dispattchdeleteToDo = (e) => {
    const id = parseInt(e.target.parentNode.id);
    store.dispatch(deleteToDo(id));
};
store.subscribe(paintToDos);
const onSubmit = (e) => {
    e.preventDefault();
    const toDo = input.value;
    input.value = '';
    dispatchaddToDo(toDo);
};
form.addEventListener('submit', onSubmit);

import { createStore } from 'redux';
const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [{ text: action.text, id: Date.now() }, ...state];
        case DELETE_TODO:
            return state.filter((state) => state.id != action.id);
        default:
            return state;
    }
};

const store = createStore(reducer);
const createTodo = () => {
    const li = document.createElement('li');

    console.log(typeof store.getState());
    //li.innerText = toDo;
    //ul.appendChild(li);
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
        btn.addEventListener('click', deleteToDo);
        li.id = toDo.id;
        li.innerText = toDo.text;
        btn.innerText = 'Del';
        li.appendChild(btn);
        ul.appendChild(li);
    });
};
const addToDo = (text) => {
    store.dispatch({ type: ADD_TODO, text });
};
const deleteToDo = (e) => {
    const id = e.target.parentNode.id;
    store.dispatch({ type: DELETE_TODO, id });
};
store.subscribe(paintToDos);
const onSubmit = (e) => {
    e.preventDefault();
    const toDo = input.value;
    input.value = '';
    addToDo(toDo);
};
form.addEventListener('submit', onSubmit);

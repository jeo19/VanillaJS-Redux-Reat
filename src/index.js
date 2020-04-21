import { createStore } from 'redux';
const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');
const countModifier = (counter = 0) => {
    return counter;
};
const countStore = createStore(countModifier);
console.log(countStore.getState());

import { createStore } from 'redux';
const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');
const countModifier = (count = 0, action) => {
    if (action.type == 'Add') {
        count++;
    } else if (action.type == 'Minus') {
        count--;
    }
    return count;
};
const countStore = createStore(countModifier);
countStore.dispatch({ type: 'Add' });
countStore.dispatch({ type: 'Add' });
countStore.dispatch({ type: 'Add' });
countStore.dispatch({ type: 'Add' });
countStore.dispatch({ type: 'Add' });
countStore.dispatch({ type: 'Minus' });
console.log(countStore.getState());

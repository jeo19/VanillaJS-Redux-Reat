const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');
let counter = 0;
number.innerHTML = counter;
const updateText = () => {
    number.innerHTML = counter;
};
const handleAdd = () => {
    counter = counter + 1;
    updateText();
};
const handleMinus = () => {
    counter = counter - 1;
    updateText();
};
add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);

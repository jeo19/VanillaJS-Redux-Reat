import React from 'react';
function ToDo({ text, toDodelete }) {
    return (
        <li>
            {text}
            <button onClick={toDodelete}>DEL</button>
        </li>
    );
}
export default ToDo;

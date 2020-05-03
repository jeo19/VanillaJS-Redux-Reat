import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import ToDo from '../components/ToDo';
function Home({ toDos, addToDo, deleteToDo }) {
    //console.log(addToDo);
    const [text, setText] = useState('');
    const onChange = (e) => {
        setText(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        setText('');
        addToDo(text);
    };
    const toDodelete = (id) => {
        deleteToDo(id);
    };
    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}></input>
                <button type="submit">Add</button>
            </form>
            <ul>
                {toDos.map((toDo) => (
                    <ToDo {...toDo} key={toDo.id} {...toDodelete} />
                ))}
            </ul>
        </>
    );
}
function mapStateToProps(state) {
    return { toDos: state };
}
function mapDispatchToProps(dispatch) {
    return {
        addToDo: (text) => dispatch(actionCreators.addToDo(text)),
        deleteToDo: (id) => dispatch(actionCreators.deleteToDo(id)),
    };
}
// To connection the Store and components, we are passing the Store's state to Home component's props with mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(Home);

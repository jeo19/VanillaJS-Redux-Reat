import React, { useState } from 'react';
import { connect } from 'react-redux';
function Home(props) {
    console.log(props);
    const [text, setText] = useState('');
    const onChange = (e) => {
        setText(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        setText('');
    };
    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}></input>
                <button type="submit">Add</button>
            </form>
            <ul></ul>
        </>
    );
}
function mapStateToProps(state, ownProps) {
    return { state };
}
// To connection the Store and components, we are passing the Store's state to Home component's props with mapStateToProps
export default connect(mapStateToProps)(Home);

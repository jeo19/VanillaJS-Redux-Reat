import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { connect } from "react-redux";
import { addTodo, deleteTodo } from "../modules/todoList/actions";
import styled from "styled-components";

const TodoListStyled = styled.div`
  display: flex;
  flex-direction: row;
`;

const TodoList = props => {
  const { todoList, handleAddTodo, handleDeleteTodo } = props;
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <button onClick={handleToggle}>Write</button>
      {toggle && <TodoForm onClickAddTodo={handleAddTodo} />}
      <TodoListStyled>
        {todoList &&
          todoList.map(todo => (
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              description={todo.description}
              onClickDeleteTodo={handleDeleteTodo}
            />
          ))}
      </TodoListStyled>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todoList: state.todoList
  };
};

const mapDispatchToProps = dispatch => ({
  handleAddTodo: ({ id, title, description }) =>
    dispatch(addTodo({ id, title, description })),
  handleDeleteTodo: id => dispatch(deleteTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
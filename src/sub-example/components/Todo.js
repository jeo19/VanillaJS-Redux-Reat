import React from "react";
import styled from "styled-components";

const TodoStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 80px;
  height: 100px;
  border: 1px solid;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  text-align: center;
  button {
    bottom: 0;
  }
`;

const TodoTitleStyled = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const TodoDescriptionStyled = styled.div`
  font-size: 14px;
  height: 80px;
`;

const Todo = ({ id, title, description, onClickDeleteTodo }) => {
  return (
    <TodoStyled>
      <TodoTitleStyled>{title}</TodoTitleStyled>
      <TodoDescriptionStyled>{description}</TodoDescriptionStyled>
      <button onClick={() => onClickDeleteTodo(id)}>Delete</button>
    </TodoStyled>
  );
};

export default Todo;
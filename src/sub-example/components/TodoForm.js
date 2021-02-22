import React, { useState } from "react";
import styled from "styled-components";

const TodoStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 80px;
  height: 100px;
  border: 1px solid;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  text-align: center;
  overflow: scroll;
  input {
    padding: 0 5px;
    margin-bottom: 10px;
  }
  textarea {
    padding: 5px;
    height: 80px;
  }
`;
const TodoForm = ({ onClickAddTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onChangeTitleHandler = event => {
    setTitle(event.target.value);
  };

  const onChangeDescriptionHandler = event => {
    setDescription(event.target.value);
  };

  return (
    <TodoStyled>
      <input onChange={onChangeTitleHandler} value={title} />
      <textarea onChange={onChangeDescriptionHandler} value={description} />
      <button
        onClick={() =>
          onClickAddTodo({ id: Math.random() * 10, title, description })
        }
      >
        Add
      </button>
    </TodoStyled>
  );
};

export default TodoForm;
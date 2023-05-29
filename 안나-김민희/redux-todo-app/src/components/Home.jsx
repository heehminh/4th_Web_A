import React from "react";
import { styled } from "styled-components";
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";

const Home = () => {
  return (
    <Wrapper>
      <InputTodo />
      <TodoList />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  border: 1px solid gray;
  margin: 20px;
  padding: 20px;
  width: 40vw;
`;

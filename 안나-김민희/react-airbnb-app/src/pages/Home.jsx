import React, { useState } from "react";
import Header from "../components/Header";
import Type from "../components/Type";
import Content from "../components/Content";
import "./Home.css";
import styled from "styled-components";

const Home = () => {
  const [click, setClick] = useState(false);
  const button_content = ["지도 표시하기 🗺️", "목록 보기 🗒️"];
  const [button, setButton] = useState(button_content[0]);

  const changeContent = () => {
    setClick(!click);
    click ? setButton(button_content[0]) : setButton(button_content[1]);
  };

  const [typeIndex, setTypeIndex] = useState(0);
  return (
    <div className="App">
      <Wrapper>
        <WrapperHeader>
          <Header />
          <div className="line"></div>
          <Type setTypeIndex={setTypeIndex} />
        </WrapperHeader>
        <Content click={click} typeIndex={typeIndex} />
      </Wrapper>
      <button id="button__map" onClick={changeContent}>
        {button}
      </button>
    </div>
  );
};

export default Home;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const WrapperHeader = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 999;
`;

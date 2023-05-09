import React, { useState } from "react";
import Header from "../components/Header";
import Type from "../components/Type";
import Content from "../components/Content";
import "./Home.css";

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
      <div className="wrapper">
        <div className="wrapper__header">
          <Header />
          <div className="line"></div>
          <Type setTypeIndex={setTypeIndex} />
        </div>
        <Content click={click} typeIndex={typeIndex} />
      </div>
      <button id="button__map" onClick={changeContent}>
        {button}
      </button>
    </div>
  );
};

export default Home;

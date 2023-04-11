import React, { useState } from "react";
import Header from "./components/Header";
import Type from "./components/Type";
import Content from "./components/Content";
import "./App.css";

const App = () => {
  const [click, setClick] = useState(false);
  const button_content = ["지도 표시하기 🗺️", "목록 보기 🗒️"];
  const [button, setButton] = useState(button_content[0]);

  const changeContent = () => {
    setClick(!click);
    click ? setButton(button_content[0]) : setButton(button_content[1]);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div className="wrapper__header">
          <Header />
          <div className="line"></div>
          <Type />
        </div>
        <Content click={click} />
      </div>
      <button id="button__map" onClick={changeContent}>
        {button}
      </button>
    </div>
  );
};

export default App;

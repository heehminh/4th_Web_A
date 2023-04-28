import React from "react";
import Chatting from "../components/Host/blocks/Chatting";
import FAQ from "../components/Host/blocks/FAQ";
import Header from "../components/Host/blocks/Header";
import Intro from "../components/Host/blocks/Intro";
import Start from "../components/Host/blocks/Start";
import "./Host.css";

export const Host = () => {
  return (
    <div className="Host">
      <div className="host__wrapper">
        <Header />
        <Intro />
        <Start />
        <Chatting />
      </div>
      <FAQ />
    </div>
  );
};

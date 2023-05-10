import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { Host } from "./pages/Host";

const App = () => {
  // 1. 방 상세정보 (새로운 페이지)
  // 2. host 페이지 (react-router-dom /host)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="host" element={<Host />} />
    </Routes>
  );
};

export default App;

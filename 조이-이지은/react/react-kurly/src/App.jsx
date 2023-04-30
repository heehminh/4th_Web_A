import React from "react";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

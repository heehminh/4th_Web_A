import React from "react";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Egg from "./components/pages/Egg";
import Heart from "./components/pages/Heart";
import Cart from "./components/pages/Cart";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { RecoilRoot } from "recoil";
function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/egg" element={<Egg />} />
            <Route path="/Heart" element={<Heart />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;

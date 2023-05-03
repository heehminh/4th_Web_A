import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../images/r-logo.png";
import Heart from "../images/r-heart.png";
import Cart from "../images/r-cart.png";
import Search from "../images/r-search.png";
import Place from "../images/r-place.png";
import List from "../images/r-list.png";

import "./Header.css";
import "../styles/styles.css";

const Header = () => {
  return (
    <div id="header-all">
      <header className="header">
        <section className="header-1">
          <ul className="login-1">
            <li className="logins">
              <span className="highlight">회원가입</span>
            </li>
            |
            <li className="logins">
              <Link to={"/login"}>로그인</Link>
            </li>
            |<li className="logins">고객센터</li>
          </ul>
        </section>
        <section className="header-2">
          <div>
            <Link to={"/"}>
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="logo-2">
            <span className="highlight">마켓컬리</span> | 뷰티컬리
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNyIgaGVpZ2h0PSI3IiB2aWV3Qm94PSIwIDAgNyA3IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPHBhdGggZD0iTTUuMTA4IDd2LS4wMDdMMS45MTEgMi41NzdWN0guMDQ2VjBoMS44NjdsMy4xOTYgNC40MTlWMGgxLjg2N3Y3SDUuMTA4eiIgZmlsbD0iI0ZBNjIyRiIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo="
              alt="market-kurly"
            />
          </div>
          <div className="search">
            <input
              type="text"
              className="input"
              placeholder="검색어를 입력해주세요"
            />
            <img src={Search} width={25} rem alt="search" />
          </div>
          <div id="heart-icon">
            <div>
              <img src={Place} width={30} rem alt="place" />
            </div>
            <div>
              <img src={Heart} width={30} rem alt="heart" />
            </div>
            <div>
              <img src={Cart} width={30} rem alt="cart" />
            </div>
          </div>
        </section>
        <section className="header-3">
          <ul className="header-list">
            <li className="header-lists">
              <img src={List} width={20} rem alt="list" />
              카테고리
            </li>
            <li className="header-lists">신상품</li>
            <li className="header-lists">베스트</li>
            <li className="header-lists">알뜰쇼핑</li>
            <li className="header-lists">특가/혜택</li>
            <li>
              <button id="header-lists-btn">
                <span className="highlight">샛별 · 택배</span> 배송안내
              </button>
            </li>
          </ul>
        </section>
      </header>
    </div>
  );
};

export default Header;

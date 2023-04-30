import React, { useState } from "react";
import "../styles/styles.css";
import Logo from "../images/r-logo.png";
import Heart from "../images/r-heart.png";
import Cart from "../images/r-cart.png";
import Search from "../images/r-search.png";
import Place from "../images/r-place.png";
import List from "../images/r-list.png";

function Home() {
  return (
    <div>
      <header className="header">
        <section className="header-1">
          <ul className="login-1">
            <li className="logins">
              <span className="highlight">회원가입</span>
            </li>
            |<li className="logins">로그인</li>|
            <li className="logins">고객센터</li>
          </ul>
        </section>
        <section className="header-2">
          <div>
            <img src={Logo} />
          </div>
          <div className="logo-2">
            <span className="highlight">마켓컬리</span> | 뷰티컬리
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNyIgaGVpZ2h0PSI3IiB2aWV3Qm94PSIwIDAgNyA3IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPHBhdGggZD0iTTUuMTA4IDd2LS4wMDdMMS45MTEgMi41NzdWN0guMDQ2VjBoMS44NjdsMy4xOTYgNC40MTlWMGgxLjg2N3Y3SDUuMTA4eiIgZmlsbD0iI0ZBNjIyRiIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=" />
          </div>
          <div className="search">
            <input
              type="text"
              className="input"
              placeholder="검색어를 입력해주세요"
            />
            <img src={Search} width={25} rem />
          </div>
          <div id="heart-icon">
            <div>
              <img src={Place} width={30} rem />
            </div>
            <div>
              <img src={Heart} width={30} rem />
            </div>
            <div>
              <img src={Cart} width={30} rem />
            </div>
          </div>
        </section>
        <section className="header-3">
          <ul className="header-list">
            <li className="header-lists">
              <img src={List} width={20} rem />
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

      <main className="main">
        <section className="main-1">
          <div id="slideShow">
            <ul className="slides">
              <li>
                <img src="https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/5b4e9985-9b15-4852-ae89-ffbed676c7c7.jpg" />
              </li>
              <li>
                <img src="https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/f70905f4-7ef0-4b52-98a3-204c85a3d1ca.png" />
              </li>
              <li>
                <img src="https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/6dcb9a88-452e-4545-a452-0b9855112f7f.jpg" />
              </li>
              <li>
                <img src="https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/cbd9a5cc-a0f8-4bd7-ba85-92ede8fc82c9.jpg" />
              </li>
              <li>
                <img src="https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/f70905f4-7ef0-4b52-98a3-204c85a3d1ca.png" />
              </li>
            </ul>
          </div>
          <p className="controller">
            <span className="prev">&lang;</span>
            <span className="next">&rang;</span>
          </p>
        </section>

        <section className="main-2">
          <div id="main-2-ment">이 상품 어때요?</div>
          <div className="main-2-wrap">
            <div className="main-2-img">
              <img
                src="https://img-cf.kurly.com/shop/data/goods/1637147626889l0.jpg"
                width="230px"
              />
              <span className="main-2-name">
                [KF365] 1+등급 무항생제 특란 20구
              </span>
              <span className="main-2-price">6,205원</span>
              <span className="main-2-re">후기 9,999+</span>
            </div>
            <div className="main-2-img">
              <img
                src="https://img-cf.kurly.com/shop/data/goods/1583817046139l0.jpg"
                width="230px"
              />
              <span className="main-2-name">
                [그랜드벨지안] 초콜릿 트윅스 4종
              </span>
              <span className="main-2-price"> 4,000원</span>
              <span className="main-2-re">후기 999+</span>
            </div>
            <div className="main-2-img">
              <img
                src="https://img-cf.kurly.com/shop/data/goods/1589873216873l0.jpg"
                width="230px"
              />
              <span className="main-2-name">
                [오덴세] 아틀리에 노드 세트 2종 (택1)
              </span>
              <span className="main-2-price">139,000원~</span>
              <span className="main-2-re">후기 46</span>
            </div>
            <div className="main-2-img">
              <img
                src="https://img-cf.kurly.com/shop/data/goods/1656567944707l0.jpg"
                width="230px"
              />
              <span className="main-2-name">
                [떡편] 쌀케이크 세트 (커피+고구마)
              </span>
              <span className="main-2-price"> 13,900원</span>
              <span className="main-2-re"> 후기 256</span>
            </div>
          </div>
        </section>
        <section className="main-3">
          <img src="https://product-image.kurly.com/banner/random-band/mobile/img/585a35ba-4d17-428d-ae78-750c5dd66189.jpg" />
        </section>
      </main>
    </div>
  );
}

export default Home;

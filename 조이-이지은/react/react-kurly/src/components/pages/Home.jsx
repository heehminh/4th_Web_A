import React from "react";

import "./Home.css";

function Home() {
  return (
    <div>
      <main className="main">
        <section className="main-1">
          <div id="slideShow">
            <ul className="slides">
              <li>
                <img
                  src="https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/5b4e9985-9b15-4852-ae89-ffbed676c7c7.jpg"
                  alt="price"
                />
              </li>
              <li>
                <img
                  src="https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/f70905f4-7ef0-4b52-98a3-204c85a3d1ca.png"
                  alt="price"
                />
              </li>
              <li>
                <img
                  src="https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/6dcb9a88-452e-4545-a452-0b9855112f7f.jpg"
                  alt="price"
                />
              </li>
              <li>
                <img
                  src="https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/cbd9a5cc-a0f8-4bd7-ba85-92ede8fc82c9.jpg"
                  alt="price"
                />
              </li>
              <li>
                <img
                  src="https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/f70905f4-7ef0-4b52-98a3-204c85a3d1ca.png"
                  alt="price"
                />
              </li>
            </ul>
          </div>
          <p className="controller">
            <span className="prev">&lang;</span>
            <span className="next">&rang;</span>
          </p>
        </section>

        <section className="main-2">
          <div id="main-2-ment" alt="how-about?">
            이 상품 어때요?
          </div>
          <div className="main-2-wrap">
            <div className="main-2-img">
              <img
                src="https://img-cf.kurly.com/shop/data/goods/1637147626889l0.jpg"
                width="230px"
                alt="egg"
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
                alt="choco"
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
                alt="plate"
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
                alt="ddeok"
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
          <img
            src="https://product-image.kurly.com/banner/random-band/mobile/img/585a35ba-4d17-428d-ae78-750c5dd66189.jpg"
            alt="footer-banner"
          />
        </section>
      </main>
    </div>
  );
}

export default Home;

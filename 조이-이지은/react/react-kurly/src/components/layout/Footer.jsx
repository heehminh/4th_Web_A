import React from "react";
import SNS from "../images/sns.png";
import "./Footer.css";
import Cert from "../images/certification.png";

const Footer = () => {
  return (
    <div id="footer-all">
      <section id="happy-introduce">
        <section id="happy-customer">
          <div className="happy-customer-label">고객행복센터</div>
          <div className="happy-customer-number">
            1644-1107<span>월~토요일 오전 7시 - 오후 6시</span>
          </div>
          <div id="kakao-time">
            <button>카카오톡 문의</button>
            <p>
              월~토요일 | 오전7시-오후6시
              <br />
              일/공휴일 | 오전 7시-오후1시
            </p>
          </div>
          <div id="one-time">
            <button>1:1 문의</button>
            <p>
              365일 <br />
              고객센터 운영시간에 순차적으로 답변드리겠습니다.
            </p>
          </div>
          <div id="large-time">
            <button>대량주문 문의</button>
            <p>
              월~금요일 | 오전9시-오후6시
              <br />
              점심시간 | 낮 12시-오후1시
            </p>
          </div>
        </section>

        <section id="introduce">
          <ul>
            <li>컬리소개</li>
            <li>컬리소개영상</li>
            <li>투자정보</li>
            <li>인재채용</li>
            <li>이용약관</li>
            <li>개인정보처리방침</li>
            <li>이용안내</li>
          </ul>
          <div>
            법인명 (상호) : 주식회사 컬리 | 사업자등록번호 : 261-81-23567 |
            사업자정보 확인 <br />
            통신판매업 : 제 2018-서울강남-01646 호 | 개인정보보호책임자 : 이원준
            <br />
            주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동) | 대표이사 :
            김슬아
            <br />
            입점문의 : <span>입점문의하기</span>제휴문의 :
            <span>business@kurlycorp.com</span>
            <br />
            채용문의 : <span>recruit@kurlycorp.com</span>
            <br />
            팩스: 070 - 7500 - 6098
            <br />
            <img src={SNS} alt="SNS" width={300} rem />
          </div>
        </section>
      </section>
      <section id="cert">
        <img src={Cert} alt="certification" width={1500} rem></img>
      </section>
      <section id="corp">
        컬리에서 판매되는 상품 중에는 컬리에 입점한 개별 판매자가 판매하는
        마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.
        <br />
        마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의
        당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질, 교환/환불 등 의무와
        책임을 부담하지 않습니다.
        <br />© KURLY CORP. ALL RIGHTS RESERVED
      </section>
    </div>
  );
};

export default Footer;

import React from "react";

import "./Login.css";

const Login = () => {
  return (
    <div id="login-all">
      <p id="login-label">로그인</p>
      <div className="login-page-1">
        <input
          id="login-id"
          type="text"
          placeholder="아이디를 입력해주세요"
        ></input>
        <input
          id="login-password"
          type="text"
          placeholder="비밀번호를 입력해주세요"
        ></input>
      </div>
      <div className="login-page-2">
        <li>아이디 찾기</li>|<li>비밀번호 찾기</li>
      </div>
      <div className="login-page-3">
        <button id="login-login-btn">로그인</button>
        <button id="login-signin-btn">회원가입</button>
      </div>
    </div>
  );
};

export default Login;

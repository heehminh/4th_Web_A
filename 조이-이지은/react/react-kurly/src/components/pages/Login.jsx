import React from "react";

const Login = () => {
  return (
    <div>
      <p>로그인</p>
      <input type="text" placeholder="아이디를 입력해주세요"></input>
      <input type="text" placeholder="비밀번호를 입력해주세요"></input>
      <div>
        <li>아이디 찾기</li>|<li>비밀번호 찾기</li>
      </div>
      <button>로그인</button>
      <button>회원가입</button>
    </div>
  );
};

export default Login;

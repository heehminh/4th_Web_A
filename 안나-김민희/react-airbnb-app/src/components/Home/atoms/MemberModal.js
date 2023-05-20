import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { loginAtom, nameAtom, emailAtom } from "../../../recoil/atom";

const MemberModal = () => {
  const [isLogin, setIsLogin] = useRecoilState(loginAtom);
  const [name, setName] = useRecoilState(nameAtom);
  const [email, setEmail] = useRecoilState(emailAtom);

  const navigate = useNavigate();

  const clickLogOut = () => {
    setIsLogin(false);
    setName("");
    setEmail("");
    navigate(`../`);
  };

  return (
    <Wrapper>
      <BlackText>
        2023년 여름 업그레이드 <New>새소식</New>
      </BlackText>
      <Line></Line>

      <BlackText>메시지</BlackText>
      <BlackText>알림</BlackText>
      <BlackText>여행</BlackText>
      <BlackText>위시리스트</BlackText>
      <Line></Line>

      <Text>숙소 관리</Text>
      <Text onClick={() => navigate(`../account`)}>계정</Text>
      <Line></Line>

      <Text>도움말</Text>
      <Text onClick={clickLogOut}>로그아웃</Text>
    </Wrapper>
  );
};

export default MemberModal;

const Wrapper = styled.div`
  width: 250px;
  height: 450px;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  box-shadow: 2px 2px 10px 2px gray;
`;

const New = styled.div`
  font-size: 14px;
  color: white;
  font-weight: 700;
  background-color: rgb(255, 56, 92);
  padding: 0px 3px;
  margin-left: 5px;
`;

const BlackText = styled.div`
  width: 100%;
  font-size: 16px;
  color: black;
  font-weight: 500;
  padding: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    background-color: lightgray;
  }
`;

const Text = styled.div`
  width: 100%;
  font-size: 16px;
  color: gray;
  font-weight: 500;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
`;

const Line = styled.div`
  width: 100%;
  border-top: 1px solid gray;
`;

import React from "react";
import styled from "styled-components";
import types from "../data/types";

const Type = ({ setTypeIndex }) => {
  return (
    <Wrapper>
      <TypeWrapper>
        {types.map((type, index) => (
          <TypeItem key={index} onClick={() => setTypeIndex(type.type_idx)}>
            <TypeItemIcon src={type.type_imgSrc} alt="type" />
            <TypeItemDescription>{type.type_description}</TypeItemDescription>
          </TypeItem>
        ))}
      </TypeWrapper>

      <TypeFilter>
        <TypeFilterIcon src="./assets/room-filter.png" alt="room filter" />
        <TypeFilterDescription>필터</TypeFilterDescription>
      </TypeFilter>
    </Wrapper>
  );
};

export default Type;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 110px 40px 40px 40px;
`;

const TypeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow: auto;
  white-space: nowrap;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const TypeItem = styled.div`
  width: 80px;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-right: 30px;
`;

const TypeItemIcon = styled.img`
  width: 30px;
`;

const TypeItemDescription = styled.div`
  font-size: 12px;
  margin-top: 20px;
`;

const TypeFilter = styled.div`
  width: 78px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0px 10px;
  flex-direction: row;
  border-radius: 12px;
  border: 1px solid lightgray;
`;

const TypeFilterIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const TypeFilterDescription = styled.div``;

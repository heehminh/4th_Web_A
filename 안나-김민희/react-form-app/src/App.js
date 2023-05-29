import React from "react";

const App = () => {
  return (
    <form>
      <label htmlFor="name">학우님의 이름은 무엇인가요?</label>
      <input id="name" type="text" name="name" />
      <label htmlFor="stuNo">학번을 적어주세요.</label>
      <input id="stuNo" type="text" name="stuNo" />
      <label htmlFor="agree">
        봉사 중 촬영한 사진에 대해서 이후 홍보물 등의 사용에 동의하시나요?
      </label>
      <input type="radio" name="agree" /> 예
      <input type="radio" name="agree" /> 아니오
      <button type="submit">제출하기</button>
    </form>
  );
};

export default App;

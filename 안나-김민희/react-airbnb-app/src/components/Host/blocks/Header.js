import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ChatButton from "../atoms/ChatButton";
import StartButton from "../atoms/StartButton";

const Header = () => {
  const navigate = useNavigate();
  const [showStartButton, setShowStartButton] = React.useState(false);

  const handleScroll = () => {
    if (window.pageYOffset >= 700) {
      setShowStartButton(true);
    } else {
      setShowStartButton(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <img
        onClick={() => navigate(`../`)}
        className="header__icon"
        src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
        alt="icon"
      />
      <Buttons>
        {showStartButton && <StartButton />}
        <ChatButton />
      </Buttons>
    </header>
  );
};

export default Header;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
`;

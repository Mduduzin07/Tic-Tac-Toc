import React from "react";
import { Title } from "../../styles/General.styled";
import { SubTitle } from "../../styles/General.styled";
import { Container } from "./Home.styled";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Title className="text-center">TicTacToe</Title>
        <SubTitle>Play with friends, higher score wins</SubTitle>
        <Button onClick={() => navigate("/game-on")}>Play Now</Button>
      </Container>
    </>
  );
};

export default Home;

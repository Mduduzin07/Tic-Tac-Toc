import React, { useContext } from "react";
import { Container } from "../../styles/General.styled";
import { GameStyles } from "./Game.styled";
import GameCell from "../../components/GameCell/GameCell";
import { GameContext } from "../../contexts/GameContext";

const Game = () => {
  const { game } = useContext(GameContext);
  return (
    <Container>
      <GameStyles>
        {game.board.map((item, index) => (
          <GameCell key={index} cellItem={item} index={index} />
        ))}
      </GameStyles>
    </Container>
  );
};

export default Game;

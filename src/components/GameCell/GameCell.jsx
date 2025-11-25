import React, { useContext } from "react";
import { GameStyle } from "./GameCell.styled";
import { GameContext } from "../../contexts/GameContext";
import { checkForWinner } from "../utils/GameUtils";

const GameCell = ({ cellItem, index }) => {
  const { updateBoard, game } = useContext(GameContext);

  const cellClickHandler = () => {
    updateBoard(index);
    const result = checkForWinner(game.board);
  };

  return <GameStyle onClick={cellClickHandler}>{cellItem}</GameStyle>;
};

export default GameCell;

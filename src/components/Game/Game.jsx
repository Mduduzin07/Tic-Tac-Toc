import React, { useState } from "react";
import { Link } from "react-router-dom";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [difficulty, setDifficulty] = useState("easy");
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

  const checkWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // columns
      [0, 4, 8],
      [2, 4, 6], // diagonals
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return squares.includes(null) ? null : "draw";
  };

  const getEmptySquares = (squares) => {
    return squares
      .map((val, idx) => (val === null ? idx : null))
      .filter((val) => val !== null);
  };

  // Easy AI: Random moves
  const easyAI = (squares) => {
    const emptySquares = getEmptySquares(squares);
    return emptySquares[Math.floor(Math.random() * emptySquares.length)];
  };

  // Medium AI: Sometimes random, sometimes smart
  const mediumAI = (squares) => {
    // 50% chance to make a smart move
    if (Math.random() > 0.5) {
      const smartMove =
        findWinningMove(squares, "O") || findWinningMove(squares, "X");
      if (smartMove !== null) return smartMove;
    }
    return easyAI(squares);
  };

  // Hard AI: Minimax algorithm
  const hardAI = (squares) => {
    return minimax(squares, "O").index;
  };

  const findWinningMove = (squares, player) => {
    for (let i = 0; i < 9; i++) {
      if (squares[i] === null) {
        const newSquares = [...squares];
        newSquares[i] = player;
        if (checkWinner(newSquares) === player) {
          return i;
        }
      }
    }
    return null;
  };

  const minimax = (squares, player) => {
    const winner = checkWinner(squares);

    if (winner === "O") return { score: 10 };
    if (winner === "X") return { score: -10 };
    if (winner === "draw") return { score: 0 };

    const moves = [];
    const emptySquares = getEmptySquares(squares);

    for (let i = 0; i < emptySquares.length; i++) {
      const move = {};
      move.index = emptySquares[i];

      const newSquares = [...squares];
      newSquares[emptySquares[i]] = player;

      if (player === "O") {
        const result = minimax(newSquares, "X");
        move.score = result.score;
      } else {
        const result = minimax(newSquares, "O");
        move.score = result.score;
      }

      newSquares[emptySquares[i]] = null;
      moves.push(move);
    }

    let bestMove;
    if (player === "O") {
      let bestScore = -Infinity;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score > bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score < bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }

    return moves[bestMove];
  };

  const makeAIMove = () => {
    if (gameOver || isPlayerTurn) return;

    setTimeout(() => {
      let aiMove;
      const squares = [...board];

      switch (difficulty) {
        case "easy":
          aiMove = easyAI(squares);
          break;
        case "medium":
          aiMove = mediumAI(squares);
          break;
        case "hard":
          aiMove = hardAI(squares);
          break;
        default:
          aiMove = easyAI(squares);
      }

      if (aiMove !== undefined) {
        squares[aiMove] = "O";
        setBoard(squares);

        const gameWinner = checkWinner(squares);
        if (gameWinner) {
          setGameOver(true);
          setWinner(gameWinner);
        } else {
          setIsPlayerTurn(true);
        }
      }
    }, 500);
  };

  const handleClick = (index) => {
    if (board[index] || !isPlayerTurn || gameOver) return;

    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setGameOver(true);
      setWinner(gameWinner);
    } else {
      setIsPlayerTurn(false);
    }
  };

  React.useEffect(() => {
    if (!isPlayerTurn && !gameOver) {
      makeAIMove();
    }
  }, [isPlayerTurn, gameOver]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerTurn(true);
    setGameOver(false);
    setWinner(null);
  };

  const getStatusMessage = () => {
    if (winner === "X") return "You win! 🎉";
    if (winner === "O") return "AI wins! 🤖";
    if (winner === "draw") return "It's a draw! 🤝";
    return isPlayerTurn ? "Your turn (X)" : "AI thinking...";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 py-8 px-4">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="btn btn-ghost btn-sm mb-4">
            ← Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Tic Tac Toe</h1>
          <p className="text-lg text-gray-600">{getStatusMessage()}</p>
        </div>

        {/* Difficulty Selector */}
        <div className="mb-6 ">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            AI Difficulty:
          </label>
          <div className="flex gap-2">
            {["easy", "medium", "hard"].map((level) => (
              <button
                key={level}
                className={`flex-1 py-2 px-3 rounded text-sm font-medium capitalize border transition-colors duration-200 ${
                  difficulty === level
                    ? "bg-red-400 text-white border-red-400"
                    : "bg-gray-200 text-gray-700 border-gray-300 hover:bg-gray-300"
                }`}
                onClick={() => {
                  setDifficulty(level);
                  resetGame();
                }}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Game Board */}
        <div className="grid grid-cols-3 gap-3 mb-6 bg-gray-800 p-3 rounded-xl">
          {board.map((cell, index) => (
            <button
              key={index}
              className={`aspect-square rounded-lg text-4xl font-bold transition-all duration-200 ${
                cell === "X"
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : cell === "O"
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "bg-white hover:bg-gray-100 text-gray-800"
              } ${
                !cell && !gameOver && isPlayerTurn
                  ? "hover:scale-105 cursor-pointer"
                  : "cursor-default"
              } shadow-md`}
              onClick={() => handleClick(index)}
              disabled={!isPlayerTurn || gameOver || cell}
            >
              {cell === "X" ? "×" : cell === "O" ? "○" : ""}
            </button>
          ))}
        </div>

        {/* Game Controls */}
        <div className="flex gap-3">
          <button className="btn btn-secondary flex-1 bg-slate-500" onClick={resetGame}>
            Reset Game
          </button>
          <Link to="/" className="btn btn-outline flex-1 bg-slate-500">
            Main Menu
          </Link>
        </div>

        
        {/* Difficulty Info */}
        {/* <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">
            Difficulty Levels:
          </h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>
              • <span className="font-medium">Easy:</span> Random moves
            </li>
            <li>
              • <span className="font-medium">Medium:</span> Mix of random and
              smart moves
            </li>
            <li>
              • <span className="font-medium">Hard:</span> Unbeatable AI
              (Minimax algorithm)
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Game;

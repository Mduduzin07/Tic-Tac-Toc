const checkForSequence = (option1, option2, option3) => {
  return option1 === option2 && option2 === option3;
};

export const checkForWinner = (board) => {
  // 0 1 2
  // 3 4 5
  // 6 7 8

  // Rows - use a loop
  for (let i = 0; i < 9; i += 3) {
    if (checkForSequence(board[i], board[i + 1], board[i + 2])) {
      console.log("Row Winner");
      return true;
    }
  }

  // Column 
    for (let i = 0; i < 3; i += 1) {
    if (checkForSequence(board[i], board[i + 3], board[i + 6])) {
      console.log("Column Winner");
      return true;
    }
  }

//   if (board[0] === board[3] && board[3] === board[6]) {
//     console.log("Column 1 winner");
//     return true;
//   }

//    if (board[1] === board[4] && board[4] === board[7]) {
//     console.log("Column 2 winner");
//     return true;
//   }

//    if (board[2] === board[5] && board[5] === board[8]) {
//     console.log("Column 3 winner");
//     return true;
//   }

  // Diagonal 1
  if (board[0] === board[4] && board[4] === board[8]) {
    console.log("Diagonal 1 winner");
    return true;
  }

  // Diagonal 2
  if (board[2] === board[4] && board[4] === board[6]) {
    console.log("Diagonal 2 a winner");
    return true;
  }
};

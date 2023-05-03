// Tabuleiro inicial de exemplo
const seaBoard = [
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
];

/*
  Desenvolva seu código logo abaixo
*/

const shipPositions = [
  [0, 0],
  [1, 1],
  [2, 3],
  [4, 0],
  [4, 4],
  [2, 2],
];

const initialBoard = [
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
]


function allocateShips(shipPositions, initialBoard) {
  for (let i = 0; i < shipPositions.length; i++) {
    const ship = shipPositions[i]
    for (let j = 0; j < ship.length; j++) {
      const row = ship[0];
      const col = ship[1]
      initialBoard[row][col] = "S";
    }
  }
  return initialBoard;
}

const guesses = [
  [0, 0],
  [1, 1],
  [2, 2],
  [2, 3],
  [4, 0],
  [4, 4],
];

const mountedBoard = [
  [".", ".", ".", "S", "."],
  [".", "S", ".", ".", "."],
  [".", ".", "S", ".", "."],
  [".", ".", "S", ".", "."],
  [".", ".", ".", "S", "."]
]


function checkGuesses(guesses, mountedBoard) {
  for (let i = 0; i < guesses.length; i++) {
    const row = guesses[i][0]
    const col = guesses[i][1]
    if (mountedBoard[row][col] === "S") {
      mountedBoard[row][col] = "X"
    }
    console.log(mountedBoard);
  }
  return mountedBoard;
}

let guessedBoard = [];
for (let i = 0; i < 5; i++) {
  guessedBoard[i] = [];
  for (let j = 0; j < 5; j++) {
    guessedBoard[i][j] = ".";
  }
}

function checkWinCondition(guessedBoard) {
  for (let i = 0; i < guessedBoard.length; i++) {
    for (let j = 0; j < guessedBoard[i].length; j++) {
      if (guessedBoard[i][j] === "S") {
        return false;
      }
    }
  }
  return true;
}

checkWinCondition(guessedBoard)
allocateShips(shipPositions, initialBoard)
checkGuesses(guesses, mountedBoard)


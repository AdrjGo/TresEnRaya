let playerText = document.getElementById("text");
let playerIniciaText = document.getElementById("playerIniciaText");
let ganadorText = document.getElementById("ganador");
let restartBtn = document.getElementById("restartBtn");
let boxes = Array.from(document.getElementsByClassName("box"));

const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer = Math.random() < 0.5 ? O_TEXT : X_TEXT;
playerIniciaText.innerHTML = "Inicia: " + currentPlayer;
let spaces = Array(9).fill(null);

const startGame = () => {
  boxes.forEach((box) => box.addEventListener("click", boxClicked));
};

function boxClicked(e) {
  const id = e.target.id;

  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;

    const winner = playerWin();
    if (winner) {
      ganadorText.innerHTML = `${currentPlayer} GANASTE!`;
      highlightWin(winner);
      return;
    }

    switchPlayer();
  }
}

function switchPlayer() {
  currentPlayer = currentPlayer === X_TEXT ? O_TEXT : X_TEXT;
}

const winCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function playerWin() {
  for (const condition of winCombo) {
    let [a, b, c] = condition;

    if (spaces[a] && spaces[a] == spaces[b] && spaces[a] == spaces[c]) {
      return [a, b, c];
    }
  }
  return false;
}

startGame();

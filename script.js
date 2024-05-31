let playerText = document.getElementById("text");
let playerIniciaText = document.getElementById("playerIniciaText")
let ganadorText = document.getElementById("ganador");
let restartBtn = document.getElementById("restartBtn");
let boxes = Array.from(document.getElementsByClassName("box"));


let winnerIndicator = getComputedStyle(document.body).getPropertyValue(
  "--winning-blocks"
);

const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer = Math.random() < 0.5 ? O_TEXT : X_TEXT;
 playerIniciaText.innerHTML = "inicia: "+currentPlayer;
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

function highlightWin(winningBlocks) {
  winningBlocks.forEach(
    (box) => (boxes[box].style.backgroundColor = winnerIndicator)
  );
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

restartBtn.addEventListener("click", restartGame);
function restartGame() {
  // Reiniciar el texto del jugador
  playerText.innerHTML = "TRES EN RAYA";
  ganadorText.innerHTML = "";

  // Limpiar el contenido de cada celda del tablero
  boxes.forEach(box => {
    box.innerText = "";
    box.classList.remove("X", "O", "winning-box");
  });

  // Reiniciar el array de espacios
  spaces = Array(9).fill(null);

  // Reiniciar el jugador actual a leatoriamente
  let currentPlayer = Math.random() < 0.5 ? O_TEXT : X_TEXT;
}

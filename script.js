let playerText = document.getElementById("text");
let restartBtn = document.getElementById("restartBtn");
let boxes = Array.from(document.getElementsByClassName("box"));

let winnerIndicator = getComputedStyle(document.body).getPropertyValue(
  "--winning-blocks"
);

const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer = X_TEXT;
let spaces = Array(9).fill(null);

const startGame = () => {
  boxes.forEach((box) => box.addEventListener("click", boxClicked));
};

function boxClicked(e) {
    const id = e.target.id;

    if (!spaces[id]) {
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;

        const winner = playerHasWon();
        if (winner) {
            playerText.innerHTML = `${currentPlayer} GANASTE!`;
            highlightWin(winner);
            return;
        }

        switchPlayer();
    }
}

function switchPlayer() {
    currentPlayer = currentPlayer === X_TEXT ? O_TEXT : X_TEXT;
    playerText.innerHTML = 'Turno de ${currentPlayer}';
}

function highlightWin(winningBlocks) {
    winningBlocks.forEach(box => boxes[box].style.backgroundColor = winnerIndicator);
}


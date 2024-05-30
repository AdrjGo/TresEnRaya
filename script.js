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
}

function highlightWin(winningBlocks) {
  winningBlocks.forEach(
    (box) => (boxes[box].style.backgroundColor = winnerIndicator)
  );
}

const winCombo = [
  //Filas
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  //Columnas
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  //Diagonales
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

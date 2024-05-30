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
    winningBlocks.forEach(box => boxes[box].style.backgroundColor = winnerIndicator);
}

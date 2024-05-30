const X_TEXT = 'X';
const O_TEXT = 'O';
const winnerIndicator = 'lightgreen';

let currentPlayer = X_TEXT;
let spaces = Array(9).fill(null);
const playerText = document.getElementById('playerText');
const boxes = Array.from(docuemnt.getElementsByClassName('cell'));

function startGame(){
    currentPlayer = X_TEXT;
    spaces =  Array(9).fill(null);
    playerText.innerHTML = 'Turno de ${currentPlayer}';

    boxes.forEach((box, index)=>{
        box.innerText = '';
        box.style.backgroundColor = '';
        box.removeEventListener('click', boxCliend);
        box.addEventListener('click', boxClicked,{ once: true});
    });
}



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


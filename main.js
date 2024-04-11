let player = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;
const cell=document.querySelectorAll('.cell')
const msg=document.getElementById('msg')

function mark(index) {
  if (!gameOver && board[index] === '') {
    board[index] = player;
    cell[index].innerText = player;
    checkWinner();
    changeTurn();
  }
}

function changeTurn() {
  player = player === 'X' ? 'O' : 'X';
}

function checkWinner() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let condition of winConditions) {
    const [x, y, z] = condition;
    if (board[x] !== '' && board[x] === board[y] && board[x] === board[z]) {
      gameOver = true;
      msg.innerText=`${player} wins!`;
      break;
    }
  }

  if (!board.includes('') && !gameOver) {
    gameOver = true;
    msg.innerText="It's a tie!";
  }
}

function restart() {
  currentPlayer = 'X';
  board = ['', '', '', '', '', '', '', '', ''];
  gameOver = false;
  cell.forEach(cell => cell.textContent = '');
  msg.innerText='';
}
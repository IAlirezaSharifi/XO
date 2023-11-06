// JS Start

const squares = document.querySelectorAll(".square");
const descriptionTxt = document.querySelector("#description");
const btnRestart = document.querySelector("#restart");

// Images

let x = "<img src='./Images/X.png'>";
let o = "<img src='./Images/O.png'>";

// Win Types

const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = x;
let player = "X";
let running = false;
init();

function init() {
  squares.forEach((square) => square.addEventListener("click", squareClick));
  btnRestart.addEventListener("click", restartGame);
  descriptionTxt.textContent = `${player}'s Turn...`;
  running = true;
}

function squareClick() {
  const index = this.dataset.index;
  if (options[index] != "" || !running) {
    return;
  }
  updatesquare(this, index);
  checkWinner();
}

function updatesquare(square, index) {
  options[index] = player;
  square.innerHTML = currentPlayer;
}

function changePlayer() {
  player = player == "X" ? "O" : "X";
  currentPlayer = currentPlayer == x ? o : x;
  descriptionTxt.textContent = `${player}'s Turn...`;
}

function checkWinner() {
  let isWon = false;
  for (let i = 0; i < win.length; i++) {
    const condition = win[i]; //[0,1,2]
    const square1 = options[condition[0]]; //x
    const square2 = options[condition[1]]; //''
    const square3 = options[condition[2]]; //''
    if (square1 == "" || square2 == "" || square3 == "") {
      continue;
    }
    if (square1 == square2 && square2 == square3) {
      isWon = true;
      squares[condition[0]].classList.add("win");
      squares[condition[1]].classList.add("win");
      squares[condition[2]].classList.add("win");
    }
  }

  if (isWon) {
    descriptionTxt.textContent = `"${player}" Won The "XO Game" Made by "ASH": AlirezaSharifi`;
    running = false;
  } else if (!options.includes("")) {
    descriptionTxt.textContent = `Game Draw !`;
    running = false;
  } else {
    changePlayer();
  }
}

function restartGame() {
  options = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = x;
  player = "X";
  running = true;
  descriptionTxt.textContent = `${player}'s Turn...`;

  squares.forEach((square) => {
    square.innerHTML = "";
    square.classList.remove("win");
  });
}

// JS End - ASH: AlirezaSharifi

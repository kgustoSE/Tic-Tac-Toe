// connect javascript to html & create array
const gameBoard = document.querySelector("#gameboard");
const infoBoard = document.querySelector("#info");
const alphaOverlay = document.querySelector("#alpha");
const btn = document.querySelector("#reset-btn");
const createCells = [
    "", "", "",
    "", "", "",
    "", "", ""
];
let playerChoice = "circle";
let gameOver = false;

//function create gameboard

function createBoard() {

    createCells.forEach((cell, index) => {
        const cellSquare = document.createElement("div");
        cellSquare.classList.add("square");
        cellSquare.id = index;
        cellSquare.addEventListener("click", playersTurn, { once: true });
        gameBoard.append(cellSquare);


    });

}

//function for players turn

function playersTurn(e) {
    if (gameOver) return; //ends game
    const playerSelection = document.createElement("div");
    playerSelection.classList.add(playerChoice);
    e.target.append(playerSelection)
    playerChoice = playerChoice === "circle" ? "cross" : "circle";
    checkScore();
}

//Check current score
function checkScore() {
    const allSquares = document.querySelectorAll(".square");
    const winningCombo = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    winningCombo.forEach(array => {
        const circleWins = array.every(cell => allSquares[cell].firstChild?.classList.contains("circle"))
        const crossWins = array.every(cell => allSquares[cell].firstChild?.classList.contains("cross"))
        if (circleWins) {
            infoBoard.textContent = "Circle Wins!"
            gameOver = true;
            alphaOverlay.style.display = "flex";
            btn.style.color = "blue";


        } else if (crossWins) {
            infoBoard.textContent = "Cross Wins!"
            gameOver = true;
            alphaOverlay.style.display = "flex";
            btn.style.color = "red";
        }

    })


}

createBoard();
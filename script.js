// connect javascript to html & create array
const gameBoard = document.querySelector("#gameboard");
const infoBoard = document.querySelector("#info");
const createCells = [
    "", "", "",
    "", "", "",
    "", "", ""
];
let playerChoice = "circle";

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
    const playerSelection = document.createElement("div");
    playerSelection.classList.add(playerChoice);
    e.target.append(playerSelection)
    playerChoice = playerChoice === "circle" ? "cross" : "circle";
}

createBoard();
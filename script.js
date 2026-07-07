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
        gameBoard.append(cellSquare);


    });

}

createBoard();
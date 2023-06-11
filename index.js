const minSize = 1;
const maxSize = 100;
const defaultSize = 16;
const drawColor = "#202020";
const emptyColor = "#ffffff";

const drawWindow = document.getElementById("drawWindow");
const sizeInput = document.getElementById("sizeInput");
const boxes = document.getElementsByClassName("gridBox");

function getSizeInput() {
    let input = sizeInput.value;

    if(input >= minSize && input <= maxSize) {
        return(input);

    } else {
        window.alert("Invalid Input\nPlease select a size between 1 and 100");
        document.sizeInput = "";

    }
}

function removeGrid() {
    let gridRows = drawWindow.childNodes;
    
    while(gridRows[0]) {
        gridRows[0].remove();
    }
}

function fillRow(row, size) {
    for(let i = 0; i < size; i++) {
        let gridBox = document.createElement("div");
        gridBox.className = "gridBox";
        gridBox.addEventListener("mouseover", function() {colorBox(gridBox)});
        row.appendChild(gridBox);

    } 
}

function createGrid() {
    let size;
    if(sizeInput.value.length == 0) {
        size = defaultSize;
    } else {
        size = getSizeInput();
    }

    removeGrid();

    for(let i = 0; i < size; i++) {
        let gridRow = document.createElement("div");
        gridRow.className = "gridRow";
        fillRow(gridRow, size);
        drawWindow.appendChild(gridRow);

    } 
}

function colorBox(box) {
    box.style.backgroundColor = drawColor;
}

function clearGrid() {
    for(let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = emptyColor;
    }
}

document.getElementById("generateButton").addEventListener("click", createGrid);
document.getElementById("clearButton").addEventListener("click", clearGrid);
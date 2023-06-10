const defaultSize = 20;
const drawWindow = document.getElementById("drawWindow");

function clearGrid(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function fillRow(row, size) {
    for(let i = 0; i < size; i++) {
        var gridBox = document.createElement("div");
        gridBox.className = "gridBox";
        row.appendChild(gridBox);
    } 
}

function createGrid(size) {
    window.alert("Hello World");
    clearGrid(drawWindow);
    for(let i = 0; i < size; i++) {
        var gridRow = document.createElement("div");
        gridRow.className = "gridRow";
        fillRow(gridRow, size);
        drawWindow.appendChild(gridRow);
    } 
}

document.getElementById("testButton").addEventListener("onClick", createGrid(defaultSize));
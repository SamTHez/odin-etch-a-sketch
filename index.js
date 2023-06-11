const minSize = 1;
const maxSize = 100;
const defaultSize = 16;
const emptyColor = "#ffffff";
const colors = [
    "#000000",
    "#454545",
    "#757575",
    "#AAFF00",
    "#FFFF00",
    "#FF9500",
    "#00FF15",
    "#00FFFF",
    "#0095FF",
    "#FF0040",
    "#FF00FF",
    "#6A00FF"
]

let drawColor = colors[0];
let mouseDown = false;

const drawWindow = document.getElementById("drawWindow");
const sizeInput = document.getElementById("sizeInput");
const boxes = document.getElementsByClassName("gridBox");
const colorButtons = document.getElementsByClassName("colorOption");

function clearSelection() {
    if (window.getSelection) {window.getSelection().removeAllRanges();}
    else if (document.selection) {document.selection.empty();}
}

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
    if(mouseDown) {
        box.style.backgroundColor = drawColor;
    }
}

function clearGrid() {
    for(let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = emptyColor;
    }
}

function changeColor(colorButton) {
    document.getElementsByClassName("activeColor")[0].classList.remove("activeColor");
    colorButton.classList.add("activeColor"); 

    switch(colorButton.id) {
        case "c1":
            drawColor = colors[0];
            break;
        
        case "c2":
            drawColor = colors[1];
            break;
        
        case "c3":
            drawColor = colors[2];
            break;

        case "c4":
            drawColor = colors[3];
            break;

        case "c5":
            drawColor = colors[4];
            break;
        
        case "c6":
            drawColor = colors[5];
            break;
        
        case "c7":
            drawColor = colors[6];
            break;
            
        case "c8":
            drawColor = colors[7];
            break;

        case "c9":
            drawColor = colors[8];
            break;
        
        case "c10":
            drawColor = colors[9];
            break;
        
        case "c11":
            drawColor = colors[10];
            break;
            
        case "c12":
            drawColor = colors[11];
            break;

        default:
            console.log("Error selecting color");
            break;
    }
}

for(let colorNum = 0; colorNum < colorButtons.length; colorNum++) {
    let button = colorButtons[colorNum];
   button.addEventListener("click", function() {changeColor(button)});
}

document.addEventListener("mousedown", function() {mouseDown = true; clearSelection();})
document.addEventListener("mouseup", function() {mouseDown = false})
document.getElementById("generateButton").addEventListener("click", createGrid);
document.getElementById("clearButton").addEventListener("click", clearGrid);
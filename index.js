const minSize = 1;
const maxSize = 100;
const defaultSize = 16;

const colorSet1 = [
    "#000000",
    "#454545",
    "#FFFFFF",
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
const colorSet2 = [
    "#000000",
    "#454545",
    "#FFFFFF",
    "#e00700",
    "#e04300",
    "#f7b500",
    "#77d602",
    "#00750e",
    "#007558",
    "#002775",
    "#290075",
    "#410157"
]

let colors = colorSet1;
let drawColor = colors[0];
let emptyColor = "rgb(255, 255, 255)";

let eraserOn = false;
let mouseDown = false;
let rainbowPenOn = false;
let gridLinesOn = false;
let darkCanvasOn = false;
let alternateColorsOn = false;

const drawWindow = document.getElementById("drawWindow");
const sizeInput = document.getElementById("sizeInput");
const boxes = document.getElementsByClassName("gridBox");
const colorButtons = document.getElementsByClassName("colorOption");

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

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
        gridBox.style.backgroundColor = emptyColor;
        if(gridLinesOn) {
            gridBox.style.borderWidth = "1px";
        }
        gridBox.addEventListener("mouseover", function() {colorBox(gridBox)});
        gridBox.addEventListener("mousedown", function() {colorBoxFix(gridBox)});
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
        if(eraserOn) {     
            box.style.backgroundColor = emptyColor;

        } else {
            if(rainbowPenOn) {
                let randomColor = colors[getRandomNum(3,12)];
                box.style.backgroundColor = randomColor;

            } else {
                box.style.backgroundColor = drawColor;
            }
        }
    }
}

//Function to fix issue of the box not being colored if only clicked
function colorBoxFix(box) {
    if(eraserOn) {     
        box.style.backgroundColor = emptyColor;

    } else {
        if(rainbowPenOn) {
            let randomColor = colors[getRandomNum(3,12)];
            box.style.backgroundColor = randomColor;

        } else {
            box.style.backgroundColor = drawColor;
        }
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

function toggleEraser() {
    if(eraserOn) {
        document.getElementById("eraserToggle").style.backgroundColor = "#FFFFFF";
    } else {
        document.getElementById("eraserToggle").style.backgroundColor = "#000000";
    }
    eraserOn = !eraserOn;
}

function toggleRainbowPen() {
    if(rainbowPenOn) {
        document.getElementById("rainbowPenToggle").style.backgroundColor = "#FFFFFF";
    } else {
        document.getElementById("rainbowPenToggle").style.backgroundColor = "#000000";
    }
    rainbowPenOn = !rainbowPenOn;
}

function toggleGridLines() {
    let newWidth = "";

    if(gridLinesOn) {
        newWidth = "0px";
        document.getElementById("gridLinesToggle").style.backgroundColor = "#FFFFFF";

    } else {
        newWidth = "1px";
        document.getElementById("gridLinesToggle").style.backgroundColor = "#000000";
    }

    for(let i = 0; i < boxes.length; i++) {
        boxes[i].style.borderWidth = newWidth;

    }

    gridLinesOn = !gridLinesOn;

}

function toggleDarkCanvas() {
    let newColor = "";

    if(darkCanvasOn) {
        document.getElementById("darkCanvasToggle").style.backgroundColor = "#FFFFFF";
        newColor = "rgb(255, 255, 255)";
    } else {
        document.getElementById("darkCanvasToggle").style.backgroundColor = "#000000";
        newColor = "rgb(32, 32, 32)";
    }

    for(let i = 0; i < boxes.length; i++) {
        console.log(boxes[i].style.backgroundColor === emptyColor);
        if(boxes[i].style.backgroundColor === emptyColor) {
            boxes[i].style.backgroundColor = newColor;
        }
    }

    emptyColor = newColor;
    darkCanvasOn = !darkCanvasOn;
}

function toggleAlternateColors() {
    let newColors = colorSet1;

    if(alternateColorsOn) {
        document.getElementById("alternateColorsToggle").style.backgroundColor = "#FFFFFF";
    } else {
        document.getElementById("alternateColorsToggle").style.backgroundColor = "#000000";
        newColors = colorSet2;
    }

    for(let i = 0; i < colorButtons.length; i++) {
        colorButtons[i].style.backgroundColor = newColors[i];
    }

    colors = newColors;
    alternateColorsOn = !alternateColorsOn;
}

for(let colorNum = 0; colorNum < colorButtons.length; colorNum++) {
    let button = colorButtons[colorNum];
    button.addEventListener("click", function() {changeColor(button)});
}

document.addEventListener("mousedown", function() {mouseDown = true; clearSelection();})
document.addEventListener("mouseup", function() {mouseDown = false})
document.getElementById("generateButton").addEventListener("click", createGrid);
document.getElementById("clearButton").addEventListener("click", clearGrid);
document.getElementById("eraserToggle").addEventListener("click", toggleEraser);
document.getElementById("rainbowPenToggle").addEventListener("click", toggleRainbowPen);
document.getElementById("gridLinesToggle").addEventListener("click", toggleGridLines);
document.getElementById("darkCanvasToggle").addEventListener("click", toggleDarkCanvas);
document.getElementById("alternateColorsToggle").addEventListener("click", toggleAlternateColors);
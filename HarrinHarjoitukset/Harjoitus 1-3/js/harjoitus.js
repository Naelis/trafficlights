"use strict";

// Elements
const firstCanvas = document.querySelector("#myCanvas");
const secondCanvas = document.querySelector("#myCanvasTwo");
const thirdCanvas = document.querySelector("#myCanvasThree");

// Values
const thirdCanvasWidth = thirdCanvas.width;
const thirdCanvasHeight = thirdCanvas.height;
console.log(thirdCanvasWidth + thirdCanvasHeight);

// Array for coordinates
const coords =  [200, 20, 20, 120];

// <---------Functions Below------------>

// Draw a single line
const drawFirstLine = () => {
    let ctx= firstCanvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(300,150);
    ctx.stroke();
};

// Draw lines with parameters
const drawLineWithParam = (startX, startY, endX, endY) => {
    let ctx= secondCanvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX,endY);
    ctx.stroke();
};

// Draw multiple lines
const drawMultipleLines = () => {
    let ctx= thirdCanvas.getContext("2d");

    // Horizontal lines loop
    for (let i = 5; i < thirdCanvasHeight; i += 5)
    {
        ctx.moveTo(0, i);
        ctx.lineTo(thirdCanvasWidth, i);
        ctx.stroke();
    }

    // Vertical lines loop
    for (let n = 10; n < thirdCanvasWidth; n += 10)
    {
        ctx.moveTo(n, 0);
        ctx.lineTo(n,thirdCanvasWidth/2);
        ctx.stroke();
    }
};

// Help function attached to button
const presetParameters = () => {
    drawLineWithParam(coords[0], coords[1], coords[2], coords[3]);
};

// Event listeners
document.querySelector("#firstLine").addEventListener("click", drawFirstLine);
document.querySelector("#secondLine").addEventListener("click", presetParameters);
document.querySelector("#multipleLines").addEventListener("click", drawMultipleLines);
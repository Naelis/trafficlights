"use strict";


const topLight = document.querySelector('#topLight');
const midLight = document.querySelector('#midLight');
const btmLight = document.querySelector('#btmLight');

const resetButton = document.querySelector('#reset');
const btmToggle = document.querySelector('#btmToggle');
const topToggle = document.querySelector('#topToggle');
const midToggle = document.querySelector('#midToggle');

const greenLightButton = document.querySelector('#greenLight');
const redLightButton = document.querySelector('#redLight');
const dangerButton = document.querySelector('#blinkYellow');

let topInput = document.querySelector('#topInput');
let midInput = document.querySelector('#midInput');
let btmInput = document.querySelector('#btmInput');

let stop = true;

const setColor = (element, color) => {
    element.style.background = color;
};

const setTop = () => {
    setColor(topLight, topInput.value);
};

const setMid = () => {
    setColor(midLight, midInput.value);
};

const setBtm = () => {
    setColor(btmLight, btmInput.value);
};

const reset = () => {
    stop = true;
    setColor(btmLight, '');
    setColor(midLight, '');
    setColor(topLight, '');
};

const setMidYellow = () => {
    setColor(midLight, 'yellow');
};

const setTopRed = () => {
    setColor(topLight, 'red');
};

const setBtmGreen = () => {
    setColor(btmLight, 'green');
};

const setTopBlack = () => {
    setColor(topLight, 'black');
};

const setMidBlack = () => {
    setColor(midLight, 'black');
};

const setBtmBlack = () => {
    setColor(btmLight, 'black');
};


const greenLight = () => {
    setTopRed();
    setMidBlack();
    setBtmBlack();
    // setColor(topLight, 'red');

    setTimeout(setTopBlack, 1000);
    setTimeout(setMidYellow, 1000);

    setTimeout(setMidBlack, 2000);
    setTimeout(setBtmGreen, 2000);

};

const redLight = () => {
    setBtmGreen();
    setMidBlack();
    setTopBlack();

    setTimeout(setBtmBlack, 1500);
    setTimeout(setMidYellow, 1500);

    setTimeout(setTopRed, 3000);
    setTimeout(setMidBlack, 3000);
};

const blinkYellow = () => {
    if (stop === false) {
        setMidBlack();
        setTimeout(() => {
            setMidYellow();
        }, 1000);
    } else {
        clearInterval(blinkYellow);
    }
};

const outOfOrder = () => {
    stop = false;
    setBtmBlack();
    setMidBlack();
    setTopBlack();
    setInterval(blinkYellow, 2000);

};


topToggle.addEventListener('click', setTop);
midToggle.addEventListener('click', setMid);
btmToggle.addEventListener('click', setBtm);
resetButton.addEventListener('click', reset);
greenLightButton.addEventListener('click', greenLight);
redLightButton.addEventListener('click', redLight);
dangerButton.addEventListener('click', outOfOrder);













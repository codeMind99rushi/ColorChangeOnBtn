let divi = document.getElementById("divi");

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");

btn1.addEventListener("click", changeToRed);
btn2.addEventListener("click", changeToGreen);
btn3.addEventListener("click", changeToBlue);
btn4.addEventListener("click", changeToYellow);
btn5.addEventListener("click", changeToBlack);


function changeToRed() {
    divi.classList.add("red");
    divi.classList.remove("green", "blue", "yellow", "black");
}

function changeToGreen() {
    divi.classList.add("green");
    divi.classList.remove("red", "blue", "yellow", "black");
}

function changeToBlue() {
    divi.classList.add("blue");
    divi.classList.remove("red", "green", "yellow", "black");
}

function changeToYellow() {
    divi.classList.add("yellow");
    divi.classList.remove("red", "green", "blue", "black");
}

function changeToBlack() {
    divi.classList.add("black");
    divi.classList.remove("red", "green", "blue", "yellow");
}
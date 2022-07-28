
const colorChange = document.querySelectorAll(".hover");
const fontChange = document.querySelectorAll(".light");
const calcButton = document.querySelectorAll(".button");
const clearButton = document.querySelector(".buttonc");
const equalButton = document.querySelector(".buttone");
let displayConsole = document.querySelector(".result");

calcButton.forEach(button => {
    button.addEventListener("click", displayButton);
})

function displayButton(e) {
    if (displayConsole.innerHTML === "0" && e.target.innerHTML != "0") {
        displayConsole.innerHTML = "";
    } else if (displayConsole.innerHTML === "0" && e.target.innerHTML === "0")
        displayConsole.innerHTML = "0";
    if (e.target.innerHTML === "X") {
        displayConsole.innerHTML += "*";
    } else {
    displayConsole.innerHTML += e.target.innerHTML;
}}

clearButton.addEventListener("click", function(){
    displayConsole.innerHTML = "0";
})

equalButton.addEventListener("click", function(){
    try {eval(displayConsole.innerHTML);
    } catch (e) {
        if (e instanceof SyntaxError) {
            alert("SyntaxError");
            displayConsole.innerHTML = "0";
        }
        else {
            throw e;}
    }
    let answer = eval(displayConsole.innerHTML);
    if (typeof answer != "number") {
        displayConsole.innerHTML = "0";
    } else {
    displayConsole.innerHTML = answer;
    }
})

fontChange.forEach(button => {
    button.addEventListener("mouseover", fontColorSwitch)
    button.addEventListener("mouseout", colorReset)
})

colorChange.forEach(hover => {
    hover.addEventListener("mouseover", colorSwitch)
    hover.addEventListener("mouseout", colorReset)
})

function colorSwitch(e) {
    e.target.style.backgroundColor = "#99cf87";
}

function colorReset(e) {
    e.target.style.backgroundColor = "";
    e.target.style.color = "";
}

function fontColorSwitch(e) {
    e.target.style.color = "#FFFFFF";

}


// Started messing with skins, very ugly code, just trying to get it to work

const alternativeSkin = document.querySelector(".skin")
const originalSkin = document.querySelector(".original")

alternativeSkin.addEventListener("click", function() {
    document.querySelector("#CalcFrame").style.backgroundColor = "red";
    document.querySelector(".mainBody").style.backgroundColor = "orange";
    document.querySelector(".second").style.borderColor = "black";
    document.querySelector(".third").style.borderColor = "black";
    document.querySelector(".fourth").style.borderColor = "black";
    document.querySelector(".fifth").style.borderColor = "black";
    let darkButtons = document.querySelectorAll(".dark")
    for (i=0; i < darkButtons.length; i++) {
        darkButtons[i].style.borderColor = "black"; 
    }
    for (i=0; i < darkButtons.length; i++) {
    darkButtons[i].style.backgroundColor = "lime";
    }
    for (i=0; i < darkButtons.length; i++) {
        darkButtons[i].style.color = "purple";
        }
    let lightButtons = document.querySelectorAll(".light")
    for (i=0; i < lightButtons.length; i++) {
    lightButtons[i].style.backgroundColor = "yellow";
    }
})

originalSkin.addEventListener("click", function() {
    document.querySelector("#CalcFrame").style.backgroundColor = "white";
    document.querySelector(".mainBody").style.backgroundColor = "black";
    document.querySelector(".second").style.borderColor = "#d8f1cf";
    document.querySelector(".third").style.borderColor = "#d8f1cf";
    document.querySelector(".fourth").style.borderColor = "#d8f1cf";
    document.querySelector(".fifth").style.borderColor = "#d8f1cf";
    let darkButtons = document.querySelectorAll(".dark")
    for (i=0; i < darkButtons.length; i++) {
        darkButtons[i].style.borderColor = "#d8f1cf"; 
    }
    for (i=0; i < darkButtons.length; i++) {
    darkButtons[i].style.backgroundColor = "#75bd5d";
    }
    for (i=0; i < darkButtons.length; i++) {
        darkButtons[i].style.color = "white";
        }
    let lightButtons = document.querySelectorAll(".light")
    for (i=0; i < lightButtons.length; i++) {
    lightButtons[i].style.backgroundColor = "#99cf87";
    }
})
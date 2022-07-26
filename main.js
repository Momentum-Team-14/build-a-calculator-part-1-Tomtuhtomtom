
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
    if (e.target.innerHTML === "X") {
        displayConsole.innerHTML += "*";
    } else {
    displayConsole.innerHTML += e.target.innerHTML;
}}

clearButton.addEventListener("click", function(){
    displayConsole.innerHTML = "";
})

equalButton.addEventListener("click", function(){
    try {eval(displayConsole.innerHTML);
    } catch (e) {
        if (e instanceof SyntaxError) {
            alert("SyntaxError");
            displayConsole.innerHTML = "";
        }
        else {
            throw e;}
    }
    let answer = eval(displayConsole.innerHTML);
    console.log(answer);
    console.log(typeof answer);
    if (typeof answer != "number") {
        displayConsole.innerHTML = "";
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
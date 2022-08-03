
//set variables to "grab" classes from HTML
const colorChange = document.querySelectorAll(".hover");
const fontChange = document.querySelectorAll(".light");
const calcButton = document.querySelectorAll(".button");
const clearButton = document.querySelector(".buttonc");
const equalButton = document.querySelector(".buttone");
let displayConsole = document.querySelector(".result");

// use variable from above with forEach function to add Event Listerner
// to each button clicked and call function displayButton when clicked
calcButton.forEach(button => {
    button.addEventListener("click", displayButton);
})

//displayButton function that was called above that 
//uses the innerHTML property to change the display on the 
//calculator to add what is written on the button(the innerHTML)
function displayButton(e) {
    //if statement that gets rid of the zero at the beginning
    if (displayConsole.innerHTML === "0" && e.target.innerHTML !=="0") {
        displayConsole.innerHTML = "";
    }
    //if statement to change X on the button to display the * operator
    if (e.target.innerHTML === "X") {
        displayConsole.innerHTML += "*";
    } else {
        //for all else, add the character on the button to the display console
    displayConsole.innerHTML += e.target.innerHTML;
}}

// resets the display console to zero when clear button is pressed
clearButton.addEventListener("click", function(){
    displayConsole.innerHTML = "0";
})

//runs the eval() function for the innerHTML inside the display console
//to see if it can be solved like a math problem
equalButton.addEventListener("click", function(){
    try {eval(displayConsole.innerHTML);
    } catch (e) {
        // if the display console can't be solved like a math problem
        // it displays a error message with the alert function and resets the 
        // display console to zero
        if (e instanceof SyntaxError) {
            alert("SyntaxError");
            displayConsole.innerHTML = "0";
        }
        else {
            throw e;}
    }
    // displays the answer in the console after being checked by the above if statement
    let answer = eval(displayConsole.innerHTML);
    displayConsole.innerHTML = answer;
})

//Event listerners for the different hover effects
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


// Started messing with skins to see if it works
// very ugly code, just trying to get it to work

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

const colorChange = document.getElementById("C-Button");
const colorChange2 = document.getElementById("EqualButton");
const fontColorChange = document.getElementById("DivideButton");
const fontColorChange2 = document.getElementById("MultiplyButton");
const fontColorChange3 = document.getElementById("MinusButton");
const fontColorChange4 = document.getElementById("PlusButton");

colorChange.addEventListener("mouseover", colorSwitch);
colorChange.addEventListener("mouseout", colorReset);
colorChange2.addEventListener("mouseover", colorSwitch);
colorChange2.addEventListener("mouseout", colorReset);
fontColorChange.addEventListener("mouseover", fontColorSwitch);
fontColorChange.addEventListener("mouseout", colorReset);
fontColorChange2.addEventListener("mouseover", fontColorSwitch);
fontColorChange2.addEventListener("mouseout", colorReset);
fontColorChange3.addEventListener("mouseover", fontColorSwitch);
fontColorChange3.addEventListener("mouseout", colorReset);
fontColorChange4.addEventListener("mouseover", fontColorSwitch);
fontColorChange4.addEventListener("mouseout", colorReset);

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
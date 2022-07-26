
const colorChange = document.querySelectorAll(".hover");
const fontChange = document.querySelectorAll(".light");

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
var divsContainer = document.querySelector(".divs-container");
var gridSide = Number(prompt("Insert side size"));
var totalDivs = gridSide * gridSide;
for (var i = 0; i < totalDivs; i++) {
    var div = document.createElement("div");
    div.setAttribute("class", "coloredDiv");
    div.style.width = "".concat(300 / gridSide, "px");
    div.style.height = "".concat(300 / gridSide, "px");
    divsContainer.appendChild(div);
}

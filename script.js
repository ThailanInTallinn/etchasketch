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
divsContainer.addEventListener("mouseover", function (e) {
    e.stopPropagation();
    if (!e.target.classList.contains("divs-container")) {
        var target = e.target;
        target.style.backgroundColor = "rgb(".concat(Math.ceil(Math.random() * 256), " ").concat(Math.ceil(Math.random() * 256), " ").concat(Math.ceil(Math.random() * 256), ")");
    }
    ;
});

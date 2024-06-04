var button = document.querySelector("button");
var gridSide = 0;
var divsContainer = document.querySelector(".divs-container");
button.addEventListener("click", function () {
    gridSide = 0;
    var div = document.createElement("div");
    gridSide = Number(prompt("Insert the number of pixels"));
    if (gridSide > 100) {
        gridSide = 100;
    }
    var totalDivs = gridSide * gridSide;
    if (divsContainer.childElementCount > 0) {
        while (divsContainer.firstChild) {
            divsContainer.firstChild.remove();
        }
        for (var i = 0; i < totalDivs; i++) {
            div = document.createElement("div");
            div.setAttribute("class", "coloredDiv");
            div.style.width = "".concat(500 / gridSide, "px");
            div.style.height = "".concat(500 / gridSide, "px");
            divsContainer.appendChild(div);
        }
    }
    else {
        for (var i = 0; i < totalDivs; i++) {
            div = document.createElement("div");
            div.setAttribute("class", "coloredDiv");
            div.style.width = "".concat(500 / gridSide, "px");
            div.style.height = "".concat(500 / gridSide, "px");
            divsContainer.appendChild(div);
        }
    }
    divsContainer.addEventListener("mouseover", function (e) {
        e.stopPropagation();
        if (!e.target.classList.contains("divs-container")) {
            var target = e.target;
            target.style.backgroundColor = "rgb(".concat(Math.ceil(Math.random() * 256), " ").concat(Math.ceil(Math.random() * 256), " ").concat(Math.ceil(Math.random() * 256), ")");
        }
        ;
    });
});

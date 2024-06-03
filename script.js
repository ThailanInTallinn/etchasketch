var divsContainer = document.querySelector(".divs-container");
for (var i = 0; i < 256; i++) {
    var div = document.createElement("div");
    div.setAttribute("class", "coloredDiv");
    divsContainer.appendChild(div);
}

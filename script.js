var divsContainer = document.querySelector(".divs-container");
divsContainer.style.width = "1600px";
divsContainer.style.height = "1600px";
for (var i = 0; i <= 15; i++) {
    var div = document.createElement("div");
    div.setAttribute("class", "coloredDiv");
    div.style.width = "10%";
    div.style.height = "10%";
    div.style.backgroundColor = "blue";
    divsContainer.appendChild(div);
}

const divsContainer: HTMLElement = document.querySelector(".divs-container");
let gridSide: number = Number(prompt("Insert side size"));
let totalDivs: number = gridSide * gridSide;
for (let i: number = 0; i < totalDivs; i++) {
	const div = document.createElement("div");
	div.setAttribute("class", "coloredDiv");
	div.style.width = `${300 / gridSide}px`;
	div.style.height = `${300 / gridSide}px`;
	divsContainer.appendChild(div);
}

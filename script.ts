const divsContainer: HTMLElement = document.querySelector(".divs-container");
for (let i: number = 0; i < 256; i++) {
	const div = document.createElement("div");
	div.setAttribute("class", "coloredDiv");
	divsContainer.appendChild(div);
}

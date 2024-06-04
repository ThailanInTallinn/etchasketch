const button: HTMLButtonElement = document.querySelector("button");
let gridSide: number = 0;
const divsContainer: HTMLElement = document.querySelector(".divs-container");
let totalDivs: number = gridSide * gridSide;
for (let i: number = 0; i < totalDivs; i++) {
	const div = document.createElement("div");
	div.setAttribute("class", "coloredDiv");
	div.style.width = `${300 / gridSide}px`;
	div.style.height = `${300 / gridSide}px`;
	divsContainer.appendChild(div);
}

divsContainer.addEventListener("mouseover", (e) => {
	e.stopPropagation();
	if (!(e.target as HTMLDivElement).classList.contains("divs-container")) {
		const target = (e.target as HTMLDivElement);
		target.style.backgroundColor = `rgb(${Math.ceil(Math.random() * 256)} ${Math.ceil(Math.random() * 256)} ${Math.ceil(Math.random() * 256)})`;

	};
});

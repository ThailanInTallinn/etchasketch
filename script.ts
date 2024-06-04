const button: HTMLButtonElement = document.querySelector("button");
let gridSide: number = 0;
const divsContainer: HTMLElement = document.querySelector(".divs-container");
button.addEventListener("click", () => {
	gridSide = 0;
	let div: HTMLDivElement = document.createElement("div");
	gridSide = Number(prompt("Insert the number of pixels"));
	if (gridSide > 100) {
		gridSide = 100;
	}
	let totalDivs: number = gridSide * gridSide;
	if (divsContainer.childElementCount > 0) {
		while (divsContainer.firstChild) {
			divsContainer.firstChild.remove();
		}
		for (let i: number = 0; i < totalDivs; i++) {
			div = document.createElement("div");
			div.setAttribute("class", "coloredDiv");
			div.style.width = `${500 / gridSide}px`;
			div.style.height = `${500 / gridSide}px`;
			divsContainer.appendChild(div);
		}

	} else {
		for (let i: number = 0; i < totalDivs; i++) {
			div = document.createElement("div");
			div.setAttribute("class", "coloredDiv");
			div.style.width = `${500 / gridSide}px`;
			div.style.height = `${500 / gridSide}px`;
			divsContainer.appendChild(div);
		}
	}
	divsContainer.addEventListener("mouseover", (e) => {
		e.stopPropagation();
		if (!(e.target as HTMLDivElement).classList.contains("divs-container")) {
			const target = (e.target as HTMLDivElement);
			target.style.backgroundColor = `rgb(${Math.ceil(Math.random() * 256)} ${Math.ceil(Math.random() * 256)} ${Math.ceil(Math.random() * 256)})`;

		};
	});
})




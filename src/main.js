const addButton = document.querySelector(".button__add--js");
const removeButton = document.querySelector(".button__remove--js");
const counterNumber = document.querySelector(".counter--js");

let glassNumber = parseInt(counterNumber.textContent);

console.log(addButton);
console.log(removeButton);
console.log(glassNumber);

const addGlass = () => {
	glassNumber = glassNumber + 1;
	counterNumber.innerHTML = glassNumber;
};

const removeGlass = () => {
	if (glassNumber >= 1) {
		glassNumber = glassNumber - 1;
		counterNumber.innerHTML = glassNumber;
	} else {
	}
};

addButton.addEventListener("click", addGlass);
removeButton.addEventListener("click", removeGlass);

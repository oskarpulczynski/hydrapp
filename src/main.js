const addButton = document.querySelector(".button__add--js");
const removeButton = document.querySelector(".button__remove--js");
const counterValue = document.querySelector(".counter--js");

let glasses = 0;

const key = new Date().toISOString().slice(0, 10);

if (localStorage.getItem(key)) {
	glasses = parseInt(localStorage.getItem(key));
}

const setCounterValue = value => {
	counterValue.innerHTML = value;
	localStorage.setItem(key, value);
};

setCounterValue(glasses);

addButton.addEventListener("click", () => {
	if (glasses <= 98) {
		glasses = glasses + 1;
		setCounterValue(glasses);
	}
});

removeButton.addEventListener("click", () => {
	if (glasses >= 1) {
		glasses = glasses - 1;
		setCounterValue(glasses);
	}
});
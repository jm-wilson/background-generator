var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randombtn = document.getElementById("randombtn");

function getRandom(max) {
	return Math.floor(Math.random() * max);
}

function componentToHex(c) {
	var hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}

function getRandomColor() {
	var s = "#" + componentToHex(getRandom(256)) + componentToHex(getRandom(256)) + componentToHex(getRandom(256));
	return s;
}

function setColors() {

	c1 = color1.value;
	c2 = color2.value;

	console.log("Setting to " + c1 + " and " + c2);
	body.style.background = "linear-gradient(to right, " + c1 + ", " + c2 + ")";

	css.textContent = body.style.background + ";";
}

function setRandom() {
	console.log("Setting random");
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setColors();
}

color1.addEventListener("input", setColors);
color2.addEventListener("input", setColors);
randombtn.addEventListener("click", setRandom);

setRandom();
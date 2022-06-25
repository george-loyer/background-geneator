var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

const random1 = () => {
	let n = (Math.random() * 0xfffff * 1000000).toString(16);
	return '#' + n.slice(0, 6);
};
const random2 = () => {
	let n = (Math.random() * 0xfffff * 1000000).toString(16);
	return '#' + n.slice(0, 6);
};

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function setRandom() {
	color1.value = random1();
	color2.value = random2();
	setGradient();
}

window.document.onload = setGradient();

random.addEventListener("click", setRandom);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
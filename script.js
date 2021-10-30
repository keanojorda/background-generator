var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var rndButton = document.querySelector(".random");
var body = document.getElementById("gradient");

function getRandomIntInclusive(min, max) {
	min = Math.ceil(100000);
	max = Math.floor(999999);
	return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function getRandomColors() {
	color1.value = "#" + getRandomIntInclusive();
	color2.value = "#" + getRandomIntInclusive();
}

document.addEventListener("onload", setGradient());

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

rndButton.addEventListener("click", function(){
	getRandomColors();
	setGradient();
});
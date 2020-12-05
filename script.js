let monobox = document.querySelector('.monoBox');
let singlecolor = document.querySelector('.singleColor');
let hex = document.querySelector('.hex');
let hex2 = document.querySelector('.hex2');
let hex3 = document.querySelector('.hex3');
let body = document.getElementById('body');
let p = document.querySelector('P');
let nav = document.querySelector('NAV');

let dualbox = document.querySelector('.dualBox');
let dualcolor = document.querySelector('.dualColor1');
let dualcolor2 = document.querySelector('.dualColor2');

dualbox.style.background = `linear-gradient(to right, ${dualcolor.value}, ${dualcolor2.value});`;

singlecolor.addEventListener("input", function(){
    monobox.style.backgroundColor = singlecolor.value;
    hex.textContent = singlecolor.value;
})

const linearChange1 = () => {
    dualbox.style.background = `linear-gradient(to right, ${dualcolor.value}, ${dualcolor2.value})`;
    hex2.textContent = dualcolor.value;
}

const linearChange2 = () => {
    dualbox.style.background = `linear-gradient(to right, ${dualcolor.value}, ${dualcolor2.value})`;
    hex3.textContent = dualcolor2.value;
}

function night(){
	body.style.backgroundColor = "#2a2c2d";
	p.style.color = "white";
	nav.style.backgroundColor = "#5b6262";

}

function light(){
	body.style.backgroundColor = "#ffffff";
	p.style.color = "black";
	nav.style.backgroundColor = '#ffffff';
}

dualcolor.addEventListener("input", linearChange1);
dualcolor2.addEventListener("input", linearChange2);



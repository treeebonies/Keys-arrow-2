canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");


img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)  	{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
{
alphabetkey();
document.getElementById("d1").innerHTML="You have pressed an Alphabet Key";
console.log("Alphabet key");
}

else if(keyPressed>=48&&keyPressed<=57)

{
numberkey();
document.getElementById("d1").innerHTML="You have pressed a Number Key";
console.log("Number key");
}
	
else if(keyPressed>=37&&keyPressed<=40)

{
arrowkey();
document.getElementById("d1").innerHTML="You have pressed a Arrow Key";
console.log("Arrow key");
} 	

else if((keyPressed=='17')||(keyPressed=='18')||(keyPressed=='19')) {
	specialkey();
		document.getElementById("d1").innerHTML="You have pressed a Special Key";
		console.log("Special key");
}

else{
	otherkey();
		document.getElementById("d1").innerHTML="You have pressed a Other Key";
		console.log("Other key");
}

}

function alphabetkey()	{
 	img_image="Alpkey.png";
 	add();
}
	
function numberkey() {
	img_image="numkey.png";
 	add();
}

function arrowkey() {
	img_image="Arrkey.png";
 	add();
}


function specialkey() {
	img_image="spkey.png";
 	add();
}

function otherkey(){	
	img_image="otherkey.png";
	add();
}

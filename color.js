
var squares=document.querySelectorAll(".square");

var colors;

var count=6;
var colortofind;
var result=document.querySelector("#result");
var colorDisplay=document.querySelector("#colorDisplay");
var reset=document.querySelector("#reset");
var h1=document.querySelector("h1");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");


hard.classList.add("selected");
reset.addEventListener("click",function(){
	colorSquares(count);

});

easy.addEventListener("click",function(){
	count=3;
	colorSquares(count);
	this.classList.add("selected");
	hard.classList.remove("selected");
	
});

hard.addEventListener("click",function(){
	count=6;
	colorSquares(count);
	this.classList.add("selected");
	easy.classList.remove("selected");
});

colorSquares(count);

for(var i=0;i<squares.length;i++){
	squares[i].addEventListener("click",function(){
		if(this.style.background===colortofind){
			result.textContent="Correct!";
			changeColor(colortofind);
			h1.style.background=colortofind;
			reset.textContent="Play Again?"
		}
		else{
			this.style.background="#232323";
			result.textContent="Try Again";
		}
	});


}



function changeColor(color){
	for (var i = 0; i < squares.length; i++) {
	 squares[i].style.background=color;
	}
}

function randomColor(){
	var rand= Math.floor(Math.random()*colors.length);
	return colors[rand];
}

function randomColorArray(num){

	var arr=[];
	for (var i = 0; i < num; i++) {
		arr[i]=randomrgb();
	}

	return arr;
}

function randomrgb(){

	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function colorSquares(num){
	reset.textContent="New Colors";
	colors=randomColorArray(num);

		for(var i=0;i<num;i++){
			squares[i].style.display="block";
			squares[i].style.background=colors[i];
		}
		for(var i=num;i<squares.length;i++){
			//console.log(5);
			squares[i].style.display="none";
		}
		colortofind=randomColor();
		colorDisplay.textContent=colortofind;
		h1.style.background="steelblue";
		result.textContent="";
}

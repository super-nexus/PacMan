
var gameWrapper = $(".gameWrapper");
var timeSpan = $("#time");

var unitHeight = 0;
var unitWidth = 0;

var brickWallImage = "<img class=\"wall\" src=\"images/zid.png\" >";
var krogecImg = "<img src=\"images/krogec.png\" >";
var pacManDownImg = "<img src=\"images/pac_dol.png\" >";
var fruitImg = "<img src=\"images/sadje.png\" >";
var whiteDiv = "<div class=\"whiteDiv\"";

var left = false;
var right = false;
var top = false;
var bottom = true;

var fruitDrawn = false;
var fruitCounter = 2;

var time = 30;
var play = false;

function drawLabirint(labirint){

	while(!fruitDrawn){

		randNum = Math.floor(Math.random()*labirint.length-1);

		if (labirint[randNum] == ".") {
			labirint[randNum] == "S"
			fruitCounter++;
		}

		if (fruitCounter == 2) {
			fruitDrawn = true;
		}

	}

	for(var i = 0; i < labirint.length; i++){

		if (labirint[i] == "X") {
			gameWrapper.append(brickWallImage)
		}
		else if(labirint[i] == "."){
			gameWrapper.append(krogecImg);
		}
		else if(labirint[i] == "P"){
			gameWrapper.append(pacManDownImg);
		}
		else if(labirint[i] == "S"){
			gameWrapper.append()
		}
	}

	unitHeight = $(".wall").height();
	unitWidth = $(".wall").width();
}


function redraw(){

	while(play){




	}

}


function countDown(){

	time = time - 1;
	timeSpan.html("<strong>Time: " + time + "</strong>");

}


function gameStart(){

	play = true;

	var redrawTimer = setInterval(redraw, 200);
	var countDownTimer = setInterval(countDown, 1000);
}


$(function(){


	drawLabirint(PacmanMAP[0]);

	window.onkeyup = function(e) {
		var key = e.keyCode ? e.keyCode : e.which;



		if (key == 38){

		}

		else if(key == 40){
		}



	}





});
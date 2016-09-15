/*

Fourth version of the js file for drip. Working on optimization
z-index could add a max time length before it overflows and breaks a bit, but it should be about 4 years with DRIP_TICK = 50
This assumes the browser implements z-index as a 32 bit integer and not a 64 bit integer. With 64 bit it doesn't matter, it's too big.

*/

const MAX_RAD = 100;
const MIN_RAD = 20;

const VAR_TICK = 100;
const DRIP_TICK = 50;

const MAX_DRIPS = 750;

const RED_MIN = 0;
const RED_MAX = 250;
const GREEN_MIN = 0;
const GREEN_MAX = 250;
const BLUE_MIN = 0;
const BLUE_MAX = 250;

var currentID = 0;
var idFlag = true;
var curZIndex = 1;

var currentInterval1;
var currentInterval2;

var red = 100;
var redDir = false;
var green = 0;
var greenDir = false;
var blue = 0;
var blueDir = false;
var radius = 10;
var radDir = false;

$( document ).ready(function(){
	currentInterval1 = setInterval(function(){ changeVars(); }, VAR_TICK);
	
	currentInterval2 = setInterval(function(){ createBlotch(); }, DRIP_TICK);
	
	$( "#reset" ).click(function(){
		$( ".blotch" ).remove();
		currentID = 0
	});
	
	$( "#play" ).click(function(){
		if (currentInterval1 == -1){
			currentInterval1 = setInterval(function(){ changeVars(); }, VAR_TICK);
			currentInterval2 = setInterval(function(){ createBlotch(); }, DRIP_TICK);
		}
	});
	
	$( "#pause" ).click(function(){
		clearInterval(currentInterval1);
		clearInterval(currentInterval2);
		currentInterval1 = -1;
	});
	
	// Debug Code
	/*
	$( "body" ).append('<div id="currentIDCounter"></div>');
	$( "#currentIDCounter" )
	.css("width", "300px")
	.css("height", "50px")
	.css("position", "fixed")
	.css("left", "10%")
	.css("top", "10%")
	.css("z-index", "100")
	.css("background-color", "whitesmoke")
	.css("color", "black")
	.css("text-align", "center")
	.css("font-size", "20px")
	.css("line-height", "50px");
	*/
	// End Debug Code
});

function createBlotch(){
	if(currentID - MAX_DRIPS >= 0){
		currentID = 0;
		idFlag = false;
	}
	if(idFlag){

		$( "#canvas" ).append( "<div class='blotch' id='" + currentID.toString() + "'></div>");
	}
	$( "#"+currentID.toString() ).css("top", (Math.floor(Math.random() * $( "#canvas" ).height()) - radius)+"px")
		.css("left", (Math.floor(Math.random() * $( "#canvas" ).width()) - radius)+"px")
		.css("width", (radius * 2).toString()+"px")
		.css("height", (radius * 2).toString()+"px")
		.css("border-radius", (radius).toString()+"px")
		.css("background-color", "rgb("+red.toString()+", "+green.toString()+", "+blue.toString()+")")
		.css("z-index", curZIndex.toString());
	currentID++;
	curZIndex++;
	// Debug Code
	//$( "#currentIDCounter" ).html(currentID);
	// End Debug Code
}

function changeVars(){
	//var rand = Math.floor(Math.random() * 3);
	switch(Math.floor(Math.random() * 3) % 3)
	{
		case 0:
			if(red >= RED_MAX){ redDir = true; }
			else if(red <= RED_MIN){ redDir = false; }
			if(redDir){
				red -= 10;
			} else {
				red += 10;
			}
			break;
		case 1:
			if(green >= GREEN_MAX){ greenDir = true; }
			else if(green <= GREEN_MIN){ greenDir = false; }
			if(greenDir){
				green-= 10;
			} else {
				green += 10;
			}
			break;
		case 2:
			if(blue >= BLUE_MAX){ blueDir = true; }
			else if(blue <= BLUE_MIN){ blueDir = false; }
			if(blueDir){
				blue -= 10;
			} else {
				blue += 10;
			}
			break;
	}
	
	if(radius >= MAX_RAD){ radDir = true; }
	else if(radius <= MIN_RAD){ radDir = false; }
	if(radDir){
		radius -= 10;
	} else {
		radius += 10;
	}
}
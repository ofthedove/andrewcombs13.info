const VAR_TICK = 50;

const HIDE_TIMEOUT = 2000;

var varInterval;
var hideTimeout;

var red = 0;
var redDir = false;
var green = 0;
var greenDir = false;
var blue = 0;
var blueDir = false;

function myHide(){
	$( this ).animate({bottom: "-100%"}, 300);
}

function myShow(){
	$( this ).animate({bottom: "10%"}, 300);
}

$( document ).ready(function(){
	varInterval = setInterval(function(){ changeVars(); }, VAR_TICK);
	
	//hideTimeout = setTimeout(function(){ $( ".control" ).myHide(); }, HIDE_TIMEOUT);
	hideTimeout = setTimeout(function(){ $( ".control" ).animate({bottom: "-100%"}, 300); }, HIDE_TIMEOUT);
	
	$( document ).mousemove(function(){
		clearTimeout(hideTimeout);
		$( ".control" ).animate({bottom: "10%"}, 300);
		hideTimeout = setTimeout(function(){ $( ".control" ).animate({bottom: "-100%"}, 300); }, HIDE_TIMEOUT);
	});
	
	$( "#reset" ).click(function(){
		$( "body" ).css("background-color", "white");
		currentID = 0
		red = 0;
		redDir = false;
		green = 0;
		greenDir = false;
		blue = 0;
		blueDir = false;
	});
	
	$( "#play" ).click(function(){
		if (varInterval == -1){
			varInterval = setInterval(function(){ changeVars(); }, VAR_TICK);
		}
	});
	
	$( "#pause" ).click(function(){
		clearInterval(varInterval);
		varInterval = -1;
	});
});

function changeVars(){
	var rand = Math.floor(Math.random() * 3);
	switch(rand % 3)
	{
		case 0:
			if(red >= 250){ redDir = true; }
			else if(red <= 0){ redDir = false; }
			if(redDir){
				red -= 10;
			} else {
				red += 10;
			}
			break;
		case 1:
			if(green >= 250){ greenDir = true; }
			else if(green <= 0){ greenDir = false; }
			if(greenDir){
				green-= 10;
			} else {
				green += 10;
			}
			break;
		case 2:
			if(blue >= 250){ blueDir = true; }
			else if(blue <= 0){ blueDir = false; }
			if(blueDir){
				blue -= 10;
			} else {
				blue += 10;
			}
			break;
	}
	$( "body" ).css("background-color", "rgb("+red.toString()+", "+green.toString()+", "+blue.toString()+")");
}
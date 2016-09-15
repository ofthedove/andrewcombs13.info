const MAX_RAD = 100;

var currentID = 0;
var red = 0;
var redDir = false;
var green = 0;
var greenDir = false;
var blue = 0;
var blueDir = false;
var radius = 10;
var radDir = false;

$( document ).ready(function(){
	setInterval(function(){ changeVars(); }, 200);
	
	$( "#canvas" ).click(function( event ){
		$( "#canvas" ).html( $( "#canvas" ).html() + "<div class='blotch' id='" + currentID.toString() + "'></div>");
		$( "#"+currentID.toString() ).css("top", (event.pageY.toString() - radius)+"px");
		$( "#"+currentID.toString() ).css("left", (event.pageX.toString() - radius)+"px");
		$( "#"+currentID.toString() ).css("width", (radius * 2).toString()+"px");
		$( "#"+currentID.toString() ).css("height", (radius * 2).toString()+"px");
		$( "#"+currentID.toString() ).css("border-radius", (radius).toString()+"px");
		$( "#"+currentID.toString() ).css("background-color", "rgb("+red.toString()+", "+green.toString()+", "+blue.toString()+")");
		currentID++;
	});
	
	$( "#reset" ).click(function(){
		$( ".blotch" ).remove();
		currentID = 0
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
	$( "#color" ).css("background-color", "rgb("+red.toString()+", "+green.toString()+", "+blue.toString()+")");
	
	if(radius >= MAX_RAD){ radDir = true; }
	else if(radius <= 0){ radDir = false; }
	if(radDir){
		radius -= 10;
	} else {
		radius += 10;
	}
}
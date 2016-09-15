const CURSOR_X_INCREMENT = 20;
const CURSOR_Y_INCREMENT = 20;

var cursorX = 0;
var cursorY = 0;

$( document ).ready(function(){
	$( document ).keydown(function( event ){
		switch( event.which ){
			case 87: case 119: // w W
				decrementY();
				break;
			case 65: case 97: // a A
				decrementX();
				break;
			case 83: case 115: // s S
				incrementY();
				break;
			case 68: case 100: // d D
				incrementX();
				break;
			case 32: // 'Space'
				space();
				break;
		}
		updateCursor();
	});
});

function space(){
	$( "#cursor" ).animate({ width: "100px", height: "100px" }, 1000).animate({ width: "50px", height: "50px" }, 1000);
}

function updateCursor(){
	$( "#cursor" ).css("left", cursorX);
	$( "#cursor" ).css("top", cursorY);
}

function incrementX(){
	cursorX += CURSOR_X_INCREMENT;
	if(cursorX > ($( "#canvas" ).width() - 50) ){
		cursorX = $( "#canvas" ).width() - 50;
	}
}

function decrementX(){
	cursorX -= CURSOR_X_INCREMENT;
	if(cursorX < 0){
		cursorX = 0;
	}
}

function incrementY(){
	cursorY += CURSOR_Y_INCREMENT;
	if(cursorY > ($( "#canvas" ).height() - 50)){
		cursorY = $( "#canvas" ).height() - 50;
	}
}

function decrementY(){
	cursorY -= CURSOR_Y_INCREMENT;
	if(cursorY < 0){
		cursorY = 0;
	}
}
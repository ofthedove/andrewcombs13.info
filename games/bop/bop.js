const CURSOR_X_INCREMENT = 20;
const CURSOR_Y_INCREMENT = 20;

var cursorX = 40;
var cursorY = 40;

var cursorDir = 0; // ( 0 = right, 1 = up, 2 = left, 3 = down )
var cursorVel = 10;

$( document ).ready(function(){
	updateCursor();
	$( document ).keydown(function( event ){
		switch( event.which ){
			//case 87: case 119: // w W
			//	decrementY();
			//	break;
			case 65: case 97: // a A
				turnLeft();
				//decrementX();
				break;
			//case 83: case 115: // s S
			//	incrementY();
			//	break;
			case 68: case 100: // d D
				turnRight();
				//incrementX();
				break;
			//case 81: case 113: // q Q
			//	turnLeft();
			//	break;
			//case 69: case 101: // e E
			//	turnRight();
			//	break;
			case 32: // 'Space'
				space();
				break;
		}
		updateCursor();
	});
	
	setInterval(function(){ tick(); }, 100);
});

function tick(){
	switch(cursorDir)
	{
		case 0:
			cursorX += cursorVel;
			break;
		case 1:
			cursorY -= cursorVel;
			break;
		case 2:
			cursorX -= cursorVel;
			break;
		case 3:
			cursorY += cursorVel;
			break;
	}
	updateCursor();
}

function space(){
	$( "#cursor" ).animate({ width: "100px", height: "100px" }, 1000).animate({ width: "50px", height: "50px" }, 1000);
}

function updateCursor(){
	if(cursorX > ($( "#canvas" ).width() - 50) ){
		cursorX = $( "#canvas" ).width() - 50;
	}
	if(cursorX < 0){
		cursorX = 0;
	}
	if(cursorY > ($( "#canvas" ).height() - 50)){
		cursorY = $( "#canvas" ).height() - 50;
	}
	if(cursorY < 0){
		cursorY = 0;
	}
	
	$( "#cursor" ).css("left", cursorX);
	$( "#cursor" ).css("top", cursorY);
	
	switch(cursorDir)
	{
		case 0:
			$( "#cursor-pointer" ).css("left", cursorX + 50 + 10);
			$( "#cursor-pointer" ).css("top", cursorY + 17);
			break;
		case 1:
			$( "#cursor-pointer" ).css("left", cursorX + 17);
			$( "#cursor-pointer" ).css("top", cursorY - 10 - 16);
			break;
		case 2:
			$( "#cursor-pointer" ).css("left", cursorX - 10 - 16);
			$( "#cursor-pointer" ).css("top", cursorY + 17);
			break;
		case 3:
			$( "#cursor-pointer" ).css("left", cursorX + 17);
			$( "#cursor-pointer" ).css("top", cursorY + 50 + 10);
			break;
	}
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

function turnLeft(){
	if(cursorX < $( "#canvas" ).width() / 2 ){
		cursorDir++;
		if(cursorDir > 3){
			cursorDir = 0;
		}
	}
}

function turnRight(){
	if(cursorX > $( "#canvas" ).width() / 2 ){
		cursorDir--;
		if(cursorDir < 0){
			cursorDir = 3;
		}
	}
}
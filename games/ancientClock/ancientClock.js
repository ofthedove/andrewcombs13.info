$( document ).ready(function() {
	window.time = new Date();
	window.tickLength = 250;
	updateTime();
	document.addEventListener("visibilitychange", visibilityChanged);
	startClock();
});

function visibilityChanged() {
	if(document.hidden) {
		window.tickLength = 5000;
	} else {
		window.tickLength = 250;
	}
	stopClock();
	startClock();
}

function startClock() {
	window.intervalID = setInterval(function(){incrementTime(window.tickLength)}, window.tickLength);
	window.running = true;
}

function stopClock() {
	clearInterval(window.intervalID);
	window.running = false;
}

function incrementTime(tickLength) {
	window.time = new Date(window.time.getTime() + tickLength);
	updateTime();
}

function updateNumeral(value, id) {
	var i = 1;
	var j = 1;
	while(i <= 9) {
		for (var k = 1; k < 4; k++) {
			if(value >= i) {
				$( "#" + id + ">.numRow" + j + ">.numBlock" + k ).addClass("ON");
			} else {
				$( "#" + id + ">.numRow" + j + ">.numBlock" + k ).removeClass("ON");
			}
			i++;
		}
		j++;
	}
}

function updateTime() {
	var timeHour = window.time.getHours();
	var timeMin = window.time.getMinutes();
	var timeSec = window.time.getSeconds();
	
	var timeHour10 = Math.floor(timeHour / 10);
	var timeHour1 = timeHour - (timeHour10 * 10);
	var timeMin10 = Math.floor(timeMin / 10);
	var timeMin1 = timeMin - (timeMin10 * 10);
	var timeSec10 = Math.floor(timeSec / 10);
	var timeSec1 = timeSec - (timeSec10 * 10);
	
	updateNumeral(timeHour10, "Hour10");
	updateNumeral(timeHour1, "Hour1");
	updateNumeral(timeMin10, "Min10");
	updateNumeral(timeMin1, "Min1");
	updateNumeral(timeSec10, "Sec10");
	updateNumeral(timeSec1, "Sec1");
}
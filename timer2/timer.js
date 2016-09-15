$( document ).ready(function() {
	window.time = (1000*60*5);
	window.alarmFlashPeriod = 300;
	window.alarmSoundPeriod = 1500;
	
	window.timeSet = window.time;
	window.tickLength = 100;
	window.running = false;
	window.alarming = false;
	updateTime();
	makeAllUnselectable();
	document.addEventListener("visibilitychange", visibilityChanged);
	
	document.oldTitle = "";
});

function visibilityChanged() {
	if(document.hidden) {
		window.tickLength = 1000;
	} else {
		window.tickLength = 100;
	}
	if(window.running) {
		stopTimer();
		startTimer();
	}
}

function timeHandler() {
	if(window.running) {			// Better than calling stop directly because this toggles the word on the button
		startStopHandler(); }
	$("#TimeInputBox").css("display", "block");
}

function startStopHandler() {
	/*if((window.time <= 0) && (!window.running)) {
		stopTimer();
		resetHandler();
		setTimeout(function(){ startStopHandler(); }, 755);
		return;
	}*/
	if(window.running || window.alarming) {
		stopTimer();
		$("#StartStop").text("Start");
	} else {
		startTimer();
		$("#StartStop").text("Stop");
	}
}

function resetHandler() {
	setTime(window.timeSet);
}

function timeInputBoxCancelHandler() {
	$("#TimeInputBox").css("display", "none");
}

function timeInputBoxSetHandler() {
	var newTime = 0;
	newTime += ($("#Hours").val() * 60 * 60 * 1000);
	newTime += ($("#Mins").val() * 60 * 1000);
	newTime += ($("#Secs").val() * 1000);
	setTime(newTime);
	$("#TimeInputBox").css("display", "none");
}

function startTimer() {
	window.intervalID = setInterval(function(){decrementTime(window.tickLength)}, window.tickLength);
	window.running = true;
}

function stopTimer() {
	clearInterval(window.intervalID);
	window.running = false;
	window.alarming = false;
}

function setTime(timeToBeSet) {
	if(!isNaN(timeToBeSet)) {
		if(window.running) {			// Better than calling stop directly because this toggles the word on the button
			startStopHandler(); }
		window.timeSet = timeToBeSet;
		window.time = timeToBeSet;
		updateTime();
		return true;
	}
	alert("Error: Set time must be a number");
	return false;
}

function decrementTime(tickLength) {
	if(window.running) {
		window.time -= tickLength;
		
		if(window.time <= 0) {
			window.time = 0;
			updateTime();
			window.running = false;
			window.alarming = true;
			// Better than calling stop directly because this toggles the word on the button
			//	startStopHandler();
			$("#Alarm")[0].play();
		} else {
			updateTime();
		}
	} else if(window.alarming) {
		window.time -= tickLength;
		
		// Alarm Flash Code
		if(Math.abs(window.time) % window.alarmFlashPeriod == 0) {
			if(window.lastSliderPercent >= 50) {
				$("#Slider").css("right", "0%");
				window.lastSliderPercent = 0;
				document.oldTitle = document.title;
				document.title = "Alarming!";
			} else {
				$("#Slider").css("right", "100%");
				window.lastSliderPercent = 100;
				document.title = document.oldTitle;
			}
		}
		
		// Alarm Sound Code
		if(Math.abs(window.time) % window.alarmSoundPeriod == 0) {
			$("#Alarm")[0].play();
		}
	}
}

function updateTime() {
	var timeString = "";
	var tempTime = window.time;
	
	var timeHour = Math.floor(tempTime / (1000 * 60 * 60));
	tempTime -= (timeHour * (1000 * 60 * 60));
	if(timeHour < 10) {
		timeString = timeString.concat("0"); }
	timeString = timeString.concat(timeHour.toString());
	timeString = timeString.concat(":");
	
	var timeMin = Math.floor(tempTime / (1000 * 60));
	tempTime -= (timeMin * (1000 * 60));
	if(timeMin < 10) {
		timeString = timeString.concat("0"); }
	timeString = timeString.concat(timeMin.toString());
	timeString = timeString.concat(":");
	
	var timeSec = Math.floor(tempTime / (1000));
	tempTime -= (timeSec * (1000));
	if(timeSec < 10) {
		timeString = timeString.concat("0"); }
	timeString = timeString.concat(timeSec.toString());
	timeString = timeString.concat(".");
	
	var timeFrac = tempTime;
	tempTime -= timeFrac;
	timeFracSec = Math.round(timeFrac / 100);
	timeString = timeString.concat(timeFracSec.toString());
	
	$("#Time").text(timeString);
	
	// Slider Code
	var sliderPercent = (window.time * 100 / window.timeSet);
	if(sliderPercent > (window.lastSliderPercent + 75)) {
		$("#Slider").animate({right: sliderPercent.toString().concat("%")}, 750, "easeInOutCubic");
	} else {
		$("#Slider").animate({right: sliderPercent.toString().concat("%")}, window.tickLength - 20, "linear");
	}
	window.lastSliderPercent = sliderPercent;
}

function makeAllUnselectable() {
	$("body *").addClass("unselectable")
}
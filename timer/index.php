<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title> Timer | AndrewCombs13.com </title>
	<link rel="stylesheet" type="text/css" href="timer.css">
	
	<!-- jQuery from Google CDN -->
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	
	<!-- jQuery UI from Google CDN -->
	<link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/themes/smoothness/jquery-ui.css" />
	<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
	
	<script type="text/javascript" src="timer.js"></script>
</head>
<body>
   <?php include_once("/var/www/html/analyticstracking.php") ?>
	<div id="Slider"></div>
	<div id="TimeInputBox">
		<div id="TimeInputBoxTitle">Set Time:</div>
		<!--<form action="" method="GET">-->
			<table>
				<tr><td> Hours </td><td> Mins </td><td> Sec </td></tr>
				<tr>
					<td> <input type="number" name="hours" id="Hours" min="0" max="24" step="1" value="0"> </td>
					<td> <input type="number" name="mins" id="Mins" min="0" max="59" step="1" value="5"> </td>
					<td> <input type="number" name="secs" id="Secs" min="0" max="59" step="1" value="0"> </td>
				</tr>
			</table>
		<!--</form>-->
		<div id="TimeInputBoxCancel" onclick="timeInputBoxCancelHandler()">Cancel</div>
		<div id="TimeInputBoxSet" onclick="timeInputBoxSetHandler()">Set</div>
	</div>
	
	<div id="TimerBox">
		<div id="Time" onclick="timeHandler()">00:00:00.00</div>
		<div id="Controls">
			<div id="Reset" onclick="resetHandler()">Reset</div>
			<div id="StartStop" onclick="startStopHandler()">Start</div>
		</div>
	</div>
	
	<audio id="Alarm" src="alarm.wav" preload="auto"></audio>
</body>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Resume | AndrewCombs13.com</title>
	<link rel="stylesheet" href="/resume/resume.css">
	<!-- Include jQuery from Google CDN -->
	<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
	<!-- Include Bootstrap from CDN -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
</head>
<body>
	<!-- #################### Header #################### -->
	<div id="header" class="jumbotron">
		<div class="container">
			<h1>Andrew Combs</h1>
			<ul>
				<li><a href="resume.php">Resume</a></li
				><li class="last-item"><a href="portfolio.php">Portfolio</a></li
				><!--<li class="last-item"><a href="contact.php">Contact</a></li>-->
			</ul>
		</div>
	</div>
	<?php
		switch($_GET['id'])
		{
			case 1:
				?>
	
				<?php
				break;
			default:
		}
	?>
</body>
</html>
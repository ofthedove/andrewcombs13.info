<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Resume | AndrewCombs13.com</title>
	<link rel="stylesheet" href="resume.css">
	<!-- Include jQuery from Google CDN -->
	<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
	<!-- Include Bootstrap from CDN -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
</head>
<body>
   <?php include_once("/var/www/html/analyticstracking.php") ?>
	<div id="header" class="jumbotron">
		<a class="homeLink" href="../">&lt; Home</a>
		<div class="container">
			<h1>Andrew Combs</h1>
			<ul>
				<li><a href="resume.php" class="active">Resume</a></li
				><li class=""><a href="resume.pdf">Download PDF</a></li
				><li class="last-item"><a href="portfolio.php">Portfolio</a></li
				><!--<li class="last-item"><a href="contact.php">Contact</a></li>-->
			</ul>
		</div>
	</div>
	
	<div id="resumeContent" style="display: block; width: 90%; overflow: visible; border: none; margin: 20px auto;"></div>
	<script>
		$( document ).ready( function() {
			$.ajax({url:"resume.html",success: function(result){
				$( "#resumeContent" ).html(result); } } );
		});
	</script>
</body>
</html>
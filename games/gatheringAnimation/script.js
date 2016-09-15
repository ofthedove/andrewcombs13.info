$( document ).ready(function(){
	$( "#Logo" ).click(function(){
		$( "#Logo .g" ).animate({
			left: "+=210px"
		}, 750, "linear" );
		$( "#Logo .g" ).rotate({ angle:0,animateTo:-90,duration:750 });
		$( "#Logo .athering" ).animate({
			opacity: 0
		}, 500, "linear" );
	});
});
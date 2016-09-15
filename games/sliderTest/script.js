$( document ).ready(function(){
	$( "#container" ).height($( "#content" ).height() + 140);
	
	$( "#header" ).addClass("up");
	$( window ).scroll(function(){
		$( "#header" ).toggleClass("up", ( $( "body" ).scrollTop() < 150 ));
	});
	
	var width = 0;
	$( "ul#nav li").each(function(){
		width += $( this ).outerWidth(true);
	});
	$( "ul#nav" ).width(width);
});
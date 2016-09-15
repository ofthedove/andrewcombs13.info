var winner = ""

$( document ).ready(function(){
	$( "[id |= 'cell']" ).addClass("red");
	
	$( "[id |= 'cell']" ).mouseover(function(){
		if( winner == "" ){
			if( !$( this ).hasClass("Side") ){
				$( this ).addClass("Hover");
			}
		}
	});
	$( "[id |= 'cell']" ).mouseout(function(){
		if( winner == "" ){
			if( !$( this ).hasClass("Side") ){
				$( this ).removeClass("Hover");
			}
		}
	});
	
	$( "[id |= 'cell']" ).click(function(){
		if( winner == "" ){
			if( !$( this ).hasClass("Side") ){
				$( this ).removeClass("Hover");
				$( this ).addClass("Side");
				whoWon();
				toggleSide();
			}
		}
	});
	
	$( "#reset" ).click(function(){
		winner = "";
		$( "[id |= 'cell']" ).removeClass();
		
		$( "body" ).css("background-color", "white");
		
		$( "#sideToggle" ).removeClass("blue");
		$( "#sideToggle" ).addClass("red");
		$( "[id |= 'cell']:not(.Side)" ).removeClass("blue");
		$( "[id |= 'cell']:not(.Side)" ).addClass("red");
	});
	
	function toggleSide() {
		if( winner == "" ){
			if( $( "#sideToggle" ).hasClass("red") ){
				$( "#sideToggle" ).removeClass("red");
				$( "#sideToggle" ).addClass("blue");
				$( "[id |= 'cell']:not(.Side)" ).removeClass("red");
				$( "[id |= 'cell']:not(.Side)" ).addClass("blue");
			} else {
				$( "#sideToggle" ).removeClass("blue");
				$( "#sideToggle" ).addClass("red");
				$( "[id |= 'cell']:not(.Side)" ).removeClass("blue");
				$( "[id |= 'cell']:not(.Side)" ).addClass("red");
			}
		}
	}
	
	function whoWon(){
		if( $( "#row-0 #cell-0" ).is(".red.Side") ){
			if( ( $( "#row-0 #cell-1" ).is(".red.Side") && $( "#row-0 #cell-2" ).is(".red.Side") )
				|| ( $( "#row-1 #cell-0" ).is(".red.Side") && $( "#row-2 #cell-0" ).is(".red.Side") ) )
			{
				winner = "red";
			}
		}
		
		if( $( "#row-1 #cell-1" ).is(".red.Side") ){
			if( ( $( "#row-0 #cell-1" ).is(".red.Side") && $( "#row-2 #cell-1" ).is(".red.Side") )
				|| ( $( "#row-1 #cell-0" ).is(".red.Side") && $( "#row-1 #cell-2" ).is(".red.Side") )
				|| ( $( "#row-0 #cell-0" ).is(".red.Side") && $( "#row-2 #cell-2" ).is(".red.Side") )
				|| ( $( "#row-0 #cell-2" ).is(".red.Side") && $( "#row-2 #cell-0" ).is(".red.Side") ) )
			{
				winner = "red";
			}
		}
		
		if( $( "#row-2 #cell-2" ).is(".red.Side") ){
			if( ( $( "#row-0 #cell-2" ).is(".red.Side") && $( "#row-1 #cell-2" ).is(".red.Side") )
				|| ( $( "#row-2 #cell-0" ).is(".red.Side") && $( "#row-2 #cell-1" ).is(".red.Side") ) )
			{
				winner = "red";
			}
		}
		
		if( $( "#row-0 #cell-0" ).is(".blue.Side") ){
			if( ( $( "#row-0 #cell-1" ).is(".blue.Side") && $( "#row-0 #cell-2" ).is(".blue.Side") )
				|| ( $( "#row-1 #cell-0" ).is(".blue.Side") && $( "#row-2 #cell-0" ).is(".blue.Side") ) )
			{
				winner = "blue";
			}
		}
		
		if( $( "#row-1 #cell-1" ).is(".blue.Side") ){
			if( ( $( "#row-0 #cell-1" ).is(".blue.Side") && $( "#row-2 #cell-1" ).is(".blue.Side") )
				|| ( $( "#row-1 #cell-0" ).is(".blue.Side") && $( "#row-1 #cell-2" ).is(".blue.Side") )
				|| ( $( "#row-0 #cell-0" ).is(".blue.Side") && $( "#row-2 #cell-2" ).is(".blue.Side") )
				|| ( $( "#row-0 #cell-2" ).is(".blue.Side") && $( "#row-2 #cell-0" ).is(".blue.Side") ) )
			{
				winner = "blue";
			}
		}
		
		if( $( "#row-2 #cell-2" ).is(".blue.Side") ){
			if( ( $( "#row-0 #cell-2" ).is(".blue.Side") && $( "#row-1 #cell-2" ).is(".blue.Side") )
				|| ( $( "#row-2 #cell-0" ).is(".blue.Side") && $( "#row-2 #cell-1" ).is(".blue.Side") ) )
			{
				winner = "blue";
			}
		}
		
		if( winner == "blue" ){
			$( "body" ).css("background-color", "#ADADFF");
		} else if( winner == "red" ){
			$( "body" ).css("background-color", "#FFADAD");
		}
	}
});
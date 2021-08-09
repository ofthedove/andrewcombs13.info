$(document).ready(function() {
   centerClock();
   makeAllUnselectable();

   updateTime();

   setInterval(function(){ updateTime(); }, 250);

   $( window ).resize(function() { location.reload(); });
})

function centerClock() {
   $( "#resize" ).css("display", "inline");

   var height = $( "#clock" ).height() / $( "#resize" ).height();
   var width = $( "#clock" ).width() / $( "#resize" ).width();

   $( "#resize" ).css("font-size", (Math.min(height, width) * 100) + "%");

   $( "#resize" ).css("padding-top", (($( "#clock" ).height() - $( "#resize" ).height()) / 2) + "px");
   $( "#resize" ).css("display", "block");
}

function updateTime() {
   var now = new Date();
   let hours = now.getHours();
   hours = hours > 12 ? hours - 12 : hours;
   var nowS = padLeft(hours.toString()) + ":"
            + padLeft(now.getMinutes().toString()) + ":"
            + padLeft((now.getSeconds() % 5).toString());
   $( "#resize" ).html(nowS);
}

function padLeft(inString) {
   // var pad = "00";
   // if(inString.length > pad.length) {
   //    return inString; }
   // //alert(inString.length + "   " + pad.length)
   // return pad.substring(0, pad.length - inString.length) + inString;
   return inString;
}

function makeAllUnselectable() {
	$("body *").addClass("unselectable")
}

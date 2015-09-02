$(document).ready(function(){

	$("h1").css( 'fontColor', 'red');
	
	$(".navbar-toggle").on("click", function () {
    	$(this).toggleClass("active");
	});

});
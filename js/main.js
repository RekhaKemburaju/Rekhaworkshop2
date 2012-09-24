// console.log("main.js is loaded");	
// $("img").width(200);
$(document).ready(function(){
// write all ur jQuery codes inside here.

	$("img").on("dblclick", function(){ // this is more better then the one bellow more powerful

		$("img").width(200);
		$("h1").fadeOut();
		$(".booboo").slideUp();
		//$("#rahul").hide();

	});

	// $("img").click(function(){

		
	// });
});
// the doc when its ready run this funtion
// 1.	When the window is resized

	// a) fade in .circle-two

$(window).on('resize', function () {
	$(".circle-two").fadeIn(260);
});

// 2. When the user puts their mouse over #trigger

	// a) Add a <li> to the beginning of #myList that contains the text "1" (Hint: you'll need to look up the prepend jquery method)

	// b) Add a <li> to the end of #myList that contains the text "5" (Hint: you'll need to look up the append jquery method)

$("#trigger").on("mouseover", function(){
	$("#myList").prepend("<li>1</li>");
	$("#myList").append("<li>5</li>");


});

// BONUS: When the user scrolls down the page (hint our jquery selector will be $(window) like in example #1)

	// a) Add the .party class to the body
$(window).on("scroll", function(){
	$("body").addClass("party");
});
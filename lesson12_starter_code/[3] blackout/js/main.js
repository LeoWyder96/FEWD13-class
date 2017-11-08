// Together: write pseudo code
// Objective: we want to change the background color when we click on the light switch

/*





*/
$("#light_switch").on("click", function(){
	if ($("body").hasClass("dark")) {
		$("body").removeClass("dark");

	}else {
	console.log("it works!");
	$("body").addClass("dark");
}
});

// Hint: for your condition, you'll need to look up and use the .hasClass() method. You'll want to use this as part of your condition.

// Hint #2: Refer to the syntax on the cheat sheet. The entire condition gets wrapped in parentheses. (your condition goes here)

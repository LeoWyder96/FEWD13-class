
// -------------------------------------------------------------------------------
// Part 1 - Declaring and calling functions
// -------------------------------------------------------------------------------

// 1. Declare a function. Give it the name "addSunshine".
	// a. Inside the function, add the sunny class to the body
function addSunshine() {
	$("body").addClass("sunny");
}
addSunshine();
// 2. Call the function


// -------------------------------------------------------------------------------
// Part 2 - Declaring a function with parameters
// -------------------------------------------------------------------------------

// 1. Declare a function. Name it "greet". Pass in "firstName" as the parameter. 
	// a. Inside the function, change the text of the h1 to 'Hello ' + firstName
function greet(firstName) {

$("h1").html("hello " + firstName);
}

// 2. Call the function, passing in your name (as a string) as the argument.
greet("leo");
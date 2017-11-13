/*

Declare a variable for temp called "temp".
*/

$("#fahrenheit_to_celsius").on("click", function(){

	var result = (getTemp() - 32) / 1.8;

	$("#result").html(result);
});
$("#celsius_to_fahrenheit").on("click", function(){

	getTemp();

	 var result = 1.8 * temp + 32

	$("#result").html(result);
});

function getTemp(){
	var temp = $("#temperature").val();
	temp = parseFloat(temp);

	return temp;
}

/*

	Grab the value out of the input that has an id of temperature
	HINT: .val()
	parseFloat the value that we received from the input
	Store the formula: (value - 32) / 1.8 ~ In the variable we created called "temp"
	Put the result on the page
		Select the p with the ID of "result" and change the html to be the variable temp

When you click "F to C" then
	Grab the value out of the input that has an id of temperature
	HINT: .val()
	parseFloat the value that we received from the input
	Store the formula: 1.8 * value + 32 ~ In the variable we created called "temp"
	Put the result on the page
		Select the p with the ID of "result" and change the html to be the variable temp


Formula to convert fahrenheit to celsius: (fahrenheit - 32) / 1.8

Formula to convert celsius to fahrenheit: 1.8 * celsius + 32

*/


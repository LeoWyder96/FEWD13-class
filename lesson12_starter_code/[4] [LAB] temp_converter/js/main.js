
$("#fahrenheit_to_celsius").on("click", function(){
    // Get the users value
    var temp = $("#temperature").val();
    // parseFloat to make it a number we can work with
    temp = parseFloat(temp);
    // Do the math provided in the slide
    result = (temp - 32) / 1.8;
    // Output the result to the page
    $("#result").html(result);
});


$("#celsius_to_fahrenheit").on("click", function(){
    // Get the users value
    var temp = $("#temperature").val();
    // parseFloat to make it a number we can work with
    temp = parseFloat(temp);
    // Do the math provided in the slide
    result = 1.8 * temp + 32;
    // Output the result to the page
    $("#result").html(result);
});
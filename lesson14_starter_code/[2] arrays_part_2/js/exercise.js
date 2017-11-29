/**
 * Javascript Exercise: Data Types
 * Most of your answers should be stored in variables called q1, q2 etc.. and the variables printed to the console.
 
     (i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array of image sources and store it to the variable q1. Use image1.jpeg, image2.jpeg, and image3.jpeg as the array values.
 */
var q1 = ["image1.jpeg", "image2.jpeg", "image3.jpeg"];

console.log(q1);

/**
 * Question 2
 * Using the array from Question 1, store the first element of the array in a variable named q2.
 */
 var q2 = q1[0];
 console.log(q2);


// Should give me "image1.jpeg"


/**
 * Question 3
 * Get the length of q1 (number of elements in the array) and store it in a variable named q3
 */
var q3 = q1.length;
console.log(q3);

// Should give me 3


/**
 * Question 4
 *  Store the last element in the q1 array in a variable named q4. Hint: How can we get the number of elements in the array?
 */
 var q4 = q1[q1.length-1];
console.log(q4);



/**
 * Question 5
 *  Using the variables from questions 2 and 4, write code that would change the src of the first image on a web page to the src stored in q2 
 and the last image on a web page to the src stored in q4. Troubleshoot why the images still don't show up.
*/
$("#firstImage").attr("src", "images/" + q2);
$("#secondImage").attr("src", "images/" + q4);


/*

When we load the page:
    - The previous button is disabled.
    - The next button is NOT disabled.
    - The first image in the images directory is showing.

Create an array of image references that relate to the filenames of the images in the images folder. Examples: "image_1.jpg", "image_2.jpg", "image_3.jpg", etc. (Just like the arrays_part_2 lab project)

Declare a global variable called "currentPosition" that we can save our current position in the array to. Start this variable out with a value of 0.

When we click the next button:
    - Remove the disabled attribute off of the previous button.
    - Show the next image in the array
        + Update our currentPosition variable to currentPosition + 1
        + Update the image on the page with images[currentPosition] (HINT: look at arrays_part_2 for updating the image attribute/src)
    - IF we've reached images.length-1 (the end) then disable the next button (HINT: try - 1 AND consider trying - 2)

When we click the previous button (after we've clicked next already):
    - Remove the disabled attribute off of the next button IF you're anywhere except for the end of the array of images.
    - Show the previous image in the array
        + Update our currentPosition variable to currentPosition - 1
        + Update the image on the page with images[currentPosition] (HINT: look at arrays_part_2 for updating the image attribute/src)
    - IF we've reached images[0] (the start) then disable the previous button

*/
var images = ["images/image_1.jpg",
            "images/image_2.jpg",
            "images/image_3.jpg",
            "images/image_4.jpg",
            "images/image_5.jpg",
            "images/image_6.jpg"]
var currentPosition = 0;

$("#next").on("click", function(){
    currentPosition = currentPosition + 1;
    if (currentPosition <= images.length - 1){
    $("#previous").attr("disabled", false);
    console.log(currentPosition);
    $("#image-to-vote-on").attr("src", images[currentPosition]);
    }else{
        $("#next").attr("disabled", true);
    }
});

$("#previous").on("click", function(){
    currentPosition = currentPosition - 1;
    if (currentPosition != image.length){
    $("#previous").attr("disabled", false);
    console.log(currentPosition);
    $("#image-to-vote-on").attr("src", images[currentPosition]);
    }else{
        $("#previous").attr("disabled", true);
    }
});

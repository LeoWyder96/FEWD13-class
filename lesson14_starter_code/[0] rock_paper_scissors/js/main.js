//global vars
var humanScore = 0;
var computerScore = 0;

//selecting buttons to start certain function
$('#rock').on('click', function () {
  play('rock');
});

$('#paper').on('click', function () {
  play('paper');
});

$('#scissors').on('click', function () {
  play('scissors');
});
// declaring function.
function play(humanPlay) {
  //calling getComputerPlay function.
  computerPlay = getComputerPlay();
  
  $('#status').html('<p>You played <strong>' + humanPlay + '</strong>. The bot played <strong>' + computerPlay + '</strong>.</p>');
  // declaring possible outcomes
  if(humanPlay === computerPlay) {

      $('#status').append('<p>You tied. :|</p>');
//declaring win scenearios
  } else if (humanPlay === 'paper' && computerPlay === 'rock' ||
             humanPlay === 'rock' && computerPlay === 'scissors' ||
             humanPlay === 'scissors' && computerPlay === 'paper') {
// winning output
    $('#status').append("<p>You win! :)</p>");
//add score to humans side
    humanScore++; 
//declaring lose scenarios
  } else if (humanPlay === 'scissors' && computerPlay === 'rock' ||
             humanPlay === 'rock' && computerPlay === 'paper' ||
             humanPlay === 'paper' && computerPlay === 'scissors') {
//losing output
      $('#status').append('<p>You lose. :(</p>');
//adding score to computer's score.
      computerScore++;
  }
  
  $('#humanScore').html(humanScore);

  $('#computerScore').html(computerScore);  
}

function getComputerPlay() {
  // Store an array of options in the plays variable (we'll chat about arrays today)
  var plays = ['rock', 'paper', 'scissors'];

  // Select a random option from the plays array (don't focus on this line too much quite yet) and store it in the play variable
  var play = plays[Math.floor(Math.random() * plays.length)];

  return play;
}

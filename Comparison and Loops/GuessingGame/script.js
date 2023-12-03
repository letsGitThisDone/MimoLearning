let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

function checkGuess() {
  attempts--;
  const inputElement = document.getElementById('guess');
  const feedbackElement = document.getElementById('feedback');
  let guess = inputElement.value;
  while (attempts > 0) {
    if (guess == randomNumber) {
      attempts = 0;
      feedbackElement.innerHTML = 'Success!';
      feedbackElement.style.color = 'green';
      break;
    } else if (guess < randomNumber) {
      feedbackElement.innerHTML = 'Too low! ' + attempts + ' more tries.';
      feedbackElement.style.color = 'red';
      break;
    } else {
      feedbackElement.innerHTML = 'Too high! ' + attempts + ' more tries.';
      feedbackElement.style.color = 'red';
      break;
    }
  }
  if (attempts == 0 && guess != randomNumber){
    feedbackElement.style.color = 'red';
    feedbackElement.innerHTML = 'Correct Number: '+randomNumber+' Game Over!';
  }
}
function restart(){
  const feedbackElement = document.getElementById('feedback');
  const inputElement = document.getElementById('guess');
  feedbackElement.innerHTML = '';
  inputElement.value = '';
  attempts = 10;
  makeARandomNumber();
}

function makeARandomNumber() {
   randomNumber = Math.floor(Math.random() * 100) + 1;
}
const question = ["What planet is known as the 'Red Planet'?",
      "Who painted the Mona Lisa?"];
const choicesArray = [["Earth", "Mars", "Jupiter", "Saturn"],
      ["Michelangelo", "Leanardo da Vinci", "Michael Jackson", "Vincent van Gogh"]];
const correctAnswers = ["Mars", "Leanardo da Vinci"];
let currentQuestionIndex = 0;
let score = 0;


function checkAnswer(button) {
  if (button.innerText === correctAnswers[currentQuestionIndex]){
    score++;
  }
  currentQuestionIndex++;
  displayQuestion();
}

function displayQuestion() {
  if (currentQuestionIndex < question.length){
  document.getElementById("question").innerHTML = question[
  currentQuestionIndex];
  for (let i = 0; i < 4; i++) {
    const btn = document.getElementById(`choice${i+1}`);
    btn.innerText = choicesArray[currentQuestionIndex][i];
    }
  } else {
      document.getElementById("result").innerHTML = "Final Score" + score;
       for (let i = 0; i < 4; i++) {
       //document.getElementById(`choice${i+1}`).disabled = true;
       
      }
      document.getElementById("question").innerHTML = "";
      document.getElementById(`choices`).innerHTML = "";
    }
}
displayQuestion();
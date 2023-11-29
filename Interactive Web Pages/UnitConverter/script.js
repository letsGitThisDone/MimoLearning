function convert() {
  const inputValue = document.getElementById('userInput').value;
  const unit = document.getElementById('unit').value;
  const milesToKm = unit === "milesToKm";
  let result = 0;
  if (milesToKm) {
    result = (inputValue * 1.60934);
  } else {
    result = (inputValue / 1.60934);
  }
  if (milesToKm){
    document.getElementById("resultElement").innerHTML = result;
  }else{
    document.getElementById("resultElement").innerHTML = result;
    }
}
 
function appendToResult(val) {
  document.getElementById('result').value += val;
}
  
function clearResult() {
  document.getElementById('result').value = '';
}
function deleteResult(){
  document.getElementById('result').value = document.getElementById('result').value.slice(0,-1)
}
function calculateResult() {
  var result = document.getElementById('result').value;
  try {
    var calculatedResult = eval(result);
    document.getElementById('result').value = calculatedResult;
  } catch (error) {
    alert('Invalid expression');
  }
}
  

function appendToResult(val) {
  if (val === '.' && document.getElementById('result').value.includes('.')) {
    return;
  }
  if ('+-*/'.includes(val) && document.getElementById('result').value.slice(-1).match(/[+\-*/]/)) {
    document.getElementById('result').value = document.getElementById('result').value.slice(0, -1) + val;
  } 
  else {
    document.getElementById('result').value += val;
  }
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
    if (calculatedResult.toString().includes('.')){
      document.getElementById('result').value = calculatedResult.toFixed(2);
    }
    else{
      document.getElementById('result').value = calculatedResult;
    }
  } catch (error) {
    alert('Invalid expression');
  }
}
  

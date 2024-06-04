
function cal() {
        
    let firstValue = parseInt(document.getElementById("value1").value);
    let secondValue = parseInt(document.getElementById("value2").value);
    let operatorValue = document.getElementById("operator").value;
    let result;

    switch(operatorValue){
      case '+': 
        result = firstValue + secondValue;
        break;
      case '-': 
        result = firstValue - secondValue;
        break;
      case '/': 
       result = firstValue / secondValue;
        break;
      case '*': 
       result = firstValue * secondValue;
        break;
      default :
        result = '오류';
    }
    document.getElementById('result').value = result;
  };

  function reset() {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
    document.getElementById('operator').value = '';
    document.getElementById('result').value = '';
  }
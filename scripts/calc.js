var result = 0;
var a = '';
var b = '';


function add(a,b) {
  return a+b;
}

function subtract(a,b) {
  return a-b;
}

function multiply(a,b) {
  return a*b;
}

function divide(a,b) {
  return a/b;
}

function operate(operator, a, b) {
  return operator(a, b);
}

function input(playerInput) {
  if (a<999999999999) {
    a = a*10+playerInput;
  }
  display(a);
}

function display(result) {
  document.getElementById('result').innerHTML=result;
  if (a>0) {
    document.getElementById('clearButton').innerHTML='C';
  }
  else if (a==0 || a=="") {
    document.getElementById('clearButton').innerHTML='AC';
  }
}

function backspace() {
  a = Math.floor(a/10);
  if (a!=0){
    display(a);
  }
  else {
    a = '';
    display(a);
  }
}

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

function input(playerInput){
  console.log(playerInput);
}

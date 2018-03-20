var command;
var result;

var result = 0;
var a = 0;
var b = 0;

document.addEventListener('keypress', function() {
  if (event.key == "Backspace" || event.key == "Delete") {
    console.log('hi');
  }
  else if (event.keyCode == 43) {
    operate(add(a,b));
  }
  else if (event.keyCode == 49) {
    input(1);
  }
  else if (event.keyCode == 50) {
    input(2);
  }
  else if (event.keyCode == 51) {
    input(3);
  }
  else if (event.keyCode == 52) {
    input(4);
  }
  else if (event.keyCode == 53) {
    input(5);
  }
  else if (event.keyCode == 54) {
    input(6);
  }
  else if (event.keyCode == 55) {
    input(7);
  }
  else if (event.keyCode == 56) {
    input(8);
  }
  else if (event.keyCode == 57) {
    input(9);
  }
});

/* functions */

function multiply(a,b) {
  return a*b;
}

function divide(a,b) {
  return a/b;
}

function inverse(a) {
  return a*-1;
}

function add(a,b) {
  return a+b;
}

function subtract(a,b) {
  return a-b;
}

function operate(operator) {
  if (command != '') {
    equals();
  }
  result = a;
  command = operator;
  console.log(command);
  a=0;
}

function equals() {
  switch (command) {
    case add:
      a = add(a,result);
      break;
    case subtract:
      a = add(-a, result);
      break;
    case inverse:
      a = inverse(result);
      break;
    case multiply:
      a = multiply(a, result);
      break;
    case divide:
      a = multiply(1/a, result);
    default:
      break;
  }
  display(a);
}

function input(playerInput) {
  if (a<999999999999) {
    a = a*10+playerInput;
  }
  display(a);
}

function display(result) {
  document.getElementById('result').innerHTML=result;
}

function undo() {
  a = Math.floor(a/10);
  if (a!=0) {
    display(a);
  }
  else {
    display(a);
  }
}

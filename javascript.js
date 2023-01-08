let first = 0;
let second = 0;

function add(first, second) {
  return first + second;
}

function subtract(first, second) {
  return first - second;
}

function multiply(first, second) {
  return first * second;
}

function divide(first, second) {
  return first / second;
}

function operate(operator, first, second) {
  switch(operator) {
    case add:
      return add(first, second);
    case subtract:
      return subtract(first, second);
    case multiply:
      return multiply(first, second);
    case divide:
      return divide(first, second);
  }
}

function populate(number) {
  const display = document.querySelector('#displaytext');
  display.textContent = number;
}


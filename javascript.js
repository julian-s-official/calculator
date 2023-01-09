let nbr1 = "";
let nbr2 = "";
let operator = "";
let operated = true;

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    input(button.id);
  });
});

function add(first, second) {
  return +first + +second;
}

function subtract(first, second) {
  return +first - +second;
}

function multiply(first, second) {
  return +first * +second;
}

function divide(first, second) {
  if (second == 0) {
    alert ("Can't divide by 0!!!");
    return 0;
  }
  return +first / +second;
}

function operate(operator, first, second) {
  switch(operator) {
    case "add":
      return add(first, second);
    case "subtract":
      return subtract(first, second);
    case "multiply":
      return multiply(first, second);
    case "divide":
      return divide(first, second);
  }
}

function update(number) {
  const display = document.querySelector('#displaytext');
  display.textContent = Math.round(number * 100) / 100;
}

function concat(a, b) {
  return "" + a + b;
}

function input(btn) {
  switch(btn) {
    case "div":
      if (operated == false) {
        operator = "divide";
        input("equal");
        operated = false;
        nbr2 = nbr1;
        nbr1 = "";
        break;
      }
      nbr2 = nbr1;
      nbr1 = "";
      update(nbr1);
      operator = "divide";
      operated = false;
      break;
    case "mult":
      if (operated == false) {
        operator = "multiply";
        input("equal");
        operated = false;
        nbr2 = nbr1;
        nbr1 = "";
        break;
      }
      nbr2 = nbr1;
      nbr1 = "";
      update(nbr1);
      operator = "multiply";
      operated = false;
      break;
    case "minus":
      if (operated == false) {
        operator = "subtract";
        input("equal");
        operated = false;
        nbr2 = nbr1;
        nbr1 = "";
        break;
      }
      nbr2 = nbr1;
      nbr1 = "";
      update(nbr1);
      operator = "subtract";
      operated = false;
      break;
    case "plus":
      if (operated == false) {
        operator = "add";
        input("equal");
        operated = false;
        nbr2 = nbr1;
        nbr1 = "";
        break;
      }
      nbr2 = nbr1;
      nbr1 = "";
      update(nbr1);
      operator = "add";
      operated = false;
      break;
    case "dot":
      nbr1 = concat(nbr1, ".");
      update(nbr1);
      break;
    case "equal":
      nbr1 = operate(operator, nbr2, nbr1);
      update(nbr1);
      operated = true;
      break;
    case "clear":
      update("");
      nbr1 = "";
      nbr2 = "";
      break;
    default:
      nbr1 = concat(nbr1, btn);
      update(nbr1);
  }
}



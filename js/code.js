let number1, number2, operator, result;

const operate = () => {
  number1 = prompt("Please enter first number");
  number2 = prompt("Please enter second number");
  operator = prompt("Please enter operator");

  switch (operator) {
    case "+":
      result = add(number1, number2);
      break;
    case "-":
      result = sub(number1, number2);
      break;
    case "/":
      result = div(number1, number2);
      break;
    case "*":
      result = mult(number1, number2);
      break;
  }
  console.log(result);
};

const add = (a, b) => {
  return parseFloat(a) + parseFloat(b);
};

const sub = (a, b) => {
  return parseFloat(a) - parseFloat(b);
};

const div = (a, b) => {
  return parseFloat(a) / parseFloat(b);
};

const mult = (a, b) => {
  return parseFloat(a) * parseFloat(b);
};

// operate();

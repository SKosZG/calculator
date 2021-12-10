let number1, number2, operator, result, display;

const calcResult = document.querySelector("#calcResult");
const calcBtn = document.querySelectorAll(".calcBtn");

calcBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (/\D$/.test(calcResult.textContent)) {
      switch (e.target.textContent) {
        case "=":
          result = result.slice(0, -1);
          result = Function("return " + result)();
          calcResult.textContent = "=" + result;
          display = result;
          break;
        case "+":
        case "-":
        case "*":
        case "/":
          result = result.slice(0, -1);
          break;
      }
    }

    switch (e.target.textContent) {
      case "=":
        result = Function("return " + result)();
        calcResult.textContent = "=" + result;
        display = result;
        break;
      case "DEL":
        if (/[=]/.test(calcResult.textContent)) {
          break;
        }
        switch (calcResult.textContent) {
          case "0":
            break;
          default:
            result = result.slice(0, -1);
            calcResult.textContent = result;
            break;
        }

      case "C":
        calcResult.textContent = 0;
        result = "0";
        break;
      default:
        if (result == undefined || result == 0) {
          switch (e.target.textContent) {
            case "*":
            case "/":
              break;
            default:
              result = e.target.textContent;
              break;
          }
        } else {
          result = result + e.target.textContent;
        }
        calcResult.textContent = result;
        break;
    }
  });
});

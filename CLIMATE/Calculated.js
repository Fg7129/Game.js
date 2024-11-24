function calculate(num1, num2, num3, num4, operator) {
  num1 = +num1;
  num2 = +num2;
  num3 = +num3;
  num4 = +num4;

  switch (operator) {
    case "plus":
      return num1 + num2 + num3 + num4;

    case "min":
      return num1 - num2 - num3 - num4;

    case "dev":
      return num1 / num2 / num3 / num4;

    case "multi":
      return num1 * num2 * num3 * num4;

    default:
      return "invalid operator";

      


  }

  
}

function updateResult() {
  const num1 = document.querySelector(".num1").value;
  const num2 = document.querySelector(".num2").value;
  const num3 = document.querySelector(".num3").value;
  const num4 = document.querySelector(".num4").value;
  const operator = document.getElementById("selectOp").value;
  if (
    isNaN(num1) ||
    isNaN(num2) ||
    isNaN(num3) ||
    isNaN(num4) ||
    num1 === "" ||
    num2 === "" ||
    num3 === "" ||
    num4 === ""
  ) {
    alert("Please enter valid numbers in all fields.");

    return;
  }

  const result = calculate(num1, num2, num3, num4, operator);
  document.querySelector(".result").innerHTML = result;
}

document.getElementById("btn").addEventListener("click", updateResult);

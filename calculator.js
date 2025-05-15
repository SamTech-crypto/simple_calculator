export function calculate(num1, num2, op) {
  if (isNaN(num1)) throw new Error("Invalid input: First number is required");

  switch (op) {
    case "+": return num1 + num2;
    case "-": return num1 - num2;
    case "*": return num1 * num2;
    case "/":
      if (num2 === 0) throw new Error("Cannot divide by zero");
      return parseFloat((num1 / num2).toFixed(3));
    case "^": return Math.pow(num1, num2);
    case "%": return num1 % num2;
    case "sqrt":
      if (num1 < 0) throw new Error("Cannot take square root of negative number");
      return Math.sqrt(num1);
    case "log":
      if (num1 <= 0) throw new Error("Logarithm undefined for zero or negative");
      return Math.log10(num1);
    case "sin": return Math.sin(degToRad(num1));
    case "cos": return Math.cos(degToRad(num1));
    case "tan": return Math.tan(degToRad(num1));
    default: throw new Error("Invalid operator");
  }
}

function degToRad(degrees) {
  return degrees * (Math.PI / 180);
}

export function evaluateExpression(expr) {
  try {
    return Function(`'use strict'; return (${expr})`)();
  } catch {
    throw new Error("Invalid expression format");
  }
}

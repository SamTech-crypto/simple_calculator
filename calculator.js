export function calculate(num1, num2, op) {
  if (isNaN(num1) || isNaN(num2)) {
    throw new Error("Invalid input: Numbers required");
  }
  if (op === "/" && num2 === 0) {
    throw new Error("Cannot divide by zero");
  }

  switch (op) {
    case "+": return num1 + num2;
    case "-": return num1 - num2;
    case "*": return num1 * num2;
    case "/": return parseFloat((num1 / num2).toFixed(3));
    default: throw new Error("Invalid operator");
  }
}

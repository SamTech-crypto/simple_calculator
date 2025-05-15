export function calculate(num1, num2, op) {
  if (isNaN(num1) || isNaN(num2) && op !== "sqrt" && op !== "log" && op !== "sin" && op !== "cos" && op !== "tan") {
    throw new Error("Invalid input: Numbers required");
  }

  switch (op) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) throw new Error("Cannot divide by zero");
      return parseFloat((num1 / num2).toFixed(3));
    case "sqrt":
      return Math.sqrt(num1);
    case "exp":
      return Math.pow(num1, num2);
    case "log":
      return Math.log10(num1);
    case "sin":
      return Math.sin(num1 * Math.PI / 180); // Convert to radians
    case "cos":
      return Math.cos(num1 * Math.PI / 180); // Convert to radians
    case "tan":
      return Math.tan(num1 * Math.PI / 180); // Convert to radians
    default:
      throw new Error("Invalid operator");
  }
}

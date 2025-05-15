export function calculateScientific(num1, num2, op) {
  if (isNaN(num1) || (num2 !== null && isNaN(num2))) {
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
      return num1 / num2;
    case "sqrt":
      if (num1 < 0) throw new Error("Cannot calculate the square root of a negative number");
      return Math.sqrt(num1);
    case "^":
      return Math.pow(num1, num2);
    case "sin":
      return Math.sin(num1 * Math.PI / 180); // Convert to radians
    case "cos":
      return Math.cos(num1 * Math.PI / 180); // Convert to radians
    case "log":
      if (num1 <= 0) throw new Error("Logarithm undefined for non-positive numbers");
      return Math.log10(num1);
    default:
      throw new Error("Invalid operator");
  }
}

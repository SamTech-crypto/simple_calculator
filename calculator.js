export function calculate(num1, num2, op) {
  if (isNaN(num1) || isNaN(num2)) {
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
      return Math.sqrt(num1);
    case "log":
      return Math.log10(num1);
    case "ln":
      return Math.log(num1);
    case "sin":
      return Math.sin(num1);
    case "cos":
      return Math.cos(num1);
    case "tan":
      return Math.tan(num1);
    case "exp":
      return Math.exp(num1);
    case "pow":
      return Math.pow(num1, num2);
    default:
      throw new Error("Invalid operator");
  }
}

export const constants = {
  pi: Math.PI,
  e: Math.E,
  speedOfLight:
::contentReference[oaicite:0]{index=0}
 

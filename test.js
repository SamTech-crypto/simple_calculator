import { calculate } from '../public/calculator.js';

test('adds numbers correctly', () => {
  expect(calculate(5, 3, "+")).toBe(8);
});

test('subtracts numbers correctly', () => {
  expect(calculate(10, 4, "-")).toBe(6);
});

test('multiplies numbers correctly', () => {
  expect(calculate(2, 4, "*")).toBe(8);
});

test('divides numbers correctly', () => {
  expect(calculate(10, 2, "/")).toBe(5);
});

test('divides with rounding', () => {
  expect(calculate(1, 3, "/")).toBeCloseTo(0.333, 3);
});

test('throws on divide by zero', () => {
  expect(() => calculate(5, 0, "/")).toThrow("Cannot divide by zero");
});

test('throws on invalid input', () => {
  expect(() => calculate("a", 5, "+")).toThrow("Invalid input: First number is required");
});

test('power works', () => {
  expect(calculate(2, 3, "^")).toBe(8);
});

test('modulus works', () => {
  expect(calculate(10, 3, "%")).toBe(1);
});

test('square root works', () => {
  expect(calculate(9, null, "sqrt")).toBe(3);
});

test('throws on negative square root', () => {
  expect(() => calculate(-4, null, "sqrt")).toThrow("Cannot take square root of negative number");
});

test('logarithm base 10 works', () => {
  expect(calculate(100, null, "log")).toBeCloseTo(2, 5);
});

test('throws on log of non-positive number', () => {
  expect(() => calculate(0, null, "log")).toThrow("Logarithm undefined for zero or negative");
});

test('sine of 90 degrees is ~1', () => {
  expect(calculate(90, null, "sin")).toBeCloseTo(1, 2);
});

test('cosine of 180 degrees is ~-1', () => {
  expect(calculate(180, null, "cos")).toBeCloseTo(-1, 2);
});

test('tangent of 45 degrees is ~1', () => {
  expect(calculate(45, null, "tan")).toBeCloseTo(1, 2);
});

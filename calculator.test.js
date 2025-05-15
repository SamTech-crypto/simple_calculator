import { calculate } from '../src/calculator.js';

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
  expect(() => calculate("a", 5, "+")).toThrow("Invalid input: Numbers required");
});

import { calculate } from './calculator.js';

const form = document.getElementById('calculator-form');
const resultEl = document.getElementById('result');
const clearBtn = document.getElementById('clear');
const darkToggle = document.getElementById('dark-mode-toggle');
const opSelect = document.getElementById('op');
const num2Input = document.getElementById('num2');

const phrases = [
  "💡 You're a math genius!",
  "🚀 Quick calculation complete!",
  "🎯 Nailed it!",
  "📈 That adds up!",
  "🧠 Big brain math!"
];

// Unary operations (only use num1)
const singleInputOps = ["sqrt", "log", "sin", "cos", "tan"];

// Toggle num2 input for unary operations
opSelect.addEventListener('change', () => {
  if (singleInputOps.includes(opSelect.value)) {
    num2Input.disabled = true;
    num2Input.value = "";
  } else {
    num2Input.disabled = false;
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const op = opSelect.value;

  try {
    const result = calculate(num1, num2, op);
    const phrase = phrases[Math.floor(Math.random() * phrases.length)];
    const emojiMap = {
      "+": "➕", "-": "➖", "*": "✖", "/": "➗",
      "^": "🧠", "%": "📏", "sqrt": "🧮", "log": "📉",
      "sin": "🌞", "cos": "🌚", "tan": "🌗"
    };
    const emoji = emojiMap[op] || "✅";

    const display = singleInputOps.includes(op)
      ? `🎉 Result: ${emoji} ${op}(${num1}) = <strong>${result}</strong><br>${phrase}`
      : `🎉 Result: ${num1} ${emoji} ${num2} = <strong>${result}</strong><br>${phrase}`;

    resultEl.innerHTML = display;
  } catch (err) {
    resultEl.innerHTML = `⚠️ <span class="error">${err.message}</span>`;
  }
});

clearBtn.addEventListener('click', () => {
  document.getElementById('num1').value = "";
  document.getElementById('num2').value = "";
  opSelect.value = "+";
  num2Input.disabled = false;
  resultEl.innerHTML = "🎉 Ready to crunch some numbers!";
});

darkToggle.addEventListener('change', (e) => {
  document.body.classList.toggle('dark-mode', e.target.checked);
});

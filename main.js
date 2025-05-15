import { calculate } from './calculator.js';

const form = document.getElementById('calculator-form');
const resultEl = document.getElementById('result');
const clearBtn = document.getElementById('clear');
const darkToggle = document.getElementById('dark-mode-toggle');

const phrases = [
  "💡 You're a math genius!",
  "🚀 Quick calculation complete!",
  "🎯 Nailed it!",
  "📈 That adds up!",
  "🧠 Big brain math!"
];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const op = document.getElementById('op').value;

  try {
    const result = calculate(num1, num2, op);
    const emoji = { 
      "+": "➕", 
      "-": "➖", 
      "*": "✖", 
      "/": "➗", 
      "sqrt": "√", 
      "exp": "^", 
      "log": "🔢", 
      "sin": "🔺", 
      "cos": "🔺", 
      "tan": "🔺"
    }[op];
    const phrase = phrases[Math.floor(Math.random() * phrases.length)];
    resultEl.innerHTML = `🎉 Result: ${num1} ${emoji} ${num2} = <strong>${result}</strong><br>${phrase}`;
    resultEl.classList.remove('bounce');
    void resultEl.offsetWidth; // Trigger reflow to reset animation
    resultEl.classList.add('bounce');
  } catch (err) {
    resultEl.innerHTML = `⚠️ <span class="error">${err.message}</span>`;
  }
});

clearBtn.addEventListener('click', () => {
  document.getElementById('num1').value = "";
  document.getElementById('num2').value = "";
  document.getElementById('op').value = "+";
  resultEl.innerHTML = "🎉 Ready to crunch some numbers!";
});

darkToggle.addEventListener('change', (e) => {
  document.body.classList.toggle('dark-mode', e.target.checked);
});

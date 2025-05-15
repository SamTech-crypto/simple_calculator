import { calculate, evaluateExpression } from './calculator.js';

const form = document.getElementById('calculator-form');
const resultEl = document.getElementById('result');
const clearBtn = document.getElementById('clear');
const darkToggle = document.getElementById('dark-mode-toggle');
const opSelect = document.getElementById('op');
const num2Input = document.getElementById('num2');
const expressionInput = document.getElementById('expression');
const constantSelect = document.getElementById('constants');
const historyEl = document.getElementById('history');
const graphEl = document.getElementById('graph');

let chart;

const singleInputOps = ["sqrt", "log", "sin", "cos", "tan"];
const phrases = [
  "💡 You're a math genius!",
  "🚀 Quick calculation complete!",
  "🎯 Nailed it!",
  "📈 That adds up!",
  "🧠 Big brain math!"
];

opSelect.addEventListener('change', () => {
  const isUnary = singleInputOps.includes(opSelect.value);
  num2Input.disabled = isUnary;
  if (isUnary) num2Input.value = "";
});

constantSelect.addEventListener('change', (e) => {
  const constants = {
    PI: Math.PI,
    E: Math.E,
    C: 299792458
  };
  const value = constants[e.target.value];
  if (!isNaN(value)) {
    document.getElementById('num1').value = value;
    e.target.value = "";
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const expr = expressionInput.value.trim();
  if (expr) {
    try {
      const val = evaluateExpression(expr);
      resultEl.innerHTML = `🔢 Evaluated: <strong>${val}</strong>`;
      return;
    } catch (err) {
      resultEl.innerHTML = `⚠️ <span class="error">${err.message}</span>`;
      return;
    }
  }

  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const op = opSelect.value;

  try {
    const result = calculate(num1, num2, op);
    const emojiMap = {
      "+": "➕", "-": "➖", "*": "✖", "/": "➗",
      "^": "🧠", "%": "📏", "sqrt": "🧮", "log": "📉",
      "sin": "🌞", "cos": "🌚", "tan": "🌗"
    };
    const emoji = emojiMap[op] || "✅";
    const phrase = phrases[Math.floor(Math.random() * phrases.length)];

    const display = singleInputOps.includes(op)
      ? `🎉 Result: ${emoji} ${op}(${num1}) = <strong>${result}</strong><br>${phrase}`
      : `🎉 Result: ${num1} ${emoji} ${num2} = <strong>${result}</strong><br>${phrase}`;

    resultEl.innerHTML = display;

    const historyItem = document.createElement('li');
    historyItem.textContent = singleInputOps.includes(op)
      ? `${op}(${num1}) = ${result}`
      : `${num1} ${op} ${num2} = ${result}`;
    historyEl.appendChild(historyItem);

    plotFunction(op);
  } catch (err) {
    resultEl.innerHTML = `⚠️ <span class="error">${err.message}</span>`;
  }
});

clearBtn.addEventListener('click', () => {
  document.getElementById('num1').value = "";
  document.getElementById('num2').value = "";
  expressionInput.value = "";
  opSelect.value = "+";
  num2Input.disabled = false;
  resultEl.innerHTML = "🎉 Ready to crunch some numbers!";
});

darkToggle.addEventListener('change', (e) => {
  document.body.classList.toggle('dark-mode', e.target.checked);
});

function plotFunction(op) {
  if (!["sin", "cos", "tan"].includes(op)) return;

  const labels = Array.from({ length: 361 }, (_, i) => i);
  const data = labels.map(x => calculate(x, null, op));

  if (chart) chart.destroy();
  chart = new Chart(graphEl, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: `${op}(x)`,
        data,
        borderColor: 'blue',
        fill: false
      }]
    },
    options: {
      responsive: true,
      scales: {
        x: { title: { display: true, text: "Degrees" } },
        y: { title: { display: true, text: "Value" } }
      }
    }
  });
}

// Unit Converter
document.getElementById('convert-btn').addEventListener('click', () => {
  const val = parseFloat(document.getElementById('convert-value').value);
  const type = document.getElementById('unit-convert').value;
  let result;

  switch (type) {
    case "mToFt": result = val * 3.28084; break;
    case "ftToM": result = val / 3.28084; break;
    case "cToF": result = val * 9/5 + 32; break;
    case "fToC": result = (val - 32) * 5/9; break;
    default: result = "❌ Invalid";
  }

  document.getElementById('convert-result').innerHTML = `✅ Converted: <strong>${result}</strong>`;
});

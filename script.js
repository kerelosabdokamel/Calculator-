// script.js
let display = document.getElementById('display');
let isDegree = true;
let modeLabel = document.getElementById('mode');

function appendNumber(num) {
  display.value += num;
}

function appendOperator(op) {
  display.value += op;
}

function appendDot() {
  if (!display.value.endsWith('.')) {
    display.value += '.';
  }
}

function clearDisplay() {
  display.value = '';
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "خطأ";
  }
}

function calculateScientific(func) {
  let value = parseFloat(display.value);
  if (isNaN(value)) return;

  if (isDegree && ['sin', 'cos', 'tan'].includes(func)) {
    value = value * Math.PI / 180;
  }

  switch(func) {
    case 'sqrt':
      display.value = Math.sqrt(value);
      break;
    case 'log':
      display.value = Math.log10(value);
      break;
    case 'sin':
      display.value = Math.sin(value);
      break;
    case 'cos':
      display.value = Math.cos(value);
      break;
    case 'tan':
      display.value = Math.tan(value);
      break;
    case 'pi':
      display.value += Math.PI.toFixed(8);
      break;
  }
}

function power() {
  display.value += '**';
}

function toggleAngleMode() {
  isDegree = !isDegree;
  modeLabel.innerText = isDegree ? "الوضع: درجات" : "الوضع: راديان";
}

// Elements
const display = document.querySelector('.display');

const clearButton = document.querySelector('#clear');
const equalsButton = document.querySelector('#equals');

const addButton = document.querySelector('#add');
const subButton = document.querySelector('#sub');
const mulButton = document.querySelector('#mul');
const divButton = document.querySelector('#div');

const keys = document.querySelectorAll('.numkey, .opkey');
const numkeys = document.querySelectorAll('.numkey');
const opkeys = document.querySelectorAll('.opkey');

let regA = '';
let regB = '';
let regOpcode = '';
let opcodeText = '';

// Event Listeners
clearButton.addEventListener('click', clearDisplay);
equalsButton.addEventListener('click', equalsPress);

keys.forEach(key => key.addEventListener('click', buttonPress));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

numkeys.forEach(key => key.addEventListener('click', numPress));

addButton.addEventListener('click', opPress);
subButton.addEventListener('click', opPress);
mulButton.addEventListener('click', opPress);
divButton.addEventListener('click', opPress);

addButton.opcode = 'ADD';
subButton.opcode = 'SUB';
mulButton.opcode = 'MUL';
divButton.opcode = 'DIV';

//Functions

function add(A,B) {
  return A+B;
}

function sub(A,B) {
  return A-B;
}

function mul(A,B) {
  return A*B;
}

function div(A,B) {
  return A/B;
}

function operate(operator, A, B) {
  switch(operator) {
    case 'ADD':
      return add(A,B);
    case 'SUB':
      return sub(A,B);
    case 'MUL':
      return mul(A,B);
    case 'DIV':
      return div(A,B);
    default:
      console.log('ERROR: Unrecognised operator code ' + operator);
  }
}

// Press Animation
function buttonPress() {
  this.classList.add('keypress');
}

function removeTransition(e) {
  this.classList.remove('keypress');
}

function numPress() {
  let num = this.textContent;
  regB += num;
  console.log(regB);
  updateDisplay();
}

function opPress() {
  let opcode = this.opcode;

  console.log(opcode);
  regA = regB;
  opcodeText= this.textContent;
  regOpcode = opcode;
  regB = '';

  updateDisplay();
}

function equalsPress() {
  let A = parseInt(regA);
  let B = parseInt(regB);
  let ans = operate(regOpcode, A, B);

  clearDisplay();
  regB = ans;
  updateDisplay();
}

function updateDisplay() {
  let displayText = regA + opcodeText + regB;
  display.textContent = displayText;
}

function clearDisplay() {
  regA = '';
  regB = '';
  regOpcode = '';
  opcodeText = ''
  updateDisplay();
}





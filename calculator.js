// Elements
const display = document.querySelector('.display');

const clearButton = document.querySelector('#clear');

const numkeys = document.querySelectorAll('.numkey');



let regA = null;
let regB = null;
let regOpcode = null;


// Event Listeners
clearButton.addEventListener('click', clearDisplay);

numkeys.forEach(key => key.addEventListener('click', buttonPress));
numkeys.forEach(key => key.addEventListener('transitionend', removeTransition));

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

function buttonPress() {
  this.classList.add('keypress');

  let num = this.textContent;
  regB += num;
  updateDisplay(num);
}

function removeTransition(e) {
  this.classList.remove('keypress');
}

// stores opcode in reg, copies reg B to reg A
function opPress() {
  let opcode = this.opcode;
}

function updateDisplay(displayText) {
  display.textContent = displayText;
}

function clearDisplay() {
  updateDisplay('');
}





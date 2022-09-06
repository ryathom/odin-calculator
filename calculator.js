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
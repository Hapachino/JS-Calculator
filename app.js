let output = document.querySelector('.output');
let calcButtons = document.querySelector('.calc-buttons');

let total = '',
    number,
    operator;
  

function calculate(total, operator, number) {
  if (operator === 'divide') {
    return total / number;
  } else if (operator === 'times') {
    return total / number;
  } else if (operator === 'minus') {
    return total / number;
  } else if (operator === 'plus') {
    return total / number;
  } else if (operator === 'equal') {
    return total / number;
  } else if (operator === 'clear') {
    return 0;
  }
}


function handleInput(event) {
  let id = event.target.id;
  let classList = event.target.classList;

  if (numericInputs[id]) {
    total += numericInputs[id];
    output.value = total;
  } else if (classList.contains(operator)) {
    operator = id;
  }
  


  // handle input overflow
  // handle calculation  overflow

}

calcButtons.addEventListener('click', handleInput);
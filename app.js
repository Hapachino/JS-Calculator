const output = document.querySelector('.output');
const calcButtons = document.querySelector('.calc-buttons');

let total = '',
    number = '',
    operator,
    operatorClicked = false;


function calculate() {
  total = Number(total);
  number = Number(number);

  if (operator === 'divide') {
    total /= number;
  } else if (operator === 'times') {
    total *= number;
  } else if (operator === 'minus') {
    total -= number;
  } else if (operator === 'plus') {
    total += number;
  } else if (operator === 'clear') {
    total = '';
  }
}

function handleInput(event) {
  const clicked = event.target;
  // if operator, store data-set
  if (clicked.classList.contains('operator')) {
    let action = clicked.dataset.key;
  
    if (action === 'equals' && operatorClicked && number) {
      calculate();
      number = '';
      output.value = total.toString();
      operatorClicked = false;
    } else {
      operator = action;
      operatorClicked = true;
    }
  // else, it's a number
  } else { 
    // if not operator, append to total
    if (operatorClicked) {
      number += clicked.textContent;
      output.value = number;
    } else {
      total += clicked.textContent;
      output.value = total;
    }
  }
}

  // handle input overflow
  // handle calculation  overflow

calcButtons.addEventListener('click', handleInput);
const output = document.querySelector('.output');
const calcButtons = document.querySelector('.calc-buttons');

let total = '',
    number = '',
    operator,
    operatorClicked = false;


function calculate() {
  total = Number(total);
  number = Number(number);

  if (operator === 'divide') total /= number; 
  if (operator === 'times') total *= number;
  if (operator === 'minus') total -= number;
  if (operator === 'plus') total += number;
}

function handleInput(event) {
  const clicked = event.target;
  // if operator, store data-set
  if (clicked.classList.contains('operator')) {
    let action = clicked.dataset.key;

    if (action === 'clear') {
      total = '';
      output.value = total;
      number = '';
      operatorClicked = false;
    } else if (action === 'equals' && operatorClicked && number) {
      calculate();
      number = '';
      output.value = total.toString();
      operatorClicked = false;
    } else {
      operatorClicked = true;
      operator = action;
    }
  // else, it's a number or decimal
  } else { 
    let append = clicked.dataset.key ? clicked.dataset.key : clicked.textContent;
    console.log(append);
    
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

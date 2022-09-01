document.body.style.fontFamily = 'san-serif';
let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');

h1.className = 'header';
h2.className = 'header';
h3.className = 'header';

//prime number function
let isPrime = num => {
  if (num == 1 || num == 0)
    return false;
  if (num == 2 || num == 3)
    return true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0)
      return false;
  }
  return true;
}

//header style
let standrddFontWeight = 400;
document.querySelectorAll('.header').forEach(x => {
  x.style.textAlign = 'center';
  x.style.fontWeight = `${standrddFontWeight}`;
  x.style.padding = '2px';
  x.style.margin = '0px';

  standrddFontWeight -= 30;
});
h2.style.textDecoration = 'underline';
h1.style.color = 'green';

//creating element

let container = document.createElement('div');

let table = document.createElement('table');

//generate numbers
function generateNumbers(numCount) {
  nums = 0;
  while (nums < numCount) {
    // create table row     
    let row = document.createElement('tr');

    let x = 1;
    let iterationCount = numCount - nums > 6 ? 6 : numCount - nums;
    while (x <= iterationCount) {
      // create table data   
      let data = document.createElement('td');
      data.textContent = nums;

      // style the data element     
      data.style.margin = '2px';
      data.style.padding = '5px';

      // selective styling    
      if (isPrime(nums)) {
        data.style.backgroundColor = '#f76262';
      } else if (nums % 2 !== 0) {
        data.style.backgroundColor = '#fee904';
      } else data.style.backgroundColor = '#42b845';

      // end styling   
      row.appendChild(data);
      nums++;
      x++;
    }
    // add row to the table    
    table.appendChild(row);
  }
}
//validations

let msg = document.querySelector('#message');
let inputArea = document.querySelector('input');
let button = document.querySelector('#button_1');
button.addEventListener('click', () => {
  table.innerHTML = '';
  let inputValue = inputArea.value;

  if (typeof (Number(inputValue)) === 'number' && Number(inputValue) > 0) {
    generateNumbers(inputValue);

  } else if (inputValue.length === 0) {
    msg.textContent = 'enter a number to generate numbers';
  }
  else if (typeof(inputValue) === 'string') {
    msg.textContent = 'input value must be a number';
  }

})

//// table styling     
table.style.width = '60%';
table.style.marginRight = '20%';
table.style.marginLeft = '20%';
table.style.marginTop = '1pc';
table.style.textAlign = 'center';
table.style.fontFamily = 'ariel';
table.style.fontSize = '15px';
table.style.fontWeight = 'bold';
table.style.color = 'white';

container.appendChild(table);
document.body.appendChild(container);
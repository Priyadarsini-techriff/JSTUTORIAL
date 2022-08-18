//1
let yearText = document.querySelector('strong');
yearText.style.fontSize = '35px';
// generate color in hexadec form    
let generateColor = () => {
    let alphanums = '0123456789abcdef';

    let colorArr = [];
    for (let i = 0; i < 6; i++) {
        let hexadec = Math.floor(Math.random() * 15);
        colorArr.push(alphanums[hexadec]);
    }
    return '#' + colorArr.join('');
}
// adding color to 2020     
setInterval(() => {
    yearText.style.color = generateColor();
}, 1000)
//2

let getDate = () => {
    let d = new Date();

    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let monthIndex = d.getMonth();
    let year = d.getFullYear();
    let date = d.getDate();
    let hour = d.getHours();
    let mins = d.getMinutes();

    date = date < 10 ? '0' + date.toString() : date;
    hour = hour < 10 ? '0' + hour.toString() : hour;
    mins = mins < 10 ? '0' + mins.toString() : mins;

    return `${months[monthIndex]} ${date}, ${year}  ${hour}:${mins}`;
}  
let date = document.querySelector('p');
date.textContent = getDate();

date.style.margin = 'auto';
date.style.padding = '6px'
date.style.textAlign = 'center';
date.style.fontSize = '12px';
date.style.fontWeight = '400';
date.style.width = '40%';
setInterval(() => {
    date.style.backgroundColor = generateColor();
  }, 1000);
//3,4,5
let listItems = document.querySelectorAll('li');
for(let item of listItems) {
    item.style.listStyleType = 'none';
    item.style.fontWeight = '350';
    item.style.padding = '8px';
    item.style.margin = '6px';
    item.style.textAlign = 'left';
  }
  for(const item of listItems) {
    if(item.textContent.endsWith('Done'))
      item.style.backgroundColor = '#228b22';
    else if (item.textContent.endsWith('Ongoing')) 
      item.style.backgroundColor = '#FFFF00';
    else item.style.backgroundColor = '#DC143C';
    
    item.style.fontFamily = 'san-serif';
    item.style.marginRight = '50px';
  }
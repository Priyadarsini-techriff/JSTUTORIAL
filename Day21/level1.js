//1
let firstParagraph = document.querySelector('p');
console.log(firstParagraph);
//2
let firstP = document.querySelector("#first");
let secondP = document.querySelector('#second');
let thirdP = document.querySelector('#third');
let fourthP = document.querySelector('#fourth');
console.log(firstP)
console.log(secondP)
console.log(thirdP)
console.log(fourthP)
//3
let pList=document.querySelectorAll('p')
console.log(pList);
//4
pList.forEach(x => console.log(x.textContent));
//5
fourthP.textContent = 'Fourth Paragraph';
console.log(fourthP.textContent);
//6. set ID and CLASS by setting method
// method 1 
pList.forEach(x => x.classList.add('paragraph'));

// method 2 
firstP.setAttribute('class', 'first-paragraph');
secondP.setAttribute('class', 'second-paragraph');

// // method 3 
thirdP.className = 'third-paragraph';
fourthP.className = 'fourth-paragraph';
console.log(pList)
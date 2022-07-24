const paragraph = ' \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.'  
console.log(paragraph);

const paragraph1='\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"';
console.log(paragraph1);

console.log(typeof 10);

let s=10;
let t=typeof(10);
console.log(t=s);
console.log(s==t);

let num = '9.8'
let numFloat = parseFloat(num);

console.log(numFloat);
const gravity=9.8;
console.log(gravity==10);
console.log(Math.round(gravity));
console.log(Math.round(gravity)==10);

let sub2='python';
let sub1='jargon';

console.log(sub2.search('on'));
console.log(sub1.search('on'));


let param1='I hope this course is not full of jargon'
console.log(param1.match('jargon'));


let randomNum = Math.random() ;        
let numBtnZeroAndhundred = randomNum * 100;
console.log(numBtnZeroAndhundred);         
let randomNumRoundToFloor = Math.floor(numBtnZeroAndhundred);
console.log(randomNumRoundToFloor);

 
let numbtnfiftyAndHundred=(randomNum * 50) + 50;
console.log(numbtnfiftyAndHundred);
let randomNumRoundToFloor1 = Math.floor(numbtnfiftyAndHundred);
console.log(randomNumRoundToFloor1);


let randomnum255=(randomNum * 255);
console.log(randomnum255);
let randomNumRoundToFloor2 = Math.floor(randomnum255);
console.log(randomNumRoundToFloor2);

const chare='Javascript';
const charlength=chare.length;
console.log(charlength);
var result3= chare.charAt(Math.floor(Math.random() * charlength));
 console.log(result3);


let square= "1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125"
console.log(square);

let phrase='You cannot end a sentence with because because because is a conjunction'
console.log(phrase.substr(31,24));

let base = 20;
let height = 10;
let areaOfTriangle;
areaOfTriangle = (0.5 * base * height);
console.log(areaOfTriangle);

let L = 5;
let W = 4;
let H = 3;
let trianglePerimeter = (L + W + H);
console.log(trianglePerimeter);


let l = 10;
let w = 20;
const rectangleArea = (l * w);
const perimeterRectangle = 2 * (l + w);
console.log(rectangleArea, perimeterRectangle);

const pi = 3.14;
let radius = 5;
const circleArea = pi * radius * radius;
const circleCircumference = 2 * pi * radius;
console.log(circleArea);
console.log(circleCircumference);


//y=mx+b 2x-2 mx=y-b m=(y-b)/x 
let xintrcept = 10;
const yintercept = (2 * xintrcept - 2);
console.log(yintercept);
let slope = (yintercept + 2) / xintrcept;
console.log(slope);

// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1 = 2;
let x2 = 6;
let y1 = 2;
let y2 = 10;
let m = (y2 - y1) / (x2 - x1);
console.log(m);
console.log(slope == m);

//Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let x3 = -3;
const y = (x3 * x3 + 6 * x3 + 9);
console.log(y);


let ratePerHour = 28;
let hour = 40;
let weeklyEarnig = (ratePerHour * hour);
console.log(weeklyEarnig);

//10


//

let fn = 'Priyadarsini';
let ln = 'Lenka';

if (fn.length > ln.length) {
    console.log("Your first name Priyadarsini longer than family name lenka.");
}

let myAge = 26;
let yourAge = 25;
if (myAge > yourAge) {
    console.log("I am 1 year older than you.");
}


 var d = new Date();
 var n = d.getFullYear();
var year_born = prompt("Please enter your date of birth:", "Type here");
if (year_born >=2005 ){
    var age = n - year_born;
    alert("Hello, " + "you are " + age + " years old!" + "You are old enough to drive");
}

else{
    var age1 = n - year_born;
    alert("Hello, " + "you are " + age1 + " years old!" + " You will be allowed to drive after 3 years.");
}


var year = prompt("Enter number of years you live:", "Type here");
var livedSeconds=  365*24*60*60* year;
alert("You Lived" + " "+ livedSeconds+""+ "seconds");



const now = new Date();
const Year = now.getFullYear(); 
const Month = now.getMonth() + 1 ;
const Date = now.getDate(); 
const Hour = now.getHours() ;
const Minute = now.getMinutes() ;


console.log(`${Year}-${Month}-${Date} ${Hour}:${Minute}`)//YYYY-MM-DD HH:mm
console.log(`${Date}-${Month}-${Year} ${Hour}:${Minute}`)//DD-MM-YYYY HH:mm
console.log(`${Date}/${Month}/${Year} ${Hour}:${Minute}`)//DD/MM/YYYY HH:mm



var date10 = new Date("3 march 2015 06:21:44");
const year2 =date10.getFullYear();
const month2 = date10.getMonth() + 1 ;
const date2 = date10.getDate();  
const hours2 = ("0" + (date10.getHours())).slice(-2); 
const minute2=("0"+ (date10.getMinutes())).slice(-2);
console.log(`${year2}-${month2}-${date2} ${hours2}:${minute2}`);




























//1
let char = "23456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefnkjnjfghiklmnopqrstuvwxyz";
let randChar = "";
let r2 = Math.floor(Math.random() * char.length);
for (let i = 0; i < r2; i++) {
    let random1 = Math.floor(Math.random() * char.length);
    randChar += char[random1];
}
console.log(randChar);
//2
var letters = '0123456789ABCDEF';
var color = '#';
for (var j = 0; j < 6; j++) {
    color += letters[Math.floor(Math.random() * 16)];
}
console.log(color);
//3
var x = Math.floor(Math.random() * 256);
var y = Math.floor(Math.random() * 256);
var z = Math.floor(Math.random() * 256);
var rbgColor = "rgb(" + x + "," + y + "," + z + ")";
console.log(rbgColor);
//4
const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']
const newArr = [];
for (const country of countries) {
    newArr.push(country.toUpperCase());
}

console.log(newArr);
//5

let countriesLength = [];
for (let i = 0; i < countries.length; i++) {
    countriesLength.push(countries[i].length);
}
console.log(countriesLength);

6

let newCountries = [];
for (let i = 0; i < countries.length; i++) {
    newCountries.push([countries[i], countries[i].slice(0, 3).toUpperCase(), countries[i].length]);
}
console.log(newCountries);
//7
let countWithoutLand = [];
let countWithLand = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes("land")) {
        countWithLand.push(countries[i]);
    } else {
        countWithoutLand.push(countries[i]);
    }
}
console.log(countWithLand);
//8
let countWithIa = [];
let countWithoutIa = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes("ia")) {
        countWithIa.push(countries[i]);
    } else {
        countWithoutIa.push(countries[i]);
    }
}

console.log("countries with ia:"+""+countWithIa );
console.log("countries without  ia:"+""+countWithoutIa );
//9
let countriesCharLength = [];
for (let i = 0; i < countries.length; i++) {
    countriesCharLength.push(countries[i].length);
}
console.log(countriesCharLength);
let highestcharlength=Math.max(...countriesCharLength);//  we can write this way also (let highestcharlength = Math.max.apply(null, countriesCharLength);) 
console.log(countries[countriesCharLength.indexOf(highestcharlength)]);
//10
let countriesWithFiveChars = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length === 5) {
        countriesWithFiveChars.push(countries[i])
    }
}
console.log(countriesWithFiveChars);
//11
let webTechs = ["html", "css", "javascript", "vue", "react", "mongodb", "angular"];
let webTechsLength = [];
for (let i = 0; i < webTechs.length; i++) {
    webTechsLength.push(webTechs[i].length);
}
console.log(webTechsLength);
let highestChar;
highestChar = Math.max(...webTechsLength);
console.log(highestChar);
console.log(webTechs[webTechsLength.indexOf(highestChar)]);
//12
let newWebTechs = [];
for (let i = 0; i < webTechs.length; i++) {
    newWebTechs.push([webTechs[i].toUpperCase(), webTechs[i].length])
}
console.log(newWebTechs);
//13

let mernStack = ["MongoDb", "Express", "React", "Node"]
let mern = "";
for (let i = 0; i < mernStack.length; i++) {
    mern += mernStack[i].slice(0, 1);
}
console.log(mern);
//14
//for-loop
let techs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for (let i = 0; i < techs.length; i++) {
    console.log(techs[i]);
}
//for of loop
for (let tech of techs) {
    console.log(tech);
}
//15
let fruits = ['banana', 'orange', 'mango', 'lemon'];
let fruits1=[];
for (let i = fruits.length - 1; i >= 0; i--) {
    fruits1.push(fruits[i]);
}
console.log(fruits1)
//16
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ];
  console.log(fullStack.join());
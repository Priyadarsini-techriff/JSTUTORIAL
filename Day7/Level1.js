//1
function fullName() {
    console.log("Priyadarsini Lenka")
}
fullName();
//2
function printFullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}
console.log(printFullName('Priya', 'Lenka'));
//3
function addNumbers() {
    let a = 20;
    let b = 10;
    let sum = a + b;
  
    console.log(sum);
  }
  
  addNumbers();
  //4
  function areaOfRectangle(){
    let l=20;
    let h=10;
    let area=l*h;
    console.log(area);
  }
  areaOfRectangle();
  //5
function perimeterOfRectangle(length,width) {
     let perimeter = 2 * (length * width);
     return perimeter;
}
console.log(perimeterOfRectangle(8,4));
//6
const volumeOfRectPrism = (length, width, height) => {
    let volume = length * width * height;
    return volume;
}
console.log(volumeOfRectPrism(2, 3, 4));
//7
const areaOfCircle=(r)=>{
    const PI = 3.14;
    let area=PI * r * r;
    return area;
}
console.log(areaOfCircle(5));
//8
const circumOfCircle=(r)=>{
    const PI = 3.14;
    let circumference =2 * PI * r;
    return circumference;
}
console.log(circumOfCircle(5));
//9
const density = (mass, volume) => {
    return mass * volume;
}
 console.log(density(2, 6));
 //10
  const speed = (distanceTravelled, timeTaken) => {
    let speed = distanceTravelled / timeTaken;
    return speed;
}
console.log(speed(12,6));
//11
function Weight(mass,gravity) {
    let Weight = (mass * gravity);
    return Weight;
}
console.log(Weight(8,4));
//12
const celsiusToFahrenheit = (celsius) => {
    let fahrenheit = (celsius * 9 / 5) + 32
    return fahrenheit;
}
console.log(celsiusToFahrenheit(10));
//13
 const BMI = (weight, height) => {
    let bmi = weight / (height * height);
    if (bmi < 18.5) {
        return `underweight`;
    } else if (bmi > 18.5 && bmi < 24.9) {
        return `overweight`;
    } else if (bmi > 25 && bmi < 29.9) {
        return `overweight`;
    } else {
        return `obese`;
    }
}
console.log(BMI(4, 7));
//14
let month=prompt('enter Month');
const checkSeasons = (month) => {
    if(month === 'sept' || month === 'oct' || month==="nov"){
        alert("the season is Autumn.");
    }
    else if(month === 'dec' || month === 'jan' || month==="feb"){
        alert("the season is Winter.");
    
    }
    else if(month === 'march' || month === 'apr' || month==="may"){
        alert("the season is Spring.");
    
    }
    else if(month === 'jun' || month === 'july' || month==="aug"){
        alert("the season is Summer.");
    
    }
    else{
        alert("invalid input.")
    }
    
}
checkSeasons(month);
//15
function findMax(x, y, z) {
  var i;
  var max = -Infinity;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
console.log(findMax(1, 123, 500));
console.log(findMax(0, -10, -2));

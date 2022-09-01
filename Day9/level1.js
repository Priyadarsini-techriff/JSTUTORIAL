//1,2
//Explain the difference between forEach, map, filter, and reduce.

/*
forEach
the forEach method takes in an array
 and execute a function for each element in
 the array 
*/

/*map
the map method creates a new array
 from calling a function
 to be executed on each array
*/

/*filter
this also creates a new array that 
passes the test of the callback function provided
*/

/*reduce
this produces a single value from an array
provided it meets the callback function
*/

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
//3
countries.forEach(country => {
  console.log(country);
})
//4
names.forEach(name => {
console.log(name);
})
//5
numbers.forEach(num => {
  console.log(num)
})
//6
let uppercaseCountry=countries.map(country => {
  return country.toUpperCase();
})
console.log(uppercaseCountry);
//7
let countriesLength = countries.map(country => {
  return country.length
})
console.log(countriesLength);
//8
let squareNum = numbers.map(num => {
  return num * num
})
console.log(squareNum);
//9
let uppCaseNames = names.map(name => {
  return name.toUpperCase();
})
console.log(uppCaseNames);
//10
let prices = products.map(product => {
  return `${product.product}:${product.price}`
})
console.log(prices);
//11
let countriesWithLand=countries.filter(country =>{
  return country.toLowerCase().includes("land");
})
console.log(countriesWithLand);
//12
let countriesHavingSixChar=countries.filter(country =>{
  return country.length==6;
})
console.log(countriesHavingSixChar);
//13
let countriesWith6charsMore = countries.filter(country => {
  return country.length >= 6;
})
console.log(countriesWith6charsMore);
//14
let countriesStartingWithE = countries.filter(country => {
  return country[0] === "E";
})
console.log(countriesStartingWithE);
//15
let pricesWithValues =products.filter(product =>{
  return product.price > 0;
}).map(x=>{
  return {
      price:x.price
  }
 })
console.log(pricesWithValues);
//16
const getStringList = (arr) => {
  let stringitem = arr.filter(item => {
      return typeof item === "string";
  })
  console.log(stringitem);
}

getStringList(["priya", 9, 5, "lenks"]);

//17
let sumOfNumbers = numbers.reduce((Total, number) => {
  return Total + number;
})
console.log(sumOfNumbers);
//18
let concatenateCountries  = countries.reduce((accumulator, currentValue) => {
  return (accumulator+ ","+ currentValue  );
},"Estonia")
console.log(concatenateCountries + " "+"are north European countries" );
//19(//every checks if all elements in an array are similar in all aspects
//some checks if some elements are elements are similar in one aspect)
/* some:-The some() method checks if any array elements pass a test (provided as a callback function).
The some() method executes the callback function once for each array element.
The some() method returns true (and stops) if the function returns true for one of the array elements.
The some() method returns false if the function returns false for all of the array elements.
The some() method does not execute the function for empty array elements.
The some() method does not change the original array.
every:-The every() method executes a function for each array element.
The every() method returns true if the function returns true for all elements.
The every() method returns false if the function returns false for one element.
The every() method does not execute the function for empty elements.
the every() method does not change the original array */
//20
let isSomenames = names.some(name => {
  return name.length > 7;
})
console.log(isSomenames);
//21
let isCountryIncludesLand = countries.every(country => {
  return country.toLowerCase().includes("land")
})
console.log(isCountryIncludesLand);
//22
//find returns the first element which satisfies the condition
//findIndex returns the first index elemnt which satisfiy the condition
//23
let firstCountry6Chars = countries.find(country => {
  return country.length === 6
});
console.log(firstCountry6Chars);
//24
let firstIndexPosCountry6Chars = countries.findIndex(country => {
  return country.length === 6
});
console.log(firstIndexPosCountry6Chars);
//25
let firstIndexPosNorwayExist = countries.findIndex(country => {
  return country.includes("Norway")
});
console.log(firstIndexPosNorwayExist);
//26
let firstIndexPosRussiaExist = countries.findIndex(country => {
  return country.includes("Russia")
});
console.log(firstIndexPosRussiaExist);
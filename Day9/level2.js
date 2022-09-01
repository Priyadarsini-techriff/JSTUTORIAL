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

//1
let totalPrice = products.map(product => {
    return product.price;
}).filter(price => {
    return price > 0;
}).reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})
console.log(totalPrice);
//2

let p = [];
for (let i = 0; i < products.length; i++) {
    if (products[i].price > 0) {
        p.push(products[i])
    }

}
console.log(p);
let sumOfPrices = p.reduce(getSum, 0);
function getSum(total, price) {
    for (let i = 0; i < p.length; i++) {
        if (p[i].price > 0) {
            return total + price.price;

        }
    }
}
console.log(sumOfPrices);
//3
const categorizeCountries  = (countries) => {
    let coun = countries.filter(country => {
        return country.toLowerCase().includes("ia") || country.toLowerCase().includes("island") || country.toLowerCase().includes("land") || country.toLowerCase().includes("stan");
    })
    return coun;
}
console.log(categorizeCountries (countries));
//4
// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']  
  const getStartingLetters = arr => {
    const occurences = arr
      .reduce((acc, name) => {
        const startingLetter = name[0]
        acc[startingLetter] = ( acc[startingLetter] || 0 ) + 1
        return acc
      }, {})
    
    return Object
      .keys(occurences)
      .sort()
      .map(letter => ({letter, count: occurences[letter]}))
  }
  
  
  console.log(getStartingLetters(countries))
  //5
  let getFirstTenCountries = countries => countries.filter(c => countries.indexOf(c)<10);
  
  //6
  let getLastTenCountries = arr => arr.filter(c=> arr.indexOf(c) > arr.length-11);
  //7
  const country = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
  let frequentFirstLetter = Object.entries(country.map(c => c[0]).reduce((acc,cur) => {
    acc[cur] = (acc[cur] || 0) +1;
    return acc;
 }, {})).reduce((obj, cur) => {
    obj.max = (obj.max || cur[1]);
    obj.letter = (obj.letter || '');
 
    if (obj.max < cur[1]) {
       obj.max = cur[1];
       obj.letter = cur[0];
    }
    return obj;
 }, {}).letter;
 
 console.log(frequentFirstLetter);
  
  
 
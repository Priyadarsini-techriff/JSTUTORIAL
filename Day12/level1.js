//1
let sentence = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';

let pattern = /\d+/g;
let income = sentence.match(pattern).map(x => parseFloat(x)).reduce((sum, x) => sum + x, 0);
console.log(income);
//or
let salaries = sentence.match(/\d+/g);
let totalAnnualIncome = 0;
salaries.forEach(element => {
    totalAnnualIncome += Number(element);
})
console.log(totalAnnualIncome)
//2.The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction,
// 0 at origin, 4 and 8 in the positive direction. 
//Extract these numbers and find the distance between the two furthest particles.

points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
let numPattern = new RegExp(/\-?[0-9]+/,'g');
let extractedPoints = points.map(x => parseFloat(x.match(numPattern)[0])).sort((a,b) => a - b);

let distance = Math.abs(extractedPoints[0] - extractedPoints[extractedPoints.length - 1]);
console.log(distance);
//3
let is_valid_variable = (varName) => {
    let validVar = /^[$|_|a-z|A-Z][1-9|a-z|A-Z|_]*?/
    return Boolean(varName.match(validVar));
 }
 console.log(is_valid_variable('234helloJavaScript'));
 console.log(is_valid_variable('first_name'))
 console.log(is_valid_variable('first-name') )
 console.log(is_valid_variable('1first_name') )
 console.log(is_valid_variable('firstname') )
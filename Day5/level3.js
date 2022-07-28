//1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];


console.log(ages.sort());
 let maxAge=Math.max(...ages);
console.log(maxAge);
 let minAge=Math.min(...ages);//(...) spread operator
 console.log(minAge);
let medianAge=Math.floor(ages.length/2);
console.log(ages[medianAge]);


let avgAge;
for (i = 0; i < ages.length; i++) {
    let totalAge = 0;
    totalAge += ages[i];
    avgAge = totalAge / ages.length;
}
console.log(avgAge);

rangeOfAge=26-19;
console.log(rangeOfAge);


let minavg = Math.abs(minAge - avgAge);
let maxavg = Math.abs(maxAge - avgAge);
console.log(minavg);
console.log(maxavg);

//2.1
console.log(countries.slice(0, 10));

//2.2
middlecountry = Math.floor(countries.length / 2);
console.log(countries[middlecountry].slice());

//3
let m = countries.length / 2;
let n = countries.length / 2;
if (countries.length % 2 === 0) {
    console.log(countries.slice(0, m));
    console.log(countries.slice(m + 1,countries.length -1));
} else {
    countries.push("India");
    console.log(countries.slice(0, n));
    console.log(countries.slice(n + 1, countries.length - 1));
}
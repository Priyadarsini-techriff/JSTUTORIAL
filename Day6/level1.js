const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

//1
//for-loop
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

//while-loop
let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}
// //do-while
let n = 0;
do {
    console.log(n);
    n++;
} while (n <= 10);

//2
//for-loop
for (i = 10; i >= 0; i--) {
    console.log(i);
}

//while-loop
let j = 10;
while (j >= 0) {
    console.log(j)
    j--;
}
//do-while loop
let k = 10
do {
    console.log(k);
    k--;
} while (k >= 0);
//3
let number = prompt("enter a number:");
for (i = 0; i <= number; i++) {
    console.log(i);

}
//4
let str = "";
for (let i = 0; i < 7; i++) {
    str += "#";
    console.log(str);
}
//5
for (let i = 0; i <= 10; i++) {
    console.log(`${i} * ${i} = ${i * i}`);

}
//6

for (let i = 0; i <= 10; i++) {
    console.log(`${i} ${i ** 2} ${i ** 3}`);
}
//7(divide the value by 2.if the remainder is zero then it's an even number)
for (i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
//8
for (i = 0; i <= 100; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}
//9(prime number-number has 2 factors is 1 or itself)
let isPrime = true;
for(let i=2; i <= 100; i++){
  for(let j=2; j < i - 1; j++){
    if(i % j == 0){
      isPrime = false;
      break;
    }
  }
  if(isPrime){
    console.log(i);
  }
  isPrime=true;
}
//10
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(sum);
//11
let even = 0;
let odd = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        even += i;
    } else if (i % 2 != 0) {
        odd += i;
    }
}
console.log(`the sum of all even number is ${even}. And the sum of all odd numbers is ${odd}`);
//12
let EvenOdd = [0, 0]
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        EvenOdd[0] += i;
    } else if (i % 2 > 0) {
        EvenOdd[1] += i;
    }
}
console.log(EvenOdd);
//13

let randomArr = [];
for (let i = 0; i < 5; i++) {
    randomArr.push(Math.floor(Math.random() * 10));
}
console.log(randomArr);

//14

randomUniqueArr = [];
while (randomUniqueArr.length < 5) {
    var r = Math.floor(Math.random() * 100);
    if (randomUniqueArr.indexOf(r) === -1) {
        randomUniqueArr.push(r);
    }
}
console.log(randomUniqueArr);
//15
let chars = "3456789EFGHIJKLMNOPQRSTUVWXTZaefghiklmnouvwxyz";
let randomChars = "";
for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * chars.length);
    randomChars += chars[random];
}
console.log(randomChars);



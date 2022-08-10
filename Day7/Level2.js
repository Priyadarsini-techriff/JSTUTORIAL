//1 ax+by+c=0  by=-ax-c => y=(-c-ax)/b  
function solveLinEquation(a, b, c) {
    for (let i = 0; i * a <= c; i++) {
        if ((-c - (i * a)) % b == 0) {
            console.log("x = " + i + ", y = " + (-c - (i * a)) / b);

            return;
        }
    }
}

console.log(solveLinEquation(2, 3, 7));
console.log(solveLinEquation(2, 3, 9));

//2  ax2 + bx + c = 0  x=(-b ± √b2-4ac)/2

function solveQuadEquation(a, b, c) {
    let x, root1, root2;
    x = b * b - 4 * a * c;
    // condition for real and different roots
    if (x > 0) {
        root1 = (-b + Math.sqrt(x)) / (2 * a);
        root2 = (-b - Math.sqrt(x)) / (2 * a);


        console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
    }

    // condition for real and equal roots
    else if (x == 0) {
        root1 = root2 = -b / (2 * a);
        console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
    }
}
console.log(solveQuadEquation());
console.log(solveQuadEquation(1, 4, 4));
console.log(solveQuadEquation(1, -1, -2));
console.log(solveQuadEquation(1, 7, 12));
console.log(solveQuadEquation(1, 0, -4));
console.log(solveQuadEquation(1, -1, 0));
//3
const printArray = (arr) => {
    console.log(arr);
}
printArray([3, 4, 5]);
//4
function showDateTime() {
    let date = new Date();
    console.log(date.toLocaleString());
}
showDateTime();
//5
const swapValues = (a, b) => {
    a = a + b;
    b = a - b;
    a = a - b;
    console.log("The value of a and b after swapping:" + a + "," + b);
}
swapValues(2, 4);
swapValues(3, 4);
swapValues(4, 5);
//6
const reverseArr = (arr) => {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    console.log(newArr);
}
reverseArr([1, 2, 3, 4, 5]);
reverseArr(['A', 'B', 'C']);
//7
const capitalizeArr = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].toUpperCase());
    }
    console.log(newArr);

}

capitalizeArr(["Priya", "Lenka"]);
//8
const addItem = (item) => {
    let names = ["smith", "winderson"];
    names.push(item);
    return names;
}
console.log(addItem(45));
//9
const removeitem = (index) => {
    let names = ["smith", "winderson"];
    names.splice(index);
    return names;
}
console.log(removeitem(1));
//10
function sumArrayValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

console.log(sumArrayValues([2, 3, 4, 5]));
//11
const sumOfOdd = (...args) => {
    let oddSum = 0;
    args.forEach(function (arg) {
        if (arg % 2 != 0) {
            oddSum += arg;
        }
    })
    return oddSum;
}
console.log(sumOfOdd(1, 2, 3, 4));
//12
const sumOfEven = (...args) => {
    let evenSum = 0;
    args.forEach(function (arg) {
        if (arg % 2 === 0) {
            evenSum += arg;
        }
    })
    return evenSum;

}
console.log(sumOfEven(1, 2, 3, 4));
//13
const evenAndOdds = (num) => {
    let odd = 0;
    let even = 0;
    for (let i = 0; i <= num; i++) {
        if (i % 2 === 0) {
            even++
        } else if (i % 2 !== 0) {
            odd++
        }
    }
    return `the number of odds are: ${odd} \n the number of even are :${even}`
}
console.log(evenAndOdds(100));
//14
const sum = (...args) => {
    let sum = 0;
    args.forEach(function (num) {
        sum += num;
    })
    return sum;
}
console.log(sum(1, 2, 3));
//15   28:249:92:186 
const RandomUserIp = () => {
    let one = Math.floor(Math.random() * 255);
    let two = Math.floor(Math.random() * 255);
    let three = Math.floor(Math.random() * 255);
    let four = Math.floor(Math.random() * 255);
    return `IP: ${one}:${two}:${three}:${four}`
}
console.log(RandomUserIp());
//16  

const macipadress = "XX:XX:XX:XX:XX:XX".replace(/X/g, function () {
    return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16));
});
console.log(macipadress);
//17
const randomHexaNumberGenerator = () => {
    let chars = "0123456789ABCDEF";
    let hex = "";
    for (let i = 0; i < 6; i++) {
        hex += chars[Math.floor(Math.random() * chars.length)];
    }

    return `#${hex}`
}
console.log(randomHexaNumberGenerator());
//18   41XTDbE
const userIdGenerator = () => {
    let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    let userId = "";
    for (let i = 0; i < 7; i++) {
        userId += chars[Math.floor(Math.random() * chars.length)];

    }
    return userId;
}
console.log(userIdGenerator());








































//1
const userIdGeneratedByUser = () => {
    let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    let numberofId = prompt("how many id do you want to generate");
    let numbsrofChars = prompt("in how many chars");
    let ids = [];
    for (i = 0; i < numberofId; i++) {
        ids[i] = "";
        for (k = 0; k < numbsrofChars; k++) {
            ids[i] += chars[Math.floor(Math.random() * chars.length)];
        }
    }
    console.log(ids)
    ids.forEach(function (id) {
        console.log(id);
    })
}
console.log(userIdGeneratedByUser());
//2
const rgbColorGenerator = () => {
    let first = Math.floor(Math.random() * 255);
    let second = Math.floor(Math.random() * 255);
    let third = Math.floor(Math.random() * 255);
    return `rgb(${first},${second},${third})`;
}
console.log(rgbColorGenerator());
//3
const arrayOfHexaColors = () => {
    let chars = "0123456789ABCDEF";
    let n = Number(prompt("enter input number"));
    let hex = [];
    for (let k = 0; k <= n; k++) {
        hex[k] = "#";
        for (let i = 0; i < 6; i++) {
            hex[k] += chars[Math.floor(Math.random() * chars.length)];
        }
    }

    return hex;
}
console.log(arrayOfHexaColors());
//4
const arrayOfRgbColors = () => {
    let n = Number(prompt("enter input number"));
    let rgb = [];
    for (i = 0; i < n; i++) {
        rgb[i] = "rgb";
        rgb[i] += `(${Math.floor(Math.random() * 255)},`;
        rgb[i] += `${Math.floor(Math.random() * 255)},`
        rgb[i] += `${Math.floor(Math.random() * 255)},)`
    }
    return rgb;
}
console.log(arrayOfRgbColors());
//5
const convertHexaToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    
    return  [r, g, b ];
}

console.log(convertHexaToRgb("#ff33ff"));
//6
function ColorToHex(color) {
    var hexadecimal = color.toString(16);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}

function ConvertRGBtoHex(red, green, blue) {
    return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
}
console.log(ConvertRGBtoHex(255, 100, 200));
//7
generateColors = (type, arrLength) => {
    let chars = "0123456789ABCDEF";
    let colors = [];
    if (type === "rgb") {
        for (i = 0; i < arrLength; i++) {
            colors[i] = "rgb";
            colors[i] += `(${Math.floor(Math.random() * 255)},`;
            colors[i] += `${Math.floor(Math.random() * 255)},`
            colors[i] += `${Math.floor(Math.random() * 255)},)`
        }
    } else if (type === "hex") {
        for (let i = 0; i < arrLength; i++) {
            colors[i] = "#";
            for (k = 0; k < 6; k++) {
                colors[i] += chars[Math.floor(Math.random() * chars.length)];
            }
        }
    }
    return colors;
}
console.log(generateColors("rgb", 3));
console.log(generateColors('hex', 3));
console.log(generateColors('hex', 1));
console.log(generateColors('rgb', 1));
//8
const shuffleArray = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let random = Math.floor(Math.random() * arr.length);
        if (arr.indexOf(random) !== -1 && !newArr.includes(arr[random])) {
            newArr.push(arr[random]);
        }
    }
    return newArr;
}
console.log(shuffleArray([1, 2, 3, 4, 5, 6]));
//9   5!=5*4*3*2*1
const factorial = (num) => {
    let fact = 1;
    for (i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
}
console.log(factorial(5));
//10
const isEmpty = (value) => {
    if (value === undefined) {
        return `it's empty`
    } else {
        return `not empty`
    }
}
console.log(isEmpty());
//11
const sum = (...args) => {
    let sum = 0;
    args.forEach(function (arg) {
        sum += arg;
    })
    return sum;
}
console.log(sum(1, 2, 3, 4));

//12
const sumOfArrayItems = (arr) => {
    let sum = 0;
    arr.forEach(function (ar) {
        if (typeof ar === "number") {
            sum += ar;
        } else {
            sum = "it is a string type."
        }
    })
    return sum;
}
console.log(sumOfArrayItems([1, 2, 3]));
//13
const average = (arr) => {
    let sum = 0;
    arr.forEach(function (ar) {
        if (typeof ar === "number") {
            sum += ar;
            avg = Math.floor(sum / arr.length);
        } else {
            sum = "it's a string";
        }
    })
    return avg;
}
console.log(average([1, 2, 3, 4]));
//14
let modifyArray = arr => {
    if(arr.length < 5){
        return 'Item Not Found!';
    }  
    arr[4] = arr[4].toUpperCase();
    return arr;
  }
  console.log(modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot']));
  console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']));
  console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']));
//15
function isPrime(num) {

    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0 && num > 1) {
            return `${num} is a prime number`;
        }
        else {
            return `${num} is  not  a primenumber`
        }
    }

}
console.log(isPrime(6));
console.log(isPrime(7));
//16
function areAllUnique(arr) {
    for(let x = 1; x < arr.length; x++) {
      for(let i = 0; i< x; i++) {
        if(arr[x] == arr[i])
          return false;
      }
    } return true;
  }

console.log(areAllUnique([1,1,2,3]));
console.log(areAllUnique([1,2,3,4]));
//17
let areSameType = arr => {
    let type = typeof arr[0];
    for(const i of arr) {
      if(type != typeof i)
        return false;      
    }
    return true;
  }
console.log( areSameType( [2,3,4] ) );
console.log( areSameType( [2,3,4,"priya"] ) );
//18
function isValidVariable(varName) {
    let regex = /[_|\$|a-z|A-Z|0-9]+/;
    return regex.test(varName);
  }
  console.log(isValidVariable("javascript"));
  console.log(isValidVariable("$java_script"));
  console.log(isValidVariable("java@script"));
//19
let getUniqueRands = () => {
    let arr = [];
    for(let i = 0; i<7; i++) {
      let random = Math.floor(Math.random() * 9);
      
      let isUnique = true;
      for(const x of arr) {
        if(random == x) {
          isUnique = false;
          break;
        }
      }
      if(isUnique) arr.push(random);
    }
    return arr; 
  }
 console.log(getUniqueRands()) ;
//20
const reverseCountries = () => {
    let countries = ["India", "U.S.A", "italy", "canada", "Austrelia"];
    return countries.reverse();
}
console.log(reverseCountries());

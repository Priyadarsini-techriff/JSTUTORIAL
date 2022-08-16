let array = ["priya","darsini","lenka"];

// 1: regualr for loop   
console.time('For Loop');
for(let i = 0; i < array.length; i++) {
   console.log(array[i]);
}
console.timeEnd('For Loop')
// 2: For of loop     
console.time('for-of loop');
for(const value of array) {
   console.log(value);
}
console.timeEnd('for-of loop')

// 3. while loop  
console.time(`While Loop`)
let i = 0;
while(i < array.length) {
   console.log(array[i]);
   i++;
}
console.timeEnd('While Loop')

// 4: For each loop      
console.time('ForEach Loop')
array.forEach(x => console.log(x));
console.timeEnd(`ForEach Loop`);

//1
let set = new Set();
console.log(set);
//2
for (let i = 0; i <= 10; i++) {
    set.add(i);
}
console.log(set);
//3
set.delete(6);
console.log(set);
//4
set.clear();
console.log(set);
//5
let names = ["duggu", "bubu", "babu", "dudu", "kuku"]
let namesSet = new Set();
names.forEach(name =>{
    set.add(name);
})
console.log(set);
//6
// let countries = ["nigeria", "U.S.A", "germany", "england", "italy"]
// let countriesLength = new set();
// for (let i = 0; i < countries.length; i++){
//         console.log(`${countriesLength.add(countries[i])}- ${countriesLength.add(countries[i].length)}`);
// }
// console.log(countriesLength);
// const map=new Map(countriesLength)
 
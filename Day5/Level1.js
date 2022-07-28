const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary',
    'Ireland', 'Japan', 'Kenya']

const webTechs = [ 'HTML', 'CSS','JavaScript','React','Redux','Node','MongoDB']

//q1
const arr = Array();
console.log(arr);
//q2
console.log(webTechs);
//q3
console.log(webTechs.length);
//q4
console.log(webTechs[0]);
console.log(webTechs[3]);
let lastIndex = webTechs.length - 1;
console.log(webTechs[lastIndex]) ;

//q5
const mixedDataTypes = [
    'Priya',
    250,
    true,
    'developer',
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] 
console.log(mixedDataTypes);
console.log(mixedDataTypes.length);
//q6,q7,q8,q9,
const itCompanies = [ "Facebook","Google","Microsoft","Apple"," IBM", "Oracle", " Amazon",];
console.log(itCompanies);
console.log(itCompanies.length);


firstIndex = itCompanies[0];
console.log(firstIndex);

middleIndex = Math.floor(itCompanies.length / 2);
console.log(itCompanies[middleIndex]);

lastIndex1 = itCompanies.length - 1;
console.log(itCompanies[lastIndex1]);


//q.10
console.log(itCompanies.slice(0, itCompanies.length));
for (i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i]);
}
//11

let Company=itCompanies.toString();
ITCompanies=Company.toUpperCase();
console.log(ITCompanies.split(','))

//12
let sentence1 = "Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.";
console.log(sentence1.split(" ,"));
//13
 let company=(itCompanies.includes('Apple')) ;
if (company==false) {
    console.log('company is not found');
}
else{
    console.log(itCompanies);
}
//14
// let oo = []
// for (let i = 0; i < itCompanies.length; i++) {
//     oo.push(itCompanies[i].includes("oo"));
// }

//15
console.log(itCompanies.sort());

//16
console.log(itCompanies.reverse());
//17,18,19
let MNCCompany=["Facebook","Google","Microsoft","Apple"," IBM", "Oracle", " Amazon"];

console.log(MNCCompany.slice(0,3));
console.log(MNCCompany.splice(MNCCompany.length-3,MNCCompany.length));
middleCompany = Math.floor(MNCCompany.length / 2);
console.log((MNCCompany[middleCompany]).slice());

//20
console.log(MNCCompany.shift());
//21
MNCCompany.splice(3, 1); 

//22
console.log(MNCCompany.pop());
//23

console.log(MNCCompany.splice());


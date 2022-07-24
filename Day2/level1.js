//  q.1
 let Challenge='30 Days Of JavaScript';
console.log(Challenge);
// q.2
 let string ='JavaScript';
// q.3
 let js = 'JavaScript'
console.log(js.length)  ;
//q.4
console.log(string.toUpperCase());
//q.5
console.log(string.toLowerCase());
//q.6

let city = 'bhubaneswar'
console.log(city.substr(3, 4));


console.log(city.substring(4,10))
//q.7
let text1 = "JavaScript from 30 Days Of JavaScript"; 
let result = text1.slice(5, 10);
console.log(result);
//q.8

let word = '30 Days Of JavaScript';

console.log(word.includes('Script')) ;  // true
console.log(word.includes('script')) ;  // false


//q.9

let Name="Priyadarsini";
console.log(Name.split()) ;
console.log(Name.split('')) ;

//q.10
let topic = '30 Days Of JavaScript'

console.log(topic.split());
console.log(topic.split(' ')) ;

//q.11

let socialsite='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(socialsite.split(','));
//q.12

console.log(word.replace('JavaScript','Python'));
//q.13
console.log(word.charAt(15)) ;
//q.14
console.log(word.charCodeAt('J')) ; 

//q.15,q.16
console.log(word.indexOf('a'));

console.log(word.lastIndexOf('a'));
//q.17,q.18,q.19
let paraghrap='You cannot end a sentence with because because because is a conjunction';
console.log(paraghrap.indexOf('because'));
console.log(paraghrap.lastIndexOf('because'));
console.log(paraghrap.search('because'));
//q.20
let A = '   30 Days Of JavaScript   '
console.log(A.trim(' '));
//q.21,q.22,q.23
console.log(word.startsWith(30));

console.log(word.endsWith('JavaScript'));
console.log(word.endsWith('script'));

console.log(A.match('a'));
//q.24,q.25
let B='30 Days Of';
console.log(B.concat(' JavaScript'));
console.log(word.repeat(2));


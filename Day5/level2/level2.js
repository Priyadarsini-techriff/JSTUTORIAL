//q1
console.log(countries);
console.log(webTechs);
//q2
let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
console.log(text);
console.log(text.split(" "));
console.log(text.split(" ").length);
//q3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat');
console.log(shoppingCart);

shoppingCart.push('Sugar');
console.log(shoppingCart);

shoppingCart.splice(4,1);
console.log(shoppingCart);

shoppingCart[3]="GreenTea";
console.log(shoppingCart);

//4

let index= countries.includes('Ethiopia');
if(index==true){
    console.log(countries);
}
else{
    countries.push('Ethiopia');
    console.log(countries) ;
}

//5
let index1= webTechs.includes('Sass');
if(index1==true){
    console.log("Sass is a CSS preprocess");
}
else{
    webTechs.push('Sass');
    console.log(webTechs) ;
}
//6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
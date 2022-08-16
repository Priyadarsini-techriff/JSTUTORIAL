
let dog = {};

console.log(dog);

dog.name = "leo";
dog.legs = 4;
dog.color = "white"
dog.age = 4;
dog.bark = function () {
    console.log("woof woof ")
}
console.log(dog);
console.log(dog.bark);

console.log(Object.values(dog));

 dog.breed = "American Eskimo";
dog.getDogInfo = function () {
    console.log(Object.values(this.breed));
}

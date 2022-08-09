let a = [ 4, 5, 8, 9]
let b = [3, 4, 5, 7]
let A = new Set(a);
let B = new Set(b);
//1
let union = [...a, ...b]
let unions= new Set(union)
console.log(unions);
//2
let intersection = a.filter((num) => B.has(num));
let intersections = new Set(intersection);
console.log(intersection);
//3

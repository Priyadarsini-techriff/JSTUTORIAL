//1
const constants = [2.72, 3.14, 9.81, 37, 100]
let[e, pi, gravity, humanBodyTemp, waterBoilingPoint]=constants;
console.log(e, pi, gravity, humanBodyTemp, waterBoilingPoint);
//2
const countries = ["finland", "estonia", "sweden", "denmark", "norway"];
let [fin, est, sweden, den, nor] = countries;
console.log(fin, est, sweden, den, nor);
//3
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
  }
  let { width: w, height: h, area: a, perimeter: p } = rectangle;

console.log(w, h, a, p);
//1
let countries = [{
  name: "nigeria",
  capital: "fct",
  population: "7billion",
  languages: ["hausa", "igbo", "yoruba"]
},
{
  name: "germany",
  capital: "munich",
  population: "5billion",
  languages: ["german"]
}, {
  name: "italy",
  capital: "rome",
  population: "6billion",
  languages: ["italian", "latin"]
},
{
  name: "france",
  capital: "paris",
  population: "6billion",
  languages: ["french"]
}
]
let [name, capital, population, languages] = countries;
console.log(name, capital, population, languages);
//2

const Student = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

let [name, skills, [, , jsScore, reactScore]] = Student;
console.log(name, skills, jsScore, reactScore)
//3
const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

const convertArrayToObject = (students) => {
  let arrOfObjects = [];
  for(const [name, skills, scores] of students) 
      arrOfObjects.push({name, skills, scores});
  return arrOfObjects;
} 
console.log(convertArrayToObject(students));

//4
const s = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node',level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
      { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
  }
}

let skillz = {
bts: {skill: 'Bootstrap', level: 8}, 
exp: {skill: 'Express', level: 9}, 
sql: {skill: 'SQL', level: 8}, 
ds : 'SQL'
} 
const copiedStudent = { ...s };
copiedStudent.skills.frontEnd.push({ skill: "Bootstrap", level: 8 });
copiedStudent.skills.backEnd.push({ skill: "Express", level: 9 });
copiedStudent.skills.dataBase.push({ skill: "SQL", level: 8 });
copiedStudent.skills.dataScience.push("SQL");
console.log(copiedStudent);


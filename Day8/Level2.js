const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

  //1
  let max = 0
  let largerskillsuser;
  for (const property in users) {
      if (users[property].skills.length > max) {
          max = users[property].skills.length;
          largerskillsuser = property;
      }
  }
  console.log(largerskillsuser);

  //2
   let maxpoint;
  let userhavingmaxpoint={};
  for (const property in users) {
      if (users[property].points >= 50) {
        maxpoint = users[property].points;
        userhavingmaxpoint=property;
      }
  }
  console.log(userhavingmaxpoint);
  //3
//4
const usersCopy = Object.assign({}, users);
usersCopy['Hamza'] = {};
console.log(usersCopy);
  //5
  const keys = Object.keys(users);
  console.log(keys);
  console.log(users.hasOwnProperty('skills'));
  //6
  const values = Object.values(users);
  console.log(values);
  //7
  let country = {
    name: "Nigeria",
    capital: "jshjfi",
    population: "7 billion",
    languages: ["hausa", "igbo", "yoruba"]
}

console.log(`${country.name}\n${country.capital}\n${country.population}\n${country.languages}`);

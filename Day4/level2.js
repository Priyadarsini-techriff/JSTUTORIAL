//q.1
let marks=prompt('Enter Marks:')

if(marks<=100 && marks>=80){
    console.log('Grade is A')
}
else if(marks<=89 && marks>=70){
    console.log('Grade is B')
}
else if(marks<=69 && marks>=60){
    console.log('Grade is C')
}
else if (marks<=59 && marks>=50){
    console.log('Grade is D')
}
else if(marks<=49 && marks>=0){
    console.log('Grade is F')
}

//q.2

let monthss=prompt("Enter month name:")
if(monthss === 'sept' || monthss === 'oct' || monthss==="nov"){
    alert("the season is Autumn.");
}
else if(monthss === 'dec' || monthss === 'jan' || monthss==="feb"){
    alert("the season is Winter.");

}
else if(monthss === 'march' || monthss === 'apr' || monthss==="may"){
    alert("the season is Spring.");

}
else if(monthss === 'jun' || monthss === 'july' || monthss==="aug"){
    alert("the season is Summer.");

}
else{
    alert("invalid input.")
}
//q3
let dayUserInput = prompt('What day is today ?')

switch (dayUserInput) {
  case 'monday':
    alert('monday is a working day.')
    break
  case 'tuesday':
    alert('tuesday is a working day.')
    break
  case 'wednesday':
    alert('wednesday is a working day.')
    break
  case 'thursday':
    alert('thursday is a working day.')
    break
  case 'friday':
    alert('friday is a working day.')
    break
  case 'saturday':
    alert(' saturday is a weekend')
    break
  case 'sunday':
    alert(' sunday is a weekend')
    break
  default:
    alert('It is not a week day.')
}





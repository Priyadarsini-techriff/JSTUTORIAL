
month=prompt('Number of days in a month?')

if (month == 1 ||month == 3 ||month == 5 ||month == 7 ||month == 8 ||month == 10 ||month == 12){
    alert("Number of days is 31");
}
  
else if (month == 2 && (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0))) {
  alert("Number of days is 29");
}
 else if (month == 2) {
  alert("Number of days is 28");
} 
else
{
    alert("Number of days is 30");
} 


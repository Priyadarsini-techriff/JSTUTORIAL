//q.1
var age3 = prompt("Please enter your age:", "Type here");
if (age3 >= 18 ){
  
   alert("You are old enough to drive");
}

else{
   var driveage=18-age3;
   alert("You are left with"+ driveage + "years to drive.");
}

//q.2
var urage = prompt("Please enter your age:", "Type here");
var myage=26;
if(urage>myage){
    var driveage1=urage-myage;
    alert("You are "+ driveage1 + "years older to me.");
}
else{
    alert("I am older than you.");
}



//q3
var a2=4;
var b2=3;


if (a2>b2){
  console.log("a2 is greater than b2");
}
else{
  console.log("b2 is greater than a2");
}

var max = (a2 > b2) ? a2 : b2;

console.log(max= true)? "a2 is greater than b2" : "b2 is greater than a2" ;

//q4


const number = prompt("Enter a number: ");

if(number % 2 == 0) {
    alert("The number is even.");
}

else {
    alert("The number is odd.");
}
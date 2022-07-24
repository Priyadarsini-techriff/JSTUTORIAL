let str1 ="Love is the best thing in this world. Some found their love and some are still looking for their love";
console.log(str1.match(/love/gi));

let str2 ="You cannot end a sentence with because because because is a conjunction";
console.log(str2.match(/because/gi));

let sentence = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
console.log(sentence.replace(/[^a-z A-Z 0-9]/g,''));

// let salaryOf='He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
// 12*5000
// 10000
// 15000*12

 const salary=console.log(12*5000);
 

 const onlinesalary=console.log(12*15000);
 const annualbonous=1000;
 const sum=salary + onlinesalary + annualbonous;
 console.log(sum);

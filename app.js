const fname=prompt("enter your name:");
console.log(fname);
const gender = prompt("Enter your gender (male or female):");
console.log(gender);
let age = parseInt(prompt("Enter your age:"));
console.log(age);
if(age<=0){alert("please enter a correct age")}

let m=confirm("do you want to skip welcoming message?");
if(m==false){
    if(gender=="male")
    {alert("welcome mr."+fname)}
    else if(gender=="female"){alert("welcome ms."+fname)}
    else alert("welcome "+fname);


}





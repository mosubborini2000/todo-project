'use strict'


const fname = prompt("enter your name:");

console.log(fname);
const gender = prompt("Enter your gender (male or female):");
console.log(gender);
let age = parseInt(prompt("Enter your age:"));
console.log(age);
if (age <= 0) { alert("please enter a correct age") }

let m = confirm("do you want to skip welcoming message?");
if (m == false) {
    if (gender == "male") { alert("welcome mr." + fname) }
    else if (gender == "female") { alert("welcome ms." + fname) }
    else alert("welcome " + fname);
}

function questionAnswer() {
    const questionsArray = ["Are you good? (Yes or No)",
     "Do you like boxing? (Yes or No)",
      "Did you finish your study? (Yes or No)"];
    let answers = [];

    for (let i = 0; i < questionsArray.length; i++) {
        let answer = prompt(questionsArray[i]);
        if(answer==null){ alert("invalidAnswer!")
    }
    if (answer !== "Yes" && answer !== "No") {
        alert("Invalid answer!");
    
      }
        answers.push(answer);
    }
    
    return answers;
}
function printAnswers() {
    for (let i = 0; i < answersQuestion.length; i++) {
        const printAnswers = answersQuestion[i];
        console.log(printAnswers);
        
    }
}

let answersQuestion = questionAnswer();
console.log(answersQuestion);
printAnswers();





    
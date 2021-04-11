var usrInput = require("readline-sync");
inputNum = parseInt(usrInput.question("Enter Number: "));

var factorial = 1;

for (i = 1; i <= inputNum; i++) {
    factorial = factorial * i;    
}
console.log("Factorial of " + inputNum + " " + "is " + factorial);
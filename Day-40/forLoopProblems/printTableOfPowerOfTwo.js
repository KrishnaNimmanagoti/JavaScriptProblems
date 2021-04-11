var usrInput = require("readline-sync");
maxPower = parseInt(usrInput.question("Enter power: "));

for(i = 0; i<= maxPower; i++){
    console.log(Math.pow(2, i));
}
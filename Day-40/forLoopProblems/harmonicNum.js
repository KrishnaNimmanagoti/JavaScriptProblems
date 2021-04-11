var usrInput = require("readline-sync");
number = parseInt(usrInput.question("Enter a number: "));
harmonicNum = 0;
for (count = 1; count <= number; count++) {
    harmonicNum += 1/count;
}
console.log(harmonicNum);
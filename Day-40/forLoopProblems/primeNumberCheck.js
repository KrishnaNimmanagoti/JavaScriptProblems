var digit = require("readline-sync");
inputNumber = parseInt(digit.question("Enter a number: "));
flag = 0;
for (i = 2; i < inputNumber; i++) {
    if (inputNumber % i == 0) {
        flag = 1;
        break;
    }
}
if (flag == 0)
    console.log(inputNumber + " is a prime number");
else
    console.log(inputNumber + " is not a prime number");
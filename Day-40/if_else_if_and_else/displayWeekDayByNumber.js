var digit = require("readline-sync");
number = digit.question("enter the number from 1-7: ");

if (number == 1)
    console.log(number + " = Sunday");
else if (number == 2)
    console.log(number + " = Monday");
else if (number == 3)
    console.log(number + " = Tuesday");
else if (number == 4)
    console.log(number + " = Wednesday");
else if (number == 5)
    console.log(number + " = Thursday");
else if (number == 6)
    console.log(number + " = Friday");
else if (number == 7)
    console.log(number + " = Saturday");
else
    console.log("Enter a vilid number from 1-7");
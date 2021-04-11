var digit = require("readline-sync");
number = parseInt(digit.question("enter the number from 1-7: "));

switch (number) {
    case 1:
        console.log(number + " = Sunday");
        break;
    case 2:
        console.log(number + " = Monday");
        break;
    case 3:
        console.log(number + " = Tuesday");
        break;
    case 4:
        console.log(number + " = Wednesday");
        break;
    case 5:
        console.log(number + " = Thursday");
        break;
    case 6:
        console.log(number + " = Friday");
        break;
    case 7:
        console.log(number + " = Saturday");
        break;
    default:
        console.log("Enter a vilid number from 1-7");
}
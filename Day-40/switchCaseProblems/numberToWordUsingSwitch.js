var digit = require("readline-sync");
number = parseInt(digit.question("enter the single digit number from 0-9: "));

switch (number) {
    case 0:
        console.log(number + " = Zero");
        break;
    case 1:
        console.log(number + " = One");
        break;
    case 2:
        console.log(number + " = Two");
        break;
    case 3:
        console.log(number + " = Three");
        break;
    case 4:
        console.log(number + " = Four");
        break;
    case 5:
        console.log(number + " = Five");
        break;
    case 6:
        console.log(number + " = Six");
        break;
    case 7:
        console.log(number + " = Seven");
        break;
    case 8:
        console.log(number + " = Eight");
        break;
    case 9:
        console.log(number + " = Nine");
        break;
    default:
        console.log("Enter a valid number from 0-9");
}
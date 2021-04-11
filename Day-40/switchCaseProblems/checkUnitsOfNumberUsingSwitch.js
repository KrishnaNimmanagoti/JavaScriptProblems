var digit = require("readline-sync");
number = parseInt(digit.question("Enter a number: "));

switch (number) {
    case 1:
        console.log("Units for " + number + " is: Unit");
        break;
    case 10:
        console.log("Units for " + number + " is: Ten");
        break;
    case 100:
        console.log("Units for " + number + " is: Hundred");
        break;
    case 1000:
        console.log("Units for " + number + " is: Thousand");
        break;
    case 10000:
        console.log("Units for " + number + " is: TenThousand");
        break;
    case 100000:
        console.log("Units for " + number + " is: Lakh");
        break;
    default:
        console.log("Enter a vilid number");
}
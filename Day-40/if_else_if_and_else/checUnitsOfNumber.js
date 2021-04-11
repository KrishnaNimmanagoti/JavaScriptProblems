var digit = require("readline-sync");
number = digit.question("Enter a number from 0-999999: ");

if ((number >= 0) && (number < 10))
    console.log("Units for "+ number + " is: Unit");
else if ((number >= 10) && (number < 100))
    console.log("Units for "+ number + " is: Ten");
else if ((number >= 100) && (number < 1000))
   console.log("Units for "+ number + " is: Hundred");
else if ((number >= 1000) && (number < 10000))
    console.log("Units for "+ number + " is: Thousand");
else if ((number >= 10000) && (number < 100000))
    console.log("Units for "+ number + " is: TenThousand");
else if ((number >= 100000) && (number < 1000000))
    console.log("Units for "+ number + " is: Lakh");
else
    console.log("Enter a vilid number from 0-999999");
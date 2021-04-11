var digit = require("readline-sync");
userChoice = parseInt(digit.question("Select type of conversion: \n1. Feet to inch\n2. Feet to Meter\n3. Inch to Feet\n4. Meter to Feet\n"));
number = parseInt(digit.question("Enter the value to be convert: "));

switch (userChoice) {
    case 1: console.log(number + " feet = " + number * 12 + " inch"); break;
    case 2: console.log(number + " feet = " + number / 3.281 + " meter"); break;
    case 3: console.log(number + " inch = " + number / 12 + " feet"); break;
    case 4: console.log(number + " meter = " + number * 3.281 + " feet"); break;
    default: console.log("Select a valid number to be convert from 1-4")
}
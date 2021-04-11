const digit = require("readline-sync");
let a = parseInt(digit.question("Enter value a :"));
let b = parseInt(digit.question("Enter value b :"));
let c = parseInt(digit.question("Enter value c :"));

console.log("a = " + a + ", b = " + b + ", c = " + c);

var exp_1 = (a + b * c);
var exp_2 = (a % b + c);
var exp_3 = (c + a / b);
var exp_4 = (a * b + c);

console.log("\nexp_1: a + b * c = " + exp_1 + "\nexp_2: a % b + c = " + exp_2 + "\nexp-3: c + a / b = " + exp_3 + "\nexp-4: a * b + c = " + exp_4 + "\n");

if (exp_1 > exp_2) {
    max1 = exp_1;
    min1 = exp_2;
}
else {
    max1 = exp_2;
    min1 = exp_1;
}
if (exp_3 > exp_4) {
    max2 = exp_3;
    min2 = exp_4
}
else {
    max2 = exp_4;
    min2 = exp_3
}

if (max1 > max2)
    console.log("Maximum value is: "  + max1);
else
    console.log("Maximum value is: " + max2);

if (min1 < min2)
    console.log("Minimum value is: " + min1);
else
    console.log("Minimum value is " + min2);
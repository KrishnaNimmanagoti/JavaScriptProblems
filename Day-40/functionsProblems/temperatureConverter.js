function celciusToFarenheit(value) {
    value = parseInt(digit.question("Enter the value in range 0-100: "));
    if (value >= 0 && value <= 100)
        console.log("Temp in Farenheit: " + ((value * 9 / 5) + 32));
    else
        console.log("Enter the value in range 0-100");
}
function farenheitTOcelcius(value) {
    value = parseInt(digit.question("Enter the value in range 32-212: "));
    if (value >= 32 && value <= 212)
        console.log("Temp in Celcius: " + ((value - 32) * (5 / 9)));
    else
        console.log("Enter the value in range 32-212");
}

var digit = require("readline-sync");
userChoice = parseInt(digit.question("Press '1' to convert celcius to Farenheit:\nPress '2' to convert Farenheit to celcius: "));

switch (userChoice) {
    case 1:
        celciusToFarenheit();
        break;
    case 2:
        farenheitTOcelcius();
        break;
    default:
        console.log("Enter a valid number 1 or 2");
}
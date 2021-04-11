var year;

function checkLeapYear(year) {
    const leap = new Date(year, 1, 29).getDate() === 29;
    if (leap) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

var digit = require("readline-sync");
year = digit.question("enter the Single digit no: ");
checkLeapYear(year);
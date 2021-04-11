function checkPalindrome(number) {
    const temp;
    var reverse = 0;
    var sum = 0;
    while (number > 0) {
        let new1 = 0;
        sum = number % 10;
        number = parseInt(number / 10);
        reverse = reverse * 10 + sum;
    }
    if (temp == reverse) {
        console.log(reverse + " is palindrome");
    } else {
        console.log(reverse + " is not palindrome");
    }
}

var digit = require("readline-sync");
var number = parseInt(digit.question("Enter Number To Check Palindrome Or Not "))
checkPalindrome(number);
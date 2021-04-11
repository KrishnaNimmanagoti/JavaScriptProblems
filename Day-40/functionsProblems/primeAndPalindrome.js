function checkPrime(number) {
    flag = 0;
    for (i = 2; i < number; i++) {
        if (number % i == 0) {
            flag = 1;
            break;
        }
    }
    return flag;
}
function checkPalindrome(number) {
    const temp = number;
    var reverse = 0;
    var sum = 0;
    while (number > 0) {
        sum = number % 10;
        number = parseInt(number / 10);
        reverse = reverse * 10 + sum;
    }
    if (temp == reverse) {
        console.log(reverse + " is palindrome");
        flag = checkPrime(reverse);
        if (flag == 0)
            console.log("Palindrome Number: " + reverse + " is a prime number");
        else
            console.log("Palindrome Number: " + reverse + " is not a prime number");
    } else {
        console.log(reverse + " is not palindrome");
    }
}

var digit = require("readline-sync");
number = parseInt(digit.question("Enter a number: "));
flag = checkPrime(number);
if (flag == 0)
        console.log(number + " is a prime number");
else
    console.log(number + " is not a prime number");
checkPalindrome(number);
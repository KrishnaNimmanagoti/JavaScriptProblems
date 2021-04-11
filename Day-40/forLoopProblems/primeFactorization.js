var usrInput = require("readline-sync");
userInputNum = parseInt(usrInput.question("Enter number: "));
console.log("Prime factors for " + usrInput + " are");

for (i = 2; i <= userInputNum; i++) {
    if (userInputNum % i == 0) {
        var flag = 0;
        for (j = 2; j * j <= i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        if (flag == 0) {
            console.log(i);
        }
    }
}
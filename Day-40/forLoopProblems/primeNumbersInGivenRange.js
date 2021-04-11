var usrInput = require("readline-sync");
startNumber = parseInt(usrInput.question("Enter a Start number: "));
endNumber = parseInt(usrInput.question("Enter a End number: "));
console.log("Prime numbers between " + startNumber + " and " + endNumber + " are: ");

for (i = startNumber; i <= endNumber; i++) {
    if (i == 1 || i == 0)
        continue;
    flag = 1;

    for (j = 2; j <= i / 2; ++j) {
        if (i % j == 0) {
            flag = 0;
            break;
        }
    }

    if (flag == 1)
        console.log(i);
}
var digit = require("readline-sync");
maxPower = parseInt(digit.question("Enter power: "));

power = 0;
i = 0;

while ((power < 256) & (i <= maxPower)) {
    power = Math.pow(2, i);
    console.log(power);
    i++;
}
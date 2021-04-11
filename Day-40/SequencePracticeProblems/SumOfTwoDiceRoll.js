var sum = 0;
for (count = 1; count <= 2; count++) {
    dice = Math.floor(Math.random() * 6 + 1);
    console.log("Dice-" + count + " is: " + dice)
    sum += dice;
}
console.log("Sum of Two Dice is: " + sum)
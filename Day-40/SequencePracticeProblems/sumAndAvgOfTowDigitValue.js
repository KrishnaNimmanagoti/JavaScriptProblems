var sum = 0, count = 0;
for (count = 0; count < 5; count++) {
    num = Math.floor(Math.random() * 90 + 10);
    console.log("Number " + (count + 1) + " is: " + num)
    sum += num;
}
console.log("Sum of Numbers is: " + sum)
console.log("Avg of Numbers is: " + sum / count)
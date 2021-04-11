var max = 0, min = 1000

for (count = 1; count <= 5; count++) {
    randomValue = Math.floor(Math.random() * 899 + 100);
    console.log(randomValue)
    if (randomValue > max)
        max = randomValue
    if (randomValue < min)
        min = randomValue
}
console.log("max: " + max)
console.log("min: " + min)
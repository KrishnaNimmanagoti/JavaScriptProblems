var gambler = 100;
var she = 100;
var gamblerwon = 0;
var shewon = 0;
var noOfbetmade = 0;

while (gambler > 0 && she > 0) {
    noOfbetmade++;
    coinFlip = Math.floor(Math.random() * 10 % 2);
    if (coinFlip == 1) {
        gambler += 1;
        she -= 1;
        gamblerwon++;
    }
    else {
        she += 1;
        gambler -= 1;
        shewon++;
    }
}
if (gambler > she)
    console.log("Gambler Won " + gamblerwon + " times, and amount is: " + gambler);
else
    console.log("She Won " + shewon + " times, and amount is: " + she);
console.log("Number of bets done were " + noOfbetmade);
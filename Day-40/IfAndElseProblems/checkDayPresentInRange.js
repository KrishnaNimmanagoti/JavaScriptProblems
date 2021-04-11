function checkStatus(month, day) {
    if ((month >= 3) && (month <= 6)) {
        var dlimit = 30 + (month % 2);
        if ((day > 1) && (day <= dlimit)) {
            var combo1 = (month * 100);
            var date = day * 1;
            var combo = combo1 + date;
            if ((combo > 320) && (combo < 620))
                console.log("True: " + day + "/" + month + " is between March 20 and June 20")
            else
                console.log("False: " + day + "/" + month + " is not between March 20 and June 20")
        } else
            console.log("False: " + day + "/" + month + " is not between March 20 and June 20")
    } else
        console.log("False: " + day + "/" + month + " is not between March 20 and June 20")
}

var digit = require("readline-sync");
month = digit.question("enter the Month: ");
day = digit.question("enter the Day: ");
checkStatus(month, day);
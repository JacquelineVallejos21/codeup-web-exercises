'use strict;'

var i = 1;

while (i < 65536) {
    i = i * 2
    console.log(i);
}

//Do While Loop
// An ice cream seller can't go home until she sells all of her cones.
// First write enough code that generates a random number between 50 and 100
// representing the amount of cones to sell before you start your loop. Inside of the
// loop your code should generate another random number between 1 and 5, simulating
// the amount of cones being bought by her clients. Use a do-while loop to log to
// the console the amount of cones sold to each person. This is a way get the random numbers for this exercise.

'use strict;'


// a random number that represents the number of cones I can sell today
let totalCanSell = Math.ceil(Math.random() * (100 - 50) + 50);
console.log("The number of cones I can sell" +  totalCanSell);


// total cones sold today
let totalSold = 0;

do {
    let conesBought = Math.ceil(Math.random() * (5 - 1) + 1);

    if ((totalSold + conesBought) > totalCanSell) {
        console.log("I'm sorry, I can't sell " + conesBought);
        continue;
    }
    console.log("My customer bought" + conesBought);
    totalSold = totalSold + conesBought;
    console.log("I've sold this many " + totalSold);

} while (totalSold < totalCanSell);
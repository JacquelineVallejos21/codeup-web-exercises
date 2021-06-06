//Create a function named showMultiplicationTable that accepts a
// number and console.logs the multiplication table for that number
// (just multiply by the numbers 1 through 10)

function showMultiplicationTable(num) {
    for (var index = 1; index < 11; index++) {
        console.log(num + "x" +index + "=" +num*index);
    }
}
    showMultiplicationTable(7);
//Use a for loop and the code from the previous lessons to generate 10
// random numbers between 20 and 200 and output to the console whether each number is odd or even.
for (let ev = 0; ev<10; ev++) {
    let random = Math.ceil(Math.random() * (200 - 20) + 20);
    if (random % 2 !== 0) {
        console.log(random + " is odd");}
    else {
        console.log(random + " is even")
    }

}
//Create a for loop that uses console.log to create the output shown below.
for (var index = 1,number = "";index < 10;index++) {
    number += "1";
    console.log(index * number)}

//Create a for loop that uses console.log to create the output shown below.//

for (var i = 100; i >=5; i = i -5) {
    console.log(i);
}

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
function randoms(){
    for(var i = 0; i < 10; i++){
        var random = Math.ceil(Math.random()*180 + 20);
        if((random % 2) == 0){
            console.log(random + " is even!");
        }
        else console.log(random + " is odd!");
    }
}
randoms();
//Create a for loop that uses console.log to create the output shown below.
for(var i = 1; i < 10; i++){
    var num = i.toString();
    var final = num.repeat(i);
    console.log(final);
}

//Create a for loop that uses console.log to create the output shown below.//

for (var i = 100; i >=5; i = i -5) {
    console.log(i);
}

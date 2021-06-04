//Create a function named showMultiplicationTable that accepts a
// number and console.logs the multiplication table for that number
// (just multiply by the numbers 1 through 10)

function showMultiplicationTable(x) {
    for (var index = 1; index < 10; index++) {
        console.log(x + "x" + index + "=" + (x * index));
    }
}
    showMultiplicationTable(7);
//Use a for loop and the code from the previous lessons to generate 10
// random numbers between 20 and 200 and output to the console whether each number is odd or even.
//for (let Num = 0; Num <10; Num ++) {
//var ranNum = Math.ceil(Math.random() * 100) + 10;
//if (ranNum % 2 === 0)

//{
//console.log("This number is even" + ranNum);
//}else{
//console.log("This number is odd" + ranNum);
//}
//}
//console.log(randomNum());

//Create a for loop that uses console.log to create the output shown below.
function tree(){
     for(let x=1; x<10; x++){
         var number ="";
         number=x;
         for (let y = 1; y<=x;y++){
             number=number+x.toString();
         }
         console.log(x.toString() );

         }
     }
tree();

//Create a for loop that uses console.log to create the output shown below.//

for (var i = 100; i >=5; i = i -5) {
    console.log(i);
}

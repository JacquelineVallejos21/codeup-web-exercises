//var random= Math.floor((Math.random()*50) +1);

//console.log("Random odd number to skip is: " + random);

//for (var i = 1; i <100; i++) {

//    if (i % 2 === 0) {
        //Skip the even numbers.
//        continue;
//    }

//    if (random === i ) {
//   console.log("Yikes! Skipping number: " + i);
//    } else {
//        console.log("Here is an odd number:" + i);
//    }

//    if (i >=49) {
//        break;
//    }
var oddNumber
oddNumber=prompt("what is your number:" + oddNumber)

for (var index = 0; index < 50; index++) {

    if (index === Number(oddNumber)) {
        console.log("Yikes! Skipping number: " + index);
        continue
    }
    if (index % 2 !=0) {
        console.log("Here is an odd number: " + index);
    }
}
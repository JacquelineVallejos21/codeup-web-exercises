//var oddNumber;
//oddNumber=prompt("Choose a number between 1 and 50");

//for (var index = 0; index < 50; index++) {

//    if (index === Number(oddNumber)) {
//        console.log("Yikes! Skipping number: " + index);
//        continue
//    }
//   if (index % 2 !=0) {
//        console.log("Here is an odd number: " + index);
//    }
//}

var oddNumber;

while(true){
    oddNumber = prompt("Choose an odd number between 1 and 50");
    oddNumber = Number(oddNumber);
    if(oddNumber >= 1 && oddNumber <= 50 && (oddNumber % 2) != 0){
        break;
    }
}


for(var index = 0; index < 50; index++){
    if(index == oddNumber){
 console.log("Yikes! Skipping number: " + index);
        continue;
    }
    if(index % 2 != 0){
    console.log("Here's an odd number: " + index);
   }
}
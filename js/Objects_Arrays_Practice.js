//1. Create a function called removeDuplicates that accepts an array of strings and returns
// the array with all duplicate elements filtered out.
//     Examples
// removeDuplicates(["bob","squid","samantha","bob"]);
// // Should return the following
// ["bob","squid","samantha"]
//
// removeDuplicates(["tilda","tilda"]);
// // Should return the following
// ["tilda"]
//
// removeDuplicates(["2016-02-13","1994-12-21","2016-02-13","2016-02-13","2005-11-29"]);
// // Should return the following
// ["1994-12-21","2016-02-13","2005-11-29"]

var arr = ["bob","squid","samantha","bob"];

function removeDuplicates(data){
    return data.filter((value, index) => data.indexOf(value) === index);
}
console.log(removeDuplicates(arr));

var arr = ["tilda","tilda"];

function getDuplicates(data){
    return data.filter((value, index) => data.indexOf(value) === index);
}
console.log(getDuplicates(arr));

var arr = ["2016-02-13","1994-12-21","2016-02-13","2016-02-13","2005-11-29"];
function removeDuplicates(data){
    return [...new Set(data)]
}
console.log(removeDuplicates(arr));

// function removeDuplicates(arrayOfStrings){
//
//     var uniqueStrings = [];
//     for (let i = 0; i < arrayOfStrings.length; i++){
//         if (uniqueStrings.includes(arrayStrings[i])){
//
//         }else{
//             uniqueStrings.push(arrayOfStrings[i])
//         }
//     }
//     return uniqueStrings
// }
//
// console.log(removeDuplicates(["bob", "squid","samantha", "bob"]));
// console.log(removeDuplicates(["tilda", "tilda"]));
// console.log(removeDuplicates(["2016-02-13","1994-12-21","2016-02-13","2016-02-13","2005-11-29"]));

// 2. Create a function called max that accepts an array of numbers and returns the largest number from that array.
//     Examples
// max([4,34,193,2,345,46,0]);
// // Should return the following
// 345
//
// max([-34,83,21,38,-2039,3.2]);
// // Should return the following
// 83
//
// max([54.5,2,34,-93]);
// // Should return the following
// 54.5
function max(input){
    if(toString.call(input) !== "[object Array]")
        return false;
    return Math.max.apply(null, input);
}

console.log(max([4,34,193,2,345,46,0]));
console.log(max([-34,83,21,38,-2039,3.2]));
console.log(max([54.5,2,34,-93]));

// function max(arrayOfNumbers){
//     return Math.max(...arrayOfNumbers);
// }
//
// console.log(max([4,34,193,2,345,46,0]));
// console.log(max([-34,83,21,38,-2039,3.2]));
// console.log(max([54.5,2,34,-93]));

// function max(arrayOfNumbers){
//
//     var largestNumber;
//
//     for (let i = 0; i < arrayOfNumbers.length; i++){
//
//         // [4,34,193,2,345,46,0]
//         if (largestNumber === undefined){
//             largestNumber = arrayOfNumbers[i]
//         }
//         if(arrayOfNumbers[i] > largestNumber){
//             console.log("I got in here")
//             largestNumber = arrayOfNumbers[i]
//         }
//     }
//     return largestNumber;
// }



// 3. Create a function called mostOccuringNumber that accepts an array of numbers and returns the number that
// occurs the most within that array.
//     Examples
// mostOccuringNumber([8,93,28,8,27,-62,32,8,-62]);
// // Should return the following
// 8
//
// mostOccuringNumber([8,93,-62.0,28,27,-62,32,8,-62]);
// // Should return the following
// -62
//
// mostOccuringNumber([73.5,8,0,-3,3.50,8.25,3.50]);
// // Should return the following
// 3.5
//

// function mostOccuringNumber(numbers) {
//     // 1. count the # of times each number occurs
//     var counts = [];
//     for (let i = 0; i < numbers.length; i++) {
//         var aNumber = numbers[i];
//         if(counts[aNumber] === undefined) {
//             counts[aNumber] = 1;
//         } else {
//             counts[aNumber]++; // gives us access to the counts element at index "aNumber"
//         }
//     }
//     // console.log(counts);
//     // counts[0] = 55;
//     // counts["frogs"] = 1;
//     // 2. scan through the associative array and keep track of the value with the highest count
//     var maxCount = 0;
//     var winningNumber = "";
//     for (const countsKey in counts) {
//         // console.log("the counts element at countsKey " + countsKey + " has a tally of " + counts[countsKey]);
//         var currentCount = counts[countsKey];
//         // when currentCount is > maxCount, we have a new winner so far
//         if(currentCount > maxCount) {
//             // update 2 things when we have a new winner
//             maxCount = currentCount;
//             winningNumber = countsKey;
//         }
//     }
//     return winningNumber;
// }
// console.log(mostOccuringNumber([8,93,28,8,27,-62,32,8,-62]));
// console.log(mostOccuringNumber([8,93,-62.0,28,27,-62,32,8,-62]));
// console.log(mostOccuringNumber([73.5,8,0,-3,3.50,8.25,3.50]));

var arr1=[8,93,28,8,27,-62,32,8,-62];
var mf = 1;
var m = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
    for (var j=i; j<arr1.length; j++)
    {
        if (arr1[i] == arr1[j])
            m++;
        if (mf<m)
        {
            mf=m;
            item = arr1[i];
        }
    }
    m=0;
}
console.log(item+" ( " +mf +" times ) ") ;

var arr2=[8,93,-62.0,28,27,-62,32,8,-62];
var mf = 1;
var m = 0;
var item;
for (var i=0; i<arr2.length; i++)
{
    for (var j=i; j<arr2.length; j++)
    {
        if (arr2[i] == arr2[j])
            m++;
        if (mf<m)
        {
            mf=m;
            item = arr2[i];
        }
    }
    m=0;
}
console.log(item+" ( " +mf +" times ) ") ;

var arr3=[73.5,8,0,-3,3.50,8.25,3.50];
var mf = 1;
var m = 0;
var item;
for (var i=0; i<arr3.length; i++)
{
    for (var j=i; j<arr3.length; j++)
    {
        if (arr3[i] == arr3[j])
            m++;
        if (mf<m)
        {
            mf=m;
            item = arr3[i];
        }
    }
    m=0;
}
console.log(item+" ( " +mf +" times ) ") ;


//4. Create a function called whoIsPassing that accepts an array of objects, where each object is a student's name
// and class average (from 0 to 100). Your function will return an array of objects where each object is a student's
// name and whether he/she is passing. Note that a class average of 60 and higher is passing.
//     Examples
// var students = [
//     {
//         name: "Phill Rundy",
//         classAverage: 53
//     },
//     {
//         name: "Samuel Moore",
//         classAverage: 71
//     },
//     {
//         name: "Mark Tendly",
//         classAverage: 84
//     },
//     {
//         name: "Dough Mosh",
//         classAverage: 87
//     },
//     {
//         name: "Bran Thomb",
//         classAverage: 93
//     },
//     {
//         name: "Mario Yushi",
//         classAverage: 82
//     },
//     {
//         name: "Nathan Skywalker",
//         classAverage: 52
//     }
// ]
//
// whoIsPassing(students);
// // Should return the following
// [
//     {
//         name: "Phill Rundy",
//         passing: false
//     },
//     {
//         name: "Samuel Moore",
//         passing: true
//     },
//     {
//         name: "Mark Tendly",
//         passing: true
//     },
//     {
//         name: "Dough Mosh",
//         passing: true
//     },
//     {
//         name: "Bran Thomb",
//         passing: true
//     },
//     {
//         name: "Mario Yushi",
//         passing: true
//     },
//     {
//         name: "Nathan Skywalker",
//         passing: false
//     }
// ]

function whoIsPassing(arrayOfStudents){
var passingResults = [];

    for (let i = 0; i < arrayOfStudents.length; i++) {

        var currentStudentsName = arrayOfStudents[i].name


        var isCurrentStudentPassing = (arrayOfStudents[i].classAverage >= 60);

        passingResults.push(
            {
                name: currentStudentsName,
                passing: isCurrentStudentPassing
            }
        )
    }
    return passingResults;
}

var students = [
    {
        name: "Phill Rundy",
        classAverage: 53
    },
    {
        name: "Samuel Moore",
        classAverage: 71
    },
    {
        name: "Mark Tendly",
        classAverage: 84
    },
    {
        name: "Dough Mosh",
        classAverage: 87
    },
    {
        name: "Bran Thomb",
        classAverage: 93
    },
    {
        name: "Mario Yushi",
        classAverage: 82
    },
    {
        name: "Nathan Skywalker",
        classAverage: 52
    }
]
                    // arrayOfStudents = students
console.log(whoIsPassing(students));

// 5. Create a function called dateStringToObject that accepts a date in the following string format "YYYY-MM-DD" and returns an object that contains month, day, and year properties.
//     Examples
// dateStringToObject("2016-2-13");
// // Should return the following
// {month: 2, day: 13, year: 2016}
//
// dateStringToObject("2005-11-29");
// // Should return the following
// {month: 11, day: 29, year: 2005}
//
// dateStringToObject("1994-12-21");
// // Should return the following
// {month: 12, day: 21, year: 1994}

function dateStringToObject(string) {

    var splitString=string.split("-")
    return {month: splitString[1], day: splitString[2], year: splitString[0]};
}
console.log(dateStringToObject("2016-2-13"));
console.log(dateStringToObject("2005-11-29"));
console.log(dateStringToObject("1994-12-21"));




//6. Create a function called reverseString that that accepts a string and returns a string with the characters in reverse order.
//     Examples
// reverseString("squid");
// // Should return the following
// "diuqs"
//
// reverseString("tilda");
// // Should return the following
// "adlit"
//
// reverseString("2016-02-13");
// // Should return the following
// "31-21-6102"

function string_reverse(str)
    {
   return str.split("").reverse().join("");
}

console.log(string_reverse("squid"));
console.log(string_reverse("tilda"));
console.log(string_reverse("2016-02-13"));

// function reverseString(string){
//
//     var revString = ""
//    for (let i = string.length - 1; i >=0 ; i--){
//        revString += string.charAt(i);
//     }
//    return revString
// }



// 7. Create a function called numberInfo that accepts a number and returns an object with the properties isPositive, isEven, isZero. The properties should either be true or false based on if the parameter meets the criteria.
//     Examples
// numberInfo(-1);
// // Should return the following
// {
//     isPositive: false,
//         isEven: false,
//     isZero: false
// }
//
// numberInfo(6);
// // Should return the following
// {
//     isPositive: true,
//         isEven: true,
//     isZero: false
// }
//
// numberInfo(0);
// // Should return the following
// {
//     isPositive: false,
//         isEven: true,
//     isZero: true
// }


function numberInfo(number) {

    var isNumberPositive = (number > 0);
    var isNumberEven = (number % 2 === 0);
    var isNumberZero = (number === 0);

    return {
        isPositive: isNumberPositive,
        isEven: isNumberEven,
        isZero: isNumberZero,
    }
}

console.log(numberInfo(-1));
console.log(numberInfo(6));
console.log(numberInfo(0));

// function numberInfo(number){
//         return {
//         isPositive: number > 0;
//         isEven: number % 2 === 0;
//         isZero: number === 0;
// }


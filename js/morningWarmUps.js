// TODO: Create a function named countSpaces that accepts a string and returns the total number of spaces in the string.
const str = 'this is a string';
const countSpaces = (str = '') => {
    let count = 0;
    for(let i = 0;
        i < str.length; i++){
        const el = str[i];
        if(el !== ' '){
            continue; };
        count++; };
    return count
};
console.log(countSpaces(str));

// July 6th 2021
// TODO: Create a function named capitalizeAllNames that accepts an array of strings and returns the array with all
//  of its elements capitalized.
// Example:  capitalizeAllNames(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["BOB","SETH","TOFU","TOYOTA"]
function capitalizeAllNames(x){
        var array2 = ["BOB","SETH","TOFU","TOYOTA"];
    array2 = array2.map(function(x){ return x.toUpperCase(); })
}

// TODO: Create a function named capitalizeFirstLetter that accepts an array of strings and
//  returns the array with all of the first letters in
//  each string being capitalized while having the rest of the string lowercase look at the example below for reference.
// Example:  capitalizeFirstLetter(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["Bob","Seth","Tofu","Toyota"]
function capitalizeFirstLetter(x){
    var array2 = ["Bob","Seth","Tofu","Toyota"];
    array2 = array2.map(function(x){ return x.toLowerCase(); })
}

// July 7th 2021
// TODO: Create a method on the object down below named getFullName that when called returns the users full name using the "this" key term.
// Example: personOne.getFullName() ---- returns ----> "silvia floopertan"
var personOne = {
    firstName: "Silvia",
    lastName: "Floopertan",
    ageInYears: 34,
    heightInInches: 65,
    getFullName: function(){
        return this.firstName + " " + this.lastName;
    }
}
console.log(personOne.getFullName());

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// TODO: Create a method on the object down below named getNicelyFormattedFullName that when called returns the
//  users full name with both first letters in the names being capitalized look at example down below for more reference.
// Example: personOne.getNicelyFormattedFullName() ---- returns ----> "Dan Valdarez"
var personTwo = {
    firstName: "dan",
    lastName: "valdarez",
    ageInYears: 61,
    heightInInches: 73,
    getNicelyFormattedFullName: function () {
        return capitalizeFirstLetter(this.firstName) + " " + capitalizeFirstLetter(this.lastName)
    }
}
console.log(personTwo.getNicelyFormattedFullName());
// TODO: Create a method on the object below that gives us the behavior that the example implies.
// Example: personThree.intro() ---- returns ----> "Hello, My name is Arlene Martinez and I am 25 years old"
// Example: personThree.intro() ---// TODO: Create a method on the object b- returns ----> "Hello, My name is Arlene Martinez and I am 25 years old"
var personThree = {
    firstName: "arlene",
    lastName: "martinez",
    ageInYears: 25,
    heightInInches: 62,
    Start: function() {
        return "Hello, my name is " + capitalizeFirstLetter (this.firstName) +" " + capitalizeFirstLetter (this.lastName)
          + "and" + "" + "I am" + this.ageInYears  + "years old."
    }
}

console.log(personThree.Start());

// July 8th 2021
// Part 1
// TODO: Create a function that takes an array of strings and returns an array of objects
//  where each object has 2 properties: originalString and countOfLetters
// Example: input: ["hello", "dave"]
//          returns: [
//                    { "originalString":"hello", lengthOfOriginalString:5 },
//                    { "originalString":"dave", lengthOfOriginalString:4 }
//                   ]

function arrayOfStringsToObjects(arrayStrings){

    var arrayObjects = []

    for (let i = 0; i < arrayStrings.length; i++) {
        // console.log(arrayStrings[i])
        arrayObjects.push({ originalString:arrayStrings[i], lengthOfOriginalString:arrayStrings[i].length })
    }
    return arrayObjects;
}

var arrayOfObjects = arrayOfStringsToObjects(["hello", "dave"])
console.log(arrayOfObjects)

// Part 2
// TODO: Create a function that takes the array of objects from PART 1
//  and returns a string of all of the originalStrings concatenated with spaces in between
// Example: input: [
//                    { "originalString":"hello", lengthOfOriginalString:5  },
//                    { "originalString":"dave", lengthOfOriginalString:4 }
//                  ]
//         returns: "hello dave"

function arrayOfObjectsToStrings(arrayObjectsParam){

    var results = []

    arrayObjectsParam.forEach(function (singleObject){

        results.push(singleObject.originalString)

    })

    return results.join(" ")


}

console.log(arrayOfObjectsToStrings(arrayOfObjects))


// TODO: Create a function named getTallUsers that accepts an array of objects. The objects in the array will be in the same format
//  as PersonOne, PersonTwo, and PersonThree. The functions job is to return an array of users that have heightInInches
//  equal to or greater than 65.

//My answer;
// var people = [personOne,personTwo,personThree];
//
// function getTallUsers(data){
//     return data.filter((value, index) => data.indexOf(value) === index);
// }
// console.log(getTallUsers(people));


// Example: getTallUsers(people)
// ---- returns ----> [{firstName: "silvia", lastName: "floopertan", ageInYears: 34, heightInInches: 65},
//                    {firstName: "dan", lastName: "valdarez", ageInYears: 61, heightInInches: 73}]
var people = [personOne,personTwo,personThree];

function getTallUsers(arrayOfObjects){
    var tallUsers = [];

    for (let i = 0; i < arrayOfObjects.length; i++) {

        var currentUser = arrayOfObjects[i];

        var currentUsersHeight = currentUser.heightInInches;

        var userIsTallEnough = currentUsersHeight >= 65

        if (userIsTallEnough){
            tallUsers.push(currentUser)
        }

    }

    return tallUsers;
}

console.log(getTallUsers(people));

//
// console.log(getTallUsers(people));
// "use strict";
// ​
// var myVar = "apple";
// ​
// function foo(param1) {
//     console.log("in foo, myVar is visible and its value is " + myVar);
//     console.log("in foo, param1 is visible and its value is " + param1);
//     console.log("in foo, param2 is NOT visible");
// }
// ​
// function bar(param2) {
//     param2 = "grape";
//     console.log("in bar, myVar is visible and its value is " + myVar);
//     console.log("in bar, param1 is NOT visible");
//     console.log("in bar, param2 is visible and its value is " + param2);
// }
// ​
// console.log("outside functions, myVar is visible and its value is " + myVar);
// console.log("outside functions, param1 is NOT visible");
// console.log("outside functions, param2 is NOT visible");
// ​
// foo("banana");
// bar(myVar);

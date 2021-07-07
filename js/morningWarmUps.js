// TODO: Cle.log(countSpaces(str));reate a function named countSpaces that accepts a string and returns the total number of spaces in the string.
const str = 'this is a string';
const countSpaces = (str = '') => {
    let count = 0;
    for(let i = 0;
        i < str.length; i++){
        const el = str[i];
        if(el !== ' '){
            continue; };
        count++; };
    return count;
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
console.log(personOne.getFullName())

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
console.log(personTwo.getNicelyFormattedFullName())
// TODO: Create a method on the object below that gives us the behavior that the example implies.
// Example: personThree.intro() ---- returns ----> "Hello, My name is Arlene Martinez and I am 25 years old"
// Example: personThree.intro() ---// TODO: Create a method on the object b- returns ----> "Hello, My name is Arlene Martinez and I am 25 years old"
var personThree = {
    firstName: "arlene",
    lastName: "martinez",
    ageInYears: 25,
    heightInInches: 62,
    Opening: function() {
        return "Hello, my name is " + capitalizeFirstLetter (this.firstName) +" " + capitalizeFirstLetter (this.lastName)
          + "and" + "" + "I am" + this.ageInYears  + "years old."
    }
}

console.log(personThree.Opening())

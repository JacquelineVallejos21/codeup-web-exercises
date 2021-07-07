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


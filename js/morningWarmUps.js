// TODO: Create a function named countSpaces that accepts a string and returns the total number of spaces in the string.
function str = 'this is a string';
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


// TODO: Add validation to function above, if the argument pass is not a string it should return false.

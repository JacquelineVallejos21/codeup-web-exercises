"use strict";

console.log("Hello World!");
console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

var color;
color = prompt("What's your favorite color?");
var message;
message = ("Great," + color + " is my favorite color!");
alert(message);

//Exercise 3 Answers
//You have rented some movies for your kids: The little mermaid (for 3 days),
// Brother Bear (for 5 days, they love it), and Hercules (1 day,
// you don't know yet if they're going to like it). If price for a movie per day is $3,
// how much will you have to pay?

alert("The price for the movies is: " + (3+5+1)* 3);

//Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
// they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
// How much will you receive in payment for this week? You worked 10 hours for Facebook,
// 6 hours for Google and 4 hours for Amazon.
alert("I am getting paid for this week: " + ((400*6) + (380*4) + (350*10)));


//A student can be enrolled in a class only if the class is not full and
// the class schedule does not conflict with her current schedule.
var full = confirm ("Is the class full?");
var conflict = confirm ("Is there a conflict?");
alert("You can enroll in class:" + (!full && !conflict));

//A product offer can be applied only if a person buys more than 2 items,
// and the offer has not expired. Premium members do not need to buy a specific amount of products.

var premium= confirm("Are you a premium member?");
var quantity= Number (prompt ("How many items did you buy"));
var expired= confirm ("Is the coupon expired");
alert("You can get the discount" + ((!expired) && (premium || (quantity > 2))));

//Use the following code to follow the instructions below:
//
//
// var username = 'codeup';
// var password = 'notastrongpassword';
// Create a variable that holds a boolean value for each of the following conditions:
//
// the password must be at least 5 characters
// the password must not include the username
// the username must be no more than 20 characters
// neither the username or password can start or end with whitespace
var username = 'codeup';
var password = 'notastrongpassword';

var booleans = [true, true, true, true];
booleans[0] = (password.length >= 5);
if(password.search(username) == -1){
    booleans[1] = true;
}
else booleans[1] = false;
booleans[2] = (password.length <= 20);

function hasWhite(username, password){
    if(username[0] == ' '){
        return true;
    }
    else if(username[username.length-1] == ' '){
        return true;
    }
    else if(password[0] == ' '){
        return true;
    }
    else if(password[password.length-1] == ' '){
        return true;
    }

    return false;
}

booleans[3] = !hasWhite(username, password);

console.log(booleans);


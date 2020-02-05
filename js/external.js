"use strict";

// console.log("Hello from inline JavaScript");
//
// alert("Welcome to my website!");
//
// var favoriteColor = prompt("What is your favorite color?");
// alert("Great, " + favoriteColor + " is my favorite color too!");




// TO DO: You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

// var lmRental = Number(prompt("How many days have your had the little mermaid"));
// var bbRental = Number(prompt("How many days have your had the little mermaid"));
// var hRental = Number(prompt("How many days have your had the little mermaid"));
//
// var rentalPrice = Number(prompt("What is the rental price"));
//
// var total = (lmRental*rentalPrice)+(bbRental*rentalPrice)+(hRental*rentalPrice);
//
// alert("The amount of your movie rental is: $"+ total);




// TO DO: Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

// var gPay = Number(prompt("How much are you paid, an hour, at Google?"));
// var aPay = Number(prompt("How much are you paid, an hour, at Amazon?"));
// var fPay = Number(prompt("How much are you paid, an hour, at Facebook?"));
//
// var gHour = Number(prompt("How many hours have you worked thi week at Google?"));
// var aHour = Number(prompt("How many hours have you worked thi week at Amazon?"));
// var fHour = Number(prompt("How many hours have you worked thi week at Facebook?"));
//
// var cashMoney = (gPay * gHour) + (aPay * aHour) + (fPay * fHour);
//
// alert("Your weeks pay totals to: $" + cashMoney);




// TO DO: A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
// var studentClasses = Number(prompt("How many classes do you want to take?"));
// var studentScheduled = Number(prompt("How many classes are you currently taking?"));
//
// var classSeats = Number(prompt("How many seats are in the class?"));
// var classSeatsTaken = Number(prompt("How many seats are taken?"));
//
// var classAvailability = classSeatsTaken - classSeats;
// var studentAvailability = studentScheduled - studentClasses;
//
// if (classAvailability && studentAvailability === true){
//     alert("Success! You may register for this class.");
//     } else {
//     alert("Sorry, snooze you lose.");
//     }




// TO DO: A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
var offerValid = prompt("Has the offer expired?");
var shopperCart = Number(prompt("How many items are you buying?"));
var premiumMember = prompt("Are you a Premium member?");

if ((offerValid === "no") && (shopperCart >= 2) || (offerValid === "no") && (premiumMember === "yes")){
    alert("Success! You get a discount");
    } else {
        alert("Oh No! You do not get a discount");
    }
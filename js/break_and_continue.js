"use strict";

console.log("Hello, from loops js");



// TODO: 1. Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.


// do {
//     var oddInput = parseFloat(prompt( "Please enter an odd number between 1 and 50"));
//
//     console.log(oddInput); // show results in console
//
//     if (oddInput < 1 || oddInput > 50) { // not a number between 1 and 50
//
//         alert(oddInput + " is not between 1 and 50, try again.");
//
//     } else if (oddInput % 2 === 0){ // is an even number
//
//         alert(oddInput + " is not between an odd number, try again.");
//
//     } else if( isNaN(oddInput)){ //is not a number
//
//         alert(oddInput + " is not a number, try again.");
//
//     } else { // correct input
//
//         alert("Great!");
//         break; //stop the loop
//
//     }
//
// }while(true); // runs loop until user inputs a false value



// TODO: 2. Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
// Your output should look like this:

// Number to skip is: 27

// Here is an odd number: 1
// Here is an odd number: 3
// Here is an odd number: 5
// Here is an odd number: 7
// Here is an odd number: 9
// Here is an odd number: 11
// Here is an odd number: 13
// Here is an odd number: 15
// Here is an odd number: 17
// Here is an odd number: 19
// Here is an odd number: 21
// Here is an odd number: 23
// Here is an odd number: 25
// Yikes! Skipping number: 27
// Here is an odd number: 29
// Here is an odd number: 31
// Here is an odd number: 33
// Here is an odd number: 35
// Here is an odd number: 37
// Here is an odd number: 39
// Here is an odd number: 41
// Here is an odd number: 43
// Here is an odd number: 45
// Here is an odd number: 47
// Here is an odd number: 49



// var userInput == parseFloat(prompt("Please enter a number"));
// for (var i = 0; i <= 50; i++){
//
//     if (i % 2 === 0){
//         continue;
//     }
//
//     if (i === userInput){
//         console.log("Yikes! skipping number: " + i);
//     } else {
//         console.log("Here is an odd number: " + i);
//     }
// }
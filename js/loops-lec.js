"use strict";

console.log("Hello, from loops js");



/*********************************************
 *                   WHILE LOOPS
 *********************************************/
// A while loop will run WHILE a certain condition is true
// while (condition) {
//  code runs.
// }

//TODO TOGETHER: Create a while loop that counts up to 10 (non-inclusive) by 1
// (0, 1, 2...9)

// var i = 0;

// while (i <= 10){
//     console.log("Loop iteration: "+ i);
//     i++; //decrement by 1
// }


//TODO TOGETHER: Create a while loop that counts down from 20 to 0 (inclusive) by 1
// (20, 19, 18...0)

// var i = 20;
//
// while(i >= 0){
//     console.log("Loop iteration: "+ i);
//     i--; //decrement by 1
// }


//TODO TOGETHER: Create a while loop that counts up to 20 (inclusive) by 2s (0, 2, 4...)
// (0, 2, 4...20)

// var i = 0;
//
// while(i <= 20){
//     console.log("Loop iteration: "+ i);
//     i += 2; // increment by 2
// }

//TODO: Create a while loop that counts to 100 (inclusive) in increments of ten:
// (10...20...30...)

// var i = 10;
//
// while(i <= 100){
//     console.log("Loop iteration: "+ i);
//     i += 10; // increment by 10
// }


//TODO: Create a while loop that counts down from 50 to 1 (inclusive) in increments of 1:
// (50, 49, 48, 47, 46 .... 1)

// var i = 50;
//
// while(i >= 1){
//     console.log("Loop iteration: "+ i);
//     i --; // decrement by 1
// }




/*********************************************
 *               DO-WHILE LOOPS
 *********************************************/
// A do/while loop will run at least once.

// do {
//  Code to be run.
// } while (condition)


// var i = 10;
//
// while (i < 10) {
// 	console.log('while loop iteration #' + i);
// 	i++;
// }


// TODO TOGETHER: Why doesnt the example above run?

//The variable i is equal to 10 and the condition i < 10 is not met

// TODO TOGETHER: Refactor the example above using a do-while loop. What behavior do we notice?

// var i = 10;
//
// do {
//     console.log("Loop iteration: "+ i);
//     i++;
// } while (i <10);

//TODO TOGETHER: Create a do-while loop that asks the user to confirm: "Would you like to exit?" What difference do you notice?

// do {
//     var userConfirm = confirm("Whould you like to exit?");
//     console.log(userConfirm); // show the users input in the console
// } while (!userConfirm);

//continue to run this until the value is false

//TODO TOGETHER: Create a do-while loop that counts up to 20 (inclusive) by 2s (0, 2, 4...)
// (0, 2, 4...20)

// var i = 0;
//
// do {
//
//     console.log("Loop iteration: "+ i);
//     i += 2;
//
// } while ( i <= 20 );

//continue to run this until the value is false

//TODO: Create a do-while loop that prompts the user for a color and continues to prompt until the string passed is "blue"


// do {
//
//     var userPrompt = (prompt("Enter the color blue.")).toLowerCase(); //alter the user input to lower case
//     console.log(userPrompt); // show the users input in the console
//
// } while (userPrompt !== "blue"); //continue to run loop until the prompt is equal to blue or user cancels
//
// //continue to run this until the value is false

/*********************************************
 *               FOR LOOPS
 *********************************************/
// For loops: Loops that are designed to run a given number of times.

// for (/*initialization*/; /*condition*/; /*increment*/) {
// 	// body
// }

//TODO TOGETHER: Explore basic for loop syntax

// for( var i = 0 ; i < 10; i ++){ // (minimum, maximum, increment)
//     console.log("Loop iteration: "+ i);
// }

// TODO TOGETHER: Write a for loop that loops through numbers 0 - 5 (inclusive);

// for( var i = 0 ; i <= 5; i ++){ // (minimum, maximum, increment)
//     console.log("Loop iteration: "+ i);
// }

// TODO TOGETHER: Why are loops beneficial?

// It saves coding time when it comes to repetitive tasks
// Assists with cycling through arrays and strings (lists)
// Creates dynamic logic for data

// TODO TOGETHER: Console.log each color from the array randomColors

// example of looping through an array with a for loop

// var randomColors = ["red","orange","yellow","blue","green"]

// Process without using a loop
// console.log([0]); //red
// console.log([1]); //orange
// console.log([2]); //yellow
// console.log([3]); //blue
// console.log([4]); //green

// for (var i = 0; i < randomColors.length; i++){
// 	console.log(randomColors[i]);;
// }


// TODO TOGETHER: Using a for loop, log all even numbers 0 - 100;

// for( var i = 0; i <= 100; i++){ // (minimum, maximum, increment)
//
//     if (i % 2 === 0){
//         console.log("Loop iteration: "+ i);
//     }
//
// }

// OR

// for( var i = 0; i <= 100; i+=2){ // (minimum, maximum, increment)
//
//         console.log("Loop iteration: "+ i);
//
// }

// TODO: Using a for loop, log all numbers divisible by 5, from 0 - 100;
//
// for( var i = 0; i <= 100; i += 5){ // (minimum, maximum, increment)
//
//         console.log("Loop iteration: "+ i);
//
// }

// TODO: Using a for loop, complete the FizzBuzz challenge:
//  Your program should count up to 100.
//  For numbers divisible by 3, log "Fizz"
//  For numbers divisible by 5, log "Buzz"
//  If divisible by 3 and 5, log "FizzBuzz"
//  All other cases, just log the number.


// The order matters

// for( var i = 0; i <= 100; i++){ // (minimum, maximum, increment)
//
//     if (i % 15 === 0){ // divisible by (3 and 5) = 15
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0){ // divisible by 5
//         console.log("Buzz");
//     } else if (i % 5 === 0){ // divisible by 3
//         console.log("Fizz");
//     } else { // all other conditions
//         console.log( i);
//     }
//
// }

/*********************************************
 *              BREAKS & CONTINUES
 *********************************************/
// We can get a loop to stop using break;

// var numberToStopAt = 5;
//
// for (var i = 1; i < 100; i++) {
//
// 	console.log('Loop counter is: ' + i);
//
// 	if (i === numberToStopAt) {
// 		console.log('We have reached the stopping point: break!');
// 		// use the break keyword to exit from the while loop
// 		break;
// 		// nothing after the break will get processed
// 		console.log('You will never see this line.');
// 	}
// }


// We can get an iteration to skip using continue;
// for (var i = 1; i < 100; i++) {
//
// 	if (i % 2 !== 0) {
// 		// skipping all odd numbers;
// 		continue;
// 	}
//
// 	console.log('Here is a lovely even number: ' + i);
// }
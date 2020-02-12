"use strict";

console.log("Hello, from loops js");


// TODO: 1. Create a while loop that uses console.log() to create the output shown below.

// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536

// var i = 1;
//
// while ( i < 65536){
//
//     i = i++ * 2;// The number gets incremented by doubling its current value
//     console.log("Loop iteration: "+ i);
// }


// TODO: 2. An ice cream seller can't go home until she sells all of her cones. Write a JS program that generates a random number between 50 and 100 representing the amount of cones to sell. Your code should generate numbers between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. This is how you get the random numbers:

// This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;

// // This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;


// The output should be similar to the following:

// 5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones



// How many cones need to sell?
var allCones = Math.floor(Math.random() * 50) + 50;
// console.log(allCones);



do{

    // How many cones are being bought?
    var totalBuy = Math.floor(Math.random() * 5) + 1 ;
    // console.log(totalBuy);

    // How many cones do we have left to sell?
    var remainingCones = allCones -= totalBuy;
    // console.log(remainingCones);


    // Are there enough cones for the current customers order?
    if (totalBuy < remainingCones) { // What they are buying must be less than what we have

        console.log(totalBuy + " cones sold..." + remainingCones);

    } else if (remainingCones <= 0){ // If what we have is less than or equal to 0

        console.log("Yay! I sold them all!");
    } else { // If what they are buying is be more than what we have

        console.log("Cannot sell you " + totalBuy + " cones I only have " + remainingCones + "...");

    }


} while (remainingCones >= 0);
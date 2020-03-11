'use strict';

//TODO: Create a file named promises.js inside of your js directory.

//TODO: Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.

function wait(number) { // A function called wait

    return new Promise((resolve, reject) => { //the function returns a new promise with a resolve and reject

        if (number) { //If the random number  -->

            resolve('Here is your data: ...'); // give me the data

        } else { // If the random number  -->

            reject('Network Connection Error!'); //Dont give me the data

        }

    });

}

// console.log(wait); // a pending promise

wait(1000).then(() => console.log('You\'ll see this after 1 second')); // Wait 1 second before performing the task
wait(3000).then(() => console.log('You\'ll see this after 3 seconds')); // Wait 3 seconds before performing the task
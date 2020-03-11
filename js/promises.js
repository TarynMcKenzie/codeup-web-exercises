'use strict';

//TODO: Create a file named promises.js inside of your js directory.

//TODO: Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.

// function wait(number) { // A function called wait
//
//     return new Promise((resolve, reject) => { //the function returns a new promise with a resolve and reject
//
//         setTimeout(() => { // When the timeout is met -->
//
//             resolve(); // resolve the promise --> show the data
//
//         }, number); // set the timeout to the number input value
//
//     });
//
// }

// OR

function wait(number) { // A function called wait

    return new Promise((resolve, reject) => { //the function returns a new promise with a resolve and reject

        setTimeout(resolve, number); // set the timeout to the number input value

    });

}

wait(1000).then(() => console.log('You\'ll see this after 1 second')); // Wait 1 second before performing the task
wait(3000).then(() => console.log('You\'ll see this after 3 seconds')); // Wait 3 seconds before performing the task


//TODO: Generate a Personal Access Token for the GitHub API.

// fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}});


//TODO: Create a function that accepts a GitHub username, and returns a promise that resolves with the date of the last commit that user made.
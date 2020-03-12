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
//
// function wait(number) { // A function called wait
//
//     return new Promise((resolve, reject) => { //the function returns a new promise with a resolve and reject
//
//         setTimeout(resolve, number); // set the timeout to the number input value
//
//     });
//
// }
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second')); // Wait 1 second before performing the task
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds')); // Wait 3 seconds before performing the task


//TODO: Generate a Personal Access Token for the GitHub API.
//TODO: Create a function that accepts a GitHub username, and returns a promise that resolves with the date of the last commit that user made.
// console.log(gitHubAPI);

function getGithubUsernames() { // A function called getGithubuUsernames

    return fetch('https://api.github.com/users/tarynmckenzie/events/public', {headers: {'Authorization': `token ${gitHubAPI}`}}) // Get the api from github and use the keys.js token key to hide key

        .then(response => response.json())// when the data has been got --> Convert to json

}


getGithubUsernames().then((data) => { //call the function --> then with the data, do this

    console.log(data); //log the data to the console

    console.log(data[2].payload.commits[0].message); //log the data to the console

}).catch(error => console.error(error));// if we did not get the data --> console log that there was a error



// =================== Fetch Bonuses

// -- Ex. 1

// In your data directory, create a profiles.json file with the following...

// {
//     "sandy123": "brown",
//     "bob234": "green",
//     "sally345": "blue"
// }
//
// Add an input field and submit button (you will need to prevent the default behaviour if inside a form element) that when clicked, runs the following function...
// Create a function that takes in a username and fetch's the color preference based on the username and sets the background color to that color.
//
//
//
// -- Ex. 2
//
// Using the Star Wars API, log the first film a given Star Wars character's homeworld appeared in
//
//
//
// -- Ex. 3
//
// Using the GitHub API and reduce(), find the average hour of the last 3 pushes. Ignore minutes.
//
//
//
// -- Ex. 4
//
// Create star-chars.json file in your data folder and paste in the following...

// [
//     {
//         "name": "Rey",
//         "coolness": 9
//     },
//     {
//         "name": "Luke Skywalker",
//         "coolness": 9
//     },
//     {
//         "name": "Darth Vadar",
//         "coolness": 10
//     }
// ]

n


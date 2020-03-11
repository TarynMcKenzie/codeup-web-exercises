'use strict';

// TODO: Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
console.log(users);

// TODO: Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
let languageArray = users.filter(language => language.languages.length >= 3);

console.log(languageArray);

// TODO: Use .map to create an array of strings where each element is a user's email address
let emailArray = users.map(userEmail => userEmail.email);

console.log(emailArray);

// TODO: Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
let experienceTotal = users.reduce((total, userExperience) => total + userExperience.yearsOfExperience, 0);

console.log(experienceTotal);
console.log(experienceTotal / users.length);

// TODO: Use .reduce to get the longest email from the list of users.
let longestEmail = users.reduce((accumulator, email) => {

    return email.email.length > accumulator.length ? email.email : accumulator;

} , '');

console.log(longestEmail);

// TODO: Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
let nameString = users.reduce((accumulator, names)=> accumulator === '' ?  names.name: accumulator + ", " + names.name, '');

console.log("Your instructors are " + nameString + '.');



// Instructor notes:
// reduce == (storedValue , currentItem) =>
// reduce can have a '', 0 , [] , {} bucket appended to the end as the 'stored value'
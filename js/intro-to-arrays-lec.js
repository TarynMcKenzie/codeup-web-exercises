"use strict";

console.log("Hello, from loops js");

"use strict";
console.log("Welcome to intro to arrays");
/* ***************************************************************
* 							INTRO TO ARRAYS
*************************************************************** */


// An array is a data structure that holds an ordered list of items
// Each slot in a JavaScript array can hold any type of data



/* ***************************************************************
* 					DECLARING AN ARRAY
*************************************************************** */
// We declare an array with square brackets ==> []

// an empty array ==> []

//An array with one element ==> [1]

// An array with 5 elements ==> [1, 2, 3, 4, 5]

// An array with 3 elements all of different types ==> 	["one", 42, [8, 9, 10]]
// Notice that the array above does *not* have 5 elements, rather the last element is itself an array with 3 elements in it

//TODO TOGETHER: Declare an empty array set equal to the variable `pies` - then console.log `pies`

var pies = [];

//TODO TOGETHER: Set the following array equal to `pies` - then console.log `pies`
// ["apple", "cherry", "key lime", "huckleberry"];

pies = ["apple", "cherry", "key lime", "huckleberry"];

console.log(pies);


// TODO TOGETHER: Set the following array equal to variable called `shapes`. Console.log the variable
//  ['square', 'rectangle', 'circle', 'triangle'];

var shapes = ['square', 'rectangle', 'circle', 'triangle'];

console.log(shapes);


// TODO: Set the following array equal to a variable called `instructors` - then console.log the variable
//  ["sophie", "vivian", "david", "justin", "daniel", "fernando", "trant"]


var instructors = ["sophie", "vivian", "david", "justin", "daniel", "fernando", "trant"];

console.log(instructors);

// TODO: Set the following array equal to a variable called `daysOfTheWeek` - then console.log the variable
//  ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

var daysOfTheWeek =  ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

console.log(daysOfTheWeek);

// TODO: create an array of favorite foods and set to a variable called `favoriteFoods` - then console.log the variable

var favoriteFoods = [];

console.log(favoriteFoods);


// ** BONUS **
var arrayArray = ["one", 42, [8, 9, 10]];

console.log(arrayArray);

/* ***************************************************************
* 					COUNTING AN ARRAY
*************************************************************** */

//We can also count the length of an array by using the `.length` property

// TODO TOGETHER: Log the length of shapes array
console.log("The length of the array is: " + shapes.length);


// TODO: console.log the length of the instructors array
console.log("The length of the array is: " + instructors.length);

// TODO: console.log the length of the daysOfTheWeek array
console.log("The length of the array is: " + daysOfTheWeek.length);

// TODO: console.log the length of the favoriteFoods array
console.log("The length of the array is: " + favoriteFoods.length);

// ** BONUS **
console.log("The length of the array is: " + arrayArray.length);




/* ***************************************************************
* 				ACCESSING ARRAY ELEMENTS
*************************************************************** */
// ** NOTE ** Arrays are zero-indexed, which means the first slot in an array is 0.

// TODO TOGETHER: What do we expect the following to output?
//  ['square', 'rectangle', 'circle', 'triangle'];

	console.log(shapes[0]); //Square
	console.log(shapes[1]); //Rectangle
	console.log(shapes[2]); //Circle
	console.log(shapes[3]); //Triangle
	console.log(shapes[4]); //Undefined



// TODO: console.log each element of the instructors array
//  ["sophie", "vivian", "david", "justin", "daniel", "fernando", "trant"];

	console.log(instructors[0]); //Sophie
	console.log(instructors[1]); //Vivian
	console.log(instructors[2]); //David
	console.log(instructors[3]); //Justin
	console.log(instructors[4]); //Daniel
    console.log(instructors[5]); //Fernando
    console.log(instructors[6]); //Trant


// TODO: console.log the first three elements of the daysOfTheWeek array
//  ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

	console.log(daysOfTheWeek[0]); //Monday
	console.log(daysOfTheWeek[1]); //Tuesday
	console.log(daysOfTheWeek[2]); //Wednesday



// TODO: console.log the first three elements of the favoriteFoods array

    console.log(favoriteFoods[0]); //Undefined


// TODO: create a function called `returnLastElement` that accepts an array and returns the last element of that array

function returnLastElement(arr){
    return arr [arr.length - 1]; //go to the end of the array then come back 1, return value
}

console.log(returnLastElement(shapes));

/* ***************************************************************
* 					ITERATING ARRAYS
*************************************************************** */
//  TODO TOGETHER: Log each element of the shapes array
// TODO TOGETHER: Using a for loop, iterate through the shapes array and log each shape

for (var i = 0; i < shapes.length; i++) {
    console.log('The shape at index ' + i + ' is: ' + shapes[i]);
}

// TODO TOGETHER: Alert "that's my favorite shape!" when your favorite shape is iterated over in the loop.

// for (var i = 0; i < shapes.length; i++) {
//     console.log('The shape at index ' + i + ' is: ' + shapes[i]);
//
//     if (shapes[i] === 'circle'){
//         alert("A circle is my favorite shape");
//         break;
//     }
// }


// TODO: What happens if we change var i = 1? or var i = 2;

// The iteration begins at the 2nd item in the array

// TODO: What are benefits of using loops to iterate?

// Saves time, dynamic code

// TODO: How does the loop know when to stop iterating?

// The arrays .length method is apart of the conditional logic

// TODO: Using a for loop, iterate through the instructors array and console.log each instructor

for (var i = 0; i < instructors.length; i++) {
    console.log('The instructor at index ' + i + ' is: ' + instructors[i]);
}

// TODO: Using a for loop, iterate through the daysOfTheWeek array and console.log each day of the week

for (var i = 0; i < daysOfTheWeek.length; i++) {
    console.log('The instructor at index ' + i + ' is: ' + daysOfTheWeek[i]);
}

// TODO: Using a for loop, iterate through the favoriteFoods array and console.log each favorite food

for (var i = 0; i < favoriteFoods.length; i++) {
    console.log('The instructor at index ' + i + ' is: ' + favoriteFoods[i]);
}

// TODO: Refactoring the instructor loop, alert "hey, I know <INSTRUCTOR NAME HERE>" if you have had class with that instructor. If you have not had class with that instructor, alert "I haven't had class with <INSTRUCTOR NAME HERE> yet!"
// ["sophie", "vivian", "david", "justin", "daniel", "fernando", "trant"];

// for (var i = 0; i < instructors.length; i++) { //Loop through the array
//
//     if (instructors[i] === "david" || instructors[i] === "vivian" ){ // if true, alert this
//         alert("hey, I know " + instructors[i]);
//
//     } else { // if false, alert this
//         alert("I haven't had class with " + instructors[i]);
//
//     }
// }


/* ***************************************************************
* 						FOR EACH ARRAY
*************************************************************** */

// TODO TOGETHER: Using a for each loop, console.log each shape from the shapes array

shapes.forEach(function(these){
    console.log(these);
});

// TODO TOGETHER: Using a for each loop, console.log each element from the following array:

pies.forEach(function(these){
    console.log(these);
});


// TODO: Using a for each loop, iterate through the instructors array and console.log each instructor

instructors.forEach(function(these){
    console.log(these);
});

// TODO: Using a for each loop, iterate through the daysOfTheWeek array and console.log each day of the week

daysOfTheWeek.forEach(function(these){
    console.log(these);
});

// TODO: Using a for each loop, iterate through the favoriteFoods array and console.log each favorite food

favoriteFoods.forEach(function(these){
    console.log(these); // no items in the string
});
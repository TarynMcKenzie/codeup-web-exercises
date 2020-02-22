/**
 * Loops, Arrays, & Objects
 * Basic Overview
 * Study Guide
**/


// 1. TODO What is an array in Javascript?
//
//     2. What is an object in Javascript?
//          non numerically stored data
//
//     3. What is the difference between an array and an object?
//          numerically ordered stored values
//
//     4. What is a property? A method?
//          a property is the data item within an object
//          a method is a function within an object
//
//     5. Why are loops useful when dealing with arrays?
//          loops allow for iteration through the array to find specific data
//
//     6. What is an index?
//          the index is the position of a value within an array (beginning at 0)
//
//     7. What is the difference between dot and bracket notation?
//          bracket notation must be a String or a variable that references a String.
//          dot notation must have a valid identifier. An identifier is a sequence of characters in the code that identifies a variable, function, or property.


// 1.  TODO Write a function, `filterNumbers()` that takes in an array of mixed data types and returns an array of only the numbers type in ascending order.
//     EXAMPLE: filterNumbers(["fred", true, 5, 3]) //[3, 5]

function filterNumbers(array){ //function called filterNumbers that takes in an array
    var bucket = []; //empty bucket

    array.forEach(function(item){ //loop through the array

        if (typeof item === "number") { // if the typeof the item the loop is currently on is a number data type

            bucket.push(item); //push item into the bucket

        }

    });

    return (bucket).sort((a, b) => a - b); //return the bucket sorted in ascending order
}

console.log(filterNumbers(["fred", true, 5, 3])); //[3, 5]



// 2. TODO Write a function, `getOlder()` that takes in array of dog objects and increases the value of the age properties by 1.

// Example Input: [
//        { name: "Chompers", breed: "Pug", age: 7 },
//        { name: "Freddy", breed: "Lab", age: 4 },
//        { name: "Mr. Pig", breed: "Mastif", age: 10 }
//      ];


// Example output: [
//         { name: "Chompers", breed: "Pug", age: 8 },
//         { name: "Freddy", breed: "Lab", age: 5 },
//         { name: "Mr. Pig", breed: "Mastif", age: 11 }
//      ];


// 3. TODO Write a function, `washCars()` that takes in a array of car objects and sets the boolean properties of isDirty to false

// Example input: [
//          { make: 'Volvo', color: 'red', year: 1996, isDirty: true },
//          { make: 'Toyota', color: 'black', year: 2004, isDirty: false },
//          { make: 'Ford', color: 'white', year: 2007, isDirty: true }
//       ];

// Example output: [
//          { make: 'Volvo', color: 'red', year: 1996, isDirty: false // changed to false },
//          { make: 'Toyota', color: 'black', year: 2004, isDirty: false // stays the same },
//          { make: 'Ford', color: 'white', year: 2007, isDirty: false // changed to false }
//       ];


// 4. TODO Write a function, `adminList()` that takes in an array of user objects and returns a count of all admins based on the isAdmin property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins.

// Example Input: [
//           { isAdmin: true, email: 'user1@email.com' },
//           { isAdmin: true, email: 'user2@email.com' },
//           { isAdmin: false, email: 'user3@email.com' }
//        ];
//
// Example Output (before refactor): 2
//
//
// Example Output (after 1st refactor):
//         [ 'user1@email.com', 'user2@email.com' ]
//
//
// Example Output (after 2nd refactor): [
//           { isAdmin: true, email: 'user1@email.com' },
//           { isAdmin: true, email: 'user2@email.com' }
//          ];


// 5. TODO Create a function, `makeSandwichObjects()` that takes in two array of strings, breads and fillings and returns an array of sandwichObjects that contain properties for bread and filling and values correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length.

// Example Input:
//
//          var breads  = [
//              "white",
//              "wheat",
//              "rhy",
//              "white"
//          ];

//          var fillings = [
//              "pb&j",
//              "ham",
//              "cheese steak",
//              "tuna"
//          ];

//          makeSandwichObjects(breads, fillings) // example call to the function

// Example Output: [
//              { bread: "white", filling: "pb&j" },
//              { bread: "wheat", filling: "ham" },
//              { bread: "rhy", filling: "cheese steak" },
//              { bread: "white", filling: "tuna" }
//          ];

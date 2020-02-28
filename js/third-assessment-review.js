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

// ----------Walk Through Notes----------
// 1. write a function --> filterNumbers(inputArray)
// 2. since we are returning an array, we need a bucket --> var bucket = [];
// 3. we need to loop to check each individual item in our array --> for || forEach
// 4. we need to check each item to see if it is a number --> typeOf item === "number"
// 5. if the item is a number, push it to the bucket --> bucket.push(item)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// 6. .sort() method on the bucket array -- this is to sort in ascending order
// 7. return bucket


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
console.log(filterNumbers([100, 1000000, false, "red", true, 50, 500000, 3]));



// 2. TODO Write a function, `getOlder()` that takes in array of dog objects and increases the value of the age properties by 1.

var dogInput = [
       { name: "Chompers", breed: "Pug", age: 7 },
       { name: "Freddy", breed: "Lab", age: 4 },
       { name: "Mr. Pig", breed: "Mastif", age: 10 }
     ];


// Example output: [
//         { name: "Chompers", breed: "Pug", age: 8 },
//         { name: "Freddy", breed: "Lab", age: 5 },
//         { name: "Mr. Pig", breed: "Mastif", age: 11 }
//      ];


// ----------Walk Through Notes----------
// 1. write a function --> getOlder(array)
// 2. since we are taking in an array --> loop through eah name object --> name.age += 1
// 3. return array


function getOlder(array){ //function called getOlder that takes in an array

    array.forEach(function(name){ // iterate through each item in the array

        name.age += 1; // change the age property for each object to the current age value plus one

    });

    return array; // return the array with the new age value
}

console.log(getOlder(dogInput));



// 3. TODO Write a function, `washCars()` that takes in a array of car objects and sets the boolean properties of isDirty to false

var carInput = [
         { make: 'Volvo', color: 'red', year: 1996, isDirty: true },
         { make: 'Toyota', color: 'black', year: 2004, isDirty: false },
         { make: 'Ford', color: 'white', year: 2007, isDirty: true }
      ];

// Example output: [
//          { make: 'Volvo', color: 'red', year: 1996, isDirty: false // changed to false },
//          { make: 'Toyota', color: 'black', year: 2004, isDirty: false // stays the same },
//          { make: 'Ford', color: 'white', year: 2007, isDirty: false // changed to false }
//       ];


// ----------Walk Through Notes----------
// 1. write a function --> washCars(array)
// 2. since we are taking in an array --> loop through the array items --> item.isDirty = false
// 3. return array


function washCars(array){ //function call washCars that takes in an array of objects

    array.forEach(function(item){ //iterate through array of objects

        item.isDirty = false; // alter the is dirty property value to false

    });

    return array; // return altered array

}

console.log(washCars(carInput));

// 4. TODO Write a function, `adminList()` that takes in an array of user objects and returns a count of all admins based on the isAdmin property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins.

var adminInput = [
          { isAdmin: true, email: 'user1@email.com' },
          { isAdmin: true, email: 'user2@email.com' },
          { isAdmin: false, email: 'user3@email.com' }
       ];
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


// ----------Walk Through Notes----------
// PART 1 - COUNT
// 1. write a function --> adminList(users)
// 2. var count = 0;
// 3. forEach user --> if user.isAdmin --> count += 1;
// 4. return count;

// PART 2 - USER EMAILS
// 1. write a function --> adminList(array)
// 2. var bucket = [];
// 3. forEach user --> if user.isAdmin --> bucket.push(user.email)
//4. return bucket;

// Part 3 - USER OBJECTS
// 1. write a function --> adminList
// 2. var bucket = [];
// 3. forEach user --> if user.isAdmin --> bucket.push(user)
// 4. return bucket;


// -----------Output # 1-----------
// function adminList(array){ // function called adminList that takes in an array
//
//     var count = 0; // count begins at 0
//
//     array.forEach(function (item){ //loop through the array and store the item values
//
//         if ( item.isAdmin === true){ //if the user is an admin
//             count +=  1; //add 1 to the count
//         }
//     });
//
//     return count; // return the adjusted count
//
// }


//-----------Output # 2-----------
// function adminList(array){ // function called adminList that takes in an array
//
//     var adminEmail= []; // empty array for admin emails, bucket
//
//     array.forEach(function (item){ //loop through the array and store the item values
//
//         if ( item.isAdmin === true){ //if the user is an admin
//             adminEmail.push(item.email); //add admin emails to the bucket
//         }
//     });
//
//     return adminEmail; // return the adjusted emails additions
//
// }


//-----------Output # 3-----------
function adminList(array){ // function called adminList that takes in an array

    var adminEmail= []; // empty array for admin emails, bucket

    array.forEach(function (item){ //loop through the array and store the item values

        if ( item.isAdmin === true){ //if the user is an admin
            adminEmail.push(item); //add admin object to the bucket
        }
    });

    return adminEmail; // return the adjusted emails additions

}

console.log(adminList(adminInput));



// 5. TODO Create a function, `makeSandwichObjects()` that takes in two array of strings, breads and fillings and returns an array of sandwichObjects that contain properties for bread and filling and values correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length.

// Example Input:

         var breads  = [
             "white",
             "wheat",
             "rhy",
             "white"
         ];

         var fillings = [
             "pb&j",
             "ham",
             "cheese steak",
             "tuna"
         ];


// Example Output: [
//              { bread: "white", filling: "pb&j" },
//              { bread: "wheat", filling: "ham" },
//              { bread: "rhy", filling: "cheese steak" },
//              { bread: "white", filling: "tuna" }
//          ];


// ----------Walk Through Notes----------
// 1. write a function --> makeSandwichObjects(bread, filling)
// 2. var bucket = [];
// 3. we have to loop --> for(var i = 0; i < bread.length; i++)
// 4. we need to create our sandwich object
// 5. bucket.push(sandwichObject)
// 6. return bucket



// function makeSandwichObjects(breads, fillings) {
//     var sandwiches = [];
//     breads.forEach(function(bread, i) {
//         sandwiches.push({
//             bread: bread,
//             filling: fillings[i]
//         });
//     });
//     return sandwiches;
// }

//OR

// function makeSandwichObjects(breads, fillings) {
//     var sandwiches = [];
//
//     for(var i = 0; i < breads.length; i++) {
//
//         sandwiches.push({bread: breads[i], filling: fillings[i]});
//
//     }
//
//     return sandwiches;
// }

// console.log(makeSandwichObjects(breads, fillings)); // example call to the function


// TODO Write a function named keepYellow that accepts an array of strings and returns an array with all the strings that are equal to "yellow"

// ----------Walk Through Notes----------
// 1. write a function --> keepYellow(inputArray)
// 2. var bucket = [];
// 3. loop through the array --> if string is yellow --> bucket.push(yellow)
// 4. return bucket;

function keepYellow(inputArray){

    var bucket = [];

    inputArray.forEach(function (yellow){
        if (yellow === "yellow"){

            bucket.push(yellow);

        }

    });

    return bucket;
}

console.log(keepYellow(["yellow", "red", "blue", "yellow", "black", "brown", "yellow"]));
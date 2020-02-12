(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names = ["Taryn", "Sally", "Noah", "Stella"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(names[0]); // Taryn
    console.log(names[1]); // Sally
    console.log(names[2]); // Noah
    console.log(names[3]); // Stella

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for (var i = 0; i < names.length; i ++){
        console.log(names[i]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach(function(This){
        console.log(This);
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    var numArray= [1, 2, 3, 4, 5];

    function first (num){
        return num[num.length - 5];
    }

    function second (num){
        return num[num.length - 4];
    }

    function last (num){
        return num[num.length - 1];
    }

    console.log(first(numArray));
    console.log(second(numArray));
    console.log(last(numArray));

})();

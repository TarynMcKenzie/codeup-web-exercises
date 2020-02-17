(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    // Object literal
    var person = {firstName: "Taryn", lastName: "McKenzie",};


    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function() {
        return "Hello, " + this.firstName + " " + this.lastName + "!";
    };

    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [ //Array
        {name: 'Cameron', amount: 180}, // object 0
        {name: 'Ryan', amount: 250}, // object 1
        {name: 'George', amount: 320} // object 2
    ];

    shoppers.offer = function () {

        shoppers.forEach(function (shoppers){ //loop through array object
            if (shoppers["amount"] > 200){ //check the amount properties
                console.log(shoppers["amount"] - (.12 / 100)); // calculate percentage
            } else {
                console.log(shoppers["amount"]);
            }

        })
    };

    console.log(shoppers.offer());

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        { title: "Pride and Prejudice", author: {firstName: "Jane" , lastName: "Austin"}},
        { title: "To Kill a Mockingbird", author: {firstName: "Harper" , lastName: "Lee"}},
        { title: "The Great Gatsby", author: {firstName: "F.Scott" , lastName: "Fitzgerald"}},
        { title: "One hundred Years of Solitude", author: {firstName: "Gabriel" , lastName: "Marquez"}},
        { title: "In Cold Blood", author: {firstName: "Truman" , lastName: "Capote"}}
    ];

    // Log the title
    // console.log(books[0].title);
    // console.log(books[1].title);
    // console.log(books[2].title);
    // console.log(books[3].title);
    // console.log(books[4].title);

    //log the authors first name
    // console.log(books[0].author.firstName);
    // console.log(books[1].author.firstName);
    // console.log(books[2].author.firstName);
    // console.log(books[3].author.firstName);
    // console.log(books[4].author.firstName);


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */


    books.listBooks = function (){ //create a method for the object

        books.forEach(function (books, index){ // loop through the object array

            console.log("Book # " + index);
            console.log("Title: " + books["title"]);
            console.log("Author: " + books.author["firstName"] + " " + books.author["lastName"]);
            console.log("---");

        });

    };

    console.log(books.listBooks());


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    var userBookTitle = prompt("Book title:");
    var userBookAuthor = prompt("Book author's last name, first name: ") ;
    var userFirstAndLast = userBookAuthor.split(","); // Separate the authors first and last name into an array


    books.createBook = function (){ //a method that will allow users to create books

        // create object from the user inputs
        var userBook = [
            { title: userBookTitle, author: {firstName: userFirstAndLast.pop(), lastName: userFirstAndLast.shift()}}
        ];
        console.log(userBook);
    };

    console.log(books.createBook());



    books.showBookInfo = function (){

        console.log("Title: " + userBook["title"]);
        console.log("Author: " + userBook.author["firstName"] + " " + userBook.author["lastName"]);
        console.log("---");

    };

    console.log(books.showBookInfo());

})();


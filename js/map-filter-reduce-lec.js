"use strict";

$(document).ready(function() {

    /****************** MAP, FILTER, REDUCE ******************/

    // Array of MacBookPro{} objects
    var mbpModels = [
        {
            id: 'MA464LL/A',
            desc: 'Apple MacBook Pro 15-Inch "Core Duo" 2.0',
            model: 'A1150',
            year: '2006',
            price: 3199
        },
        {
            id: 'MB986LL/A',
            desc: 'Apple MacBook Pro 15-Inch "Core 2 Duo" 2.8',
            model: 'A1286',
            year: 'Mid-2009',
            price: 2799
        },
        {
            id: 'MD311LL/A ',
            desc: 'Apple MacBook Pro 17-Inch "Core i7" 2.4',
            model: 'A1297',
            year: 'Late-2011',
            price: 2399
        },
        {
            id: 'MGXA2LL/A',
            desc: 'Apple MacBook Pro 15-Inch "Core i7" 2.2',
            model: 'A1398',
            year: 'Mid-2014',
            price: 2299
        }
    ];


    // ES6
    // var cartTotal = cart.reduce((total,item) => total + item.cost, 0);

    // *****************   ******     ******************//
    // *****************  TODO: MAP() ******************//
    // *****************   ******     ******************//

    // Print a list of id's of the mbpModels array
    //  1. Use forEach()
    //  2. Use map()
    //  3. Use ES6


    /********************************* 1 *********************************/

    //  1. Using forEach()
    var ids = []; //The bucket

    mbpModels.forEach(function (mbp) { //iterate through the laptops array

        ids.push(mbp.id); //push the id into the bucket

    });

    $('#forEach').html(createList(ids)); // place the output into the html document

    /********************************* 2 *********************************/

    //  2. Using map()
    var idsMap = mbpModels.map(function(mbp){ // read the array

        return mbp.id; // grab the value of id

    });

    $('#map').html(createList(idsMap)); // place the returned value into the html doc

    /********************************* 3 *********************************/

    //  3. Use ES6
    let idsEs6 = mbpModels.map(mbp => mbp.id); // Read the array and return the id values

    $('#mapES6').html(createList(idsEs6)); // place the returned items into the html doc

    /**************************** createList() ***************************/
    /******* returns a <li> type list in raw HTML ************************/
    function createList(arr) {
        var html = '';
        arr.forEach(function (item) {
            html += '<li>' + item + '</li>';
        });
        return html;
    }
    /**************************** createList() ***************************/


    // *****************   ******     ******************//
    // **************  TODO: FILTER() ******************//
    // *****************   ******     ******************//

    // Print a list of the models made in 2011 and later
    //  1. Use forEach()
    //  2. Use map()
    //  3. Use ES6

    /**************************** LEAVE IN FOR STUDENTS **(********************************/
    /*********************** function to get year from string *****************************/
    function getYear(yearString) {
        let yearArr,bucket;
        [yearArr, bucket] = [yearString.split(''),[]];
        for(var i=3; i>=0; i--) {
            bucket[i] = yearArr.pop();
        }
        return bucket.join('');
    }
    /********************* END function to get year from string ***************************/


    /********************************* 1 *********************************/
    //  1. Use forEach()
    var mbpYr = []; //year bucket

    mbpModels.forEach(function(mbp){ //itereate through the array

        if (getYear(mbp.year) >= 2011) { //if the current item is newer than 2011

            mbpYr.push(mbp.desc + ' ' + '<strong>' + getYear(mbp.year) +'</strong>')// push the year into the bucket

        }

    });

    $('#filterForEach').html(createList(mbpYr));

    /********************************* 2 *********************************/
    //  2. Use filter()
    var mbpYrFilter = mbpModels.filter(function(mbp){

        return getYear(mbp.year) >= 2011; // return the item if it is true

        });

    $('#filter').html(createList(mbpYrFilter.map(function(mbp){

        return mbp.desc + ' ' + '<strong>' + getYear(mbp.year) +'</strong>';

    })));

    /********************************* 3 *********************************/
    //  3. Use ES6

    let mbpYrFilterEs6 = mbpModels.filter( mbp => getYear(mbp.year) >= 2011); // if the laptop is newer thant 2011 return that laptop

    $('#filterEs6').html(createList(mbpYrFilterEs6.map(mbp => mbp.desc + ' ' + '<strong>' + getYear(mbp.year) +'</strong>')));



    // *****************   ******     ******************//
    // **************  TODO: REDUCE() ******************//
    // *****************   ******     ******************//

    // Determine the total value of all MacBook Pros together
    //  1. Use forEach()
    //  2. Use reduce()
    //  3. Use ES6

    /********************************* 1 *********************************/
    //  1. Use forEach()
    var mbptotal = 0;

    mbpModels.forEach(function(mbp){ // iterate through the laptops

        mbptotal += mbp.price; //get the current item price and add it to the total

    });

    $('#reduceForEach').html(commaThousands(mbptotal));

    /********************************* 2 *********************************/
    //  2. Use reduce()
    var mbptotalReduce = mbpModels.reduce(function (total, mbp){ // use reduce to get the total and mbp

        return total + mbp.price; // add the price to the total

        }, 0); //setting the initial value to 0

    $('#reduce').html(commaThousands(mbptotalReduce));


    /********************************* 3 *********************************/
    //  3. Use ES6
    var mbptotalEs6 = mbpModels.reduce((total, mbp) => total + mbp.price, 0); //add the price to the total, count begins at 0

    $('#reduceEs6').html(commaThousands(mbptotalEs6));


    /**************************** LEAVE IN FOR STUDENTS **(********************************/
    /*********************** function to get commas in number *****************************/
    // function commaThousandsRefactor(number) {
    //     let numArr = number.toString().split('');
    //     let numDigits = numArr.length;
    //     numArr.reverse();
    //     // 1-3 : no commas
    //     // 4-6 : 1 comma
    //     // 7-9 : 2 commas
    //     // ...   ...
    //     // 1. 123456789
    //     // 2. 123456,789
    //     // 3. 123,456,789
    //     for(let i=0; i<(numDigits+numDigits%3)/3; i++) {
    //         numArr.splice(3, 0, ','); //987,654321
    //         numArr.splice(7, 0, ','); //987,654,321
    //
    //     }
    //
    // }
    //
    // commaThousandsRefactor(10485);


    function commaThousands(number) {
        var numArr = number.toString().split('');
        var startPos = numArr.length % 3;
        var initialLength = numArr.length;
        var first = true;
        var extra = 0;
        // add commas every third digit from the end
        if( numArr.length <= 3) {
            return number;
        } else {
            for(var i = 0; i < (numArr.length - numArr.length % 3) / 3; i++) {
                console.log('for iteration');
                console.log(i * 3 + extra + startPos);
                if(i*3+extra+startPos >= initialLength+extra) {
                    // console.log('stop');
                    break;
                } else {
                    if((startPos !== 0) && first) {
                        numArr.splice(startPos,0,',');
                        first = false;
                        extra++;
                    } else{
                        numArr.splice((i*3+extra),0,',');
                        extra++;
                    }
                }
            }
            // console.log(numArr.join(''));
            numArr.splice(0,0,'$');
            return numArr.join('');
        }
    }
    /**************************** DON'T WORRY HOW THIS FUNCTION WORKS ********************************/

});
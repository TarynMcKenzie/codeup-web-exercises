"use strict";

// .html()
//   .css()
//     .addClass()
//       .removeClass()
//         .toggleClass()


// ******* Getters and Setters **********

//TODO:-----Getter for text of logo color-----
function getColorText(){
    // will return a string inside the color text span
    return $('#colorText').html();
}

// TODO:-----Setter for text of logo color------
function setColorText(color){
    //remove current class --> change the html color text to color input-> take color input and add it as a new color class
    $("#colorText").removeClass(getColorText()).html(color).addClass(color);
}

// setColorText('purple'); // color input will be applied to the text and text color

// TODO:------Getter for section color------
function getSectionColor(section){
    // find the attribute of class for each section
    return $(section).attr('class');
}

// console.log(getSectionColor('#path1'));


// TODO:------Setter for the section color-----
function setSectionColor(color,section){

    // change all sections if 'all' is passed in
    if (section === 'all'){ //if all sections string is passed

        resetColor(); // remove all direct children classes
        setColorText(color); // the color input will be the set color
        return $('.codeup-logo > path').addClass(color); // add new class attribute with the color input for each path

    } else { // if individual section is passed in, change its color (used for Rainbow effect)

        $(section).removeClass(getSectionColor(section)); //remove section color
        return $(section).addClass(color); // add new class attribute with the color input for each section

    }
}

// TODO:------reset all path elements to default, and change the 'color' text in the h2 to 'green'------
function resetColor(){

    $('.codeup-logo > path').removeClass(function (){ // direct children of logo --> 'codeup-logo > path' --> remove their class attributes

        return $(this).attr('class'); // target all class attributes that are direct children of 'codeup-logo > path'

    });

}

// setSectionColor('orange', 'all'); // (the section we want to change , the color we want to change)


// TODO:------write a function called rainbowLogo() that changes the logo to rainbow colors-----
function rainbowLogo() {
    var text = 'rainbow';
    var logoSections = ['#path1', '#path2', '#path3', '#path4', '#path5', '#path6'];
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    var counter = 0;// begin counter at 0 (color)
    var i = 0; // begin index at 0 (letter)

    logoSections.forEach(function (sectionId) {
        setSectionColor(colors[counter], sectionId); // loop through the color paths
        counter ++; // color each path with a different color
    });

    //make the text characters rainbow
    counter = 0; // reset counter to 0
    var colorfulText = []; // the bucket

    text.split('').forEach(function(letter){ //convert string to array --> loop through the characters (letter)

        colorfulText[i] = '<span class = "'+ colors[counter] + '">' + letter + '</span>';  // example: <span class="color"> r </span>

       if (counter === 5){
           counter = 0; // reset to zero to begin color loop again
       }

       counter ++; // increment counter (colors)
       i ++; // increment index (characters)

    });

    text = colorfulText.join(' '); // convert array to string

    return $('#colorText').removeClass(getColorText()).html(text);
}

// rainbowLogo(); // make the logo paths a color of the rainbow , make the text characters a color of the rainbow




// TODO:-----Set a variable called circleClickCount, to keep track of how many times an individual circle has been clicked-----

var circleClickCount = 0;


// TODO: -----Add a click listener to each of the 'circle' elements at the bottom of the page, and make each color circle-----
$('.circle').click(function(){

    var clickedColor = $(this).attr('id'); // get the id attribute for clicked item

    // change the logo to the clicked color, or rainbow, if rainbow was clicked
    circleClickCount ++;

    if(clickedColor === 'rainbow'){

        resetColor(); // remove all classes from path elements
        rainbowLogo(); // changes the text and logo path elements to rainbow colors

    } else{

        setColorText(clickedColor); // change the text colors and text to the selected (clicked) color
        setSectionColor(clickedColor, 'all'); // change the logo sections to  the selected(clicked) color

    }

    // If the same color is clicked twice, toggle the 'caps' class to UPPERCASE and lowercase the color name
    if ($('.codeup-logo').attr('id') === clickedColor){

        $('#colorText').toggleClass('caps'); // toggle the cap on and off (Caps is a class within the css styling)

    } else{

        $('#colorText').removeClass('caps'); // remove the caps class after a different color is selected
        circleClickCount = 0; // reset the counter after more than two clicks

    }

    $('.codeup-logo').attr('id', clickedColor);
});


// *********************** Traversing Methods ********************************* //

// now let's traverse some elements

// .each()   .first()    .last()    .children()    .parent()    .next()

// TODO: Let's give each of the selection circles a 1px black border
$('.circle').each(function(){ // zero based index  for ach circle

    $(this).css('border', '1px solid black'); // current circle gets a specified styling

});

// TODO: Let's take the border away from the first circle

$('.circle').first().css('border', 'none');

// TODO: Let's make the last circle disappear
$('.circle').last().css('display', 'none');

// TODO: Find the children of the circle row, and remove borders from all of them, then unhide the last circle
$('.circles').children().css('border', 'none').last().css('display', 'inline-flex');

// TODO: while changing the fist path element to have a black fill, give its grandparent a light gray background and 10px padding
$('#path1').removeClass().addClass('black').parent().parent().css({
    'background': 'lightgray',
    'margin': '20px'
});

// TODO: change the second path element to blue, then change the 'next' element to yellow
$('#path2').removeClass().addClass('blue').next().removeClass().addClass('yellow');

// TODO: What's the difference between changing the class to change the color, and simply changing the color directly?
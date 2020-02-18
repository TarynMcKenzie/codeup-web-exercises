(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3, //object property

        getArea: function (radius) {  //object method creation
            // TODO: complete this method
            // hint: area = pi * radius^2
            var area = radius * radius * Math.PI ;

            return area; // TODO: return the proper value
        },

        logInfo: function (doRounding) { //object method creation

            // TODO: complete this method.
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            if (doRounding === true){
                Math.round(doRounding);
            } else{
                return doRounding;
            }

            console.log("Area of a circle with radius: " + this.radius + ", is: " + this.getArea(this.radius));
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");

    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();

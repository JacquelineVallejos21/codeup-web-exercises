(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function (value) {
            // complete this method
            // hint: area = pi * radius^2
         let area =Math.PI * Math.pow(this.radius, 2);
         return area;
            // return the proper value
        },

        logInfo: function (doRounding) {
            // complete this method.
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
                   if (doRounding) {
                       console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.round(this.getArea()));
                   } else {
                       console.log("Area of a circle with radius: " + this.radius + ", is: " + this.getArea());
                   }
               }
        };


    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo();
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo();

    console.log("=======================================================");
    // Change the radius of the circle to 5.
    function circle(radius)
    {
        this.radius = radius;
        // area method
        this.area = function ()
        {
            return Math.PI * this.radius * this.radius;
        };
}
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo();
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo();
console.log(circle.getArea());
})();
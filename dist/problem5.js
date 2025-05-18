"use strict";
{
    function processValue(value) {
        if (typeof value == "string") {
            return value.length;
        }
        else {
            return value * 2;
        }
    }
    console.log(processValue("hello")); // Output: 5
    console.log(processValue(10)); // Output: 20
}

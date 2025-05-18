"use strict";
{
    let Day;
    (function (Day) {
        Day[Day["Monday"] = 0] = "Monday";
        Day[Day["Tuesday"] = 1] = "Tuesday";
        Day[Day["Wednesday"] = 2] = "Wednesday";
        Day[Day["Thursday"] = 3] = "Thursday";
        Day[Day["Friday"] = 4] = "Friday";
        Day[Day["Saturday"] = 5] = "Saturday";
        Day[Day["Sunday"] = 6] = "Sunday";
    })(Day || (Day = {}));
    function getDayType(day) {
        if (day != Day.Sunday) {
            return "Weekday";
        }
        else {
            return "Weekend";
        }
    }
    console.log(getDayType(Day.Monday)); // Output: "Weekday"
    console.log(getDayType(Day.Sunday)); // Output: "Weekend"
}

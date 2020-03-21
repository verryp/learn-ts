"use strict";
// ! enum data type
// ? Numeric enums
var Day;
(function (Day) {
    Day[Day["Mon"] = 0] = "Mon";
    Day[Day["Tues"] = 1] = "Tues";
    Day[Day["Wed"] = 1] = "Wed";
    Day[Day["Thurs"] = 2] = "Thurs";
    Day[Day["Fri"] = 3] = "Fri";
    Day[Day["Sat"] = 4] = "Sat";
    Day[Day["Sun"] = 5] = "Sun";
})(Day || (Day = {}));
// console.log(Day.Thurs);
// ? string enums
var Days;
(function (Days) {
    Days["Mon"] = "Monday";
    Days["Tues"] = "Tuesday";
    Days["Wed"] = "Wednesday";
    Days["Thurs"] = "Thursday";
    Days["Fri"] = "Friday";
    Days["Sat"] = "Saturday";
    Days["Sun"] = "Sunday";
})(Days || (Days = {}));
console.log(Days.Mon);

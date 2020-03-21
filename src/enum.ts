// ! enum data type

// ? Numeric enums
enum Day{
    Mon,
    Tues,
    Wed = 1,
    Thurs,
    Fri,
    Sat,
    Sun
}

// console.log(Day.Thurs);

// ? string enums
enum Days{
    Mon = "Monday",
    Tues = "Tuesday",
    Wed = "Wednesday",
    Thurs = "Thursday",
    Fri = "Friday",
    Sat = "Saturday",
    Sun = "Sunday"
}

console.log(Days.Mon);

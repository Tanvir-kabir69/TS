{
  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): string {
    if (day != Day.Sunday) {
      return "Weekday";
    } else {
      return "Weekend";
    }
  }

  console.log(getDayType(Day.Monday)); // Output: "Weekday"
  console.log(getDayType(Day.Sunday)); // Output: "Weekend"
}

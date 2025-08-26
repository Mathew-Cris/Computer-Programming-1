// here we have declaired a variable named activity that holds a value Get up
let activity = "Get up";

// in this line we are using switch instead of if statement
switch (activity) {
  // if the case is equal to Get up
  case "Get up":
    // this will be executed if the value is eqaul to Get up
    console.log("It is 6:30AM");
    // followed by a break to exit the switch statement
    break;
  case "Breakfast":
    console.log("It is 7:00AM");
    break;
  case "Drive to work":
    console.log("It is 8:00AM");
    break;
  case "Lunch":
    console.log("It is 12:00PM");
    break;
  case "Drive home":
    console.log("It is 5:00PM");
    break;
  case "Dinner":
    console.log("It is 6:30PM");
    break;
  // otherwise if nothing matches with those cases the default will be executed in this case "Time to sleep"
  default:
    console.log("Time to sleep");
    break;
}

// here we have a variable rain that holds a value "true"
let rain = true;

// we are testing if the rain is either true or false
if (rain) {
  console.log("** Taking my umbrella when I need to go outside **"); // this will execute if the condition was true
} else {
  console.log("** I can leave my umbrella at home **"); // if the condition evaluates to false this will get executed
}

// here we have declaired a variable named hobby that has a value "dancing"
let hobby = "dancing";

// here we are checking if the hobby value is equal to coding
if (hobby == "coding") {
  console.log("** I love coding too! **"); // this will execute if the condition is true
} else {
  console.log("** Can you teach me that? **"); // this will execute if the condition is false
}

// else if statement
let age = 10; // age is 10
let cost = 0; // cost is 0
let message; // message is undefined in this case

// first condition if age is less than 3
if (age < 3) {
  // cost is 0
  cost = 0;
  // new value assigned to the message variable
  message = "Access is free under three.";
  // in a certain condition if age is greater than or equals to 3 and a is less than 12
} else if (age >= 3 && age < 12) {
  // the cost will now be having new value 5
  cost = 5;
  // new value to the message variable
  message = "With the child discount, the fee is 5 dollars";

  // else if the age is greater than or equal to 12 and is less than 65
} else if (age >= 12 && age < 65) {
  // the cost will now be 10
  cost = 10;
  // new value to the message variable
  message = "A regular ticket costs 10 dollars.";

  // else if nothing matches the code inside the if statement will be executed
} else {
  // the cost will now be 7
  cost = 7;
  // new value to the message variable
  message = "A ticket is 7 dollars.";
}
console.log(message);
console.log("Your Total cost " + cost);

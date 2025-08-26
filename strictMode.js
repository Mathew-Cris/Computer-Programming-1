// strict mode
// To avoid creating a global variable accidentally inside a function because of omitting the var keyword, you use the strict mode by adding the “use strict”; at the beginning of the JavaScript file (or the function) as follows:
("use strict");
function say() {
  message = "message"; // what?
  console.log("using strict mode: " + message);
}

say(); // message
console.log("result: " + message); // message

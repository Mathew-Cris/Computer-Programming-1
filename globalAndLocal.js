// variable with default value "undefined"
var message;

// global variable accessible only outside the function
var globalVariable = 100;
function test() {
  // local variable accessible only inside the function
  var localVariable = 200;
  console.log(localVariable);
}
console.log("Global variable: " + globalVariable); // accessing the global variable
// console.log(localVariable); // will cause a referenceError

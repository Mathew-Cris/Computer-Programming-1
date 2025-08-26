// variable shadowing
var message = "Hello";
function greet() {
  // local variable
  var message = "HI";
  console.log(message); // which message?
}

greet(); //Hi
console.log(message); // Hello

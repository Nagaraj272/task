// Declaring a variable with var
var age=24;
console.log("Age using var:", age); // Output: Age using var: 24

// Redeclaring the variable with var
var age = 30;
console.log("Redeclared age using var:", age); // Output: Redeclared age using var: 30

// Declaring a variable with let
let name = "Alice";
console.log("Name using let:", name); // Output: Name using let: Alice

// Reassigning the variable declared with let
//  let name = "Bob";
// console.log("Reassigned name using let:", name); // Output: Reassigned name using let: Bob

// Declaring a constant with const
const country = "INDIA";
console.log("Country using const:", country); // Output: Country using const:INDIA

//const country = "USA";
// console.log("Country using const:", country); // Output: Country using const: USA

//hoisting
console.log(x);//undefined
var x;//undefined
x=20;
console.log(x);//20

//console.log(y);//referenceError
let y=20;
console.log(y);//undefined
 y=10;
console.log(y);//10

// const z;//syntaxError
z=30;
console.log(z);

let result = (10 > 5) ? "Greater than 5" : "Less than or equal to 5"; 
console.log(result);

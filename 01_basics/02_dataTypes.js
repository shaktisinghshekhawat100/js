"use strict";//treat all js code as newer version
// alert(3 + 4) // we can use alert to show the result of an expression
// we are using node not a browser, so we will use console.log instead of alert
// alert("the result is: " + (3 + 4)) // we can also show the result of an expression with a message

console.log(3 + 4); // we can use console.log to show the result of an expression
console.log("the result is: " + (3 + 4)); // we can also show the result of an expression with a message

 // Data types
// 1. Number: for any kind of numbers: integer or floating-point
//number range is from -(2^53 - 1) to (2^53 - 1). There are also special values: Infinity, -Infinity, and NaN (not a number).
// 2. String: for text. A string may have zero or more characters, there’s no separate single-character type.
// A string is a sequence of characters that can be enclosed in single quotes ('...'), double quotes ("..."), or backticks (`...`). The backticks allow for multi-line strings and string interpolation.
// 3. Boolean: for true/false.
// 4. null: for unknown values – a standalone type that has a single value null.
// 5. undefined: for unassigned values – a standalone type that has a single value undefined.
// 6. Object: for more complex data structures.// non a primitive data type, used to store collections of data and more complex entities. Objects can contain properties and methods. Arrays and functions are also considered objects in JavaScript.
// 7. Symbol: for unique identifiers .
 
console.log(typeof 123); // "number"
console.log(typeof "Hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof null);
// "object" (this is a historical bug in JavaScript, but it remains for compatibility reasons)
console.log(typeof undefined); // "undefined"
console.log(typeof { name: "Alice" });
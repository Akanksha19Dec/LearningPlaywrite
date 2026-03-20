.// Identifier: An identifier is a name used to identify a variable, function, array, or any other user-defined item. It must begin with a letter (A-Z or a-z), an underscore (_), or a dollar sign ($). Subsequent characters can also include digits (0-9). Identifiers are case-sensitive and cannot be the same as reserved keywords in JavaScript.

// Valid identifiers

var a= 100;
a=20;
console.log(a);
/*
*a = identifier
* = assignment operator
* 100 = value or literal
*/

//in javascrip semicolon is optional but it is a good practice to use it at the end of each statement to avoid any potential issues with automatic semicolon insertion (ASI) and to improve code readability.
//Rules for naming identifiers in JavaScript:   
//1. An identifier must start with a letter (A-Z or a-z), an underscore (_), or a dollar sign ($).
//2. Subsequent characters can also include digits (0-9).
//3. Identifiers are case-sensitive, meaning that "myVariable" and "myvariable" would be considered different identifiers.
//4. Identifiers cannot be the same as reserved keywords in JavaScript, such as "var", "function", "if", etc.
//5. It is a good practice to use meaningful names for identifiers to improve code readability and maintainability.

var _name = "Akanksha";
var $name = "Akanksha";
var name1 = "Akanksha";
var name$1 = "Akanksha";
var name_1$1_2  = "Akanksha";
var Name = "Akanksha"; // case-sensitive
var π = 123; // Unicode characters are allowed in identifiers, so you can use characters from other languages or special symbols as long as they follow the rules for valid identifiers. In this case, π is a valid identifier and can be used to store a value.
var नमस्ते = "hello"; // This is a valid identifier in Hindi, which means "hello". It follows the rules for valid identifiers, as it starts with a letter and can include Unicode characters.



// Invalid identifiers
// var 1name = "Akanksha"; // Cannot start with a digit
// var my-name = "Akanksha"; // Hyphens are not allowed
// var var = "Akanksha"; // Cannot use reserved keywords
//var * = "Akanksha"; // Special characters other than _ and $ are not allowed
//var break = "Akanksha"; // Cannot use reserved keywords
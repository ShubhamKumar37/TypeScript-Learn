"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greet = "Hello World";
greet = 234; // Error: Type '234' is not assignable to type 'string'. As previously the greet variable is assinged a string datatype
// so it will not accept any other value other than string.
// greet. // Using the do to invoke some methods on it will show the methods only for string datatype.
var number = 5;
// Even the typo error are also mentioned in the code editor.
console.log(greet);

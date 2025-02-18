"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 3122;
// Now i am allowed to use 2 different data types in a single variable
score = 234;
score = "sdfhui"; // This will NOT complain
var newUser = {
    name: "Shubham Kumar",
    id: 123
};
newUser = {
    userName: "Sparsh Kumar",
    id: 123
}; // It will not generate problem at all 
console.log(newUser);
var getDbId = function (id) {
    console.log("This is the id = ".concat(id));
};
// Both of these will work
getDbId("123");
getDbId(123);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "Shubham Kumar",
    email: "sk@gmail.com",
    isActive: true,
};
// Now if i want to pass the email as the object in argument of invoked function then this will cause error which it should be
// but if i create a another object where i mention a additional parameter email and then pass it to the argument then it will not raise any error
var myObj = {
    name: "shubham",
    isPaid: true,
    email: "sk918281820@gmail.com"
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
// createUser({name: "shubham", isPaid: true});
// createUser({name: "shubham", isPaid: truem, email: "sk@gmail.com"}); // Here it will cause error
createUser(myObj); // This will not generate any error, if the parameter of function property are not there in object then it will cause error
function createCourse() {
    return { name: "nitin", price: 200 };
}
createUser({ name: "shubham kumar", isPaid: true });

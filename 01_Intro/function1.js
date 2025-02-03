"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addNum(num) {
    // num.toUpperCase();
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function letConnect(email, password, isPaid) { return { email: email, password: password, isPaid: isPaid }; }
var loginUser = function (email, password, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return { email: email, password: password, isPaid: isPaid };
};
// console.log(addNum("5"));
console.log(addNum(5));
console.log(getUpper("Shubham"));
console.log(letConnect("sk@gamil.com", "1234", true));
console.log(loginUser("s@s.com", "1234"));

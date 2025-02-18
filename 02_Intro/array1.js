// const arr1 = []; // This is not the correct way to declare a array
var arr2 = []; // if i make this and try to add some value then it will only accept the empty array
var arr3 = []; // This is the correct way to declare a array which will only accept string as element
var arr4 = []; // This is another way to declare a array
var arr5 = [];
var mlModel = [
    [1, 2, 3],
    // [""] // Now this line will complain as the matrix is of 2D only of number not string 
];
arr3.push("Shubham kumar");
// arr2.push([1, 2, 3]); // For the arr2 it will not work as the type is marked as never or empty array
// arr5.push({}); // This will complain because the structure should be like {name: "", age: 0}
arr5.push({ name: "Shubham Kumar", age: 21 });

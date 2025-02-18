// const arr1 = []; // This is not the correct way to declare a array
const arr2: [] = []; // if i make this and try to add some value then it will only accept the empty array
const arr3: string[] = []; // This is the correct way to declare a array which will only accept string as element
const arr4: Array<string> = []; // This is another way to declare a array

type User = {
    name: string,
    age: number,
};

const arr5: Array<User> = [];
const mlModel: Array<Array<number>> = [
    [1, 2, 3],
    // [""] // Now this line will complain as the matrix is of 2D only of number not string 
];

arr3.push("Shubham kumar");
// arr2.push([1, 2, 3]); // For the arr2 it will not work as the type is marked as never or empty array

// arr5.push({}); // This will complain because the structure should be like {name: "", age: 0}
arr5.push({ name: "Shubham Kumar", age: 21 });

export { };
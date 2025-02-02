let greet: string = "Hello World";

// greet = 234; // Error: Type '234' is not assignable to type 'string'. As previously the greet variable is assinged a string datatype
// so it will not accept any other value other than string.

// greet. // Using the do to invoke some methods on it will show the methods only for string datatype.
// let number = 5;

// Even the typo error are also mentioned in the code editor.

console.log(greet);

// let num : number = 234.9;
let num = 234.9; // We can also write this as we know that it is a number and it is obvious so it will automatically asign the variable as number. so there is no need to explicity mark it as number
console.log(num);

export { }; // This tells the compiler that this file is a module and we should not have variable conflicts with other files.
// function getValue(num: number) : boolean
// {
//     if(num > 5) return true;

//     return "Hello this is status OK";
// }

// This is how we can mention the return type of the function in arrow way
const greet = (s: string): string => {
    return "Hi my name is " + s;
}

const names = ["Shubham", "Nitin", "Rahul", 1];

// The automatically knows about the data type of the element in the array which is name here now we are not explicitly require to mention the datatype of it as it is already intelligent enough to know about it
names.map((name): string => {
    return `Hi my name is ${name}`;
});

// Here we know that the function is not returning anything but still we required to mention the return type as it is a good practice
function consoleError(error: string): void {
    console.error(error);
    return undefined; // Still this will be ok but not never return type (or return ;)
}

// Here we are not returning any thing but we know that this function will not return anything any time so we mention never as the return type (It is mention in the guideline of typescript) we use this in intanstional crash. This even doesnot allow to return undefined
function throwError(error: string): never {
    throw new Error(error);
}
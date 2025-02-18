let score: number | string = 3122;
// Now i am allowed to use 2 different data types in a single variable

score = 234;
score = "sdfhui"; // This will NOT complain

type User = {
    name: string,
    id: number,
};

type Admin = {
    userName: string,
    id: number,
};

let newUser: User | Admin = {
    name: "Shubham Kumar",
    id: 123
};

newUser = {
    userName: "Sparsh Kumar",
    id: 123
}; // It will not generate problem at all 

console.log(newUser);

const getDbId = (id: number | string) => {
    console.log(`This is the id = ${id}`);
    console.log(`This is the type of id = ${typeof id}`);
}

// Both of these will work
getDbId("123");
getDbId(123);

const getNewId = (id: string | number) => {
    if (typeof id === "string") {
        id.toLowerCase(); // Now ts will not raise any problem as it is smart enough to know if the id is reaching at this line of block means the id is type of string
    }
    else if (typeof id === "number") {
        id.toFixed();
    }
}

export { };
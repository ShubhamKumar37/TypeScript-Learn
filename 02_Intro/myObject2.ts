type User = {
    readonly _id: string, // This readonly keyword will mark the variable as read only and no one can change it.
    name: string,
    email: string,
    isActive: boolean,
    creditCardDetails?: number, // Now this "?" will help to mark the variable as optional means if we are not mentioning this property in our objct then it will not complain
};

let u: User = {
    _id: "123",
    name: "Shubham Kumar",
    email: "sk@gmail.com",
    isActive: true
};

u.name = "Sparsh Sharma";
// u._id = "234234"; // Now this will complain because the _id is read only

type cardNumber = {
    cardNum: string,
};

type cardDate = {
    cardDate: string,
};

// "&" is intersection types

type cardDetails = cardNumber & cardDate & {
    cvv: number
};

let card: cardDetails = {
    cvv: 2343,
    cardDate: "12/12/12",
    cardNum: "213423432",
};

export { };
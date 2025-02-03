function addNum(num: number) : number
{
    // num.toUpperCase();
    return num + 2;
}

function getUpper(val : string) : string
{
    return val.toUpperCase();
}

function letConnect(email : string, password: string, isPaid: boolean){return {email, password, isPaid}}
let loginUser = (email: string, password: string , isPaid: boolean = false) => {return {email, password, isPaid}}

// console.log(addNum("5"));
console.log(addNum(5));
console.log(getUpper("Shubham"));
console.log(letConnect("sk@gamil.com", "1234", true));
console.log(loginUser("s@s.com", "1234"));

export {};
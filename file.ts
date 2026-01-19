// Typescript is often called the "SUPERSET" of JavaScript.

// It allows the developers to write JS in a precise manner so that the code faces a lot less error in the runtime.
// TYpeScript all about type safety 
// In the JS we can add 2 + '2' = "22";
// The above was possible because "TYPESAFETY" was missing .

// TypeScript does "STATIC CHECKING" which means the parser of the language ot the entire syntax of the language is constantly being analyzed by the IDE'S

// We write our code in TS and that is further transpiled into JS.
// TypeScript is just a development tool and our whole code that we sent to the production is 100% JS.
// It helps to write better code with less problems with a more scalable and maintainable code that is easily understandable and the chances of it producing errors are very less.
// It's more of a wrapper around JS.

// let user = {name:"Hitesh" , age:18};

// console.log(user);
console.log("Parth");

// We write a lot of code in Typescript but it is a safer code 

let greetings:string = "Hello Parth";
let myNUm = 6;

console.log(greetings);

// we don't specifically declare Interger or Float we simply call all of them as NUMBER 
// number
let userId:number = 334466;
// now whenever we qaccess userID using dot(.) it will only give methods that can be applied on number

// boolean
let isLoggedIn: boolean = false;

// any

// let hero;
let hero : string;

function getHero(){
    return "THOR"
}
hero = getHero(); // hero is getting any type that is any type can be returned and stored in it.
// So, for correcting this we will use ':' and tell the type explicitly at the declaration time.
// let hero : string;
// "any" is not a typechecker it turns off the typechecker

/* ## noimplicitAny
When you don’t specify a type, and TypeScript can’t infer it from context, the compiler will typically default to any.

You usually want to avoid this, though, because any isn’t type-checked. Use the compiler flag noImplicitAny to flag any implicit any as an error.
*/

// Function 
function addTwo(num: number){
    return num + 2;
}

addTwo(5);

function getUpper(val:string){
    return val.toUpperCase();
}

getUpper("hi");

function signUp(name:string , email:string, isPaid: boolean){}
signUp( "abyu" , "cnjsbjb" , false);

let login = (name:string , email:string, isPaid: boolean = false)=>{}
login("Parth" , "parth@google.com");

function add(num : number):number{ // the colon outside the function tells the function to allow only number to return 
    return num + 10;
}

const getHello = (s:string):string => {
    return "";
}

const heros = ["thor" ,"spiderman", "dr. strange"]

heros.map( (hero):string =>{
    return `hero is ${hero}`;
});

function consoleError(errmssg: string):void{ //void specifies this function doesn't returns anything
    console.log(errmssg);
}

// Some functions never return a value
// It leads to forceful termination of the program.
function handleError(errmssg: string):never{
    throw new Error(errmssg)
}

// Objects
const User = {
    name: "Parth",
    email : "parth@google.com",
    isActive : true     
}

function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {
  // function body
}

// createUser({ name: "Parth", isPaid: false });
let newUsr = { name: "Parth", isPaid: false , email: "parth@google.com"};
createUser(newUsr); // weird behaviour of objects because if we were to pass email as argument in create user that was not allowed but now we have passed using a different method 

function createCourse() : {name:string , price: number}{
    return {name :"react.js" , price : 399};
}

// Type Aliases

// type User = {
//     name: string;
//     email : string;
//     isActive : boolean;
// }

// function createNewUser (user : User):User{
// // function body
//     return {name: "" , email: "", isActive: true};
// }

// createNewUser({name: "" , email: "", isActive: true});

type User = {
    readonly _id : string;
    name: string;
    email : string;
    isActive : boolean;
    creditDetails? : number
}
let myUser: User = {
    _id : "1234",
    name : "p",
    email : "palplk",
    isActive : false
}

myUser.email = "ncvsnvjnv";
// myUser._id = "bccvb"; this is not allowed due to the readonly 

type cardnumber = {
    cardnumber : string;
}

type cardDate = {
    carddate : string;
}

type cardDetails = cardDate & cardnumber & {
    cvv : number;
}

// Unions : It allows us to deal with the situation where we are not sure what type of data we are going to encounter so using union we can combine 2 or more types of data that we can include into a variable or any array and vice vresa..

let score : number | string = 33;
score = 44;
score = "55";  

type User3 = {
    name: string;
    id : number;
}

type Admin = {
    username : string;
    id: number;
}

let parth :  User3 | Admin = {
    name:"Parth" , id :443
};

parth = {username : "pg" , id : 443};

// function getDBId(id :number | string){
//     console.log(`DB id is : ${id}`);
// }

getDBId(3);
getDBId("3");

function getDBId(id :number|string){
    // id.toLowerCase(); // it gives a red line as it treates id as a new datatype that has string or number both
    // So to overcome the above squiggly line we need to the strict type checking
    // ## Below is called as teh narrowing down of union type .
    if(typeof id === "string"){
        id.toLowerCase();
    }
}

// array

const data : number[] = [1 , 2 ,3];
const data2 : string[] = ["hi" , "hello", "bye"];
const data3 : string[] | number[] = [1,2,3] // this specifies that either all the elements in the array can be string or all can be number
const data4 : (string | number)[] = [1 , 2, "hi"]; // this is the array that can have both numbers and strings as its elements.

let seatAllotment: "aisle" | "middle" | "window" // this is used to fix the values of the variable so that no other value can be assigned 
export {}
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

// Tuples : IT is a kind of specialised array given to us by TYpeScript with some special restrictions on it.
// IN the tuples order of the array also matters
let tUser : [string , number , boolean];
tUser = ["pg" , 123 , true];

let rgb :[number , number, number] = [225 ,  256 , 124];

type User4 = [number , string];
const newUser: User4 = [112 , "exam@goggle.com"];

newUser[1] = "nchc@xyz.com";

newUser.push(3); // we marked our newUser to follow a tuple so it must never be more than the size of 2 but using push we have altered it's size 

// console.log(newUser);

// interfaces

interface User5 {
    readonly dbId : number,
    email : string,
    userId : number,
    googleId? : string,
    // startTrail: () => string
    startTrail(): string,
    getCoupon(couponName : string , value: number) : number
}

// REOPENING OF THE INTERFACE

interface User5 {
    githubId : string
}

// INHERITANCE OF THE INTERFACE 
interface Admin1 extends User5 {
    role : "admin" | "ta" | "learner"
}

// const PG : User5 = {
//     dbId : 22 , email : "pcghbc" , userId : 123456 , githubId : "4556",
//     startTrail: () => {
//         return "trail started";
//     },
//     getCoupon :(couponName : "PG25", value : 1234) => {
//         return 38;
//     },
// }

const PG : Admin1 = {
    dbId : 22 , email : "pcghbc" , userId : 123456 , githubId : "4556",
    role : "learner",
    startTrail: () => {
        return "trail started";
    },
    getCoupon :(couponName : "PG25", value : 1234) => {
        return 38;
    },
}

// public & private 
// PRIVATE keyword can also be used with methods as we use it with properties
class khiladi {
    // private readonly city : string = "Panipat";
    readonly city : string = "Panipat";
    name: string;
    email : string;
    constructor(email : string , name : string){
        this.email = email;
        this.name = name;
    }
}
// we can use #name to make it a private field instead of writing private keyword 
const pd = new khiladi("nhbuaekd@gmail.com" , "dp");

// Production level code for the above class 

class khiladi2 {
    readonly city : string = "Panipat";

    constructor
    (
        public email : string ,
        public name : string,
        private userId : number)
        {
        }
// GETTERS & SETTERS
    protected counting = 0;
    private _courseCount = 1;

    get getEmail(): string {
        return `apple${this.email}`;
    }

    get courseCount(): number{
        return this._courseCount;
    }

    set courseCount(courseNum){
        if(courseNum <= 1){
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum;
    }
}
// use of protected : The property marked as this can be accessed in its own class and in the class tat inherits the class

class subUser extends khiladi2{
    isFamily:boolean = true;
    changeCounting(){
        this.counting = 4;
    }
}
pd.city // this can not be accessed outside the class 

// Abstract Class : No new object can be created from an abstract class but they help to define the class who are inheriting them to get a better structure of the classes .
// If we want to make some methods to be compulsorily inherited we can make them "abstract" as well.
//  We are allowed to overwrite the method declared in the abstract class, in the inherited class.
abstract class takePhoto{
    constructor(
        public cameraMode : string,
        public filter : string
    ){};

    abstract getMethod(): void
}
class Instagram extends takePhoto{
    constructor(
        public cameraMode: string,
        public filter :  string,
        public burst : number
    ){
        super(cameraMode , filter)
    }

    getMethod(): void {
        console.log("Abstract Method it is:");
    }
}
const darky = new Instagram("test" ,"test234" , 3)
export {}
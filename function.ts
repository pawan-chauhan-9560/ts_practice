//Functions
//Funcation types
//Optional and Default parameters
//Rest Parameters
//Overloads

// ----------------------------------------------------kc ---------------------------------------------------
// function abcs(): void{

// }

//function type;

// function abcd(name:string, age:number,cb:(arg:string)=>void){ // Callback example
// cb("bye");
// }

// abcd("pawan",2,(args:string)=>{
// console.log(args);

// })

// function jd(name:string,age:number,gender?:string){ // Optional and default parameters
// console.log(name,age,gender);

// }

// jd("pawan",200,"male")

//Rest Parameters

// function rest(name:string,age:number, ...args:any){
// console.log(...args);
// }

// rest("pawan",47,"male","SoftwareEngineer","Ghaziabad","BA honors");

// Overloading.

//   -- First signature
// function abcd(a: string): void;
// function abcd(a: string, b: number): number;

// function abcd(a: string, b?: any) {
//   if (typeof a === "string" && typeof b === "undefined") {
//     console.log("hey 1 ");
//   }
//   if (typeof a === "string" && typeof b === "number") {
//     return 123;
//   } else {
//     throw new Error("something is wrong");
//   }
// }
// abcd("pawan");
// abcd("jai ho", 123);

function abcdef(a: string): void;
function abcdef(a: string, b: number): number;

function abcdef(a: string, b?: any) {
  if (typeof a === "string" && typeof b === "undefined") {
    console.log("hey 1 ");
  }
  if (typeof a === "string" && typeof b === "number") {
    return 123;
  } else {
    throw new Error("something is wrong");
  }
}

abcdef("pawan");           // Will print "hey 1"
abcdef("jai ho", 123);      // Will return 123


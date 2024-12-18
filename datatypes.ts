// Basic  Data Types
// Array, Tuples, Enums,
//Any,Unknown,void, Null, Undefined,Never

// Primitive and Reference type (),{}, []


let test1:(number|string|boolean)[]=[1,"pawan",false,"kundan","pradeep"];
let newArr= [1,2,4];


console.log(test1);



let arr=[1,2,3,{name:"pawan"},{age:1},{IsActive:false}]

//Tuple

enum userRoles{
    ADMIN=45,
    GUEST=78,
    SUPERADMIN=96
}

enum StatusCode{
    ADBONDAED=500,
    NOTFOUND=400,
    SERVERERROR=403
}

let a:number;
a=8;

let b;
b=0;
b="numbe";


let c:unknown;

c=0;
c="unknown VALUe";

if(typeof c === "string"){
    c.toLowerCase();
}

 function test():void{
    console.log("VOid ka example hai");
 }

 let d:null| string;
 d="number";

//  function abcd():never{
//    while(true);
//  }

//  abcd();


 //TypeInferne
 //Understanding type interface
 //type annotation  


 let e="12" ; //TypeInferne
 let f:number | string; //type annotation


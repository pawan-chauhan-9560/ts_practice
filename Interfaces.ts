// Interfaces and Type Aliases
// Defining the interfaces
// using interfaces to define object shapes
// Extending interfaces
// type Aliases
// Intersection types

interface User {
  name: string,
  age: number,
  email: string,
  gender?:string
}
interface User {
    nameGharKa: string,
    ageDocumentKi: number,
    emailAngelPriyaVali: string,
    genderFakeVala?:string
  }

function getData(obj: User) {
  obj.age = 12;
  obj.email = "Pawanchauhan933@gmail.com";
  obj.name = "Pawan";
  return obj;
}

interface Admin extends User{ // extending interfaces
    admin:boolean;
}

type meraHai= string|number|null  //typeAlias // Customtype

let y:meraHai;

let z:string|null;

type Users={
    name:string,
    age:number
}
 
type Admins=User & {
    getDetails(user:string):void
}

function xyz(obj:Admins){
console.log("Intersection type")
}
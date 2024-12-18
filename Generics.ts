//Generics
// Generic functions
// Genric interfaces
// Generic classes


// function logger(a:string){};

// function bra<T>(a:T){};
// bra<string>("pawan");

// bra<number>(3);

// bra(33);

// bra<boolean>(false);


// class wineMaker<T>{
//     constructor(public key:T){}
// }

// let b1= new wineMaker<string>("hey");
// let b2= new wineMaker<number>(12);

// function kachiMaker<T>(a:T,b:T):T{
// // return "a"; wrong
// return a;
// }
// kachiMaker<string>("hey","bye");

import {addPayment} from './modules';
addPayment("3456");
"use strict";
// Classes & Object
class Device {
    constructor() {
        this.name = "pawan";
        this.price = 12000;
        this.category = "digital";
    }
}
let d1 = new Device();
let d2 = new Device();
//Constructors
class bottelMaker {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
let bm = new bottelMaker("Nikon", 450);
console.log(bm);
class humanMaker {
    constructor(name, IsHandsome, Nationality) {
        this.name = name;
        this.IsHandsome = IsHandsome;
        this.Nationality = Nationality;
        this.age = 0;
    }
}
let j1 = new humanMaker("pawan", true, "India");
// let j2=new humanMaker("Rahul",false,"India");
// let j3=new humanMaker("Ravi",false,"India");
// let j4=new humanMaker("Chota",true,"India");
// let j5=new humanMaker("Paplu",false,"India");
// let j6=new humanMaker("Jimmy",false,"India");
// let j7=new humanMaker("pintu",true,"India");
// console.log(`j1 ${j1}, j2 ${j2}, j3 ${j3}, j4 ${j4}, j5 ${j5}, j6 ${j6} ,j7 ${j7}  `)
// console.log(`j1 ${JSON.stringify(j1)}`);
// console.log(j1);
class fanMakes {
    constructor(variant) {
        this.variant = variant;
        this.halua = "halua";
        this.kuchKahahai = "hmm kuch hua hai";
    }
}
class tableFanMaker extends fanMakes {
    constructor(variant) {
        super(variant);
    }
    getValue() {
        console.log(this.variant, this.kuchKahahai);
    }
}
let z1 = new tableFanMaker("Ceiling Fan");
// z1.getValue();
class halua {
    constructor(type) {
        this.type = type;
    }
    changeName() {
        // this.type:"besan ka"; not allow when readonly
    }
}
let h1 = new halua("moong daal halwa");
// console.log(h1);
class getterSetter {
    constructor(_vevhar, isEyeBeautiful) {
        this._vevhar = _vevhar;
        this.isEyeBeautiful = isEyeBeautiful;
    }
    get vevhar() {
        return this._vevhar;
    }
    set vevhar(value) {
        this._vevhar = value;
    }
}
let getter = new getterSetter("Sahi nahi hai", true);
console.log(getter);
getter.vevhar = "Ab sahi hai vevhar";
// console.log(getter);
//Static members
class pawanInst {
}
pawanInst.version = 1;
// console.log(pawanInst.version);
//Abstract Class
class payment {
    constructor(amount, accountNumber) {
        this.amount = amount;
        this.accountNumber = accountNumber;
    }
    isPaymentValid(amount) {
        return this.amount > 0;
    }
}
class paytm extends payment {
}

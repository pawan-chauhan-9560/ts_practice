// Classes & Object

class Device {
  name = "pawan";
  price = 12000;
  category = "digital";
}
let d1 = new Device();
let d2 = new Device();

//Constructors

class bottelMaker {
  constructor(public name: string, public price: number) {}
}
let bm = new bottelMaker("Nikon", 450);
console.log(bm);

class humanMaker {
  age = 0;
  constructor(
    public name: string,
    public IsHandsome: boolean,
    public Nationality: string
  ) {}
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
  private halua: string = "halua";
  protected kuchKahahai:string = "hmm kuch hua hai";
  constructor(public variant: string) {}
}

class tableFanMaker extends fanMakes {
  constructor(variant: string) {
    super(variant);
  }
  getValue() {
    console.log(this.variant,this.kuchKahahai);

  }
}
let z1 = new tableFanMaker("Ceiling Fan");
// z1.getValue();


class halua{
    constructor(public readonly type:string){

    }
    changeName(){
        // this.type:"besan ka"; not allow when readonly
    }
}
let h1=new halua("moong daal halwa");
// console.log(h1);


class getterSetter{
    constructor(public _vevhar:string, public isEyeBeautiful:boolean){

    }
    get vevhar(){
     return this._vevhar;
    }
    set vevhar(value:string){
        this._vevhar=value;
    }
}

let getter=new getterSetter("Sahi nahi hai", true);
console.log(getter);
getter.vevhar="Ab sahi hai vevhar";
// console.log(getter);

//Static members
class pawanInst{
    static version=1;
}
// console.log(pawanInst.version);

//Abstract Class

class payment{
    constructor(protected amount:number, protected accountNumber:number){

    }
    isPaymentValid(amount:number){
        return this.amount > 0;
    }
}

class paytm extends payment{

}
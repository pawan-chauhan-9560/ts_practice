// Basic  Data Types
// Array, Tuples, Enums,
//Any,Unknown,void, Null, Undefined,Never
// Primitive and Reference type (),{}, []
var test1 = [1, "pawan", false, "kundan"];
console.log(test1);
var arr = [1, 2, 3, { name: "pawan" }, { age: 1 }, { IsActive: false }];
//Tuple
var newArr = ["pawan", 90, false];
var userRoles;
(function (userRoles) {
    userRoles[userRoles["ADMIN"] = 45] = "ADMIN";
    userRoles[userRoles["GUEST"] = 78] = "GUEST";
    userRoles[userRoles["SUPERADMIN"] = 96] = "SUPERADMIN";
})(userRoles || (userRoles = {}));
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["ADBONDAED"] = 500] = "ADBONDAED";
    StatusCode[StatusCode["NOTFOUND"] = 400] = "NOTFOUND";
    StatusCode[StatusCode["SERVERERROR"] = 403] = "SERVERERROR";
})(StatusCode || (StatusCode = {}));
var a;
a = 8;
var b;
b = 0;
b = "numbe";
var c;
c = 0;
c = "unknown VALUe";
if (typeof c === "string") {
    c.toLowerCase();
}
function test() {
    console.log("VOid ka example hai");
}
var d;
d = "number";
//  function abcd():never{
//    while(true);
//  }
//  abcd();
//TypeInferne
//Understanding type interface
//type annotation  
var e = "12"; //TypeInferne
var f; //type annotation

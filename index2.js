//Next gen JS Features
/// Global Veriable/Scope Vs Local Veriable/Scope

console.log("Global Veriable/Scope");
for(var g_scope=1; g_scope<5; g_scope++)
{
    console.log(g_scope);
}
console.log(g_scope);


console.log("Local Veriable/Scope");
for(let l_scope=1; l_scope<5; l_scope++)
{
    console.log(l_scope);
}
console.log(l_scope);

//Declearation same veriable in Locally and Globally

for(let g_localGlobal=1; g_localGlobal<5; g_localGlobal++)
{
    console.log(g_localGlobal);
}
var g_localGlobal="Mehrab"; 

//Constant-> We can change/add property and value for it 
const objects1 = {nam:"Mehrab"};
objects1.nam = "Hossain"
objects1.age = 29;


//Function--> Declaration Vs Expression (Arrow function)
///Function--> Declaration
function callNumber (){
    console.log("Mehrab");
}

//Function--> Expression
var callNumber1 = function () {
    console.log("Hossain");
}

//Function--> Arrow
var callNumber2 = () => {
    console.log("Sagor");
}


//Export with Default Vs Without Default 
///Export with Default

export default callNumber;
export {callNumber1, callNumber2 }; 

///Export without Default
export var callNumber3 = () => {
    console.log("Sagor");
}


//JS CLASS-Operator (Method(function) and Properties(Object, Array)), Use constructor to create 
class MyInfo {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
}

const friInfo = new MyInfo("Fresh", 20, 57);
const gfInfo = new MyInfo("Water", 28, 52);


//JS Spread-Operator (...)----> Used with array and object to extact values/properties. 
const arr = [1,2,3];
const arr_new = [...arr, 4];

//JS Rest-Operator (...)----> Used with functions. 
function findSum (...numbers){
    var sum = 0;
    for (let n of numbers){
        sum = sum + n;
    }
    return sum
}
console.log (findSum(1,2,3,4,5,6));


//JS Destructuring-Operator ----> We can extract few element/value of the array
var dstArr = [6,7,8,9];
console.log([first,,last] =dstArr);




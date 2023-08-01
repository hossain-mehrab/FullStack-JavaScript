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

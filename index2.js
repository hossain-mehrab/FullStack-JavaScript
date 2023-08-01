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
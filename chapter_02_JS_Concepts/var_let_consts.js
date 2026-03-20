//var , let , const
//let is best
//var - Function scoped 


var a = 10;
var a= 90; // no issues very naughty but it is not a good practice to redeclare variables using var as it can lead to confusion and potential bugs in your code. It is recommended to use let or const for variable declarations to avoid such issues and improve code readability and maintainability.
console.log(a);

function assignvar()
{
   var a = 20;
    console.log("Function scoped a:", a);
    if(true)
    {
        var a = 30;
        console.log("Function scoped a in if block:", a);
    }

console.log("Function scoped a after if block:", a);
}
assignvar();
console.log("Global scoped a:", a);

//let - Block scoped

let b = 10;
//let b = 90; // SyntaxError: Identifier 'b' has already been declared
console.log(b);
function assignLet()
{
    let b = 20;
    console.log("Block scoped b:", b);
    if(true)
    {
        let b = 30;
        console.log("Block scoped b in if block:", b);
    }
    console.log("Block scoped b after if block:", b);
}
assignLet();
console.log("Global scoped b:", b);

//const - Block scoped and cannot be reassigned
const c = 10;
//c = 90; // TypeError: Assignment to constant variable.
console.log(c);     

function assignConst()
{
    const c = 20;
    console.log("Block scoped c:", c);
    if(true)    {
        const c = 30;
        console.log("Block scoped c in if block:", c);
    }
    console.log("Block scoped c after if block:", c);
}
assignConst();
console.log("Global scoped c:", c);

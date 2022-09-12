/**
 * Var is keyword in javaScript
 * Var is a Global keyword we can access var from any where.
 */

//var if,function.
var amount = 0;
var myName = "venky";
function amountchanges() {
    if (myName == "venky") {
        amount = 10000;
        console.log(myName);
        console.log(amount);
    }
}
// amountchanges();

/**
 * Let
 * let is a scope level.
 * we can access with in the scope.
 * {
 * ..
 * ...scope
 * .....
 * }
 */
let id=252566464;
let age=20;
// console.log(id);
// console.log(age);

/**
 * Const
 * Const is a scope level variable,
 * we can access with in scope, also cannot be changed.
 */
const PV=300;
console.log(PV);
PV=50;

/**\
 * The "Assignment to constant variable" error occurs when trying 
 * to reassign or redeclare a variable declared using the const keyword. 
 * When a variable is declared using const , it can't be reassigned or 
 * redeclared.
 */
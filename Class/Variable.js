/*Difference between var ,let & const

1.var:
Function-scoped
Can be redeclared and reassigned
var x = 10;
var x = 20;   // allowed
x = 30;       // allowed
console.log(x); // 30

2.let:
Block-scoped means inside {}
Can be reassigned, but not redeclared
let a = 10;
a = 20;     // allowed
let a = 30; //not allowed

3.const:
Block-scoped
Cannot be reassigned or redeclared
Must be initialized at declaration
const c = 10;
c = 20; // Error
*/

 /*Types of data
 1.Primitive: 
 1.Number
 2.String
 3.Boolean
 4.Undefined
 5.Null
 6.Symbol

 2.Non-primitive
 1.Object
 2.Array
 3.Function
 4.Date
 */
 
 
 
 //variables declations

 let accountId = 101; //Number
 let accountEmail = "amrutapowar" //string
 let isAvailable=true; //boolean
 let value; //undefined
 let price=null; //null
 let big = 1234567890123456789012345n;  //BigInt

 console.log(typeof(accountId))
 console.log(typeof(accountEmail))
 console.log(typeof(isAvailable))
 console.log(typeof(value))
 console.log(typeof(price)) 
 console.log(typeof(big)) 

 /*Difference between null & undefined
 undefined means a variable is declared but not assigned any value
 let a;
console.log(a); // undefined

null means intentionaly absence of value set by programmer
let b = null;
console.log(b); // null
*/
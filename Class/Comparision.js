/*Comparison operators are used to compare two values.
Comparison operators always return true or false.*/

let a=5;
let b=3;
let num1=10;
let num2=10;

console.log("a==b",a==b);  //false
console.log("num1==num2",num1==num2); //true

console.log("a!=b",a!=b); //true

let p=5;    //number
let q="5";  //string
console.log("p==q",p==q); //true
console.log("p===q",p===q); //false
//== checks only values are equal or not but === checks value as well as datatype.

console.log("p!=q",p!=q);//false because p & q are equal
console.log("p!==q",p!==q);//true because here checks both value as well as datatype & datatype of p & q are different so it is true

let j=2;
let k=4;
let l=4;
console.log("j<k",j<k);  //true
console.log("j>k",j>k);  //false
console.log("l>=k",l>=k); //true
console.log("j<=k",j<=k); //true

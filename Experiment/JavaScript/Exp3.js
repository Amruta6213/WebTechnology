/*1.difference between arrow and simple function also use of this keyword in both functions
2.code for arrow function with 2 example
3.code for switch case
4.how to use truthy and falsy vaules in js
5.how to use ternary operator in js
6.write a code for loops in array(while,do-while,for,for-of,for-in,for-each)
7.diff between for-of and for-in
8.how to use map and filter fun in js
9.how to use reduce fun in js */

//2.code for arrow function with 2 example
const checkEvenOdd=(num)=>{
    if(num%2===0)
        console.log(`${num} is even`)
    else
       console.log(`${num} is odd`)
}
(checkEvenOdd(50))

const add=(a,b)=>{
console.log("addition is",a+b)
}
add(8,9)

//3.code for switch case
let x = 8;
let y = 2;
let operator = "*";

switch (operator) {
  case "+":
    console.log(x + y);
    break;

  case "-":
    console.log(x - y);
    break;

  case "*":
    console.log(x * y);
    break;

  case "/":
    console.log(x / y);
    break;

  default:
    console.log("Invalid operator");
}

//4.how to use truthy and falsy vaules in js
/*truthy and falsy values are used in conditions (like if, while, logical operators) to decide whether a block of code runs.
false,0,-0,0n (BigInt zero),"" (empty string),null,undefined are falsy values.
All values except falsy values are truthy.
*/
let name="amruta"
if(name){
  console.log(`${name} is truthy value`)
}
else{
  console.log("Falsy value")

}
//5.how to use ternary operator in js
let age=10
let result=age>=18?"Adult":"not adult"
console.log(result)

//6.loops in array
let array=[1,2,3,4,5]
console.log("using for loop")
for(let i=0;i<array.length;i++){
    console.log("i=",array[i])
}

//using while
let arr=["Amruta","Shweta","Savita","Shashikant","Avadhut"]
console.log("using while loop")
let i=0
while(i<arr.length)
    {
        console.log(arr[i])
        i++
    }

//using do-while loop
let a=1
console.log("using do-while loop")
do{
    console.log(a)
    a++
}while(a<=5)

//using for-of loop
let numbers=[19,21,3]
console.log("using for-of loop")
for(let num of numbers){
    console.log(num)
}
//using for-in loop
console.log("using for-in loop")
for(let index in numbers){
    console.log(index)
}
let student={
    name:"Amruta",
    age:20
};
console.log("using for-in loop")
for(let key in student){
    console.log(key,student[key])
}

//7.difference between for-of and for-in
// /*for-of gives the values and for in gives the indexes.In object for in gives key & for value we write object[key] */


//8.how to use map and filter fun in js
/*1.Map
similar to forEach 1 diff is there map creates the new array with Result. for each does not create new array.
/filter() is used to select elements that satisfy a condition.*/
let nums=[45,10,12,16,9,3]
let res=nums.filter(num=>num>10)
console.log(res)
//9.how to use reduce fun in js 
/*reduce
perform some operations and reduce the array to a single value and return it.
e.x. in calculate the sum or avg we take many values as input and return only one value s output.at that time use reduce*/
let arr1=[1,2,3,4,5]
const res1=arr1.reduce((prev,cur)=>{
    return prev+cur
})
console.log("sum of elements is",res1)

function multiply(a, b)  ///function declaration/defination
{
  return a * b;
}

let result = multiply(4, 5);////function call
console.log(result);

function addTwoNumbers(a, b) {
  return a + b;
}

console.log(addTwoNumbers(10, 20)); // 30

function add(num1,num2){
  return num1+num2
  console.log("hello")//after return no any line executed
}
let res=add(3,4)
console.log(res);


function f1(name){
  return `${name} login`
}
console.log(f1("Amruta"))
console.log(f1())//if string is empty undefined is output.here output is undefined login.

//spread operator ...gives all values in array 
function takeNumbers(...num1){//spread operator
  return num1
}
console.log(takeNumbers(10,20,30))

let student = { name: "Amruta", age: 20 };
let newStudent = { ...student, city: "Mumbai" };

console.log(newStudent);

// //arrow function
// const a=(num2,num3)=>{
//   return num2+num3
// }



//this keyword story

// function copy(){
//   username="Amruta"
//   //console.log(`username=${username}`)
//   console.log(this.username)//give username
//   //console.log(this)//give username also methods in object
// } 
// copy()



// const arrowFunExp=()=>{
//    username1="Amruta Shashikant Powar"
//   console.log(username1)
// console.log(this) 
// }
// arrowFunExp()
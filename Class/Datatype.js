//Array
const arr = [1,2,3,4];
console.log(arr);

//object-key value pairs
const myObj={
    name:"Amruta",
    age:20,
    email:"amruta@gmail.com"
};
console.log(myObj);
console.log(myObj.email);

//function
// let afun=function Myfun()
// {
//     console.log(afun);
// }
// console.log(Myfun(10));

function call(a) {
    console.log(a);
}

console.log(call(10));

/*Memory stack primitive is whatever you can declare variable it gives copy
and heap non-primitive it gives reference original value*/

//in stack cant effect on the original value  after assign new value but in heap it affects.
let myYoutubeName="ASP";
let newYoutubeName=myYoutubeName;
newYoutubeName="SSP"

console.log(myYoutubeName);
console.log(newYoutubeName);

let user1={
    email:"amrutapowa@gmail.com",
    fname:"amruta",
    id:115
}
let user2=user1;
user2.email="shwetapowar@gmail.com";
console.log(user1.email);
console.log(user2.email);
/*primitive datatype is store in stack when we assign 1 variable to another a copy is made so changing one is does not affect others.
non-primitive store in heap memory when we assign 1 obj to another reference is copy not the value if we change 1 both variables are changes.*/
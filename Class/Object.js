/* we can declare 2 types of obj
1.object literals
2.object singletone
*/
//obj is a key value pair
//1..object literals
let user={
    name:"Amruta",
    age:21,
    email:"amruta@gmail.com",
    city:"kagal",
    isLogin:"true",
    lastLoginDay:["monday","tuesday"],
    "full Name":"Amruta powar"
}
console.log(user);
console.log(user.lastLoginDay)
console.log(user["full Name"])//when key is in ""use only

user.email="amrutapowar@gmail.com"
console.log(user.email)

//Object.freeze(user)//it does not change the value
user.email="shweta@gmail.com"
console.log(user.email)

//symbol example
const mySymbol=Symbol("JS")

const myObj1={
    [mySymbol]:"JS"
}
console.log(myObj1)
console.log(typeof(myObj1))
console.log(myObj1[mySymbol])
//que create 1 sym add in obj and print

user.greeting=function()
{
    console.log("Hello.js")
}
console.log(user.greeting())

user.greeting2=function(){
    console.log(`${this.email}`)//when we have to access key in function use this.
}
/*const value doent change , cant redeclered reasssign */
// const s=2;
// console.log(s);
// s=3;
// console.log(s);

 //let is take value within scope and var takes updated value so use let
let a=10;
var b=20;
{
    let a=200;
    var b=300;
    console.log(a,b);
}
 console.log(a,b);



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


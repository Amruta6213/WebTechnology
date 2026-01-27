let myDate=new Date();
console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(myDate.getUTCFullYear())

let myCreateDate=new Date(2026,1,21)
console.log(myCreateDate)
console.log(myCreateDate.toString())
let myCreateDate2=new Date("01-21-2026")
console.log(myCreateDate2)
console.log(myCreateDate2.toLocaleString())

let myTimeStamp=Date.now()
let newDate=new Date()
console.log(myTimeStamp)
console.log(Date.now()/1000)//converting to sec
console.log(myCreateDate.getTime())
console.log(Math.floor(Date.now)/1000)
console.log(newDate.getDate())
console.log(newDate.getDay())
console.log(newDate.getFullYear());
console.log(newDate.getMonth())
console.log(newDate.toLocaleString('default',{weekday:"long"}));
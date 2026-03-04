//Q1.create object product
const product={
    title:"pen",
    rating:4,
    offer:5,
    price:270
}
console.log(typeof(product))
product["title"]="ball pen"
console.log(product.title)

//Q2.create object with profile
const profile={
    userName:"Shrddha khapra",
    isFollow:true,
    followers:1000,
    following:1100

}
console.log(typeof profile.isFollow)

// Operators
let a=5;
let b=2;
console.log("a+b=",a+b)
console.log("a-b=",a-b)
console.log("a*b=",a*b)
console.log("a/b=",a/b)
console.log("a%b=",a%b)
console.log("a**b=",a**b)
//unary operator
let s=4
//console.log("s++=",s++)//post increment 4
console.log("++s=",++s)//pre increment 5
let p=10
//console.log("p--=",p--)//post decrement 10
console.log("--p=",--p)//pre decrement 9

//comparision operators
let x=10;
let y=20;
let z="10"
let r=10;
console.log("x==y",x==y)//false
console.log("x!=y",x!=y)//true
console.log("x==z",x==z)//true.string converted into number
console.log("x===z",x===z)//false.it checks value with type
console.log("x===r",x===r)//true
console.log("x>y",x>y)//false
console.log("x<y",x<y)//true

//conditional Statements
let age=18
if(age>=18){
    console.log("you can vote")
}
else{
    console.log("you cannot vote")
}

//if-else ladder
let age1=25
if(age1<=18)
    console.log("junior")
else if(age1>60)
    console.log("senior")
else
    console.log("middle")

//Ternary operator
let AGE=20;
let result=AGE>=18? "Adult":"not Adult"
console.log(result)

//Q3.take input number and check it is multiple of 5 or not
let num=25
if(num%5===0){
    console.log(num,"is multiple of 5")
}
else
    console.log(num,"is not multiple of 5")

//Q4 give grades to students based on scores
let score=95
if(score>=90 && score<=100){
    console.log("grade is A")
}
else if(score>=70 && score<=89){
    console.log("grade is B")
}
else if(score>=60 && score<=69){
    console.log("grade is C")
}
else if(score>=50 && score<=59){
    console.log("grade is D")
}
else if(score>=0 && score<=49){
    console.log("grade is F")
}

//loops
for(let count=1;count<5;count++){
    console.log("Amruta")
}
console.log("shweta")

//calculate sum of 1 to 5
let sum=0
for(let i=0;i<=5;i++){
    sum=sum+i
}
console.log("sum =",sum)

//print 1 to 5 using while loop
let i=1
while(i<=5){
    console.log(i)
    i++
}

//do-while
let A=20
do{
    console.log("Monk")
}while(A<=10);

//print 10 to 20 using do-while
let n=10
do{
    console.log(n)
    n++
}while(n<=20)

//for-of loop
let str="Savita"
let size=0
for(let i of str){
    console.log(i)
    size++
}
console.log("string size is:",size)

//Q5.print all even numbers from 0 to 100
for(let num=0;num<=100;num++){
    if(num%2===0){
        console.log("num",num)
    }
}

//string
let string="Amruta"
console.log(string.length)
console.log(string[1])

//Template Literals
let obj={
    item:"pen",
    price:10
}
//console.log("price of",obj.item,"is",obj.price,"rupees")
let output=`the price of ${obj.item} is ${obj.price} rupees`
console.log(output)

//methods in string
let String="Amruta"
let Str="Powar"
//console.log(String.trim())
console.log(String.length);        //Give the length of string(6)
console.log(String.indexOf("u"));  // finds index of 'u'(3)
console.log(String.charAt(2));     //give the character at given index(r)
console.log(String.includes("v")); //check given character is in the string or not based on that give result as true or false(false)
console.log(String.includes("t"));//true
console.log(String.toLowerCase()); //convert string into lowercase
console.log(String.toUpperCase()); //convert string into uppercase
console.log(String.startsWith("S"));//false.check start with given letter or not
console.log(String.endsWith("a")); //true
console.log(String.repeat("2"));  //repeat 2 times
console.log(String.slice(0,4))//Amru it exclude the ending index
console.log(String.concat(Str))

//Q6.take username start it with @ and end with length
let fullName="ShwetaPowar"
console.log(fullName)
let userName="@"+fullName+fullName.length
console.log(userName)

//Array
let marks=[10,20,30,40,50]
console.log(marks)
console.log(marks[1])//20
console.log(marks[10])//undefined
marks[0]=11
console.log(marks)

//print elements in array
for(let i=0;i<marks.length;i++){
    console.log(marks[i])
}

//Q7.for given array with marks of student find average marks of the entire class
let Marks=[85,97,44,37,76,60]
let add=0
for(let ele of Marks){
    add=add+ele
}
console.log(`sum of the marks is ${add}`)
let avg=add/Marks.length
console.log(`average marks of the class is ${avg}`)

//Q8 for a given array all items have an offer of 10% off on thme.Change the array to store final price after applying offer
let items=[250,645,300,900,50]
for(let i=0;i<items.length;i++){
    console.log(items[i])
    let offer=items[i]/10
    items[i]=items[i]-offer
}
console.log(`values after offer is ${items}`)

//array methods
let Names=["Amruta","Shweta","Shashikant","Savita","Avadhut"]
Names.push("Monk")
console.log(Names)
//console.log(Names.push("Monk"))//give length
Names.pop()
console.log(Names)
console.log(Names.toString())//Amruta,Shweta,Shashikant,Savita,Avadhut

let cars=["S-cross","Skoda","Swift"]
let brands=["Tata","Suzuki"]
let New_array=cars.concat(brands)
console.log(New_array)
cars.unshift("BMW")//add element in the start
console.log(cars)
brands.shift()//remove 1st element
console.log(brands)
let Arr=[1,2,3,4,5,6]
console.log(Arr.slice(1,4))
console.log(Arr.slice(1))//go upto end
Arr.splice(2,3,101,102)//here element from index 2,3,4 will be delete and add element at the 3d pos
console.log(Arr)//[ 1, 2, 101, 102, 6 ]
Arr.splice(5,0,115)
console.log(Arr)//[ 1, 2, 101, 102, 6, 115 ]add 115 at the 5th pos and delete 0 element fron 5th pos
Arr.splice(4,0,116)
console.log(Arr)//[ 1, 2, 101, 102, 116, 6, 115]


//Q9.Create array of companies 1.remove the first company 2.remove Uber and add Ola its place 3.Add amazon at the end
let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
companies.shift()//remove 1st 
console.log(companies)//[ 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix' ]
companies.splice(1,1,"Ola")
console.log(companies)
companies.push("Amazon")
console.log(companies)

//Functions

//Create the function that takes string as a argument and count the vowels in the string.
function countVowel(string){
    let count=0
    for(const char of string){
        if(char==="a"|| char==="e"|| char==="i"|| char==="o"|| char==="u"){
            count++
        }
    }
    console.log(count)
}
countVowel("amruta")

//perform the same task using arrow function
const countvow=(str)=>{
    let c=0
    for(const ch of str){
        if(ch=="a"|| ch=="e"|| ch=="i"|| ch=="o"|| ch=="u"){
            c++
        }
    }
    console.log(c)
}
countvow("shweta")

//For-each
let array=[1,2,3,4]
array.forEach(function printVal(val){
    console.log(val)
})
console.log("using Arrow function")
array.forEach((val,index,array)=>{
    console.log(val,index,array)
})

//take a array of numbers.print the square of each value using for each

let arr=[1,2,3,4,5]
// arr.forEach(function square(value){
//     console.log(value*value)
arr.forEach((value)=>{
    console.log(value*value)
})

//Map
let numbers=[12,14,16,18,20]
let newArray=numbers.map((num)=>{
    return num*num
})
console.log(newArray)

//filter
let Numbers=[10,15,12,89,56,55,21,19]
let evenArr=Numbers.filter((values)=>{
    return values % 2 ==0
})
console.log(evenArr)

//reduce
let arr1=[1,2,3,4,5]
const res=arr1.reduce((prev,cur)=>{
    return prev+cur
})
console.log("sum of elements is",res)

let arr2=[115,127,116,129,137,126]
let res1=arr2.reduce((prev,cur)=>{
    return prev>cur?prev:cur
})
console.log(`largest element of array is ${res1}`)

//Q10.take the array of marks of students and filter out the marks of students that scored 90+
let marks1=[95,45,50,93,97]
let newAArr=marks1.filter((values)=>{
    return values>90
})
console.log(`marks of student who scored 90+ is ${newAArr}`)

let arr3=[2,4,6,8]
let res2=arr3.reduce((prev,cur)=>{
    return prev*cur
})
console.log(`product of given array is ${res2}`)

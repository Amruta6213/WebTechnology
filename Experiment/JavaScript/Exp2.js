/*activity 1 Array function object declaration
2.write code for reverse num
3.check palindrom num
4.code for fibonacci series
5.find largest element in array
6.remove duplicate element in array
7.find missing num in array
8.reverse a string
9.count vowel in string
10.check palindrome in string
11.check prime num and factorial num
12.function to find even odd
13.function to find sum of numbers in array*/

//Activity1:Array function object declaration
const arr=[1,2,3,4,"amruta"]
console.log(arr);
console.log(typeof(arr))
function add(a,b){
    return(a+b);
}
let result=add(8,5);
console.log(result)

const myobj={
    name:"Amruta",
    age:20,
    email:"amrutapowar2103@gmail.com"
}
console.log(myobj)
console.log(myobj.email)

//Activity2.write code for reverse number
let num=12345
console.log("Given number is:",num)
let reverse=num.toString().split('').reverse().join('')//for split give argument otherwise it consider as one element
console.log("Reversed Number is:",reverse)

//using loop
// let number=6789
// let reversed=0
// console.log(number)

// while(number>0){
//     let digit=number%10 //give last digit
//     reversed=reversed*10+digit//append digit that is last digit to first
//     number=Math.floor(number/10)//remove last digit
// }
// console.log(reversed)

//Activity3.check palindrome num
let price=564
console.log("The number is:",price)
let reversePrice=price.toString().split('').reverse().join('')
if(price==reversePrice)
    console.log(price+" is a palindrome")
else 
    console.log(price+" is not palindrome")

// let num1 = 555555;
// let originalNum = num1;
// let reversed1 = 0;
// //using loop
// while (num1 > 0) {
//     let digit = num1 % 10;
//     reversed1 = reversed1 * 10 + digit;
//     num1 = Math.floor(num1 / 10);
// }

// if (originalNum === reversed1) {
//     console.log(originalNum + " is a palindrome number");
// } else {
//     console.log(originalNum + " is NOT a palindrome number");
// }

//Activity4.code for Fibonacci series
let number=7
let a=0,b=1
let fib=[]

fib.push(a)
fib.push(b)

for(let i=2;i<number;i++){
    let c=a+b
    fib.push(c)
    a=b
    b=c
}
console.log("The Fibonacci series is:", fib.join(" "));


//Activity5.find largest element in array
let array=[78,96,85,12,45,19,21]
let largest=array[0]

for(let i=1;i<array.length;i++){
    if(array[i]>largest){
         largest=array[i]
    }  
}
console.log(largest+" is a largest number")


//activity6.remove duplicate element in array
let myArray=[18,45,19,21,18,75,45,19,21]
console.log("Given Array is:",myArray)
let uniqueArray=[]
for(let i=0;i<myArray.length;i++){
    if(!uniqueArray.includes(myArray[i])){
        uniqueArray.push(myArray[i])
    }
}
console.log("array without duplicates:",uniqueArray)

//Activity7.find missing num in array

let array1 = [1, 2, 3, 5];
let n = array1.length + 1;

for (let i = 1; i <= n; i++) {
    if (!array1.includes(i)) {
        console.log("Missing number is:", i);
       
    }
}

//Activity8.reverse a string

let Name="Amruta"
console.log("Given string is:",Name)
let reversedString=Name.split('').reverse().join('')
console.log("reversed string is",reversedString)

//Activity9.count vowel in string 
let string1="Amruta"
count=0
let vowel=[]
for(let i=0;i<string1.length;i++){
    let ch=string1[i].toLowerCase()

    if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'){
        count++
       vowel.push(ch)
    }
  
}
console.log("Vowels are:",vowel.join(','))
console.log("Count of vowels are:",count)


//Activity10.check palindrome in string
let string="madam"
console.log("Given string is:",string)
let palindrome=string.split('').reverse().join('')
if(string==palindrome){
    console.log(string+" is palindrome")
}
else{
    console.log(string+" is not palindrome")
    }

//Activity11.a)check prime num b)factorial num

//a)prime number

let num3=2
let isPrime=true

if(num<=1){
    isPrime=false
}
else{
    for(i=2;i<=Math.sqrt(num3);i++){
        if(num3%2===0){
            isPrime=false
        }
    }
}
if(isPrime){
    console.log(num3+" is a prime number")
}
else{
    console.log(num3+" is not a prime number")
}
//b)factorial of number

let num1=4
let fact=1
for(let i=1;i<=num1;i++){
    fact=fact*i
}
console.log(`Factorial of ${num1} is:`,fact)


//Activity12.function to find even odd
function checkEvenOdd(number){
    if(number%2==0){
        console.log(number+" is Even")
    }
    else{
        console.log(number+" is Odd")
    }
}
checkEvenOdd(10)
checkEvenOdd(5)

//Activity13.function to find sum of numbers in array

function sumOfArray(array){
    let sum=0
    for(let i=0;i<array.length;i++){
        sum+=array[i]
    }
    return sum;
}
console.log("sum of array is",sumOfArray([1,2,3,4,5]))

const str="js";
console.log(str);

//string interpolation-This is a good way to print so use string interpolation
console.log(`Hello my course name ${str}`);//baktics sign is used `

const gameCount=new String("JSON");//new is a keyword to create object
//console.log(`Name is ${gameCount}`)//go to chrome inspect and see screenshot

//string methods
console.log(gameCount.length);//check length of string
console.log(gameCount[3]);//array position
console.log(gameCount.toLowerCase())//converted to lower case
console.log(gameCount.toUpperCase())//converted to upper case
//console.log(charAt(1)) //position character
console.log(gameCount.indexOf("N"))//gives character present at index

const newString="    JS    ";
console.log(newString);
console.log(newString.trim());//removes space
//include split function-defination, declaration, call

//HOMEWORK:methods of string
const string = new String("Amruta");

console.log(string);               // prints the string
console.log(string.length);        //Give the length of string(6)
console.log(string.indexOf("u"));  // finds index of 'u'(3)
console.log(string.charAt(2));     //give the character at given index(r)
console.log(string.includes("v")); //check given character is in the string or not based on that give result as true or false(false)
console.log(string.includes("t"));//true
console.log(string.toLowerCase()); //convert string into lowercase
console.log(string.toUpperCase()); //convert string into uppercase
console.log(string.startsWith("S"));//false.check start with given letter or not
console.log(string.endsWith("a")); //true
console.log(string.repeat("2"));  //repeat 2 times 


let name="Shweta";
console.log(name.split("")); //gives the seperated string in array format like [ 'S', 'h', 'w', 'e', 't', 'a' ]

let fruit="    Apple    ";
console.log(fruit);
console.log(fruit.trim());
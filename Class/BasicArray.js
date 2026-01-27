let myArr=[0,1,2,3,4 ,"ASP"]
console.log(myArr)
// /*JavaScript arrays are actually objects.therefore it can store element of different datatypes so it does not give error*/
const myArr1=new Array(0,1,2,3,4)
console.log(myArr1)
console.log(myArr1[1])


//array methods
console.log(myArr1.push(10))//add values in array but not display in array it will add number and give length here o/p is 6
myArr1.push(11)
console.log(myArr1)//it adds 11 in array
console.log(myArr1.pop())//remove last element of array
console.log(myArr1.unshift(9))//shift all elements and add 1st position.but here give lenth only 
console.log(myArr1)//here print array[9, 0,  1, 2, 3, 4, 10]
console.log(myArr1.shift())//remove 1st element
console.log(myArr1.includes(9))//check given element is present or not in array
console.log(myArr1.indexOf(3))//give the index of element
console.log(typeof(myArr1))
const newArr=myArr1.join()
console.log(newArr)//give in string 0,1,2,3,4,10
console.log(typeof(newArr))//after join give in the string
console.log(myArr1)

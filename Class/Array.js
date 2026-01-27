const superHero=["Ironman","Thor","Shaktiman"]
const A=["krish","captain america","ASP"]
superHero.push(A)
console.log(superHero)
console.log(superHero[1])
console.log(superHero[2][2])
let all=superHero.concat(A)//print all
console.log(all)


const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realanootherarray=anotherArray.flat(Infinity)//flat removes nested array [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
console.log(realanootherarray)
//datascripting using dataarray used for asked ques to array
console.log(Array.isArray("Amruta"))//false bcoz "Amruta"is string not array
console.log(Array.from("amruta"))//convert intonarray
console.log(Array.from({name:"Amruta"}))//give empty array directyly not convert into key value.objects are not iterable

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3))//give all elements in 1 array
//object singletone

const user=new Object()//singletone object
console.log(user)
const user2={}
user2.id=123
user2.name="amruta"
user2.city="kagal"

console.log(user2)//non singletone obj.
//nested obj

const regUser={
    email:"amruta@gmail.com",
    user:{
        fullname:{
            faname:"amruta",
            lname:"powar"
        }

    }
}
console.log(regUser)
console.log(regUser.user.fullname.faname)
const express=require('express')
const app=express();
const port=3000;

let students=[
    {name:"Amruta",rollNo:115},
    {name:"Samruddhi",rollNo:126},
    {name:"Rutuja",rollNo:116}
]


    app.get('/students', (req, res) => {
    res.json({
        message: "Student List",
        data: students
    });
});

app.listen(port,()=>{
    console.log("app working on 3000 port");
})

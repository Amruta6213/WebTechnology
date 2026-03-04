let content=document.getElementById("content");
document.getElementById("Abtbtn").addEventListener("click",function(){
    content.innerHTML=`<h2>About Me</h2>
    <p> My name is Amruta Shashikant Powar.I am from Kagal.Currently I am learning in 3rd year of B.Tech in AIML branch.</p>`;

});
document.getElementById("Edubtn").addEventListener("click",function(){
    content.innerHTML=`<h2>Education</h2>
    <table border="3">
        <tr>
            <th>Year</th>
            <th>Course</th>
            <th>College</th>
            <th>Percentage</th>
        </tr>
        <tr>
            <td>2019-20</td>
            <td>SSC</td>
            <td>SDNMVV</td>
            <td>95%</td>
        </tr>
         <tr>
            <td>2021-22</td>
            <td>HSC</td>
            <td>DRM</td>
            <td>60%</td>
        </tr>
         <tr>
            <td>2025</td>
            <td>B.Tech</td>
            <td>DKTE</td>
            <td>8.07</td>
        </tr>
    </table>`;
})
document.getElementById("Skillbtn").addEventListener("click",function(){
    content.innerHTML=`<h2>Skills</h2>
    <h3>Programming language:C,C++,Java,Javascript,HTML,CSS</h3>
    <h3>Database:MySQL,Oracle</h3>
    <h3>Concepts:OOPs,DSA</h3>
    `
})
document.getElementById("Contactbtn").addEventListener("click",function(){
    content.innerHTML=`<h2>Contact</h2>
    <h3>Email:amrutapowar2103@gmail.com</h3>
    <h3>Github:<a href="https://github.com/Amruta6213">Visit my Github</a></h3>
    `
})
const express = require('express')
const app = express();
const Pool = require('pg').Pool;
const pool = new Pool({
 user: "postgres",
 password: "aseds",
 database: "restaurant",
 host: "localhost",
 port: "5432"
});

pool.connect();
module.exports = pool;
app.listen(3000)





app.use(express.urlencoded({extended: true}))
app.use(express.static('views'));

app.set('view engine' , 'ejs')
app.get('/',(req,res) => {
    res.render("index")
})

app.post('/',(req,res) => {
    let fullname =req.body.fullname
    

    let days = req.body.days
    
    
    let hours=req.body.hours
   

    let numtele= req.body.numtele
   

    let numperso = req.body.numperso
  

    

    const query = `INSERT INTO reservation VALUES ($1, $2, $3, $4, $5)`;
    pool.query(query, [fullname, days, hours, numtele, numperso], (erro, result) => {

    if(!erro){
        pool.query("select * from reservation",(err,res) => {
            if(!err){
            console.table(res.rows);
            }
            else{
            console.log(err.message)
            }
        })
    }
    else{
        console.log("No data sent to databse")
    }
        
})
})


app.get('/about',(req , res) => {
    res.render('about.ejs')
})

app.get('/menu',(req , res) => {
    res.render('menu.ejs')
})
   

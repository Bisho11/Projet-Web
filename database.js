const Pool = require('pg').Pool;
const pool = new Pool({
 user: "postgres",
 password: "aseds",
 database: "restaurant",
 host: "localhost",
 port: "5432"
});
module.exports = pool;
execute();

 function execute(){
   
        pool.connect()
        pool.query("select * from reservation",(err,res) => {
            if(!err){
                console.table(res.rows);
                console.log("table affichée")
            }
            else{
                console.log(err.message)
            }
        })
    }
    
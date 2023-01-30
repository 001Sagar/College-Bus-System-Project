const expres = require('express');
const app = expres();
const port = 8000;

// Require DataBase
const db = require('./config/mongoose')
app.get('/',(req,res)=>{
    res.send("yeah sever is run")
})

// Using ExpresssJon for Reading Data
app.use(expres.urlencoded({extended:true}));
app.use(expres.json())

// Requires User Authentication API
const authroute = require('./routes/auth.js');
app.use('/user',authroute);

// Requires Bus Bokking  API
const busroute = require('./routes/busroute');
app.use('/bus',busroute);

app.listen(port,function(err){
    if(err){
        console.log(err);
    }
    console.log("Server is run on port::",port);
})
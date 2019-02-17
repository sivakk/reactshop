const express=require("express");
const mongoose=require("mongoose");
const bodyparser=require("body-parser");
const cookieparser=require("cookie-parser");
const userRoutes=require("./routes/userRoute");
var DATABASE="mongodb://siva:asdfvcxz5@ds129051.mlab.com:29051/sai";
var app=express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(cookieparser());
mongoose
    .connect(
        DATABASE, {
            useNewUrlParser: true
        })
    .then(() => {
        console.log("Connected to database!");
    })
    .catch(() => {
        console.log("Connection failed!");
    });

    app.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept"
        );
        res.setHeader(
            "Access-Control-Allow-Methods",
            "GET, POST, PATCH, PUT, DELETE, OPTIONS"
        );
        next();
    });
    app.use("/api",userRoutes);
    app.listen(3000,(res,err)=>{
  
    console.log('connected');
        
    
  
})
module.exports=app;

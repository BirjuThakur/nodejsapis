const express = require("express");
const serverless = require("serverless-http");
const app = express();
const port =process.env.PORT || 5000 ;
const hostname = "127.0.0.1";
const Product = require("../modal/productSchema");
const connectDB = require("../db/connection");

app.get("/",(req,res)=>{
res.send("welcome");
})


app.get("/product",async(req,res)=>{
    try {
        const data = await Product.find();
        res.status(200).send(data);
    } catch (error) {
        console.log("error in apis "+error)
    }
})

app.listen(port,hostname,()=>{
    connectDB();
    console.log("running on server 5000")
})
module.exports.handler= serverless(app);
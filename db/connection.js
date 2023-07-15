const mongoose = require("mongoose");

//mongoose connection
const connectDB = () =>{
    return mongoose.connect("mongodb+srv://birjuthakur:birjuthakur@cluster0.lwj5xsw.mongodb.net/friend")
    .then(()=>console.log("connection successfully")).catch(()=>console.log("connection disminss"))
}

module.exports=connectDB;
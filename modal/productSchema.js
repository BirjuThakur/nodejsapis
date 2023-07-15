const mongoose = require("mongoose");

//create schema for product
const productsSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:[true, "price must be provided"]
    },
    discount:{
        type:Number
    },
    rating:{
        type:Number,
        required:true
    },
    company:{
        type:String,
        required:true,
        enum:{
            values:["apple","samsung","mi","dell","woodland"],
            message:`{value} is not supported`
        }
    }
});

//creating modal (collection)
const Product = mongoose.model("Product",productsSchema);

module.exports = Product;
const connectDB = require("./db/connection");
const Product = require("./modal/productSchema");
const items = require("./items.json");

const start = async() =>{
    try {
        await connectDB();
        await Product.deleteMany();
        await Product.create(items);
        console.log("success");
    } catch (error) {
        console.log("error getting "+error)
    }
}

start();
const mongoose =require("mongoose");
mongoose.connect("mongodb://localhost:27017/olx")

const Schema = mongoose.Schema;

const ProductSchema = new Schema({

    email:String,
    password:String,
    username:String,
    phonenumber:Number,
    rankey:String
})

const productdata = mongoose.model("productdata" , ProductSchema)
module.exports = productdata;

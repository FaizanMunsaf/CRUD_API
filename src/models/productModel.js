const mongoose = require('mongoose');

//Model class
const Products = mongoose.Schema({
    productCategoriesId  :{
        type : String,
    },
    title  :{
        type : String,
        required : true
    },
    price  :{
        type : Number,
        required : true
    },
    description  :{
        type : String,
        required : true
    },
    image  :{
        type : String,
        required : true
    },

});


const Product = new mongoose.model("products", Products);

module.exports = Product;


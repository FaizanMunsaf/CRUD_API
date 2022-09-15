const mongoose = require('mongoose');


const Productcategories = mongoose.Schema({
    categoryName  :{
        type : String,
        required : true
    }
});


const productCategories = new mongoose.model("productCategories", Productcategories);
module.exports = productCategories;
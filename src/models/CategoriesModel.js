const mongoose = require('mongoose');


const CategoriesModel = mongoose.Schema({
    categoryName  :{
        type : String,
        required : true
    }
});


const productCategories = new mongoose.model("productCategories", Productcategories);
module.exports = productCategories;
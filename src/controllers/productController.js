const products = require("../models/productModel");
const productCategories = require("../models/categoriesModel");


//Add the product Categories here
const postProductCategories = async(req,res)=>{
    try{
        const addProductCategories =await new productCategories({
            categoryName  : req.body.categoryName
    });
    const savedProductCategories = addProductCategories.save();
    res.status(200).json(savedProductCategories);
    }catch (err){
        res.status(404).send(err);
    }
}

//Add the Product here
const postProduct = async(req,res)=>{
    try{
        const addProduct =await new products({
        productCategoriesId  :req.body.productCategoriesId,
        title  :req.body.title,
        price  :req.body.price,
        description  :req.body.description,
        image  :req.body.image
        });
        const savedProduct = addProduct.save();
        res.status(200).json(savedProduct);
    }catch (err){
        res.status(404).send(err);
    }
}

//Update the Product Category here
const updateProductCategories = async(req,res)=>{
    try{
        const updateProductCategories = await productCategories.updateOne({_id: req.params.id},{$set: {
                categoryName  : req.body.categoryName
            }});
        res.status(200).json(updateProductCategories);
    }catch (err){
        res.status(404).send(err);
    }
}

//Update the Product here
const updateProduct = async(req,res)=>{
    try{
        const updateProduct = await products.updateOne({_id: req.params.id},{$set: {
                productCategoriesId  :req.body.productCategoriesId,
                title  :req.body.title,
                price  :req.body.price,
                description  :req.body.description,
                image  :req.body.image
            }});
        res.status(200).json(updateProduct);
    }catch (err){
        res.status(404).send(err);
    }
}

//Delete the Product Category here
const deleteProductCategories = async(req,res)=>{
    try{
        const removeProduct = await productCategories.remove({_id: req.params.id});
        res.status(200).json(removeProduct);
    }catch (err){
        res.status(404).send(err);
    }
}

//Delete the Product here
const deleteProduct = async(req,res)=>{
    try{
        const removeProduct = await products.remove({_id: req.params.id});
        res.status(200).json(removeProduct);
    }catch (err){
        res.status(404).send(err);
    }
}

//Get the Product here
const getProduct = async  (req,res)=>{
    products.find({},function(err,products){
        if(err) console.warn(err);
        res.status(200).send(products);
    });
}

//Get the Product Categories here
const getProductCategories = async(req,res)=>{
    productCategories.find({},function(err,productCategories){
        if(err) console.warn(err);
        res.status(200).send(productCategories);
    });
}

//Get the Filter Product here
const getFilter = async (req,res)=>{
    try{
        const productFilter = await products.find({}).where('productCategoriesId').equals(req.params.id);
        res.status(200).json(productFilter);
    }catch (err){
        res.status(404).json({message: err});
    }
}

//Get the Specific Product here
const getSpecificProduct = async (req,res)=>{
    try{
    //console.log(req.params.postId);
    const specificProduct = await products.findById(req.params.id);
    res.status(200).json(specificProduct);
    }catch(err){
        res.status(404).json({message:err});
    }
}

module.exports = {postProductCategories,postProduct,updateProductCategories,updateProduct
                    ,deleteProductCategories,deleteProduct,getProductCategories,getProduct
                    ,getFilter,getSpecificProduct};
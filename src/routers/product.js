const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

//posting the data here into mongo db
router.post('/addProductCategories',productController.postProductCategories);
router.post('/addProduct',productController.postProduct);

//Update the data here into mongo db
router.put('/updateProductCategories/:id',productController.updateProductCategories);
router.put('/updateProduct/:id',productController.updateProduct);

//Get the data here into mongo db
router.get('/categoryShow', productController.getProductCategories);
router.get('/allProduct', productController.getProduct);

//Filter the Product by Categories
router.get('/productFilter/:id', productController.getFilter);

//Filter the Specific Product
router.get('/specificProduct/:id', productController.getSpecificProduct);

//Delete the data here into mongo db
router.delete('/deleteProductCategories/:id',productController.deleteProductCategories);
router.delete('/deleteProduct/:id',productController.deleteProduct);


module.exports = router;
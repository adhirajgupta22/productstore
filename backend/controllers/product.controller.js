const mongoose = require('mongoose');
const Product = require('../models/product.model');

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({success:true, data:products});
    } catch (error) {
        console.log("error in fetching products: ",error.message);
        res.status(500).json({success:false, message:"Server error"});
    }
};

const createProduct = async (req, res) => {
    const product = req.body;  //user will send this data

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({message:"Please fill all the fields"});
    }
    const newProduct = new Product(product);
    try {
        await newProduct.save();
        res.status(201).json({success:true, data:newProduct});
    } catch (error) {
        console.error("Error in creating product: ",error.message);
        res.status(500).json({success:false, message:"Server error"});
    }
};

const updateProduct = async (req, res) => {
    const {id} = req.params;
    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send("Product not found or invalid product id");
    }
    try {
        const updateProduct = await Product.findByIdAndUpdate(id,product,{new:true});
        res.status(200).json({success:true, data:updateProduct});
    } catch (error) {
        res.status(500).json({success:false, message:"Server error"});
    }

}

const deleteProduct = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send("Product not found or invalid product id");
    }
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true, message:"Product deleted successfully"});
    } catch (error) {
        console.log("error in deleting product: ",error.message);
        res.status(500).json({success:false, message:"Server error"});
    }
}

module.exports = {getProducts, createProduct, updateProduct, deleteProduct};
const express = require('express');
const allProductRoute = express.Router();
const Products = require("../schema/productsSchema")



allProductRoute.get('/', async (req,res)=>{
    let string = req.body;
// if(req){
//     res.status(200).json({message:`${string.test} have reached the api`});
//     console.log(Products.find())
// };
try {
    let products = await Products.find();
    console.log(products);
    res.status(200).json(products)
} catch (error) {
    console.log(error)
}
});

allProductRoute.post('/', async (req,res)=>{
    // let string = req.body.product;
// if(req){
//     res.status(200).json({message:`${string.test} have reached the api`});
//     console.log(Products.find())
// };
try {
    let products = await Products.create({
       name: req.body.product
    })
    console.log(products);
    res.status(200).json(req.body.product)
} catch (error) {
    console.log(error)
}
});

module.exports = allProductRoute;
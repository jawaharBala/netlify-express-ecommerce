const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const app = express();
const port = 4000;
connectDB();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/products", require('./routes/ProductRoutes'));

app.listen(port, ()=>console.log(`listening on ${port}`))
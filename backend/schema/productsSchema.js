const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  name: { type: String }
});

module.exports = mongoose.model("ProductSchema", productSchema);

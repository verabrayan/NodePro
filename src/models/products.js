const { mongoose } = require("../config/db");

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    categories: Array,
    stock: Number

  },
  {
    timestamps: true,
  }

  );
  const productModel = mongoose.model("products", productSchema);
  module.exports = productModel
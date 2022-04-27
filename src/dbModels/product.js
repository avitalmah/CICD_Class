// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const ProductSchema = new Schema({

//   title: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   category: {
//     type: String,
//     required: true,
//   },
//   color: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
//   numberInStock: {
//     type: Number,
//     required: true,
//   },
//   type: {
//     type: String,
//     required: true,
//   },
//   image: {
//     type: String,
//     required: true,
//   },
// });

// module.exports = mongoose.model('Product', ProductSchema);

import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);
export default Product;

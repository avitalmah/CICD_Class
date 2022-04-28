
import express from 'express';
import Product from '../dbModels/product.js';
import User from '../dbModels/user.js';
import data from '../data.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
    await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdProducts, createdUsers });
});
export default seedRouter;
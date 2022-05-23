import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from '../dbModels/order.js';
//import Product from '../dbModels/product.js';
import { isAuth } from '../utils.js';

const orderRouter = express.Router();
orderRouter.post(
  '/',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const newOrder = new Order({
      orderItems: req.body.orderItems.map((x) => ({ ...x, product: x._id })),
      shippingAddress: req.body.shippingAddress,
      totalPrice: req.body.totalPrice,
      userEmail: req.body.userEmail,
      user: req.user._id,
    });

    const order = await newOrder.save();
    // req.body.orderItems.map((x)=> ({ 
    //     const product = await Product.find({ });
    //  }))
    res.status(201).send({ message: 'New Order Created', order });
  })
);

orderRouter.get(
    '/userorders',
    isAuth,
    expressAsyncHandler(async (req, res) => {
      const orders = await Order.find({ user: req.user._id}).sort({ createdAt: -1 });
      res.send(orders);
    })
  );
orderRouter.delete(
    '/deleteorder/:orderId',
    expressAsyncHandler(async (req, res) => {
        console.log(req.params.orderId);
        const order = await Order.findById(req.params.orderId);
        if (order) {
          await order.remove();
          res.send({ message: 'Order Deleted' });
        } else {
          res.status(404).send({ message: 'Order Not Found' });
        }
    })
  );

orderRouter.get(
    '/:id',
    isAuth,
    expressAsyncHandler(async (req, res) => {
      const order = await Order.findById(req.params.id);
      if (order) {
        res.send(order);
      } else {
        res.status(404).send({ message: 'Order Not Found' });
      }
    })
  );
export default orderRouter;
import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Delivery from '../dbModels/delivery.js';
const managerRouter = express.Router();

managerRouter.post(
    '/adddelivery',
    expressAsyncHandler(async (req, res) => {
        const checkDelivery = await Delivery.findOne({ email: req.body.email });
        if (checkDelivery) {
            res.status(401).send({ message: 'Delivery name is already use, please select another name' });
        }
        else {
            const newDelivery = new Delivery({
                deliveryName: req.body.deliveryName,
                minDays: req.body.minDays,
                maxDays: req.body.maxDays,
                deliveryPrice: req.body.deliveryPrice,
            });
            await newDelivery.save();
            res.send({
                message: 'Delivery option add successfully'
            });
        }
    })
);

export default managerRouter;

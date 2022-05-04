import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Delivery from '../dbModels/delivery.js';
const managerRouter = express.Router();

managerRouter.get('/deliveries', async (req, res) => {
    const Deliveries = await Delivery.find();
    console.log(Deliveries);
    res.send(Deliveries);
});

managerRouter.delete('/delivery/:deliveryName',
    expressAsyncHandler(async (req, res) => {
        console.log(req.params.deliveryName);
      const deliveryDeleted = await Delivery.findOne({deliveryName: req.params.deliveryName});
      if (deliveryDeleted) {
        await deliveryDeleted.remove();
        res.send({ message: 'Delivery Deleted' });
      } else {
        res.status(404).send({ message: 'Delivery Not Found' });
      }
    })
  );

managerRouter.post(
    '/adddelivery',
    expressAsyncHandler(async (req, res) => {
        const checkDelivery = await Delivery.findOne({ deliveryName: req.body.deliveryName });
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

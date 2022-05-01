
import express from 'express';
import { mailgun } from '../utils.js';
const emailRouter = express.Router();

emailRouter.post('/', (req, res) => {
    const { name, email, topic, message } = req.body;
    mailgun()
      .messages()
      .send(
        {
          from: `${name} <${email}>`,
          to: 'theperfectgroup8@gmail.com',
          subject: `${topic}`,
          html: `<p>${message}</p>`,
        },
        (error, body) => {
          if (error) {
            console.log(error);
            res.status(500).send({ message: 'Error in sending email' });
          } else {
            console.log(body);
            res.send({ message: 'Email sent successfully' });
          }
        }
      );
  });

export default emailRouter;

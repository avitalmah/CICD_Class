
import express from 'express';
import { mailgun } from '../utils.js';
import nodemailer from 'nodemailer';
const emailRouter = express.Router();

emailRouter.post('/', (req, res) => {
  const { name, email, topic, message } = req.body;
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'theperfectgroup8@gmail.com',
      pass: 'project2022'
    }
  });
  let info = transporter.sendMail({
    from: `${email}`,
    to: 'theperfectgroup8@gmail.com',
    subject: `${topic}`,
    html: `<h3>Contact Details</h3>
    <ul>  
      <li>Name: ${name}</li>
      <li>Email: ${email}</li>
    </ul>
    <h3>${topic}</h3>
    <p>${message}</p>`, // html body
  },
    (error, body) => {
      if (error) {
        console.log(error);
        res.status(500).send({ message: 'Error in sending email' });
      } else {
        console.log(body);
        res.send({ message: 'Email sent successfully' });
      }
    });
});

emailRouter.post('/resetpassword', (req, res) => {
  const { pin, email } = req.body;
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'theperfectgroup8@gmail.com',
      pass: 'project2022'
    }
  });
  let info = transporter.sendMail({
    from: 'theperfectgroup8@gmail.com',
    to: `${email}`,
    subject: 'Verification Code',
    html: `<h3>Verification Code</h3>
    <p>Your verification code is: ${pin}</p>`, // html body
  },
    (error, body) => {
      if (error) {
        console.log(error);
        res.status(500).send({ message: 'Error in sending verification code' });
      } else {
        console.log(body);
        res.send({
          pin: pin,
          email: email,
          message: 'Verification code sent to email'
        });
      }
    });
});

export default emailRouter;
// emailRouter.post('/', (req, res) => {
//     const { name, email, topic, message } = req.body;
//     mailgun()
//       .messages()
//       .send(
//         {
//           from: `${name} <${email}>`,
//           to: 'theperfectgroup8@gmail.com',
//           subject: `${topic}`,
//           html: `<p>${message}</p>`,
//         },
//         (error, body) => {
//           if (error) {
//             console.log(error);
//             res.status(500).send({ message: 'Error in sending email' });
//           } else {
//             console.log(body);
//             res.send({ message: 'Email sent successfully' });
//           }
//         }
//       );
//   });

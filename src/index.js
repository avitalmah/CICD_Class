require('dotenv').config();
const cors = require('cors');
const express = require('express');
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const User = require('./dbModels/user');
const path = require('path');
const productRouter = require('../router/api/product');
// const dbUrl = mongodb+srv+"://theperfectgroup8:project2022@sceproject.aalci.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const dbUrl = 'mongodb+srv://theperfectgroup8:project2022@sceproject.aalci.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

//  const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}


// const dbUri = process.env.uri;

console.log(dbUrl);

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(dbUrl, connectionParams).then(() => {
  console.log('MongoDB Connected');
  const kitty = new Cat({name: 'dani'});
  kitty.save().then(() => console.log('meow'));
  console.log('Hii');
}).catch((err) => console.log(err));
const Cat = mongoose.model('Cat', {name: String});

app.post('/Register', (req, res) => {
  console.log(req.body);
  User.findOne({email: req.body.email}, (err, user) => {
    if (user) {
      console.log('emaiil is already exist');
      return res.status(401).json({email: 'Email already exists'});
    } else {
      const user = new User({
        firstName: req.body.first_name,
        lastName: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        country: req.body.country,
        city: req.body.city,
        street: req.body.street,
        streetNumber: req.body.street_number,
        aptNumber: req.body.apt_number,
        zip: req.body.zip,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({message: 'sucessfull'});
        }
      });
    }
  });
});

app.post('/Login', (req, res) => {
  const {email, password} = req.body;
  User.findOne({email: email}, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({message: 'login sucess', user: user});
      } else {
        res.send({message: 'wrong credentials'});
      }
    } else {
      res.send('not register');
    }
  });
});
app.use('./router/api/product', productRouter);
app.listen(port, () => {
  console.log(`Server is up and running on http://127.0.0.1:${port}`);
});

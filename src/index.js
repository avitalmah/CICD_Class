require('dotenv').config();
const cors = require('cors');
const express = require('express');
const port = process.env.PORT || 8301;
const mongoose = require('mongoose');
const User = require('./dbModels/user');

// const dbUrl = mongodb+srv+"://theperfectgroup8:project2022@sceproject.aalci.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const dbUrl = 'mongodb+srv://theperfectgroup8:project2022@sceproject.aalci.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

//  const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.get('/', (req, res) => {
  res.send('<h1>Hellow 5 World </h1>');
});

// const dbUri = process.env.uri;

console.log("dbUri");
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
  // const {firstName,lastName,email,password,country,city,street,streetNumber,aptNumber,zip} =req.body;
  User.findOne({email: req.body.email}, (err, user) => {
    if (user) {
      res.send({message: 'user already exist'});
    } else {
      // const user = new User({firstName,lastName,email,password,country,city,street,streetNumber,aptNumber,zip})
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

app.listen(port, () => {
  console.log(`Server is up and running on http://127.0.0.1:${port}`);
});

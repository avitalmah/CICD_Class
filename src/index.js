require('dotenv').config();
const express = require('express');
const port = process.env.PORT || 8301;
const mongoose = require('mongoose');

//  const dbUrl = mongodb+srv+"://theperfectgroup8:project2022@sceproject.aalci.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//  const { MongoClient, ServerApiVersion } = require('mongodb');
const dbUri = process.env.uri;

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hellow 5 World </h1>');
});


const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(dbUri, connectionParams).then(() => {
  console.log('MongoDB Connected');
  const kitty = new Cat({name: 'dani'});
  kitty.save().then(() => console.log('meow'));
  console.log('Hii');
}).catch((err) => console.log(err));
const Cat = mongoose.model('Cat', {name: String});

app.listen(port, () => {
  console.log(`Server is up and running on http://127.0.0.1:${port}`);
});

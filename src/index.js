const express = require('express');
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');

//  const dbUrl = mongodb+srv+"://theperfectgroup8:project2022@sceproject.aalci.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//  const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = 'mongodb+srv://theperfectgroup8:project2022@sceproject.aalci.mongodb.net/check?retryWrites=true&w=majority';
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const Cat = mongoose.model('Cat', { name: String });
//   const kitty = new Cat({ name: 'Zildjian' });
//   kitty.save().then(() => console.log('meow'));
//   client.close();
// });


const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hellow World </h1>');
});


const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect(uri, connectionParams).then(() => {
  console.log('MongoDB Connected');
  const kitty = new Cat({ name: 'Zildjian' });
  kitty.save().then(() => console.log('meow'));
  console.log('Hii');
}).catch(err => console.log(err));
const Cat = mongoose.model('Cat', { name: String });



app.listen(port, () => {
  console.log(`Server is up and running on http://127.0.0.1:${port}`);
});

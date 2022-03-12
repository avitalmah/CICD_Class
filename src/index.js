const express = require('express');
const port = process.env.port || 3000;
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hellow World 2</h1>');
});

app.listen(port, () => {
  console.log(`Server is up and running on http://127.0.0.1:${port}`);
});

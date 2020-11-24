const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Question service is running');
});

app.listen(port, '0.0.0.0');

// 


console.log(`Running on port ${port}`);

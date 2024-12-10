const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.post('/', (req, res) => {
  try {
    const data = req.body;
    console.log(data); //process valid JSON data
    res.send('Data received successfully!');
  } catch (error) {
    console.error('Error parsing JSON:', error);
    res.status(400).send('Invalid JSON');
  }
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
//Improved error handling using try-catch block and body-parser for JSON parsing
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// Uncommon Error:  Unexpected token '}' in JSON at position ...
// This error might occur if you're trying to parse JSON that is malformed and is not following JSON syntax correctly.
// This example demonstrates a common scenario where this error may occur during a POST request
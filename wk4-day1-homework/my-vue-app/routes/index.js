const express = require('express');
const path = require('path');
const app = express();



// Serve static files from the Vue app
app.use(express.static(path.join(__dirname, '../public')));

// The catch-all handler for any requests that don't match one above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'../public/index.html')); //change public to where vue.js files are kept
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Server listening on ${port}`);
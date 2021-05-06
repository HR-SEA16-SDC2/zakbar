const express = require('express');
const axios = require('axios');
const path = require('path');
const testConnection = require('../database/index.js');

const app = express();
const PORT = 3000;
//const apiUrl = /*to AWS instance*/
//const header = { Authorization: config.TOKEN };

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} incoming for ${req.url}`);
  next();
})

app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});


module.exports = app;

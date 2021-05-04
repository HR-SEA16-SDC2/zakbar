const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const apiUrl = /*to AWS instance*/
const header = { Authorization: config.TOKEN };

app.use(express.json());
app.use('/', express.static(distPath));
app.use(/\/\d*(?![A-Za-z])/, express.static(distPath));
app.use(QandA);

app.get('/products', (req, res) => {
  axios.get(`${apiUrl}/qa/questions?product_id=${req.params.product_id}`, {
    headers: header,
  })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      res.sendStatus(500);
      throw error;
    });
});

module.exports = app;
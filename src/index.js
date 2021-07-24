const express = require('express');

const app = express();

app.get('/webhook', (req, res, next) => {
  res.status(200).json();
});

module.exports = app;

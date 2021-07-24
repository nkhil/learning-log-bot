const express = require('express');
const logger = require('pino')();

const app = express();

app.get('/webhook', (req, res, next) => {
  logger.info('Webhook request received');
  res.status(200).json();
});

module.exports = app;

const express = require('express');
const logger = require('pino')();

const app = express();

app.get('/liveness', (req, res, next) => {
  logger.info('liveness request received');
  res.status(200).json({ status: 'OK' });
});

app.post('/webhook', (req, res, next) => {
  logger.info('Webhook request received');
  res.status(200).json({ status: 'OK' });
});

module.exports = app;

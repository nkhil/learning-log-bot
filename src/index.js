const express = require('express');
const logger = require('pino')();
const { MessagingResponse } = require('twilio').twiml;

const app = express();

app.get('/liveness', (req, res, next) => {
  logger.info('liveness request received');
  const twiml = new MessagingResponse();
  twiml.message('I will log that straight away.');
  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());
});

app.post('/webhook', (req, res, next) => {
  logger.info('Webhook request received');
  res.status(200).json({ status: 'OK' });
});

module.exports = app;

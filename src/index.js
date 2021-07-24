const express = require('express');
const logger = require('pino')();
const { MessagingResponse } = require('twilio').twiml;
const { messageIsNegative } = require('./helpers/message-content');

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get('/liveness', (req, res, next) => {
  logger.info('liveness request received');
  res.status(200).json({ status: 'OK' });
});

app.post('/webhook', (req, res, next) => {
  logger.info('Webhook request received');
  const message = req.body?.Body;
  let messageText = 'I will log that straight away.';
  if (messageIsNegative(message)) {
    messageText = "No worries, I'll check again soon";
  }
  const twiml = new MessagingResponse();
  twiml.message(messageText);
  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());
});

module.exports = app;

require('dotenv').config();

module.exports = {
  TWILIO: {
    ACCOUNT_SID: process.env.TWILIO_SID,
    AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
    FROM_NUMBER: process.env.TWILIO_FROM_NUMBER,
    TO_NUMBER: process.env.TWILIO_TO_NUMBER,
  },
  TEST_MESSAGE:
    'Hi, this is your learning log. Have you learned anything recently?',
};

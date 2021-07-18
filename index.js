const twilio = require('twilio');

const {
  TWILIO,
  TEST_MESSAGE
} = require('./constants');

// Setup Twilio client
const tClient = twilio(
  TWILIO.ACCOUNT_SID,
  TWILIO.AUTH_TOKEN
);

// Send sample message
tClient
  .messages
  .create({
    from: TWILIO.FROM_NUMBER,
    to: TWILIO.TO_NUMBER,
    body: TEST_MESSAGE,
  }).then(response => {
    console.log(response)
  });

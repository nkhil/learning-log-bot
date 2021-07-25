require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 8080,
  TWILIO: {
    ACCOUNT_SID: process.env.TWILIO_SID,
    AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
    FROM_NUMBER: process.env.TWILIO_FROM_NUMBER,
    TO_NUMBER: process.env.TWILIO_TO_NUMBER,
  },
  TEST_MESSAGE:
    'Hi, this is your learning log. Have you learned anything recently?',
  messages: {
    recurringQuestions: [
      'Yours truly learning bot checking in!👋 Have you learned anything new recently?',
      'Hey, have you learned anything interesting recently?',
      "It's that time of day again. Have you been learning anything cool recently?",
      'A journey of a thousand miles begins with a single step. Have you learned anything recently?',
      "Hey you, yes you - how are you? How's the learning going?",
    ],
    positiveResponses: [
      "Nice job ⭐⭐⭐⭐⭐ - I'll save this in the vault so it doesn't get lost in time",
      "Well done. I'll record this in the log right away",
    ],
    negativeResponses: ["No worries, I'll be in touch soon!"],
  },
};

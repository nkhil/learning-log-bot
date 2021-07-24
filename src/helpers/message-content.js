function messageIsNegative(message) {
  if (message.toLowerCase() === 'n') return true;
  const negatives = ['no', 'nope'];
  const messageArr = message.split(' ');
  return messageArr.reduce((result, word) => {
    if (negatives.includes(word.toLowerCase())) {
      // eslint-disable-next-line no-param-reassign
      result = true;
    }
    return result;
  }, false);
}

module.exports = {
  messageIsNegative,
};

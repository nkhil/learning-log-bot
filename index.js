const logger = require('pino')();
const app = require('./src/index');
const { name } = require('./package.json');
const { PORT } = require('./src/constants');

app.listen(PORT, () => {
  logger.info(`${name} listening on port ${PORT}!`);
});

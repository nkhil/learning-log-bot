const logger = require('pino')();
const app = require('./src/index');
const { name } = require('./package.json');

const port = 8080;

app.listen(port, () => {
  logger.info(`${name} listening on port ${port}!`);
});

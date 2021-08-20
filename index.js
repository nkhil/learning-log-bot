const logger = require('pino')();
const cron = require('node-cron');
const cp = require('child_process');
const app = require('./src/index');
const { name } = require('./package.json');
const { PORT } = require('./src/constants');

cron.schedule('00 00 17 * * 0-5', () => {
  console.log('running a task every day of the work week at 5PM');
  let invoked = false;
  const process = cp.fork('./src/message.js');

  // listen for errors as they may prevent the exit event from firing
  process.on('error', function (err) {
    if (invoked) return;
    invoked = true;
    logger.error(
      `Error occured during scheduled task run. Error: ${JSON.stringify(err)}`
    );
  });

  // execute the callback once the process has finished running
  process.on('exit', function (code) {
    if (invoked) return;
    invoked = true;
    if (code === 0) {
      logger.info('✨ Scheduled task ran successfully');
    } else {
      logger.error(
        `Error occured during scheduled task run. Error code: ${code}`
      );
    }
  });
});

app.listen(PORT, () => {
  logger.info(`${name} listening on port ${PORT}!`);
});

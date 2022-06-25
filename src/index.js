import {port, env} from './constants';
import app from 
const app = require('./config/express.config');
const logger = require('./api/utils/logger')(__filename);

// listen to requests
app.listen(port, (err) => {
	if (err) {
		return logger.error('server failed to start', err);
	}
	return logger.info(`server started [env, port] = [${env}, ${port}]`);
});

/**
 * Exports express
 * @public
 */
module.exports = app;
© 2022 GitHub, Inc.
Terms
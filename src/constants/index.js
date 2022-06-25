import path from "path"

require('dotenv-safe').load({
	path: path.join(process.cwd(), '.env'),
});

const common = import('./constants.common');

const getEnvironmentSpecificConstants = (env) => {
	switch (env) {
		case 'development': {
			return import('./constants.dev');
		}
		case 'production': {
			return import('./constants.prod');
		}
		default: {
			throw new Error(`no matching constants file found for env '${env}'`);
		}
	}
	/* eslint-enable indent, global-require */
};

export default Object.assign(common, getEnvironmentSpecificConstants(process.env.NODE_ENV));
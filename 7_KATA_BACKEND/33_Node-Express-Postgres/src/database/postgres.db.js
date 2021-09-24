import Sequelize from 'sequelize';
import fs from 'fs';

import config from '../config/index';

export const sequelize = new Sequelize(
	config.DB_DATABASE,
	config.DB_USER,
	config.DB_PASS,
	{
		host: config.DB_HOST,
		dialect: 'postgres',
		sslmode: true,
		pool: {
			max: 5,
			min: 0,
			require: 3000,
			idle: 10000,
		},
		logging: false,
	}
);

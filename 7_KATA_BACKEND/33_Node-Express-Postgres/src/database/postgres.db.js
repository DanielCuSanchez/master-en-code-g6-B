import Sequelize from "sequelize";

import config from "../config/index";

export const sequelize = new Sequelize(
  config.DB_DATABASE,
  config.DB_USER,
  config.DB_PASS,
  {
    host: config.DB_HOST,
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      require: 3000,
      idle: 10000,
    },
    logging: false,
  }
);

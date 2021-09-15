"use strict";

require("dotenv").config();

var config = {
  dev: {
    DB_DATABASE: process.env.DB_DATABASE_DEV,
    DB_USER: process.env.DB_USER_DEV,
    DB_PASS: process.env.DB_PASS_DEV,
    DB_HOST: process.env.DB_HOST_DEV
  },
  staging: {},
  production: {
    DB_DATABASE: process.env.DB_DATABASE,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    DB_HOST: process.env.DB_HOST
  }
};
module.exports = config[process.env.SWITCH];
import Sequelize from "sequelize";
import { sequelize } from "../database/postgres.db";

export const Task = sequelize.define("tasks", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  name: {
    type: Sequelize.TEXT,
  },
  description: {
    type: Sequelize.TEXT,
  },
  done: {
    type: Sequelize.BOOLEAN,
  },
  deliverydate: {
    type: Sequelize.DATE,
  },
  userid: {
    type: Sequelize.INTEGER,
  }
}, {
  timestamps: false,
});

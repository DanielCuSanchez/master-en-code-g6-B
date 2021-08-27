import Sequelize from "sequelize";
import { sequelize } from "../database/postgres.db";
import { Task } from "./Task";

export const User = sequelize.define(
  "users",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequelize.TEXT,
    },
    lastname: {
      type: Sequelize.TEXT,
    },
    email: {
      type: Sequelize.TEXT,
      unique: true,
    },
    password: {
      type: Sequelize.TEXT,
    },
  },
  {
    timestamps: false,
  }
);

User.hasMany(Task, { foreignKey: "userid", sourceKey: "id" });
Task.belongsTo(User, { foreignKey: "userid", targetId: "id" });

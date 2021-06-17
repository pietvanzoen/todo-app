import pkg from "sequelize";
const { Sequelize, Model, DataTypes } = pkg;

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./todos.db",
});

export class Todo extends Model {}
Todo.init(
  {
    done: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: "todo" }
);

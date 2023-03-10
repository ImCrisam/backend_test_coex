"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.rol, {
        foreignKey: "rolId",
        as: "rols",
      });
    }
  }
  user.init(
    {
      name: DataTypes.STRING,
      lastname: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      age: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};

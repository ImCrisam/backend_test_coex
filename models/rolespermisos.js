"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class rolesPermisos extends Model {
    static associate(models) {
      models.permission.belongsToMany(models.rol, {
        through: models.rolesPermisos,
      });
      models.rol.belongsToMany(models.permission, {
        through: models.rolesPermisos,
      });
    }
  }
  rolesPermisos.init(
    {
      rolId: DataTypes.INTEGER,
      permissionId: DataTypes.INTEGER,
    },

    {
      sequelize,
      modelName: "rolesPermisos",
    }
  );
  return rolesPermisos;
};

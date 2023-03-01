"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("rolesPermisos", [
      { rolId: 1, permissionId: 1 },
      { rolId: 1, permissionId: 2 },
      { rolId: 1, permissionId: 3 },
      { rolId: 2, permissionId: 2 },
      { rolId: 2, permissionId: 3 },
      { rolId: 3, permissionId: 3 },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("rolesPermisos", null, {});
  },
};

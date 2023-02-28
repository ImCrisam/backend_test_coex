"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("rols", [
      { name: "admin", createdAt: new Date(), updatedAt: new Date() },
      { name: "collaborator", createdAt: new Date(), updatedAt: new Date() },
      { name: "guest", createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("rols", null, {});
  },
};

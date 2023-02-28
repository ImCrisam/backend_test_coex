"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("permissions", [
      { name: "edit", createdAt: new Date(), updatedAt: new Date() },
      { name: "view", createdAt: new Date(), updatedAt: new Date() },
      { name: "share", createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("permissions", null, {});
  },
};

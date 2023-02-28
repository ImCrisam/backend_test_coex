"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const roles = await queryInterface.sequelize.query(`SELECT id from rols;`);
    return queryInterface.bulkInsert("users", [
      {
        rolId: roles[0][0].id,
        name: "admin",
        lastname: "Lastadmin",
        username: "adminUser",
        password: "admin",
        age: "30",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("users", null, {});
  },
};

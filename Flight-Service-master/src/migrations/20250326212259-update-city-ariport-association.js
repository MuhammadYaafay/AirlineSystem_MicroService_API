"use strict";

/** @type {import('sequelize-cli').Migration} */ //any change here give db level check
module.exports = {
  async up(queryInterface, Sequelize) {   //gives versioning of db
    await queryInterface.addConstraint("Airports", {
      type: "FOREIGN KEY",
      fields: ["cityId"],
      name: "airports_cityId_fkey",
      references: {
        table: "Cities",
        field: "id",
      },
      onDelete: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Airports", "airports_cityId_fkey");
  },
};

'use strict';

const { fakerDA } = require("@faker-js/faker");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
		const arr = [];
		for(let packageID = 1; packageID <= 10; packageID++) {
			arr.push({
				packageID: packageID,
				status: "package created",
				dateTime: new Date(),
				createdAt: new Date(),
				updatedAt: new Date(),
			});
		}
		return queryInterface.bulkInsert('events', arr, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('events', null, {});
  }
};

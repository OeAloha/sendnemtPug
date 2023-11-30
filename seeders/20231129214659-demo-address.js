'use strict';

const { fakerDA } = require("@faker-js/faker");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
		const arr = [];
		for(let i = 0; i < 10; i++) {
			arr.push({
				address: fakerDA.location.streetAddress(),
				zipCode: fakerDA.location.zipCode(),
				cityName: fakerDA.location.city(),
				createdAt: new Date(),
				updatedAt: new Date(),
			});
		}
		return queryInterface.bulkInsert('addresses', arr, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('addresses', null, {});
  }
};

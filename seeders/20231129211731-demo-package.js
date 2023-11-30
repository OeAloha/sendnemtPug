'use strict';

const { fakerDA } = require("@faker-js/faker");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
		const arr = [];
		for(let i = 0; i < 10; i++) {
			arr.push({
				content: fakerDA.commerce.productName(),
				weight: fakerDA.commerce.price({max: 50}),
				createdAt: new Date(),
				updatedAt: new Date(),
			});
		}
		return queryInterface.bulkInsert('Packages', arr, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Packages', null, {});
  }
};

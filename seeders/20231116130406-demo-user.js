'use strict';

const { fakerDA } = require("@faker-js/faker");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
		const arr = [];
		for(let i = 0; i < 10; i++) {
			const firstName = fakerDA.person.firstName();
			const lastName = fakerDA.person.lastName();
			arr.push({
				firstName,
				lastName,
				email: fakerDA.internet.email({
					firstName,
					lastName,
				}).toLowerCase(),
				phone: fakerDA.phone.number(),
				createdAt: new Date(),
				updatedAt: new Date(),
			});
		}
		return queryInterface.bulkInsert('users', arr, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};

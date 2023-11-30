'use strict';

const { faker } = require("@faker-js/faker");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: (queryInterface, Sequelize) => {
		const arr = [];
		for (let packageID = 1; packageID <= 10; packageID++) {
			// Add two entries for each packageID: one for sender, one for receiver
			arr.push({
					isRecipient: false, // Sender
					packageID: packageID,
					userID: faker.number.int({ min: 1, max: 10 }),
					addressID: faker.number.int({ min: 1, max: 10 }),
					createdAt: new Date(),
					updatedAt: new Date(),
			});
			arr.push({
					isRecipient: true, // Receiver
					packageID: packageID,
					userID: faker.number.int({ min: 1, max: 10 }),
					addressID: faker.number.int({ min: 1, max: 10 }),
					createdAt: new Date(),
					updatedAt: new Date(),
			});
		}
		return queryInterface.bulkInsert('userPackages', arr, {});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('userPackages', null, {});
	}
};
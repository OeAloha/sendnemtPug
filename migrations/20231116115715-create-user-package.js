'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('userPackages', {
      isRecipient: {
        type: Sequelize.BOOLEAN,
				primaryKey: true,
				allowNull: false,
      },
			packageID: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				references: {
					model: 'packages', // Directly using the table name as a string
					key: 'id'
				},
				allowNull: false,
			},
      userID: {
        type: Sequelize.INTEGER,
				references: {
					model: 'users', // Directly using the table name as a string
					key: 'id'
				},
      },
      addressID: {
        type: Sequelize.INTEGER,
				references: {
					model: 'addresses', // Directly using the table name as a string
					key: 'id'
				},
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('userPackages');
  }
};
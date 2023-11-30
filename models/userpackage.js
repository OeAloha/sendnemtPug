'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class userPackage extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			userPackage.belongsTo(models.user, {
				foreignKey: 'userID',
			});

			userPackage.belongsTo(models.Package, {
				foreignKey: 'packageID',
			});

			userPackage.belongsTo(models.address, {
				foreignKey: 'addressID',
			});
		}
	}
	userPackage.init({
		isRecipient: {
				type: DataTypes.BOOLEAN,
				primaryKey: true,
				allowNull: false
		},
		packageID: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				references: {
						model: 'Package', // This should match the table name
						key: 'id'
				}
		},
		userID: {
				type: DataTypes.INTEGER,
				references: {
						model: 'user', // This should match the table name
						key: 'id'
				}
		},
		addressID: {
				type: DataTypes.INTEGER,
				references: {
						model: 'address', // This should match the table name
						key: 'id'
				}
		}
}, {
		sequelize,
		modelName: 'userPackage',
		tableName: 'userPackages', // Ensure this matches your actual table name
		freezeTableName: true // This prevents Sequelize from pluralizing the table name
});
return userPackage;
};


'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull:  false,
      },
      stock: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
  },
      {
        timestamps: false,
        createdAt: false,
      }
  );
 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};

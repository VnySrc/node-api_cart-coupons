'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('carts', {
      session_id : {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.STRING
    },
    original_price: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    coupon: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: 0,
    },
    price : {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    total_quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    products: {
      type: Sequelize.JSON,
      allowNull: false,
  },
},
    {
        createdAt: false,
        updatedAt: false,
    } 
);
},

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('carts');
  }
};

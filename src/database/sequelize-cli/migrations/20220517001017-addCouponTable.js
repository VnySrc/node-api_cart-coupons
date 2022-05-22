'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('coupons',{
      tag: {
          type: Sequelize.STRING,
          primaryKey: true,
          allowNull: false,
      },
      discount: {
          type: Sequelize.INTEGER,
          allowNull: false,
      },
      type: {
          type: Sequelize.STRING,
          allowNull: false,
      }
  },
      {
      timestamps: false,
      createdAt: false,
      } 
    
  );
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('coupons');

  }
};

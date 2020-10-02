'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      user_id:{
          type: Sequelize.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
      },
      email:{
          type: Sequelize.STRING,
          allowNull: false
      },
      password:{
          type: Sequelize.STRING,
          allowNull: false
      }   
  },{
      createdAt: false,
      updatedAt: false
  });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('departments', {
      dept_id:{
          type: Sequelize.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
      },
      dept_name:{
          type: Sequelize.STRING,
          allowNull: false
      }   
    },{
      createdAt: false,
      updatedAt: false
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('departments');
  }
};

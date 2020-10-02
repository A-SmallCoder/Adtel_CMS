'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_course',{
      course_id:{
          type:Sequelize.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
      },
      user_id:{
          type:Sequelize.BIGINT,
          allowNull: false,
          
      },
      course_name:{
          type:Sequelize.STRING,
          allowNull: false,
      },
      link:Sequelize.STRING,
      finished:{
          type:Sequelize.BOOLEAN,
          allowNull: false,
          default:false,
      },
      start_date:{
          type:Sequelize.DATE,
          allowNull: false,
      },
      end_date: Sequelize.DATE,
      dept_id: Sequelize.BIGINT
  },{
      createdAt: false,
      updatedAt: false
  });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user_course');
  }
};

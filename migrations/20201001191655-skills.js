'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('skills',{
      skill_id:{
          type:sequelize.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
      },
      course_id:{
          type:sequelize.BIGINT,
          allowNull: false,
          model: 'courses', // <<< Note, its table's name, not object name
          key: 'course_id' // <<< Note, its a column name
      },
      skill_name:{
          type:sequelize.STRING,
          allowNull: false
      },
      skill_desc: sequelize.TEXT
  },{
      createdAt: false,
      updatedAt: false
  });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('skills');
  }
};

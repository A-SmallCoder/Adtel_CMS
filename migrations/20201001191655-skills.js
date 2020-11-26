'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('skills',{
      skill_id:{
          type:Sequelize.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
      },
      course_id:{
          type:Sequelize.BIGINT,
          allowNull: false,
          model: 'courses', // <<< Note, its table's name, not object name
          key: 'course_id' // <<< Note, its a column name
      },
      skill_name:{
          type:Sequelize.STRING,
          allowNull: false
      },
      skill_desc: Sequelize.TEXT
  },{
      createdAt: false,
      updatedAt: false
  });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('skills');
  }
};

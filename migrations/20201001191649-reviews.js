'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('reviews',{
      review_id:{
          type:Sequelize.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
      },
      course_id:{
          type: Sequelize.BIGINT,
          allowNull: false,
          references: 'courses', // <<< Note, its table's name, not object name
          referencesKey: 'course_id' // <<< Note, its a column name
      },
      comment:Sequelize.TEXT,
      rating:{
          type:Sequelize.INTEGER,
          allowNull: false,
      } 
  });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('reviews');
  }
};

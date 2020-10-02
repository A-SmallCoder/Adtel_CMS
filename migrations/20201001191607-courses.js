'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('courses', {
    course_id:{
        type:Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    dept_id:{
        type: Sequelize.BIGINT,
        allowNull: false,
        model: 'departments', // <<< Note, its table's name, not object name
        key: 'dept_id' // <<< Note, its a column name
    },
    course_name:Sequelize.STRING,
    link: Sequelize.STRING,
    desc:Sequelize.TEXT
},{
    createdAt: false,
    updatedAt: false
});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('superuser');
  }
};

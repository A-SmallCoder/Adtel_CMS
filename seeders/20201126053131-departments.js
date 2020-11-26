'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      await queryInterface.bulkInsert("departments", [{
      dept_name:"Science"
      },{
        dept_name:"language"
      }], {})
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('departments', null, {});
  }
};

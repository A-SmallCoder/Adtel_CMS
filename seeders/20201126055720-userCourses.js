'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      await queryInterface.bulkInsert('user_course', [{
        course_id:1,
        user_id:1,
        finished:true,
        start_date: new Date(2018, 9, 24),
        end_date: new Date(2018, 11, 24),
      },{
        course_id:2,
        user_id:2,
        finished:true,
        start_date: new Date(2018, 9, 24),
        end_date: new Date(2018, 11, 24),
      },{
        course_id:3,
        user_id:3,
        finished:false,
        start_date: new Date(2018, 9, 24),
        end_date: new Date(2018, 11, 24),
      }], {})
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user_course', null, {});
  }
};

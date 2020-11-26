'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      await queryInterface.bulkInsert('reviews', [{
      course_id:1,
      comment:"Very Educational course",
      rating:5
      },{
      course_id:2,
      comment:"Very english course",
      rating:5
      },{
      course_id:3,
      comment:"Very spanish course",
      rating:5
      }], {})
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('reviews', null, {});
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      await queryInterface.bulkInsert('skills', [{
      course_id:1,
      skill_name:"addition",
      skill_desc:" adding two numbers to get another number"
      },{
        course_id:3,
      skill_name:"conjugation",
      skill_desc:" something they do in spanish"
      },{
        course_id:2,
      skill_name:"subject verb agreement",
      skill_desc:" the boy jumps, not the boy jump"
      }], {})
    ])
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('skills', null, {});
  }
};

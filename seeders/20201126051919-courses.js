'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      await queryInterface.bulkInsert("courses",[{
        dept_id:1,
        course_name:"Mathematics",
        link:"http://www.math.com/",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
      },{
        dept_id:2,
        course_name:"English",
        link:"https://en.wikipedia.org/wiki/English_language",
        desc:"The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout."
      },{
        dept_id:2,
        course_name:"Spanish",
        link:"https://www.spanishdict.com/",
        desc:"Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.”"
      }],{})
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('courses', null, {});
  }
};

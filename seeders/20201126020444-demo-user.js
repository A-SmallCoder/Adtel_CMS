'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      await queryInterface.bulkInsert('users', [{
          name: "tom",
          email:'user1@gmail.com',
          password:'password1234'
        },
        {name:"kenny",
        email:'user2@gmail.com',
        password:'password1234'
        },
        {name:"Jim",
        email:'user3@gmail.com',
        password:'password1234'
        }], {})
    ])
  },
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};

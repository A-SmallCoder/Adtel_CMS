const Sequelize = require('sequelize');

module.exports = new Sequelize('adtell_course_mgnt_development', 'postgres', 'Password@123', {
    host: 'localhost',
    dialect: 'postgres',
    //operatorsAliases: false,

    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });


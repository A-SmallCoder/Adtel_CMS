const Sequelize = require('sequelize');
const db = require('../config/Database');

const User = db.define('users', {
    user_id:{
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    }   
},{
    createdAt: false,
    updatedAt: false
});

// Department.hasMany(user_course, {
//     foreignKey: 'course_id'
//   });

module.exports = User;
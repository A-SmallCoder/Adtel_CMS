const Sequelize =require('sequelize');
const db = require('../config/Database');
const User = require('./User');

const UserCourse = db.define('user_course',{
    course_id:{
        type:Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    user_id:{
        type:Sequelize.BIGINT,
        allowNull: false,
        
    },
    finished:{
        type:Sequelize.BOOLEAN,
        allowNull: false,
        default:false,
    },
    start_date:{
        type:Sequelize.DATE,
        allowNull: false,
    },
    end_date: Sequelize.DATE
},{
    createdAt: false,
    updatedAt: false
});

UserCourse.hasMany(User, {
    foreignKey: 'user_id'
});

module.exports = UserCourse;
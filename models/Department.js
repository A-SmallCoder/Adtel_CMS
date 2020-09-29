const Sequelize = require('sequelize');
const db = require('../config/Database');
const Course = require('./Course');

const Department = db.define('departments', {
    dept_id:{
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    dept_name:{
        type: Sequelize.STRING,
        allowNull: false
    }   
},{
    createdAt: false,
    updatedAt: false
});

Department.hasMany(Course, {
    foreignKey: 'dept_id'
  });

module.exports = Department;
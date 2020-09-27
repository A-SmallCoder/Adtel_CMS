const Sequelize = require('sequelize');
const db = require('../config/Database');
const Department = require('./Department');
const Skill = require('./Skill');

const Course =db.define('courses',{
    course_id:{
        type:Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    dept_id:{
        type: Sequelize.BIGINT,
        allowNull: false,
        references: 'departments', // <<< Note, its table's name, not object name
        referencesKey: 'dept_id' // <<< Note, its a column name
    },
    course_name:Sequelize.STRING,
    link: Sequelize.STRING
},{
    createdAt: false,
    updatedAt: false
});

Course.hasMany(Skill, {
    foreignKey: 'course_id'
});


module.exports = Course;
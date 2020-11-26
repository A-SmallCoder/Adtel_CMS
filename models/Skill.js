const Sequelize = require('sequelize');
const db = require('../config/Database');

const Skill = db.define('skills',{
    skill_id:{
        type:Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    course_id:{
        type:Sequelize.BIGINT,
        allowNull: false,
        references: 'courses', // <<< Note, its table's name, not object name
        referencesKey: 'course_id' // <<< Note, its a column name
    },
    skill_name:{
        type:Sequelize.STRING,
        allowNull: false
    },
    skill_desc: Sequelize.TEXT
},{
    createdAt: false,
    updatedAt: false
});

module.exports = Skill;
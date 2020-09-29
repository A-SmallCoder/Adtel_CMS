const Sequelize = require('sequelize');
const db = require('../config/Database');
const Course = require('./Course');

const Review =db.define('reviews',{
    review_id:{
        type:Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    course_id:{
        type: Sequelize.BIGINT,
        allowNull: false,
        references: 'courses', // <<< Note, its table's name, not object name
        referencesKey: 'course_id' // <<< Note, its a column name
    },
    comment:Sequelize.TEXT,
    rating:{
        type:Sequelize.INTEGER,
        allowNull: false,
    } 
});

Course.hasMany(Review, {
    foreignKey: 'course_id'
});


module.exports = Review;
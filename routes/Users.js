const express = require('express');
const User = require('../models/User');
const UserCourse = require('../models/UserCourse');
const router = express.Router();

router.get('/',(req,res) => User.findAll()
    .then(User =>{
        console.log(User);
        res.send('USERS');
})
    .catch(err => console.log('Error: '+err))
);

router.get('/Courses',(req,res) => UserCourse.findAll()
    .then(UserCourse =>{
        console.log(UserCourse);
        res.send("USER's Courses");
})
    .catch(err => console.log('Error: '+err))
);



module.exports = router;
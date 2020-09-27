const express = require('express');
const router = express.Router();
const Course = require('../models/Course');
const Review = require('../models/Review');
const Skill = require('../models/Skill');

//GET: COURSE LIST
router.get('/',(req,res) => Course.findAll()
    .then(Course =>{
        console.log(Course);
        res.render('Courses',{
            //
        });
})
    .catch(err => console.log('Error: '+err))
);

//POST: COURSE
router.get('/Add',(req,res) =>{
    const data = {
        dept_id: 5,
        course_name: "drawing 101",
        link: 'https:/google.ca'
    }

    let {dept_id,course_name,link} = data;

    //insert into table
    Course.create({dept_id,course_name,link})
    .then(course => res.redirect('/courses'))
    .catch(err => console.log('Error: ' + err))
});

//course skills
router.get('/Skills',(req,res) => Skill.findAll()
    .then(Skill =>{
        console.log(Skill);
        res.send('Skills');
})
    .catch(err => console.log('Error: '+err))
);

//course reviews
router.get('/Reviews',(req,res) => Review.findAll(
//     {
//     where:{
//         course_id: Course.course_id
//     }
// }
)
    .then(Review =>{
        console.log(Review);
        res.send('Reviews');
})
    .catch(err => console.log('Error: '+err))
);


module.exports = router;
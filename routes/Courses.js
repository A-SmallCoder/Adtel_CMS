const express = require('express');
const router = express.Router();
const Course = require('../models/Course');
const Review = require('../models/Review');
const Skill = require('../models/Skill');

//GET: COURSE LIST
router.get('/',(req,res) => Course.findAll()
    .then(Courses=>{
        console.log(Course);
        res.render('Courses',{
            Courses
        });
})
    .catch(err => console.log('Error: '+err))
);

//display add course form
router.get('/Add',(req,res) => res.render('Add'));

//POST: COURSE
//hardcoded course //this is for admin
router.post('/Add',(req,res) =>{
    const data = {
        dept_id: 7,
        course_name: "new course",
        link: 'https://www.google.com.jm/',
        desc:"example description"
    }

    let {dept_id,course_name,link,desc} = data;

    //insert into table
    Course.create({dept_id,course_name,link,desc})
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
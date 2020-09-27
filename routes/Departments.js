const express = require('express');
const router = express.Router();
const Department = require('../models/Department');

router.get('/', (req,res) => Department.findAll()
.then(Department =>{
    console.log(Department);
    res.send('DEPARTMENTS');
})
.catch(err => console.log('Error: '+err))
);

module.exports = router;
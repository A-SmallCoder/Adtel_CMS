const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

//database
const db = require('./config/Database');

//test db
db.authenticate()
.then(() => console.log('database connected!'))
.catch(err => console.log('Error: ' + err))

const app = express(); 

//handlebars
app.engine('handlebars',exphbs({defaultLayout: 'main'}));
app.set('view engine' , 'handlebars');

//set static folder (public)
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(request,response) => response.send('INDEX'));

app.use(express.static(path.join(__dirname, 'bower_components')));
app.use('/departments', require('./routes/Departments'));
app.use('/courses', require('./routes/Courses'));
app.use('/users',require('./routes/Users'));


const PORT = process.env.PORT ||5000

app.listen(PORT, console.log(`Server started on port ${PORT}`));
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars')
const app = express();
const logger = require('./middleware/logger.js');
const members = require('./Members');
//init middleware

//app.use(logger);
//handel bars middle middleware

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res)=> res.render('index',{
  title:'Members App',
  members

}));
//set static floder
app.use(express.static(path.join(__dirname, 'public')));

// sets members api routes as default
app.use('/api/members', require('./routes/api/members'))

const PORT = process.env.PORT || 5000


app.listen(PORT, ()=> console.log(`server strted on ${PORT}`));

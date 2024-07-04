const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');
const { sequelize } = require('./models/index')

dotenv.config({
    path: path.resolve(__dirname, '.env')
});


const app = express();
const port = process.env.PORT;

app.set('view engine', 'ejs');
app.set('views', './views'); 
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret: process.env.COOKIE_SECRET, 
    resave: false, 
    saveUninitialized: false, 
    cookie: {
        httpOnly: true, 
        secure: false, 
        maxAge: 24 * 60 * 60 * 1000,
    }
}));

const indexRouter = require('./routes/user'); 
app.use('/', indexRouter); 

app.get('*', (req, res) =>{
  res.render('404')
});

sequelize
    .sync({ force: false })
    .then(() => {
        app.listen(port, () => {
            console.log('Database connection succeeded!')
            console.log(`Server is running! Port number is ${port} ...`);
        });
    })
    .catch((err) => {
        console.error(err);
    });

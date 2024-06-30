const express = require('express');
const app = express();
const PORT = 8000;
const mainRouter = require('./routes/index');
const visitorsRouter = require('./routes/visitors');
const visitorRouter = require('./routes/visitor');
const { sequelize } = require('./models/index');


app.set('view engine', 'ejs');
app.set('views', './views'); 
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', mainRouter);
app.use('/visitors', visitorsRouter);
app.use('/visitor', visitorRouter);

app.get('*', (req, res) => {
  res.render('404');
});

sequelize
    .sync({ force: false })
    .then(() => {
        app.listen(PORT, () => {
            console.log('Database connection succeeded!')
            console.log(`Server is running! Port number is ${PORT} ...`);
        });
    })
    .catch((err) => {
        console.error(err);
    });




const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cookieParser = require('cookie-parser');

dotenv.config({
    path: path.resolve(__dirname, '.env')
});

const app = express();
const port = process.env.PORT;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('cookie');
});

app.post('/setCookie', (req, res) => {
    const now = new Date();
    const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const cookieConfig = {
        httpOnly: true,
        expires: midnight
    };

    res.cookie('popup', 'hide', cookieConfig);
    res.send( ' 쿠키 설정 성공 ');
});

app.listen(port, () => {
    console.log(`Server is running! The port number is ${port} ...`);
    console.log('쿠키 비밀키: ', process.env.COOKIE_SECRET);
});

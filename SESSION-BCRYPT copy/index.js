const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.resolve(__dirname, '.env')
});

// const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT;

app.set('view engine', 'ejs');
app.set('views', './views'); 
// app.use('/static', express.static(__dirname + '/public'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret: process.env.COOKIE_SECRET, // 필수 옵션 : 세션을 암호화 하는데 쓰는 키 
    resave: false, // 세션이 변경되지 않더라도 매번 다시 저장할 건지를 설정
    saveUninitialized: false, // 세션을 초기화 여부
    cookie: {
        httpOnly: true, // 클라이언트에서 쿠키 확인 x
        secure: false, // http에서 사용 가능하도록(true라면 https에서만 가능)
        maxAge: 24 * 60 * 60 * 100, // 단위(ms) 
    }
}))

// TODO: 라우팅 분리
const indexRouter = require('./routes/user'); 
app.use('/', indexRouter); 

// TODO: 404 에러 처리
app.get('*', (req, res) =>{
  res.render('404')
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

require('dotenv').config(); // dotenv 패키지를 사용하여 .env 파일 로드
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');// JWT 토큰을 사용하기 위해 추가 >> 예은
const cookieParser = require('cookie-parser'); // >> 예은
const { sequelize } = require('./models'); // Sequelize 인스턴스 가져오기
const PORT = process.env.PORT || 8080; // 포트를 환경 변수에서 가져오기

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'src', 'views')); 
app.use('/static', express["static"](path.join(__dirname, '..', 'src', 'views', 'public'))); // path.join 사용

// 데이터베이스 동기화
sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch(err => {
    console.error('Unable to create tables:', err);
  });


// 라우팅 분리
const userRouter = require('../src/routes/user');
const commentRouter = require('../src/routes/comment');
const indexRouter = require('../src/routes/index');
const commendRouter = require('../src/routes/commend');
const detailRouter = require('../src/routes/detail');
const searchRouter = require('../src/routes/search');
const profileRouter = require('../src/routes/profile');


app.use('/user', userRouter);
app.use('/comment', commentRouter);
app.use('/index', indexRouter);
app.use('/commend', commendRouter);
app.use('/detail', detailRouter);
app.use('/search', searchRouter);
app.use('/profile', profileRouter);


//정적폴더 호출은 라우팅 호출 밑으로! 
app.use(express["static"](path.join(__dirname, '..', 'src', 'views', 'public'))); // path.join 사용

app.get('/', (req, res) => {
  res.render('cover')
})

// 404 에러 처리
app.get('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/user`);
});
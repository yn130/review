"use strict";

require('dotenv').config(); // dotenv 패키지를 사용하여 .env 파일 로드
var express = require('express');
var path = require('path');
var app = express();
var jwt = require('jsonwebtoken'); // JWT 토큰을 사용하기 위해 추가 >> 예은
var cookieParser = require('cookie-parser'); // >> 예은
var _require = require('./models'),
  sequelize = _require.sequelize; // Sequelize 인스턴스 가져오기
var PORT = process.env.PORT || 8080; // 포트를 환경 변수에서 가져오기

app.use(cookieParser());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'src', 'views'));
app.use('/static', express["static"](path.join(__dirname, '..', 'src', 'views', 'public'))); // path.join 사용

// 데이터베이스 동기화
sequelize.sync().then(function () {
  console.log('Database & tables created!');
})["catch"](function (err) {
  console.error('Unable to create tables:', err);
});

// 라우팅 분리
var userRouter = require('../src/routes/user');
var commentRouter = require('../src/routes/comment');
var indexRouter = require('../src/routes/index');
var commendRouter = require('../src/routes/commend');
var detailRouter = require('../src/routes/detail');
var searchRouter = require('../src/routes/search');
var profileRouter = require('../src/routes/profile');
app.use('/user', userRouter);
app.use('/comment', commentRouter);
app.use('/index', indexRouter);
app.use('/commend', commendRouter);
app.use('/detail', detailRouter);
app.use('/search', searchRouter);
app.use('/profile', profileRouter);

//정적폴더 호출은 라우팅 호출 밑으로! 
app.use(express["static"](path.join(__dirname, '..', 'src', 'views', 'public'))); // path.join 사용

app.get('/', function (req, res) {
  res.render('cover');
});

// 404 에러 처리
app.get('*', function (req, res) {
  res.render('404');
});
app.listen(PORT, function () {
  console.log("http://localhost:".concat(PORT, "/user"));
});
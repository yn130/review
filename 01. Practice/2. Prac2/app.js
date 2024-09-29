require('dotenv').config(); 
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser'); 
const { sequelize } = require('./models/Index'); 
const PORT = process.env.PORT || 8080; 

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', './views');

// 데이터베이스 동기화
sequelize.sync();


// 라우팅 분리

const coverRouter = require('./routes/cover')
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const fridgeInfoRouter = require('./routes/fridgeInfo')

// const commentRouter = require('./routes/ex');
// const commendRouter = require('./routes/commend');
// const detailRouter = require('./routes/detail');
// const searchRouter = require('./routes/search');
// const profileRouter = require('./routes/ex(profile)');

app.use('/',coverRouter)
app.use('/main', indexRouter);
app.use('/user', userRouter);
app.use('/fridgeInfo', fridgeInfoRouter);

// app.use('/comment', commentRouter);
// app.use('/commend', commendRouter);
// app.use('/detail', detailRouter);
// app.use('/search', searchRouter);
// app.use('/profile', profileRouter);


//정적폴더 호출은 라우팅 호출 밑으로! 
app.use(express.static('./views/public')); 


// 404 에러 처리
app.get('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/user`);
});
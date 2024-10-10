require('dotenv').config(); 
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser'); 
const { sequelize } = require('./models/Index'); 
const PORT = process.env.PORT || 8080; 


const scheduler = require('./scheduler'); 
const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', './views');

// 데이터베이스 동기화
// sequelize.sync({ force: true })
sequelize.sync()

// 라우팅 분리
const coverRouter = require('./routes/beforeSelect/cover')
const selectFridgeRouter = require('./routes/beforeSelect/selectFridge')
const indexRouter = require('./routes/fridge/index');
const userRouter = require('./routes/user/user')
const searchRouter = require('./routes/search/searchInFridge')
const categoryRouter = require('./routes/fridge/category')
const ingredientRouter = require('./routes/fridge/ingredient')

const notificationRoutes = require('./routes/fridge/notificationRoutes');
const subscriptionRoutes = require('./routes/fridge/subscriptionRoutes');
const tokenRouter = require('./routes/refreshToken')

const recipeRouter = require('./routes/recipe/recipe');

app.use('/',coverRouter);
app.use('/selectFridge',selectFridgeRouter);
app.use('/fridge', indexRouter);
app.use('/user', userRouter)
app.use('/search', searchRouter)
app.use('/category', categoryRouter)
app.use('/ingredient', ingredientRouter)

app.use('/notifications', notificationRoutes);
app.use('/subscribe', subscriptionRoutes);
app.use('/token',tokenRouter)

app.use('/recipe', recipeRouter);


//정적폴더 호출은 라우팅 호출 밑으로! 
app.use(express.static('./views/public')); 

// 404 에러 처리
// app.get('*', (req, res) => {
//   res.render('404');
// });

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/user`);
});

// 스케줄러 시작
scheduler.start();
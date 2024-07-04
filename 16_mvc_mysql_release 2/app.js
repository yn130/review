const express = require('express');
const app = express();
const PORT = 8800;

app.set('view engine', 'ejs');
app.set('views', './views'); 
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: 라우팅 분리
const indexRouter = require('./routes/user'); 
app.use('/', indexRouter); 

// TODO: 404 에러 처리
app.get('*', (req, res) =>{
  res.render('404')
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/user`);
});

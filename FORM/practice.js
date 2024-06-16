const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', 'practice');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.get('/', (req, res) => {
    res.render('index', { title: 'Form 실습-get으로 정보 받기' });
});

app.get('/getForm', (req, res) => {
    res.render('result', {
        title: 'GET 요청 결과',
        userInfo: req.query
    });
});

app.listen(PORT,()=>{
    console.log(`서버 http://localhost:${PORT} 실행 중`);
})


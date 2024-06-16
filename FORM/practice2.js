const express = require('express');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('views', 'practice2');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index', { title: 'Form 실습-post으로 정보 받기' });
});

app.post('/postForm', (req, res) => { 
    res.render('result', {
        title: 'POST 요청 결과',
        userInfo: req.body
    });
});


app.listen(PORT,()=>{
    console.log(`서버 http://localhost:${PORT} 실행 중`);
})


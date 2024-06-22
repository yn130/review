const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './ex');
app.use(express.static('./public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.get('/', (req,res)=>{
    res.render('index', { title : '로그인'})
});
//////////////////////////////////////////////////
//ajax get 요청 처리 
app.get('/ajax', (req,res)=>{
    //GET 방식으로 브라우저에서 URL 퀴리까지 직접 입력해서도 값을 확인 가능
    // ex. http://localhost:8080/ajax?name=서예은&gender=여자
    console.log(req.query);
    res.send(req.query);
})
//ajax post 요청 처리 
app.post('/ajax', (req,res)=>{
    console.log(req.body);
    res.send(req.body);
})
//////////////////////////////////////////

// axios get 요청 처리 
app.get('/axios', (req,res)=>{
    console.log(req.query);
    res.send(req.query);
})

// axios post 요청 처리 
app.post('/axios', (req,res)=>{
    console.log(req.body);
    res.send(req.body);
})

//////////////////////////////////////////

// fetch get 요청 처리 
app.get('/fetch', (req,res)=>{
    console.log(req.query);
    res.send(req.query);
})

// fetch post 요청 처리 
app.post('/fetch', (req,res)=>{
    console.log(req.body);
    res.send(req.body);
})

////////////////////////////////////////////



app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})
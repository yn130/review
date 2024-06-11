const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    let path = './view/'
    switch(req.url){
        case '/' : 
            path += 'index.html'
            res.statusCode = 200;
            break;
        case '/about' :
            path += 'about.html'
            res.statusCode = 200;
            break;
        default : 
            res.statusCode = 404;
            break;
        };

        fs.readFile(path, (err, data)=>{
            if(err){
                console.log('err');
                res.end();
            } else {
                res.end(data);
            }

        });

}).listen(3000, function(){
    console.log('3000번 포트 실행 중');
})
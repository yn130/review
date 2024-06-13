const http = require ('http');
http.createServer(function(req,res){
    res.writeHead(200, {'content-type':'text/html'})
    res.end('<h2>hello, world</h2>')
}).listen(8000,()=>{
    console.log('8000번 포트 실행 중');
})
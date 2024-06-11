// const http = require('http');
// http.createServer(function(req, res){
//     var _url = req.url;
//     res.writeHead(200, {'content-type':'text/html'})
//     res.write('<h2> hello, World</h2>')
//     res.end('<p>${-url}</p>')
// }).listen(3000,function(){
//     console.log('300번 포트 실행 중');
// })


const http = require('http');
http.createServer(function(req,res){
    var _url = req.url;
    res.writeHead(200, {'Content-type':'text/html'})
    res.write('<h2>hello, world</h2>')
    res.end(<p>${_url}</p>)
}).listen(3000, function(){
    console.log('3000번 포트 실행 중');
});




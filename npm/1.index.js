const http = require('http');
const server = http.createServer();
server.listen(8000,()=>{
    console.log('8000번 서버 실행 중');
})


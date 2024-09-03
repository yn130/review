const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('cover');
});

app.listen(port, () => {
    console.log(`http://localhost:${port} 서버 실행 중`);
});
const { log } = require('console');
const express = require('express');
const app = express();

app.use(express.json()); // JSON 본문을 파싱하기 위한 미들웨어

// req.params 예제
// app.get('/users/:id', (req, res) => {
//     console.log(req.params);
//     console.log(req.params.id);
//   const userId = req.params.id;
//   res.send(`User ID from params: ${userId}`);
// });

// req.query 예제
app.get('/search', (req, res) => {
  console.log(req.query);
  const keyword = req.query.keyword;
  const limit = req.query.limit;
  res.send(`Keyword from query: ${keyword}, Limit from query: ${limit}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
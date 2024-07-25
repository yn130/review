const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const token = req.cookies['token']; // 쿠키에서 토큰을 가져옵니다.
  if (token == undefined) {
    req.user = null;
    return next();
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ message: '토큰이 만료되었습니다.' });
      }
      console.error('토큰 인증에 실패했습니다.', err);
      return res.status(500).json({ message: '인증된 유저가 아닙니다' });
    }
    console.log(decodedToken);
    req.user = decodedToken; // 인증된 사용자의 ID를 요청 객체에 추가합니다.
    next(); // 인증이 성공하면 다음 미들웨어로 넘어갑니다.
  });
};

const checkLoginStatus = (req, res) => {
  const token = req.cookies.token;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.json({ isLoggedIn: false });
      } else {
        return res.json({ isLoggedIn: true });
      }
    });
  } else {
    return res.json({ isLoggedIn: false });
  }
};

module.exports = {
  authenticateToken,
  checkLoginStatus
};
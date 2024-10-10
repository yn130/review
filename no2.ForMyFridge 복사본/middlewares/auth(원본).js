/// 리프레시 토큰 문제 해결하기 전 원본 !!!!!!


const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'your_jwt_refresh_secret';
const JWT_EXPIRES_IN = '1h'; 
const JWT_REFRESH_EXPIRES_IN = '6M'; 

// 토큰 생성(액세스 토큰 + 리프레시 토큰)
const generateTokens = (user) => {
    const accessToken = jwt.sign(
        { id: user.ID, userId: user.userId, email: user.userEmail },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRES_IN }
    );

    const refreshToken = jwt.sign(
        { id: user.ID },
        JWT_REFRESH_SECRET,
        { expiresIn: JWT_REFRESH_EXPIRES_IN }
    );

    return { accessToken, refreshToken };
};

// 액세스 토큰 유효성 검사
const verifyAccessToken = (req, res, next) => {
    // 리소스 파일에 대한 요청 (HTML, CSS, JS, 이미지 등)에 대해 토큰 검사 생략
    if (req.url.match(/\.(html|css|js|png|jpg|jpeg|gif|svg|ico)$/)) {
        return next(); // 리소스 파일은 토큰 검사 없이 다음 미들웨어로 이동
    }

    // HTML 페이지 요청에 대해 토큰 검사 생략 (예: /ingredientsPlus 페이지 요청)
    if (req.headers['accept'].includes('text/html')) {
        return next(); // HTML 페이지 로드 요청에 대해 토큰 검사 생략
    }
    
    const token = req.headers['authorization'];
    // console.log('auth.js에서 보내는 token>>', token);
    // console.log('요청 URL:', req.url);  // 요청 URL 확인
    // console.log('요청 Headers:', req.headers);  // 헤더 전체 출력
    

    if (!token) {
        return res.status(401).json({ message: '인증 토큰이 필요합니다.' });
    }

    try {
        // Bearer <token> 형식에서 토큰 부분만 추출
        const decoded = jwt.verify(token.split(' ')[1], JWT_SECRET);
        console.log('Decoded Token:', decoded);  // 여기에 로그 추가
        req.user = decoded; // 유효한 토큰이면 디코딩된 정보를 req.user에 저장

        // next() 호출
        console.log('Token verified, calling next()');
        next(); // 토큰이 유효하면 다음 미들웨어로 이동
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({ message: '토큰이 만료되었습니다.' });
        }
        return res.status(403).json({ message: '유효하지 않은 토큰입니다.' });
    }
};


// 리프레시 토큰 검증 및 새로운 액세스 토큰 발급
// 이 함수는 리프레시 토큰을 사용해 새로운 액세스 토큰을 발급하는 로직을 처리함.
// 주로 리프레시 토큰의 유효성 검증, 블랙리스트 확인, 그리고 새로운 액세스 토큰 생성 등을 담당. 
// 핵심 로직을 담당하며, 이 함수 자체는 단독으로 호출되지 않음. 주로 컨트롤러에서 호출하여 사용됨
const refreshAccessToken = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
        return res.status(401).json({ message: '리프레시 토큰이 필요합니다.' });
    }

    try {
        const decoded = jwt.verify(refreshToken, JWT_REFRESH_SECRET);
        const newAccessToken = jwt.sign(
            { id: decoded.id },
            JWT_SECRET,
            { expiresIn: JWT_EXPIRES_IN }
        );

        return res.status(200).json({ accessToken: newAccessToken });
    } catch (err) {
        console.error('Token verification error:', err);
        return res.status(403).json({ message: '유효하지 않은 리프레시 토큰입니다.' });
    }
};

// 로그아웃 (리프레시 토큰 무효화)
const logout = (req, res) => {
    // 쿠키에서 리프레시 토큰을 제거하여 로그아웃 처리
    res.clearCookie('refreshToken');
    return res.status(200).json({ message: '로그아웃 성공' });
};

module.exports = {
    generateTokens,
    verifyAccessToken,
    refreshAccessToken,
    logout
};

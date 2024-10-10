
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'your_jwt_refresh_secret';
const JWT_EXPIRES_IN = '1h'; 
// const JWT_EXPIRES_IN = '1m'; //1분으로 변경
const JWT_REFRESH_EXPIRES_IN = '180d'; // 6개월을 180일로 설정

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

// 액세스 토큰 유효성 검사 및 자동 재발급 처리
const verifyAccessToken = async (req, res, next) => {
    // 리소스 파일에 대한 요청 (HTML, CSS, JS, 이미지 등)에 대해 토큰 검사 생략
    if (req.url.match(/\.(html|css|js|png|jpg|jpeg|gif|svg|ico)$/)) {
        return next(); // 리소스 파일은 토큰 검사 없이 다음 미들웨어로 이동
    }

    // HTML 페이지 요청에 대해 토큰 검사 생략
    if (req.headers['accept'] && req.headers['accept'].includes('text/html')) {
        return next(); // HTML 페이지 로드 요청에 대해 토큰 검사 생략
    }
    
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: '인증 토큰이 필요합니다.' });
    }

    try {
        // Bearer <token> 형식에서 토큰 부분만 추출
        const decoded = jwt.verify(token.split(' ')[1], JWT_SECRET);
        req.user = decoded; // 유효한 토큰이면 디코딩된 정보를 req.user에 저장
        next(); // 토큰이 유효하면 다음 미들웨어로 이동
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            // 토큰이 만료된 경우
            const refreshToken = req.cookies.refreshToken;
            if (!refreshToken) {
                return res.status(401).json({ message: '리프레시 토큰이 필요합니다.' });
            }

            // 리프레시 토큰을 사용해 새로운 액세스 토큰 발급
            try {
                const decodedRefreshToken = jwt.verify(refreshToken, JWT_REFRESH_SECRET);
                const newAccessToken = jwt.sign(
                    { id: decodedRefreshToken.id },
                    JWT_SECRET,
                    { expiresIn: JWT_EXPIRES_IN }
                );

                // 새 액세스 토큰을 헤더에 추가해서 다시 처리
                req.headers['authorization'] = `Bearer ${newAccessToken}`;
                req.user = jwt.verify(newAccessToken, JWT_SECRET); // 새 토큰을 다시 검증해서 저장
                console.log('리프레시 토큰으로 새 엑세스 토큰 발급 성공');
                
                next(); // 새로운 토큰으로 인증 성공 후 다음 미들웨어로 이동
            
            } catch (refreshErr) {
                console.error('리프레시 토큰 유효화 에러 error:', refreshErr);
                return res.status(403).json({ message: '유효하지 않은 리프레시 토큰입니다.' });
            }
        } else {
            return res.status(403).json({ message: '유효하지 않은 토큰입니다.' });
        }
    }
};

// 리프레시 토큰 검증 및 새로운 액세스 토큰 발급
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
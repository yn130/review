const bcrypt = require('bcrypt');

// 비밀번호 해시화
const hashPassword = async (password) => {
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        console.error('비밀번호 해시화 과정에서 오류 발생:', error);
        throw new Error('비밀번호 해시화 살패');
    }
};

// 사용자 입력 비밀번호와 저장한 해시화된 비밀번호 비교 
const comparePassword = async (password, hashedPassword) => {
    try {
        const match = await bcrypt.compare(password, hashedPassword);
        return match;
    } catch (error) {
        console.error('비밀번호 비교 과정에서 오류 발생:', error);
        throw new Error('비밀번호 비교 실패');
    }
};

module.exports = { hashPassword, comparePassword };

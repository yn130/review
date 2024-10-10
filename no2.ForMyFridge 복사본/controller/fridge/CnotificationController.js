// 알림을 처리하는 컨트롤러
const { checkExpirationDates } = require('../../services/expirationService');

// 유통기한 확인 및 알림 전송
// exports.checkExpirationDates = async (req, res) => {
//   const { userID } = req.params;
//   await checkExpirationDates(userID);  // 서비스 호출
//   res.status(200).json({ message: '알림 전송 완료' });
// };

exports.checkExpirationDates = async (req, res) => {
  try {
    const { userID } = req.params;
    console.log('알림트리거 컨트롤러에서 확인하는 userID >>> ', userID);
    
    await checkExpirationDates(userID);  // 서비스 호출
    res.status(200).json({ message: '알림 전송 완료' });
  } catch (error) {
    console.error('유통기한 알림 전송 실패:', error);
    res.status(500).json({ message: '알림 전송 실패', error: error.message });
  }
};

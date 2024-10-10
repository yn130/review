// 사용자가 푸시 알림을 구독할 때 호출되는 컨트롤러
const { addSubscription } = require('../../services/subscriptionService')

// 구독 정보를 서버에 저장하는 컨트롤러
exports.subscribeUser = (req, res) => {
  const { subscription } = req.body;
  const userID = req.user.id;  // JWT에서 추출한 userID
  console.log('푸시알람용 JWT에서 추출한 userID >>> : ', req.user.id);
  addSubscription(subscription, userID);
  res.status(201).json({ message: '구독 성공' });
};

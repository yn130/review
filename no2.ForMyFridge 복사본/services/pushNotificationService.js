// 푸시 알림을 전송하는 로직을 처리
const webpush = require('web-push');
require('dotenv').config(); // 환경변수 설정

// VAPID 키 설정
webpush.setVapidDetails(
    'mailto:seodpdms@naver.com',  
    process.env.PUBLIC_VAPID_KEY,     // 환경변수로 설정한 VAPID 공개 키
    process.env.PRIVATE_VAPID_KEY     // 환경변수로 설정한 VAPID 비공개 키
);

// 푸시 알림 전송 함수
exports.sendPushNotification = function (subscription, message) {
    const payload = JSON.stringify({
        title: '유통기한 알림',
        body: message
    });

    webpush.sendNotification(subscription, payload)
        .then(response => {
            console.log('푸시 알림 전송 성공:', response);
        })
        .catch(error => {
            console.error('푸시 알림 전송 중 오류 발생:', error);
        });
};

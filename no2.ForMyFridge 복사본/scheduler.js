const { checkExpirationDates } = require('./services/expirationService');

// // 매일 자정에 D-Day 3과 D-Day 확인 작업을 실행
// cron.schedule('0 0 * * *', () => {
//     console.log('유통기한 확인 작업 실행 중...');
//     checkExpirationDates();
// });

// 1분마다 알림을 확인하는 스케줄러
exports.start = function () {
    setInterval(async () => {
        const userID = 1;  // 테스트용으로 userID를 지정
        console.log('유통기한 확인 작업 실행 중...');
        await checkExpirationDates(userID);
    // }, 60000);  // 60000ms = 1분
    }, 6000000);  // 60000ms = 1시간
};



///////////////// 한국시간으로 오전 10시에!! ///////////////////////////////////////

// const { checkExpirationDates } = require('./services/expirationService');
// // cron 라이브러리 사용: cron.schedule()을 이용해 특정 시간에 작업이 실행되도록 설정
// const cron = require('node-cron');

// // 매일 한국시간 오전 10시에 알림을 확인하는 스케줄러
// exports.start = function () {
//     // 매일 오전 10시에 실행 (한국 시간에 맞춰 '0 1 10 * * *' 사용)
//     cron.schedule('0 1 10 * * *', async () => {
//         const userID = 1;  // 테스트용으로 userID를 지정하거나 실제 유저 ID를 사용
//         console.log('유통기한 확인 작업 실행 중...');
//         await checkExpirationDates(userID);
//     }, {
//         scheduled: true,
//         timezone: "Asia/Seoul"  // 한국시간으로 설정
//     });
// };
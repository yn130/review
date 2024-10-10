const { Subscription } = require('../models/Index');

// 구독 정보 저장
exports.addSubscription = async function (subscription, userID) {
    try {
        // 기존 구독 정보가 있는지 확인
        const existingSubscription = await Subscription.findOne({ where: { userID } });

        if (existingSubscription) {
            // 구독 정보가 이미 있으면 업데이트
            await Subscription.update({
                endpoint: subscription.endpoint,
                keys_p256dh: subscription.keys.p256dh,
                keys_auth: subscription.keys.auth
            }, {
                where: { userID }
            });
        } else {
            // 새로운 구독 정보 저장
            await Subscription.create({
                userID,
                endpoint: subscription.endpoint,
                keys_p256dh: subscription.keys.p256dh,
                keys_auth: subscription.keys.auth
            });
        }

        console.log(`구독 정보 저장 완료: userID = ${userID}`);
    } catch (error) {
        console.error('구독 정보 저장 중 오류 발생:', error);
    }
};

// 사용자 ID로 구독 정보 조회
exports.getSubscriptionByUserID = async function (userID) {
    try {
        const subscription = await Subscription.findOne({ where: { userID } });

        if (subscription) {
            return {
                endpoint: subscription.endpoint,
                keys: {
                    p256dh: subscription.keys_p256dh,
                    auth: subscription.keys_auth
                }
            };
        }

        console.log(`구독 정보가 없습니다: userID = ${userID}`);
        return null;  // 구독 정보가 없으면 null 반환

    } catch (error) {
        console.error('구독 정보 조회 중 오류 발생:', error);
        return null;
    }
};

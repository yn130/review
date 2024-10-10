 //////////////// /////////////////////////////// //////////////// 작동하는 코드 !!!!  //////////////// //////////////////////////////// ////////////////


// // 유통기한을 확인하고 알림을 전송하는 비즈니스 로직이 포함된 서비스
// const { FridgeItem, Ingredient, FridgeSection, Fridge, UserFridgeMapping } = require('../models/Index');
// const { sendPushNotification } = require('./pushNotificationService');
// const { getSubscriptionByUserID } = require('./subscriptionService'); // 구독 정보를 가져오는 서비스 함수
// const { Op } = require('sequelize');

// // 유저 ID를 사용하여 유통기한 확인 및 알림 전송
// exports.checkExpirationDates = async function (userID) {
//     try {


//         const today = new Date();
//         today.setHours(0, 0, 0, 0);  // 오늘 날짜의 시작 시간 (00:00:00)
        
//         const endOfToday = new Date(today);
//         endOfToday.setHours(23, 59, 59, 999);  // 오늘 날짜의 끝 시간 (23:59:59)
        
//         const threeDaysLater = new Date();
//         threeDaysLater.setDate(today.getDate() + 3);
//         threeDaysLater.setHours(0, 0, 0, 0);  // 3일 후 날짜의 시작 시간 (00:00:00)
        
//         const endOfThreeDaysLater = new Date(threeDaysLater);
//         endOfThreeDaysLater.setHours(23, 59, 59, 999);  // 3일 후 날짜의 끝 시간 (23:59:59)
        
//         // 유통기한이 오늘 또는 D-3일 내에 해당하는 재료를 찾는 쿼리
//         const expiringItems = await FridgeItem.findAll({
//             where: {
//                 [Op.or]: [
//                     {
//                         expirationDate: { [Op.between]: [today, endOfToday] }  // 유통기한이 오늘인 경우
//                     },
//                     {
//                         expirationDate: { [Op.between]: [threeDaysLater, endOfThreeDaysLater] }  // 유통기한이 3일 후인 경우
//                     }
//                 ],
//                 status: true
//             },
//             include: [
//                 { model: Ingredient, attributes: ['ingredientName'] },
//                 {
//                     model: FridgeSection,
//                     include: [{
//                         model: Fridge,
//                         include: [{
//                             model: UserFridgeMapping,
//                             where: { ID: userID }  // 수정: userID가 아니라 ID 필드 사용
//                         }]
//                     }]
//                 }
//             ]
//         });

//         if (expiringItems.length === 0) {
//             console.log('유통기한이 임박한 아이템이 없습니다.');
//             return;
//         }

//         // 유저에게 푸시 알림 전송
//         for (const item of expiringItems) {
//             const message = `${item.Ingredient.ingredientName}의 유통기한이 ${item.expirationDate.toISOString().split('T')[0]}에 다가옵니다.`;
//             const subscription = await getSubscriptionByUserID(userID);  // 유저 구독 정보 DB에서 가져오기
//             if (subscription) {
//                 await sendPushNotification(subscription, message);
//             } else {
//                 console.log(`유저 ${userID}에게 구독 정보가 없습니다.`);
//             }
//         }

//     } catch (error) {
//         console.error('유통기한 알림 전송 중 오류 발생:', error);
//     }
// };



 //////////////// /////////////////////////////// //////////////// 작동하는 코드 !!!!  //////////////// //////////////////////////////// ////////////////

// 유통기한을 확인하고 알림을 전송하는 비즈니스 로직이 포함된 서비스
const { FridgeItem, Ingredient, FridgeSection, Fridge, UserFridgeMapping } = require('../models/Index');
const { sendPushNotification } = require('./pushNotificationService');
const { getSubscriptionByUserID } = require('./subscriptionService'); // 구독 정보를 가져오는 서비스 함수
const { Op } = require('sequelize');

// 유저 ID를 사용하여 유통기한 확인 및 알림 전송
exports.checkExpirationDates = async function (userID) {
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);  // 오늘 날짜의 시작 시간 (00:00:00)
        
        const endOfToday = new Date(today);
        endOfToday.setHours(23, 59, 59, 999);  // 오늘 날짜의 끝 시간 (23:59:59)
        
        const threeDaysLater = new Date();
        threeDaysLater.setDate(today.getDate() + 3);
        threeDaysLater.setHours(0, 0, 0, 0);  // 3일 후 날짜의 시작 시간 (00:00:00)
        
        const endOfThreeDaysLater = new Date(threeDaysLater);
        endOfThreeDaysLater.setHours(23, 59, 59, 999);  // 3일 후 날짜의 끝 시간 (23:59:59)
        
        // 유통기한이 오늘 또는 D-3일 내에 해당하는 재료를 찾는 쿼리
        const expiringItems = await FridgeItem.findAll({
            where: {
                [Op.or]: [
                    {
                        expirationDate: { [Op.between]: [today, endOfToday] }  // 유통기한이 오늘인 경우
                    },
                    {
                        expirationDate: { [Op.between]: [threeDaysLater, endOfThreeDaysLater] }  // 유통기한이 3일 후인 경우
                    }
                ],
                status: true
            },
            include: [
                { model: Ingredient, attributes: ['ingredientName'] },
                {
                    model: FridgeSection,
                    include: [{
                        model: Fridge,
                        include: [{
                            model: UserFridgeMapping,
                            where: { ID: userID }  // 수정: userID가 아니라 ID 필드 사용
                        }]
                    }]
                }
            ]
        });

        if (expiringItems.length === 0) {
            console.log('유통기한이 임박한 아이템이 없습니다.');
            return;
        }

        // 유통기한이 오늘인 재료와 3일 후인 재료를 그룹화
        const todayItems = expiringItems.filter(item => {
            const expirationDate = new Date(item.expirationDate);
            return expirationDate >= today && expirationDate <= endOfToday;  // 오늘인 재료 필터링
        });

        const threeDaysLaterItems = expiringItems.filter(item => {
            const expirationDate = new Date(item.expirationDate);
            return expirationDate >= threeDaysLater && expirationDate <= endOfThreeDaysLater;  // 3일 후인 재료 필터링
        });

        // 유저 구독 정보 가져오기
        const subscription = await getSubscriptionByUserID(userID);
        if (!subscription) {
            console.log(`유저 ${userID}에게 구독 정보가 없습니다.`);
            return;
        }

        // 유통기한이 오늘인 재료에 대한 알림
        if (todayItems.length > 0) {
            const message = `유통기한이 오늘인 재료: ${todayItems.map(item => item.Ingredient.ingredientName).join(', ')}`;
            await sendPushNotification(subscription, message);
        }

        // 유통기한이 3일 후인 재료에 대한 알림
        if (threeDaysLaterItems.length > 0) {
            const message = `유통기한이 3일 후인 재료: ${threeDaysLaterItems.map(item => item.Ingredient.ingredientName).join(', ')}`;
            await sendPushNotification(subscription, message);
        }

    } catch (error) {
        console.error('유통기한 알림 전송 중 오류 발생:', error);
    }
};

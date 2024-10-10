'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    // StorageType 데이터 삽입
    await queryInterface.bulkInsert('StorageType', [
      { typeName: '냉장' },
      { typeName: '냉동' },
      { typeName: '기타' },
      { typeName: '상온' },
    ]);

    await queryInterface.bulkInsert('FridgeType', [
      { fridgeTypeName: 'fourDoors' },
      { fridgeTypeName: 'doubleDoors' },
      { fridgeTypeName: 'nomalType' },
      { fridgeTypeName: 'kimchiType'}
    ]);

    // FridgeTypeSection 데이터 삽입
    await queryInterface.bulkInsert('FridgeTypeSection', [
      // 4도어
      { fridgeTypeID: 1, sectionName: '냉장 좌측', storageTypeID: 1, positionOrder: 1 },
      { fridgeTypeID: 1, sectionName: '냉장 우측', storageTypeID: 1, positionOrder: 2 },
      { fridgeTypeID: 1, sectionName: '냉동 좌측', storageTypeID: 2, positionOrder: 3 },
      { fridgeTypeID: 1, sectionName: '냉동 우측', storageTypeID: 2, positionOrder: 4 },  
      { fridgeTypeID: 1, sectionName: '상온', storageTypeID: 4, positionOrder: 5 },  
      // 양문형
      { fridgeTypeID: 2, sectionName: '냉장 우측', storageTypeID: 1, positionOrder: 1 },
      { fridgeTypeID: 2, sectionName: '냉동 좌측', storageTypeID: 2, positionOrder: 2 },
      { fridgeTypeID: 2, sectionName: '상온', storageTypeID: 4, positionOrder: 3 },
      // 일반형
      { fridgeTypeID: 3, sectionName: '냉장실', storageTypeID: 1, positionOrder: 1 },
      { fridgeTypeID: 3, sectionName: '냉동실', storageTypeID: 2, positionOrder: 2 },
      { fridgeTypeID: 3, sectionName: '상온', storageTypeID: 4, positionOrder: 3 },
      // 김치냉장고
      { fridgeTypeID: 4, sectionName: '냉장 좌측', storageTypeID: 1, positionOrder: 1 },
      { fridgeTypeID: 4, sectionName: '냉장 우측', storageTypeID: 1, positionOrder: 2 },
      { fridgeTypeID: 4, sectionName: '상온', storageTypeID: 4, positionOrder: 3 },
    ]);

    // Category 데이터 삽입
    await queryInterface.bulkInsert('Category', [
      { categoryName: '곡류', createdAt: new Date(), updatedAt: new Date() },
      { categoryName: '과일류', createdAt: new Date(), updatedAt: new Date() },
      { categoryName: '채소류', createdAt: new Date(), updatedAt: new Date() },
      { categoryName: '고기류', createdAt: new Date(), updatedAt: new Date() },
      { categoryName: '두부/콩류', createdAt: new Date(), updatedAt: new Date() },
      { categoryName: '계란/알류', createdAt: new Date(), updatedAt: new Date() },
      { categoryName: '수산물/건해산', createdAt: new Date(), updatedAt: new Date() },
      { categoryName: '가공육', createdAt: new Date(), updatedAt: new Date() },
      { categoryName: '우유/유제품', createdAt: new Date(), updatedAt: new Date() },
      { categoryName: '면/만두/떡류', createdAt: new Date(), updatedAt: new Date() },
      { categoryName: '즉석식품/통조림', createdAt: new Date(), updatedAt: new Date() },
      { categoryName: '소스/잼류', createdAt: new Date(), updatedAt: new Date() },
      { categoryName: '양념류', createdAt: new Date(), updatedAt: new Date() },
      { categoryName: '김치/장류', createdAt: new Date(), updatedAt: new Date() },
      { categoryName: '기타', createdAt: new Date(), updatedAt: new Date() }
    ]);

    // Ingredient 데이터 삽입
    await queryInterface.bulkInsert('Ingredient', [
     // 곡류
      { ingredientName: '쌀', categoryID: 1, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '누룽지', categoryID: 1, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '귀리', categoryID: 1, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '퀴노아', categoryID: 1,  ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '전분', categoryID: 1, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '밀가루', categoryID: 1, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '메밀가루', categoryID: 1, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '튀김가루', categoryID: 1, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '핫케익가루', categoryID: 1, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '아르보리오 쌀', categoryID: 1, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      
      // 과일류
      { ingredientName: '사과', categoryID: 2, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '배', categoryID: 2, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '귤', categoryID: 2, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '바나나', categoryID: 2, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '망고', categoryID: 2, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '복숭아', categoryID: 2, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '파인애플', categoryID: 2, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '포도', categoryID: 2, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '자두', categoryID: 2, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '감', categoryID: 2, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '수박', categoryID: 2, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '멜론', categoryID: 2, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '참외', categoryID: 2, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '딸기', categoryID: 2, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '키위', categoryID: 2, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '블루베리', categoryID: 2, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '체리', categoryID: 2, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '석류', categoryID: 2, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '방울토마토', categoryID: 2, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },

      // 채소류
      { ingredientName: '양파', categoryID: 3, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '마늘', categoryID: 3, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '대파', categoryID: 3, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '생강', categoryID: 3, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '오이', categoryID: 3, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '가지', categoryID: 3, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '고구마', categoryID: 3, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '감자', categoryID: 3, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '호박', categoryID: 3, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '옥수수', categoryID: 3, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '고추', categoryID: 3, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '피망', categoryID: 3, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '파프리카', categoryID: 3, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '상추', categoryID: 3, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '깻잎', categoryID: 3, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '시금치', categoryID: 3, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '부추', categoryID: 3, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '양배추', categoryID: 3, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '양상추', categoryID: 3, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '브로콜리', categoryID: 3, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '샐러드', categoryID: 3, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '어린잎채소', categoryID: 3, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '버섯', categoryID: 3, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '배추', categoryID: 3, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '무', categoryID: 3, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '아스파라거스', categoryID: 3, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '허브류', categoryID: 3, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '인삼', categoryID: 3, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '더덕', categoryID: 3, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '고구마순', categoryID: 3, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '당근', categoryID: 3, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '애호박', categoryID: 3, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },


      // 고기류
      { ingredientName: '소고기', categoryID: 4, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '돼지고기', categoryID: 4, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '닭고기', categoryID: 4, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '양고기', categoryID: 4, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '오리고기', categoryID: 4, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '갈비', categoryID: 4, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '돼지갈비', categoryID: 4, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '닭봉', categoryID: 4, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '소갈비', categoryID: 4, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },

      // 두부/콩류
      { ingredientName: '두부', categoryID: 5, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '콩나물', categoryID: 5, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '숙주나물', categoryID: 5, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '콩', categoryID: 5, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },

      // 계란/알류
      { ingredientName: '계란', categoryID: 6, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '메추리알', categoryID: 6, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },

      // 수산물/건해산
      { ingredientName: '고등어', categoryID: 7, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '갈치', categoryID: 7, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '꽁치', categoryID: 7, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '연어', categoryID: 7, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '장어', categoryID: 7, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '자반고등어', categoryID: 7, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '오징어', categoryID: 7, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '낙지', categoryID: 7, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '주꾸미', categoryID: 7, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '문어', categoryID: 7, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '새우', categoryID: 7, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '꽃게', categoryID: 7, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '대게', categoryID: 7, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '전복', categoryID: 7, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '굴', categoryID: 7, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '소라', categoryID: 7, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '홍합', categoryID: 7, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '바지락', categoryID: 7, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '명란', categoryID: 7, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '날치알', categoryID: 7, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '진미채', categoryID: 7, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '건오징어', categoryID: 7, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '쥐포', categoryID: 7, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '멸치', categoryID: 7, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '홍어', categoryID: 7, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '조기', categoryID: 7, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '아귀', categoryID: 7, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
    


      // 가공육
      { ingredientName: '소시지', categoryID: 8, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '햄', categoryID: 8, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '베이컨', categoryID: 8, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '햄버거패티', categoryID: 8, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },


      // 우유/유제품
      { ingredientName: '우유', categoryID: 9, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '요거트', categoryID: 9, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '요구르트', categoryID: 9, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '두유', categoryID: 9, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '버터', categoryID: 9, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '생크림', categoryID: 9, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '크림', categoryID: 9, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '파마산 치즈', categoryID: 9, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '슬라이스치즈', categoryID: 9, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '모짜렐라치즈', categoryID: 9, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '크림치즈', categoryID: 9, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '과일치즈', categoryID: 9, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '치즈', categoryID: 9, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '생크림', categoryID: 9, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '사워크림', categoryID: 9, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '연유', categoryID: 9, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },

      // 면/만두/떡류
      { ingredientName: '라면', categoryID: 10, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '짜장라면', categoryID: 10, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '비빔라면', categoryID: 10, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '볶음라면', categoryID: 10, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '우동', categoryID: 10, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '칼국수', categoryID: 10, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '스파게티면', categoryID: 10, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '파스타면', categoryID: 10, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '푸실리', categoryID: 10, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '소면', categoryID: 10, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '쫄면', categoryID: 10, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '만두', categoryID: 10, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '만두피', categoryID: 10, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '떡볶이떡', categoryID: 10, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '떡국떡', categoryID: 10, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '가래떡', categoryID: 10, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '조랭이떡', categoryID: 10, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '칼국수면', categoryID: 10, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '쌀국수면', categoryID: 10, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
    


      // 즉석식품/통조림
      { ingredientName: '참치캔', categoryID: 11, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '통조림햄', categoryID: 11, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '닭가슴살캔', categoryID: 11, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '생선캔', categoryID: 11, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '골뱅이캔', categoryID: 11, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '팥통조림', categoryID: 13, ingredientType: 'real', createdAt: new Date(), updatedAt: new Date() },


      // 소스/잼류
      { ingredientName: '굴소스', categoryID: 12, ingredientType: 'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '케찹', categoryID: 12, ingredientType: 'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '마요네즈', categoryID: 12, ingredientType: 'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '돈가스소스', categoryID: 12, ingredientType:'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '토마토소스', categoryID: 12, ingredientType: 'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '크림소스', categoryID: 12, ingredientType: 'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '로제소스', categoryID: 12, ingredientType: 'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '오일소스', categoryID: 12, ingredientType: 'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '칠리소스', categoryID: 12, ingredientType: 'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '바질 페스토', categoryID: 12, ingredientType: 'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '와사비', categoryID: 12, ingredientType:'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '느억맘소스', categoryID: 12, ingredientType:'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '겨자', categoryID: 12, ingredientType:'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '드레싱', categoryID: 12, ingredientType:'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '디핑소스', categoryID: 12, ingredientType:'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '땅콩소스', categoryID: 12, ingredientType:'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '레몬즙', categoryID: 12, ingredientType:'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '머스타드', categoryID: 12, ingredientType:'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '바베큐소스', categoryID: 12, ingredientType:'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '발사믹소스', categoryID: 12, ingredientType:'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '비빔소스', categoryID: 12, ingredientType:'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '살사소스', categoryID: 12, ingredientType:'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '스테이크소스', categoryID: 12, ingredientType:'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '유린기소스', categoryID: 12, ingredientType:'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '짜장소스', categoryID: 12, ingredientType:'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '타코야끼소스', categoryID: 12, ingredientType:'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '잼', categoryID: 12, ingredientType:'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '핫소스', categoryID: 12, ingredientType:'condiment', createdAt: new Date(), updatedAt: new Date() },

      // 양념류
      { ingredientName: '소금', categoryID: 13,  ingredientType: 'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '설탕', categoryID: 13,  ingredientType: 'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '후추', categoryID: 13,  ingredientType: 'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '식초', categoryID: 13,  ingredientType: 'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '고춧가루', categoryID: 13,  ingredientType: 'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '꿀', categoryID: 13,  ingredientType: 'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '메이플시럽', categoryID: 13,  ingredientType: 'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '라면스프', categoryID: 13,  ingredientType: 'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '카레가루', categoryID: 13,  ingredientType: 'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '조미료', categoryID: 13,  ingredientType: 'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '치킨스톡', categoryID: 13,  ingredientType: 'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '청양고추', categoryID: 13, ingredientType: 'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '명란젓', categoryID: 13, ingredientType: 'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '고추', categoryID: 13, ingredientType: 'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '다진마늘', categoryID: 13, ingredientType: 'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '물엿', categoryID: 13, ingredientType: 'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '미림', categoryID: 13, ingredientType: 'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '새우젓', categoryID: 13, ingredientType: 'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '생강', categoryID: 13, ingredientType: 'condiment', createdAt: new Date(), updatedAt: new Date() },

      // 김치/장류
      { ingredientName: '간장', categoryID: 14,  ingredientType: 'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '국간장', categoryID: 14,  ingredientType: 'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '진간장', categoryID: 14,  ingredientType: 'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '고추장', categoryID: 14,  ingredientType: 'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '초고추장', categoryID: 14,  ingredientType: 'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '된장', categoryID: 14,  ingredientType: 'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '청국장', categoryID: 14,  ingredientType: 'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '김치', categoryID: 14,  ingredientType: 'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '묵은지', categoryID: 14, ingredientType: 'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '쌈장', categoryID: 14, ingredientType: 'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '피시소스', categoryID: 14, ingredientType: 'condiment', createdAt: new Date(), updatedAt: new Date() },
    

      // 기타 
      { ingredientName: '다크초콜릿', categoryID: 15, ingredientType:'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '초콜릿', categoryID: 15, ingredientType:'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '카카오가루', categoryID: 15, ingredientType:'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '럼주', categoryID: 15, ingredientType:'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '탄산수', categoryID: 15, ingredientType:'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '로즈마리', categoryID: 15, ingredientType:'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '파슬리', categoryID: 15, ingredientType:'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '민트', categoryID: 15, ingredientType:'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '바질', categoryID: 15, ingredientType:'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '식용유', categoryID: 15, ingredientType:'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '올리브유', categoryID: 15, ingredientType:'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '참기름', categoryID: 15, ingredientType:'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '이스트', categoryID: 15, ingredientType:'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '참깨', categoryID: 15, ingredientType:'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '팥소', categoryID: 15, ingredientType:'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '화이트와인', categoryID: 15, ingredientType:'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '육수', categoryID: 15, ingredientType:'condiment', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '김', categoryID: 15, ingredientType:'condiment', createdAt: new Date(), updatedAt: new Date() },
    

      // 새로 추가 

      { ingredientName: '우족', categoryID: 4, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '피클', categoryID: 15, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '생선', categoryID: 7, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '피자도우', categoryID: 1, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '떡갈비', categoryID: 8, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
     
      //230
      { ingredientName: '빵가루', categoryID: 15, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '스팸', categoryID: 11, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '돈가스', categoryID: 8, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '황태', categoryID: 7, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '동태', categoryID: 7, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '어묵', categoryID: 7, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '곱창', categoryID: 4, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '식빵', categoryID: 1, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '순대', categoryID: 8, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '중화면', categoryID: 10, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '초코칩', categoryID: 15, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '아몬드가루', categoryID: 15, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '라임', categoryID: 2, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '얼음', categoryID: 15, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '홍차', categoryID: 15, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '타르트지', categoryID: 1, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '마스카포네치즈', categoryID: 9, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '커피', categoryID: 15, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '비스킷', categoryID: 15, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '레몬', categoryID: 2, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '카라멜', categoryID: 15, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '냉면', categoryID: 10, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '회', categoryID: 7, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '삼치', categoryID: 7, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '꼬막', categoryID: 7, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '아욱', categoryID: 3, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '시래기', categoryID: 3, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '고사리', categoryID: 3, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '빵', categoryID: 1, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '다짐육', categoryID: 4, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '미나리', categoryID: 3, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '미역줄기', categoryID: 15, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '타코쉘', categoryID: 10, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '대구', categoryID: 7, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '사테이', categoryID: 4, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '스프링롤피', categoryID: 10, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '샐러리', categoryID: 3, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '완자', categoryID: 4, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '키조개', categoryID: 7, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '묵', categoryID: 15, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '차돌박이', categoryID: 4, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '육회', categoryID: 4, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '다시마', categoryID: 15, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '미역', categoryID: 15, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '양송이버섯', categoryID: 3, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '조개', categoryID: 7, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '닭발', categoryID: 4, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '타코야끼믹스', categoryID: 15, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '쌀가루', categoryID: 1, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '돼지등뼈', categoryID: 4, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '닭똥집', categoryID: 4, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '아보카도', categoryID: 3, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '멍게', categoryID: 7, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '쑥갓', categoryID: 15, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '또띠아', categoryID: 10, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '고르곤졸라치즈', categoryID: 9, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '호두', categoryID: 15, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '올리브', categoryID: 3, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '초리조소시지', categoryID: 8, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '매운소스', categoryID: 13, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '닭껍질', categoryID: 8, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '파이크러스트', categoryID: 1, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '젤라틴', categoryID: 15, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '당면', categoryID: 10, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '순두부', categoryID: 5, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '단무지', categoryID: 3, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '유부', categoryID: 10, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '게장', categoryID: 7, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '메밀면', categoryID: 10, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },
      { ingredientName: '맛술', categoryID: 13, ingredientType:'real', createdAt: new Date(), updatedAt: new Date() },

    ]);

    await queryInterface.bulkInsert('recipe', [
      { recipeTitle: '김치찌개', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '된장찌개', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '불고기', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '삼겹살', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '떡볶이', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '잡채', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '순두부찌개', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '갈비찜', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '닭볶음탕', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '갈비탕', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '찜닭', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '감자탕', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '제육볶음', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '오징어볶음', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '냉면', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '김밥', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '쭈꾸미볶음', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '소불고기', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '해물파전', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '계란말이', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '고등어구이', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '카레라이스', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '치킨', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '양념치킨', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '찐만두', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '김치볶음밥', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '오므라이스', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '라면', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '고추장불고기', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '떡국', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '미역국', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '고추장찌개', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '곰탕', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '설렁탕', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '부대찌개', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '감자조림', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '닭갈비', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '파김치', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '콩나물국', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '감자샐러드', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '샤브샤브', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '양념게장', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '간장게장', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '고구마순볶음', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '묵은지찜', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '무생채', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '콩나물무침', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '오이소박이', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '고추장삼겹살', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '장어구이', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '전복죽', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '콩나물밥', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '오징어무침', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '조개탕', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '된장라면', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '해물탕', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '매운탕', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '감자수프', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '어묵탕', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '고추튀김', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '양념감자', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '토마토파스타', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '치즈스파게티', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '까르보나라', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '마르게리타피자', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '떡갈비', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '닭강정', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '간장치킨', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '돈가스', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '함박스테이크', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '스팸마요덮밥', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '치즈돈가스', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '볶음밥', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '고구마치즈스틱', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '양파링튀김', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '치킨너겟', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '고등어조림', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '두부김치', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '새우볶음밥', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '매운돼지갈비찜', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '낙지볶음', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '홍합탕', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '해물볶음밥', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '조기구이', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '새우구이', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '가지볶음', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '양념두부조림', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '매운돼지고기볶음', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '고추장소스라면', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '김치라면', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '스팸라면', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '치즈라면', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '낙지전골', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '육회', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '명란젓비빔밥', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '황태국', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '동태탕', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '두부스테이크', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '오징어덮밥', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '순대볶음', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '북엇국', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '샐러드파스타', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '달걀프라이', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '새우튀김', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '크림파스타', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '새우샐러드', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '가지무침', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '토마토샐러드', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '핫도그', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '피자빵', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '야채튀김', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '만두국', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '계란국', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '어묵볶음', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '스팸볶음밥', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '간장게장비빔밥', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '매운불고기', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '짜장면', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '짬뽕', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '마파두부', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '계란찜', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '곱창전골', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '돼지갈비', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '소갈비', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '치즈떡볶이', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '치즈김밥', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '튀김김밥', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '참치김밥', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '새우김밥', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '유부초밥', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '초밥', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '장어덮밥', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '부추전', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '달걀빵', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '감자튀김', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '미트볼스파게티', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '새우감바스', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '오징어순대', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '명란파스타', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '바질파스타', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '닭고기스프', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '샌드위치', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '토스트', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '카스테라', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '하와이안무스비', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '장조림', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '순대국밥', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '돼지국밥', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '나가사키짬뽕', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '새우덮밥', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '돈부리', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '냉우동', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '김치볶음면', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '짬뽕라면', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '비빔라면', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '참깨라면', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '해물짬뽕', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '초콜릿케이크', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '크로와상', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '초코칩쿠키', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '마카롱', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '모히또', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '바나나스무디', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '딸기쉐이크', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '복숭아아이스티', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '딸기타르트', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '레몬마들렌', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '티라미수', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '치즈케이크', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '마들렌', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '에클레어', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '초코타르트', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '샤베트', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '치즈볼', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '카페라떼', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '캐러멜마끼아또', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '비빔국수', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '콩국수', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '잔치국수', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '멸치국수', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '고기국수', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '닭칼국수', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '해물칼국수', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '감자옹심이', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '칼제비', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '메밀국수', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '우동', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '쌀국수', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '비빔냉면', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '평양냉면', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '회냉면', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '막국수', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '소면', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '밀면', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '쫄면', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '잔치비빔국수', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '고기말이', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '오리고기구이', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '돼지갈비구이', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '삼치구이', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '갈치구이', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '황태구이', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '홍어무침', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '꼬막무침', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '무말랭이무침', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '두부조림', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '꽁치조림', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '생선조림', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '청국장찌개', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '호박찌개', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '참치찌개', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '두부김치찌개', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '동태찌개', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '생선찌개', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '고등어김치찌개', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '해물김치찌개', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '아욱국', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '시래기국', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '육개장', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '수제비', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '된장밥', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '멸치볶음밥', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '피자', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '피자롤', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '시래기볶음', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '소고기타다끼', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '해물덮밥', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '마늘빵', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '카레', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '카츠동', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '두부된장국', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '생선튀김', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '비빔막국수', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '매운콩나물국', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '오리훈제', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '명란젓', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '우동면', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '하이라이스', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '포케', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '회덮밥', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '아귀찜', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '동태전', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '두부두루치기', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '미역줄기', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '해물샤브샤브', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '쇠고기스튜', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '오징어구이', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '카레우동', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '스테이크', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '파스타', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '타코', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '핫윙', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '만두', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '오리백숙', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '뼈해장국', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '사골국밥', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '닭가슴살샐러드', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '대구탕', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '삼계탕', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '돼지찜', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '바지락술찜', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '조기조림', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '홍합찜', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '연어스테이크', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '미트로프', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '햄버거', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '나시레마', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '스프링롤', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '채소스틱', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '완자탕', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '키조개조림', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '소고기무국', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '묵사발', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '감자전', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '동태조림', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '아귀회', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '차돌박이', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '육회비빔밥', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '찐빵', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '순대국', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '자장밥', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '연어초밥', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '양배추스테이크', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '대파전', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '가지전', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '햄볶음밥', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '연어구이', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '미역국밥', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '메추리알장조림', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '유린기', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '소고기미역국', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '낙지국수', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '간장떡볶이', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '짬뽕국물', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '마늘간장치킨', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '버섯볶음', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '양송이스프', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '샤브샤브국물', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '매운닭발', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '닭봉구이', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '바지락칼국수', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '두부샐러드', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '타코야끼', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '파프리카볶음', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '파리크라상', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '바나나빵', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '스위트포테이토', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '애호박전', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '복숭아죽', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '고구마스프', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '퓨전김치', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '장어구이덮밥', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '조개찜', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '부추김치', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '고추잡채', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '쫄면무침', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '김치전', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '당면샐러드', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '햄버거스테이크', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '쌈밥', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '전복구이', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '바지락국수', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '해물뼈다귀탕', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '닭똥집볶음', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '두부전', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '돼지수육', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '조개구이', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '홍합국', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '연어덮밥', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '쭈꾸미샤브샤브', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '물회', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '멍게비빔밥', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '쑥갓무침', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '바나나스프', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '아보카도샐러드', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '멕시칸타코', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '파스타샐러드', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '퀘사디아', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '고르곤졸라피자', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '스파게티볼로네제', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '초리조', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '고기튀김', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '매운치킨너겟', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '칠리새우', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '닭껍질튀김', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '브라우니', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '토마토소스', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '애플파이', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '누들볼', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '닭가슴살구이', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '카프레제', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '포카치아', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '프리타타', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '부리또', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '단호박죽', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '아몬드빵', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '차돌박이국밥', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '파스타마늘볶음', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '쌈무', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '상추쌈', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '마리네이드', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '수박화채', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '애플망고스무디', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '구운브로콜리', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '단호박스프', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '크림스프', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '리조또', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '조리된카프레제', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '소고기리조또', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '전자레인지치킨', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '전자레인지계란찜', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '두부전골', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '참치전', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '가자미조림', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '낙지전', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '매운새우젓', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '해물수프', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '스키야키', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '매운감자조림', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '표고버섯볶음', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '우유젤리', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '누들샐러드', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '이탈리안샐러드', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '양상추샐러드', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '해물볶음면', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '매운볶음면', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '간장계란밥', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '미역줄기볶음', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '연어샐러드', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '시금치샐러드', createdAt: new Date(), updatedAt: new Date() },
      { recipeTitle: '한우불고기', createdAt: new Date(), updatedAt: new Date() }
    

    ]);

   // RecipeIngredient 데이터 (레시피 당 여러 재료 매핑)
    await queryInterface.bulkInsert('RecipeIngredient', [
    // 김치찌개
    { recipeID: 1, ingredientID: 203 }, // 김치
    { recipeID: 1, ingredientID: 63 },  // 돼지고기
    { recipeID: 1, ingredientID: 71 },  // 두부
    { recipeID: 1, ingredientID: 32 },  // 대파
    { recipeID: 1, ingredientID: 31 },  // 마늘
    { recipeID: 1, ingredientID: 181 }, // 고춧가루
    { recipeID: 1, ingredientID: 196 }, // 간장
    { recipeID: 1, ingredientID: 191 }, // 다진마늘

    // 된장찌개
    { recipeID: 2, ingredientID: 71 },  // 두부
    { recipeID: 2, ingredientID: 61 },  // 호박
    { recipeID: 2, ingredientID: 37 },  // 감자
    { recipeID: 2, ingredientID: 30 },  // 양파
    { recipeID: 2, ingredientID: 201 }, // 된장
    { recipeID: 2, ingredientID: 181 }, // 고춧가루
    { recipeID: 2, ingredientID: 191 }, // 다진마늘

    // 불고기
    { recipeID: 3, ingredientID: 62 },  // 소고기
    { recipeID: 3, ingredientID: 30 },  // 양파
    { recipeID: 3, ingredientID: 60 },  // 당근
    { recipeID: 3, ingredientID: 32 },  // 대파
    { recipeID: 3, ingredientID: 31 },  // 마늘
    { recipeID: 3, ingredientID: 196 }, // 간장
    { recipeID: 3, ingredientID: 178 }, // 설탕
    { recipeID: 3, ingredientID: 191 }, // 다진마늘
    { recipeID: 3, ingredientID: 218 }, // 참기름
    { recipeID: 3, ingredientID: 179 }, // 후추

    // 삼겹살
    { recipeID: 4, ingredientID: 63 },  // 삼겹살
    { recipeID: 4, ingredientID: 43 },  // 상추
    { recipeID: 4, ingredientID: 31 },  // 마늘
    { recipeID: 4, ingredientID: 40 },  // 고추
    { recipeID: 4, ingredientID: 177 }, // 소금
    { recipeID: 4, ingredientID: 205 }, // 쌈장
    { recipeID: 4, ingredientID: 218 }, // 참기름

    // 떡볶이
    { recipeID: 5, ingredientID: 137 }, // 떡볶이떡
    { recipeID: 5, ingredientID: 235 },  // 어묵
    { recipeID: 5, ingredientID: 32 },  // 대파
    { recipeID: 5, ingredientID: 181 }, // 고춧가루
    { recipeID: 5, ingredientID: 196 }, // 간장
    { recipeID: 5, ingredientID: 191 }, // 다진마늘
    { recipeID: 5, ingredientID: 178 }, // 설탕
    { recipeID: 5, ingredientID: 199 }, // 고추장

    // 잡채
    { recipeID: 6, ingredientID: 293 }, // 당면
    { recipeID: 6, ingredientID: 62 },  // 소고기
    { recipeID: 6, ingredientID: 45 },  // 시금치
    { recipeID: 6, ingredientID: 60 },  // 당근
    { recipeID: 6, ingredientID: 30 },  // 양파
    { recipeID: 6, ingredientID: 196 }, // 간장
    { recipeID: 6, ingredientID: 178 }, // 설탕
    { recipeID: 6, ingredientID: 191 }, // 다진마늘
    { recipeID: 6, ingredientID: 218 }, // 참기름

    // 순두부찌개
    { recipeID: 7, ingredientID: 294 },  // 순두부
    { recipeID: 7, ingredientID: 63 },  // 돼지고기
    { recipeID: 7, ingredientID: 30 },  // 양파
    { recipeID: 7, ingredientID: 61 },  // 애호박
    { recipeID: 7, ingredientID: 32 },  // 대파
    { recipeID: 7, ingredientID: 181 }, // 고춧가루
    { recipeID: 7, ingredientID: 196 }, // 간장
    { recipeID: 7, ingredientID: 191 }, // 다진마늘
    { recipeID: 7, ingredientID: 218 }, // 참기름

    // 갈비찜
    { recipeID: 8, ingredientID: 67 },  // 갈비
    { recipeID: 8, ingredientID: 60 },  // 당근
    { recipeID: 8, ingredientID: 54 },  // 무
    { recipeID: 8, ingredientID: 30 },  // 양파
    { recipeID: 8, ingredientID: 32 },  // 대파
    { recipeID: 8, ingredientID: 196 }, // 간장
    { recipeID: 8, ingredientID: 178 }, // 설탕
    { recipeID: 8, ingredientID: 191 }, // 다진마늘
    { recipeID: 8, ingredientID: 179 }, // 후추
    { recipeID: 8, ingredientID: 218 }, // 참기름

    // 닭볶음탕
    { recipeID: 9, ingredientID: 64 },  // 닭고기
    { recipeID: 9, ingredientID: 37 },  // 감자
    { recipeID: 9, ingredientID: 60 },  // 당근
    { recipeID: 9, ingredientID: 30 },  // 양파
    { recipeID: 9, ingredientID: 32 },  // 대파
    { recipeID: 9, ingredientID: 199 }, // 고추장
    { recipeID: 9, ingredientID: 181 }, // 고춧가루
    { recipeID: 9, ingredientID: 191 }, // 다진마늘
    { recipeID: 9, ingredientID: 196 }, // 간장

      // 갈비탕
      { recipeID: 10, ingredientID: 67 },  // 갈비
      { recipeID: 10, ingredientID: 54 },  // 무
      { recipeID: 10, ingredientID: 32 },  // 대파
      { recipeID: 10, ingredientID: 31 },  // 마늘
      { recipeID: 10, ingredientID: 196 }, // 간장
      { recipeID: 10, ingredientID: 179 }, // 후추
      { recipeID: 10, ingredientID: 177 }, // 소금

      // 찜닭
      { recipeID: 11, ingredientID: 64 },  // 닭고기
      { recipeID: 11, ingredientID: 37 },  // 감자
      { recipeID: 11, ingredientID: 60 },  // 당근
      { recipeID: 11, ingredientID: 30 },  // 양파
      { recipeID: 11, ingredientID: 191 }, // 다진마늘
      { recipeID: 11, ingredientID: 178 }, // 설탕
      { recipeID: 11, ingredientID: 179 }, // 후추
      { recipeID: 11, ingredientID: 218 }, // 참기름
      { recipeID: 11, ingredientID: 196 }, // 간장

      // 감자탕
      { recipeID: 12, ingredientID: 37 },  // 감자
      { recipeID: 12, ingredientID: 63 },  // 돼지고기
      { recipeID: 12, ingredientID: 32 },  // 대파
      { recipeID: 12, ingredientID: 30 },  // 양파
      { recipeID: 12, ingredientID: 31 },  // 마늘
      { recipeID: 12, ingredientID: 201 }, // 된장
      { recipeID: 12, ingredientID: 181 }, // 고춧가루
      { recipeID: 12, ingredientID: 179 }, // 후추

      // 제육볶음
      { recipeID: 13, ingredientID: 37 },  // 감자
      { recipeID: 13, ingredientID: 63 },  // 돼지고기
      { recipeID: 13, ingredientID: 32 },  // 대파
      { recipeID: 13, ingredientID: 30 },  // 양파
      { recipeID: 13, ingredientID: 31 },  // 마늘
      { recipeID: 13, ingredientID: 199 }, // 고추장
      { recipeID: 13, ingredientID: 196 }, // 간장
      { recipeID: 13, ingredientID: 178 }, // 설탕
      { recipeID: 13, ingredientID: 179 }, // 후추

      // 오징어볶음
      { recipeID: 14, ingredientID: 83 },  // 오징어
      { recipeID: 14, ingredientID: 30 },  // 양파
      { recipeID: 14, ingredientID: 32 },  // 대파
      { recipeID: 14, ingredientID: 60 },  // 당근
      { recipeID: 14, ingredientID: 40 },  // 고추
      { recipeID: 14, ingredientID: 199 }, // 고추장
      { recipeID: 14, ingredientID: 181 }, // 고춧가루
      { recipeID: 14, ingredientID: 191 }, // 다진마늘
      { recipeID: 14, ingredientID: 196 }, // 간장

      // 냉면
      { recipeID: 15, ingredientID: 251 }, // 면
      { recipeID: 15, ingredientID: 34 },  // 오이
      { recipeID: 15, ingredientID: 75 },  // 달걀
      { recipeID: 15, ingredientID: 223 }, // 육수 
      { recipeID: 15, ingredientID: 180 }, // 식초
      { recipeID: 15, ingredientID: 178 }, // 설탕
      { recipeID: 15, ingredientID: 161 }, // 겨자

      // 김밥
      { recipeID: 16, ingredientID: 224 }, // 김
      { recipeID: 16, ingredientID: 1 },   // 밥
      { recipeID: 16, ingredientID: 295 }, // 단무지
      { recipeID: 16, ingredientID: 45 },  // 시금치
      { recipeID: 16, ingredientID: 60 },  // 당근
      { recipeID: 16, ingredientID: 177 }, // 소금
      { recipeID: 16, ingredientID: 218 }, // 참기름

      // 쭈꾸미볶음
      { recipeID: 17, ingredientID: 85 },  // 쭈꾸미
      { recipeID: 17, ingredientID: 30 },  // 양파
      { recipeID: 17, ingredientID: 32 },  // 대파
      { recipeID: 17, ingredientID: 40 },  // 고추
      { recipeID: 17, ingredientID: 31 },  // 마늘
      { recipeID: 17, ingredientID: 199 }, // 고추장
      { recipeID: 17, ingredientID: 181 }, // 고춧가루
      { recipeID: 17, ingredientID: 196 }, // 간장

      // 소불고기
      { recipeID: 18, ingredientID: 62 },  // 소고기
      { recipeID: 18, ingredientID: 30 },  // 양파
      { recipeID: 18, ingredientID: 60 },  // 당근
      { recipeID: 18, ingredientID: 32 },  // 대파
      { recipeID: 18, ingredientID: 31 },  // 마늘
      { recipeID: 18, ingredientID: 196 }, // 간장
      { recipeID: 18, ingredientID: 178 }, // 설탕
      { recipeID: 18, ingredientID: 218 }, // 참기름
      { recipeID: 18, ingredientID: 179 }, // 후추

      // 해물파전
      { recipeID: 19, ingredientID: 6 },   // 밀가루
      { recipeID: 19, ingredientID: 83 },  // 오징어
      { recipeID: 19, ingredientID: 87 },  // 새우
      { recipeID: 19, ingredientID: 46 },  // 부추
      { recipeID: 19, ingredientID: 75 },  // 계란
      { recipeID: 19, ingredientID: 196 }, // 간장
      { recipeID: 19, ingredientID: 180 }, // 식초
      { recipeID: 19, ingredientID: 191 }, // 다진마늘

      // 계란말이
      { recipeID: 20, ingredientID: 75 },  // 계란
      { recipeID: 20, ingredientID: 60 },  // 당근
      { recipeID: 20, ingredientID: 32 },  // 대파
      { recipeID: 20, ingredientID: 216 }, // 식용유
      { recipeID: 20, ingredientID: 179 }, // 후추
      { recipeID: 20, ingredientID: 177 }, // 소금
    
      // 고등어구이
      { recipeID: 21, ingredientID: 77 },  // 고등어
      { recipeID: 21, ingredientID: 32 },  // 대파
      { recipeID: 21, ingredientID: 196 }, // 간장
      { recipeID: 21, ingredientID: 40 },  // 고추
      { recipeID: 21, ingredientID: 177 }, // 소금
    
      // 카레라이스
      { recipeID: 22, ingredientID: 1 },   // 밥
      { recipeID: 22, ingredientID: 37 },  // 감자
      { recipeID: 22, ingredientID: 60 },  // 당근
      { recipeID: 22, ingredientID: 30 },  // 양파
      { recipeID: 22, ingredientID: 177 }, // 소금
      { recipeID: 22, ingredientID: 179 }, // 후추
      { recipeID: 22, ingredientID: 185 }, // 카레가루
    
      // 치킨
      { recipeID: 23, ingredientID: 64 },  // 닭고기
      { recipeID: 23, ingredientID: 8 },   // 튀김가루
      { recipeID: 23, ingredientID: 31 },  // 마늘
      { recipeID: 23, ingredientID: 33 },  // 생강
      { recipeID: 23, ingredientID: 177 }, // 소금
      { recipeID: 23, ingredientID: 179 }, // 후추
      { recipeID: 23, ingredientID: 196 }, // 간장
    
      // 양념치킨
      { recipeID: 24, ingredientID: 64 },  // 닭고기
      { recipeID: 24, ingredientID: 8 },   // 튀김가루
      { recipeID: 24, ingredientID: 30 },  // 양파
      { recipeID: 24, ingredientID: 40 },  // 고추
      { recipeID: 24, ingredientID: 199 }, // 고추장
      { recipeID: 24, ingredientID: 196 }, // 간장
      { recipeID: 24, ingredientID: 178 }, // 설탕
      { recipeID: 24, ingredientID: 191 }, // 다진마늘
    
      // 찐만두
      { recipeID: 25, ingredientID: 136 }, // 만두피
      { recipeID: 25, ingredientID: 63 },  // 돼지고기
      { recipeID: 25, ingredientID: 46 },  // 부추
      { recipeID: 25, ingredientID: 30 },  // 양파
      { recipeID: 25, ingredientID: 196 }, // 간장
      { recipeID: 25, ingredientID: 179 }, // 후추
      { recipeID: 25, ingredientID: 191 }, // 다진마늘
    
      // 김치볶음밥
      { recipeID: 26, ingredientID: 1 },   // 밥
      { recipeID: 26, ingredientID: 203 }, // 김치
      { recipeID: 26, ingredientID: 63 },  // 돼지고기
      { recipeID: 26, ingredientID: 30 },  // 양파
      { recipeID: 26, ingredientID: 32 },  // 대파
      { recipeID: 26, ingredientID: 196 }, // 간장
      { recipeID: 26, ingredientID: 181 }, // 고춧가루
      { recipeID: 26, ingredientID: 179 }, // 후추
    
      // 오므라이스
      { recipeID: 27, ingredientID: 1 },   // 밥
      { recipeID: 27, ingredientID: 75 },  // 계란
      { recipeID: 27, ingredientID: 105 }, // 햄
      { recipeID: 27, ingredientID: 30 },  // 양파
      { recipeID: 27, ingredientID: 41 },  // 피망
      { recipeID: 27, ingredientID: 150 }, // 케첩
      { recipeID: 27, ingredientID: 177 }, // 소금
      { recipeID: 27, ingredientID: 179 }, // 후추
    
      // 라면
      { recipeID: 28, ingredientID: 124 }, // 라면
      { recipeID: 28, ingredientID: 32 },  // 파
      { recipeID: 28, ingredientID: 75 },  // 계란
      { recipeID: 28, ingredientID: 105 }, // 스팸
      { recipeID: 28, ingredientID: 184 }, // 라면스프
    
      // 고추장불고기
      { recipeID: 29, ingredientID: 62 },  // 소고기
      { recipeID: 29, ingredientID: 30 },  // 양파
      { recipeID: 29, ingredientID: 60 },  // 당근
      { recipeID: 29, ingredientID: 40 },  // 고추
      { recipeID: 29, ingredientID: 199 }, // 고추장
      { recipeID: 29, ingredientID: 178 }, // 설탕
      { recipeID: 29, ingredientID: 191 }, // 다진마늘

        // 떡국
      { recipeID: 30, ingredientID: 137 },  // 떡
      { recipeID: 30, ingredientID: 223 },  // 육수 
      { recipeID: 30, ingredientID: 32 },   // 대파
      { recipeID: 30, ingredientID: 75 },   // 계란
      { recipeID: 30, ingredientID: 224 }, // 김 
      { recipeID: 30, ingredientID: 196 },  // 간장
      { recipeID: 30, ingredientID: 179 },  // 후추

      // 미역국
      { recipeID: 31, ingredientID: 273 },  // 미역
      { recipeID: 31, ingredientID: 62 },   // 소고기
      { recipeID: 31, ingredientID: 31 },   // 마늘
      { recipeID: 31, ingredientID: 32 },   // 대파
      { recipeID: 31, ingredientID: 196 },  // 간장
      { recipeID: 31, ingredientID: 177 },  // 소금

      // 고추장찌개
      { recipeID: 32, ingredientID: 71 },   // 두부
      { recipeID: 32, ingredientID: 63 },   // 돼지고기
      { recipeID: 32, ingredientID: 30 },   // 양파
      { recipeID: 32, ingredientID: 61 },   // 호박
      { recipeID: 32, ingredientID: 191 },  // 다진마늘
      { recipeID: 32, ingredientID: 181 },  // 고춧가루
      { recipeID: 32, ingredientID: 199 },  // 고추장

      // 곰탕
      { recipeID: 33, ingredientID: 62 },   // 소고기
      { recipeID: 33, ingredientID: 54 },   // 무
      { recipeID: 33, ingredientID: 32 },   // 대파
      { recipeID: 33, ingredientID: 31 },   // 마늘
      { recipeID: 33, ingredientID: 177 },  // 소금
      { recipeID: 33, ingredientID: 179 },  // 후추

      // 설렁탕
      { recipeID: 34, ingredientID: 62 },   // 소고기
      { recipeID: 34, ingredientID: 225 }, // 우족
      { recipeID: 34, ingredientID: 54 },   // 무
      { recipeID: 34, ingredientID: 32 },   // 대파
      { recipeID: 34, ingredientID: 177 },  // 소금
      { recipeID: 34, ingredientID: 179 },  // 후추

      // 부대찌개
      { recipeID: 35, ingredientID: 105 },  // 햄
      { recipeID: 35, ingredientID: 104 },  // 소시지
      { recipeID: 35, ingredientID: 71 },   // 두부
      { recipeID: 35, ingredientID: 203 },  // 김치
      { recipeID: 35, ingredientID: 124 },  // 라면사리
      { recipeID: 35, ingredientID: 199 },  // 고추장
      { recipeID: 35, ingredientID: 191 },  // 다진마늘
      { recipeID: 35, ingredientID: 179 },  // 후추

      // 감자조림
      { recipeID: 36, ingredientID: 37 },   // 감자
      { recipeID: 36, ingredientID: 32 },   // 대파
      { recipeID: 36, ingredientID: 191 },  // 다진마늘
      { recipeID: 36, ingredientID: 179 },  // 후추
      { recipeID: 36, ingredientID: 178 },  // 설탕
      { recipeID: 36, ingredientID: 196 },  // 간장

      // 닭갈비
      { recipeID: 37, ingredientID: 64 },   // 닭고기
      { recipeID: 37, ingredientID: 36 },   // 고구마
      { recipeID: 37, ingredientID: 30 },   // 양파
      { recipeID: 37, ingredientID: 61 },   // 호박
      { recipeID: 37, ingredientID: 199 },  // 고추장
      { recipeID: 37, ingredientID: 196 },  // 간장
      { recipeID: 37, ingredientID: 178 },  // 설탕
      { recipeID: 37, ingredientID: 191 },  // 다진마늘

      // 파김치
      { recipeID: 38, ingredientID: 32 },   // 파
      { recipeID: 38, ingredientID: 191 },  // 다진마늘
      { recipeID: 38, ingredientID: 195 },  // 생강
      { recipeID: 38, ingredientID: 194 },  // 새우젓
      { recipeID: 38, ingredientID: 181 },  // 고춧가루
      { recipeID: 38, ingredientID: 177 },  // 소금

      // 콩나물국
      { recipeID: 39, ingredientID: 72 },   // 콩나물
      { recipeID: 39, ingredientID: 32 },   // 대파
      { recipeID: 39, ingredientID: 31 },   // 마늘
      { recipeID: 39, ingredientID: 177 },  // 소금
      { recipeID: 39, ingredientID: 179 },  // 후추

      // 감자샐러드
      { recipeID: 40, ingredientID: 37 },   // 감자
      { recipeID: 40, ingredientID: 151 },  // 마요네즈
      { recipeID: 40, ingredientID: 30 },   // 양파
      { recipeID: 40, ingredientID: 226 }, // 피클 (별도 추가 필요)
      { recipeID: 40, ingredientID: 177 },  // 소금
      { recipeID: 40, ingredientID: 179 },  // 후추

      // 샤브샤브
      { recipeID: 41, ingredientID: 62 },   // 소고기
      { recipeID: 41, ingredientID: 53 },   // 배추
      { recipeID: 41, ingredientID: 52 },   // 버섯
      { recipeID: 41, ingredientID: 71 },   // 두부
      { recipeID: 41, ingredientID: 196 },  // 간장
      { recipeID: 41, ingredientID: 191 },  // 다진마늘
      { recipeID: 41, ingredientID: 218 },  // 참기름

      // 양념게장
      { recipeID: 42, ingredientID: 88 },  // 게
      { recipeID: 42, ingredientID: 188 },  // 청양고추
      { recipeID: 42, ingredientID: 31 },   // 마늘
      { recipeID: 42, ingredientID: 195 },  // 생강
      { recipeID: 42, ingredientID: 178 },  // 설탕
      { recipeID: 42, ingredientID: 196 },  // 간장

      // 간장게장
      { recipeID: 43, ingredientID: 88 },  // 게
      { recipeID: 43, ingredientID: 188 },  // 청양고추
      { recipeID: 43, ingredientID: 31 },   // 마늘
      { recipeID: 43, ingredientID: 195 },  // 생강
      { recipeID: 43, ingredientID: 196 },  // 간장

      // 고구마순볶음
      { recipeID: 44, ingredientID: 59 },   // 고구마순
      { recipeID: 44, ingredientID: 31 },   // 마늘
      { recipeID: 44, ingredientID: 179 },  // 후추
      { recipeID: 44, ingredientID: 218 },  // 참기름
      { recipeID: 44, ingredientID: 196 },  // 간장

        // 묵은지찜
        { recipeID: 45, ingredientID: 204 },  // 묵은지
        { recipeID: 45, ingredientID: 63 },   // 돼지고기
        { recipeID: 45, ingredientID: 71 },   // 두부
        { recipeID: 45, ingredientID: 191 },  // 다진마늘
        { recipeID: 45, ingredientID: 181 },  // 고춧가루
      
        // 무생채
        { recipeID: 46, ingredientID: 54 },   // 무
        { recipeID: 46, ingredientID: 181 },  // 고춧가루
        { recipeID: 46, ingredientID: 191 },  // 다진마늘
        { recipeID: 46, ingredientID: 180 },  // 식초
        { recipeID: 46, ingredientID: 177 },  // 소금
      
        // 콩나물무침
        { recipeID: 47, ingredientID: 72 },   // 콩나물
        { recipeID: 47, ingredientID: 191 },  // 다진마늘
        { recipeID: 47, ingredientID: 218 },  // 참기름
        { recipeID: 47, ingredientID: 196 },  // 간장
        { recipeID: 47, ingredientID: 181 },  // 고춧가루
      
        // 오이소박이
        { recipeID: 48, ingredientID: 34 },   // 오이
        { recipeID: 48, ingredientID: 191 },  // 다진마늘
        { recipeID: 48, ingredientID: 195 },  // 생강
        { recipeID: 48, ingredientID: 181 },  // 고춧가루
        { recipeID: 48, ingredientID: 177 },  // 소금
      
        // 고추장삼겹살
        { recipeID: 49, ingredientID: 63 },   // 삼겹살
        { recipeID: 49, ingredientID: 30 },   // 양파
        { recipeID: 49, ingredientID: 31 },   // 마늘
        { recipeID: 49, ingredientID: 178 },  // 설탕
        { recipeID: 49, ingredientID: 179 },  // 후추
        { recipeID: 49, ingredientID: 199 },  // 고추장
      
        // 장어구이
        { recipeID: 50, ingredientID: 81 },   // 장어
        { recipeID: 50, ingredientID: 30 },   // 양파
        { recipeID: 50, ingredientID: 196 },  // 간장
        { recipeID: 50, ingredientID: 179 },  // 후추
        { recipeID: 50, ingredientID: 177 },  // 소금
      
        // 전복죽
        { recipeID: 51, ingredientID: 90 },   // 전복
        { recipeID: 51, ingredientID: 1 },    // 쌀
        { recipeID: 51, ingredientID: 191 },  // 다진마늘
        { recipeID: 51, ingredientID: 177 },  // 소금
      
        // 콩나물밥
        { recipeID: 52, ingredientID: 72 },   // 콩나물
        { recipeID: 52, ingredientID: 1 },    // 밥
        { recipeID: 52, ingredientID: 218 },  // 참기름
        { recipeID: 52, ingredientID: 179 },  // 후추
        { recipeID: 52, ingredientID: 196 },  // 간장
      
        // 오징어무침
        { recipeID: 53, ingredientID: 83 },   // 오징어
        { recipeID: 53, ingredientID: 30 },   // 양파
        { recipeID: 53, ingredientID: 34 },   // 오이
        { recipeID: 53, ingredientID: 181 },  // 고춧가루
        { recipeID: 53, ingredientID: 196 },  // 간장
        { recipeID: 53, ingredientID: 191 },  // 다진마늘
      
        // 조개탕
        { recipeID: 54, ingredientID: 94 },   // 조개
        { recipeID: 54, ingredientID: 32 },   // 대파
        { recipeID: 54, ingredientID: 31 },   // 마늘
        { recipeID: 54, ingredientID: 177 },  // 소금
        { recipeID: 54, ingredientID: 179 },  // 후추
      
        // 된장라면
        { recipeID: 55, ingredientID: 124 },  // 라면
        { recipeID: 55, ingredientID: 30 },   // 양파
        { recipeID: 55, ingredientID: 191 },  // 다진마늘
        { recipeID: 55, ingredientID: 179 },  // 후추
        { recipeID: 55, ingredientID: 201 },  // 된장
      
        // 해물탕
        { recipeID: 56, ingredientID: 87 },   // 새우
        { recipeID: 56, ingredientID: 83 },   // 오징어
        { recipeID: 56, ingredientID: 94 },   // 조개
        { recipeID: 56, ingredientID: 54 },   // 무
        { recipeID: 56, ingredientID: 32 },   // 대파
        { recipeID: 56, ingredientID: 181 },  // 고춧가루
        { recipeID: 56, ingredientID: 196 },  // 간장
      
        // 매운탕
        { recipeID: 57, ingredientID: 227 }, // 생선 
        { recipeID: 57, ingredientID: 54 },   // 무
        { recipeID: 57, ingredientID: 32 },   // 대파
        { recipeID: 57, ingredientID: 181 },  // 고춧가루
        { recipeID: 57, ingredientID: 191 },  // 다진마늘
        { recipeID: 57, ingredientID: 196 },  // 간장
      
        // 감자수프
        { recipeID: 58, ingredientID: 37 },   // 감자
        { recipeID: 58, ingredientID: 30 },   // 양파
        { recipeID: 58, ingredientID: 31 },   // 마늘
        { recipeID: 58, ingredientID: 108 },  // 우유
        { recipeID: 58, ingredientID: 177 },  // 소금
        { recipeID: 58, ingredientID: 179 },  // 후추
      
        // 어묵탕
        { recipeID: 59, ingredientID: 235 },  // 어묵
        { recipeID: 59, ingredientID: 32 },   // 대파
        { recipeID: 59, ingredientID: 54 },   // 무
        { recipeID: 59, ingredientID: 196 },  // 간장
        { recipeID: 59, ingredientID: 191 },  // 다진마늘

          // 고추튀김
        { recipeID: 60, ingredientID: 40 },   // 고추
        { recipeID: 60, ingredientID: 8 },    // 튀김가루
        { recipeID: 60, ingredientID: 75 },   // 계란
        { recipeID: 60, ingredientID: 177 },  // 소금

        // 양념감자
        { recipeID: 61, ingredientID: 37 },   // 감자
        { recipeID: 61, ingredientID: 178 },  // 설탕
        { recipeID: 61, ingredientID: 179 },  // 후추
        { recipeID: 61, ingredientID: 196 },  // 간장
        { recipeID: 61, ingredientID: 199 },  // 고추장

        // 토마토파스타
        { recipeID: 62, ingredientID: 131 },  // 파스타면
        { recipeID: 62, ingredientID: 29 },   // 토마토
        { recipeID: 62, ingredientID: 30 },   // 양파
        { recipeID: 62, ingredientID: 217 },  // 올리브유
        { recipeID: 62, ingredientID: 191 },  // 다진마늘

        // 치즈스파게티
        { recipeID: 63, ingredientID: 130 },  // 스파게티면
        { recipeID: 63, ingredientID: 114 },  // 크림
        { recipeID: 63, ingredientID: 120 },  // 치즈
        { recipeID: 63, ingredientID: 177 },  // 소금
        { recipeID: 63, ingredientID: 179 },  // 후추

        // 까르보나라
        { recipeID: 64, ingredientID: 131 },  // 파스타면
        { recipeID: 64, ingredientID: 106 },  // 베이컨
        { recipeID: 64, ingredientID: 75 },   // 계란
        { recipeID: 64, ingredientID: 120 },  // 치즈
        { recipeID: 64, ingredientID: 179 },  // 후추

        // 마르게리타피자
        { recipeID: 65, ingredientID: 228 }, // 피자도우 (별도 추가 필요)
        { recipeID: 65, ingredientID: 117 },  // 모짜렐라치즈
        { recipeID: 65, ingredientID: 215 },  // 바질
        { recipeID: 65, ingredientID: 217 },  // 올리브유
        { recipeID: 65, ingredientID: 153 },  // 토마토소스

        // 떡갈비
        { recipeID: 66, ingredientID: 229 }, // 떡갈비 (별도 추가 필요)
        { recipeID: 66, ingredientID: 30 },   // 양파
        { recipeID: 66, ingredientID: 32 },   // 대파
        { recipeID: 66, ingredientID: 196 },  // 간장
        { recipeID: 66, ingredientID: 178 },  // 설탕

        // 닭강정
        { recipeID: 67, ingredientID: 64 },   // 닭고기
        { recipeID: 67, ingredientID: 8 },    // 튀김가루
        { recipeID: 67, ingredientID: 30 },   // 양파
        { recipeID: 67, ingredientID: 196 },  // 간장
        { recipeID: 67, ingredientID: 178 },  // 설탕
        { recipeID: 67, ingredientID: 199 },  // 고추장

        // 간장치킨
        { recipeID: 68, ingredientID: 64 },   // 닭고기
        { recipeID: 68, ingredientID: 31 },   // 마늘
        { recipeID: 68, ingredientID: 178 },  // 설탕
        { recipeID: 68, ingredientID: 179 },  // 후추
        { recipeID: 68, ingredientID: 196 },  // 간장

        // 돈가스
        { recipeID: 69, ingredientID: 63 },   // 돼지고기
        { recipeID: 69, ingredientID: 230 }, // 빵가루 (별도 추가 필요)
        { recipeID: 69, ingredientID: 6 },    // 밀가루
        { recipeID: 69, ingredientID: 75 },   // 달걀
        { recipeID: 69, ingredientID: 152 },  // 돈가스소스
        { recipeID: 69, ingredientID: 151 },  // 마요네즈

        // 함박스테이크
        { recipeID: 70, ingredientID: 62 },   // 소고기
        { recipeID: 70, ingredientID: 30 },   // 양파
        { recipeID: 70, ingredientID: 230 }, // 빵가루 (별도 추가 필요)
        { recipeID: 70, ingredientID: 75 },   // 달걀
        { recipeID: 70, ingredientID: 177 },  // 소금
        { recipeID: 70, ingredientID: 179 },  // 후추
        { recipeID: 70, ingredientID: 150 },  // 케첩

        // 스팸마요덮밥
        { recipeID: 71, ingredientID: 105 }, // 스팸 (별도 추가 필요)
        { recipeID: 71, ingredientID: 1 },    // 밥
        { recipeID: 71, ingredientID: 223 }, // 김 (별도 추가 필요)
        { recipeID: 71, ingredientID: 151 },  // 마요네즈
        { recipeID: 71, ingredientID: 196 },  // 간장

        // 치즈돈가스
        { recipeID: 72, ingredientID: 232 }, // 돈가스 (별도 추가 필요)
        { recipeID: 72, ingredientID: 120 },  // 치즈
        { recipeID: 72, ingredientID: 230 }, // 빵가루 (별도 추가 필요)
        { recipeID: 72, ingredientID: 152 },  // 돈가스소스

        // 볶음밥
        { recipeID: 73, ingredientID: 1 },    // 밥
        { recipeID: 73, ingredientID: 75 },   // 계란
        { recipeID: 73, ingredientID: 63 },   // 돼지고기
        { recipeID: 73, ingredientID: 30 },   // 양파
        { recipeID: 73, ingredientID: 60 },   // 당근
        { recipeID: 73, ingredientID: 42 },   // 피망
        { recipeID: 73, ingredientID: 49 },   // 브로콜리
        { recipeID: 73, ingredientID: 43 },   // 상추
        { recipeID: 73, ingredientID: 196 },  // 간장
        { recipeID: 73, ingredientID: 179 },  // 후추

        // 고구마치즈스틱
        { recipeID: 74, ingredientID: 36 },   // 고구마
        { recipeID: 74, ingredientID: 117 },  // 모짜렐라치즈
        { recipeID: 74, ingredientID: 6 },    // 밀가루
        { recipeID: 74, ingredientID: 191 },  // 다진마늘
        { recipeID: 74, ingredientID: 177 },  // 소금

        // 양파링튀김
        { recipeID: 75, ingredientID: 30 },   // 양파
        { recipeID: 75, ingredientID: 8 },    // 튀김가루
        { recipeID: 75, ingredientID: 75 },   // 달걀
        { recipeID: 75, ingredientID: 150 },  // 케찹
        { recipeID: 75, ingredientID: 151 },  // 마요네즈

        // 치킨너겟
        { recipeID: 76, ingredientID: 64 },   // 닭고기
        { recipeID: 76, ingredientID: 6 },    // 밀가루
        { recipeID: 76, ingredientID: 230 }, // 빵가루 (별도 추가 필요)
        { recipeID: 76, ingredientID: 177 },  // 소금
        { recipeID: 76, ingredientID: 179 },  // 후추

        // 고등어조림
      { recipeID: 77, ingredientID: 77 },  // 고등어
      { recipeID: 77, ingredientID: 54 },  // 무
      { recipeID: 77, ingredientID: 181 }, // 고춧가루
      { recipeID: 77, ingredientID: 191 }, // 다진마늘
      { recipeID: 77, ingredientID: 196 }, // 간장

      // 두부김치
      { recipeID: 78, ingredientID: 71 },  // 두부
      { recipeID: 78, ingredientID: 203 }, // 김치
      { recipeID: 78, ingredientID: 32 },  // 대파
      { recipeID: 78, ingredientID: 196 }, // 간장
      { recipeID: 78, ingredientID: 218 }, // 참기름

      // 새우볶음밥
      { recipeID: 79, ingredientID: 1 },   // 밥
      { recipeID: 79, ingredientID: 87 },  // 새우
      { recipeID: 79, ingredientID: 30 },  // 양파
      { recipeID: 79, ingredientID: 60 },  // 당근
      { recipeID: 79, ingredientID: 42 },  // 피망
      { recipeID: 79, ingredientID: 49 },  // 브로콜리
      { recipeID: 79, ingredientID: 43 },  // 상추
      { recipeID: 79, ingredientID: 196 }, // 간장
      { recipeID: 79, ingredientID: 179 }, // 후추

      // 매운돼지갈비찜
      { recipeID: 80, ingredientID: 68 },  // 돼지갈비
      { recipeID: 80, ingredientID: 30 },  // 양파
      { recipeID: 80, ingredientID: 191 }, // 다진마늘
      { recipeID: 80, ingredientID: 178 }, // 설탕
      { recipeID: 80, ingredientID: 199 }, // 고추장

      // 낙지볶음
      { recipeID: 81, ingredientID: 84 },  // 낙지
      { recipeID: 81, ingredientID: 30 },  // 양파
      { recipeID: 81, ingredientID: 32 },  // 대파
      { recipeID: 81, ingredientID: 40 },  // 고추
      { recipeID: 81, ingredientID: 199 }, // 고추장
      { recipeID: 81, ingredientID: 181 }, // 고춧가루
      { recipeID: 81, ingredientID: 196 }, // 간장

      // 홍합탕
      { recipeID: 82, ingredientID: 93 },  // 홍합
      { recipeID: 82, ingredientID: 32 },  // 대파
      { recipeID: 82, ingredientID: 31 },  // 마늘
      { recipeID: 82, ingredientID: 181 }, // 고춧가루
      { recipeID: 82, ingredientID: 196 }, // 간장

      // 해물볶음밥
      { recipeID: 83, ingredientID: 1 },   // 밥
      { recipeID: 83, ingredientID: 87 },  // 새우
      { recipeID: 83, ingredientID: 83 },  // 오징어
      { recipeID: 83, ingredientID: 94 },  // 조개
      { recipeID: 83, ingredientID: 30 },  // 양파
      { recipeID: 83, ingredientID: 60 },  // 당근
      { recipeID: 83, ingredientID: 42 },  // 피망
      { recipeID: 83, ingredientID: 49 },  // 브로콜리
      { recipeID: 83, ingredientID: 43 },  // 상추
      { recipeID: 83, ingredientID: 196 }, // 간장
      { recipeID: 83, ingredientID: 179 }, // 후추

      // 조기구이
      { recipeID: 84, ingredientID: 102 }, // 조기
      { recipeID: 84, ingredientID: 165 }, // 레몬즙
      { recipeID: 84, ingredientID: 179 }, // 후추
      { recipeID: 84, ingredientID: 177 }, // 소금

      // 새우구이
      { recipeID: 85, ingredientID: 87 },  // 새우
      { recipeID: 85, ingredientID: 31 },  // 마늘
      { recipeID: 85, ingredientID: 177 }, // 소금
      { recipeID: 85, ingredientID: 179 }, // 후추
      { recipeID: 85, ingredientID: 217 }, // 올리브유

      // 가지볶음
      { recipeID: 86, ingredientID: 35 },  // 가지
      { recipeID: 86, ingredientID: 30 },  // 양파
      { recipeID: 86, ingredientID: 40 },  // 고추
      { recipeID: 86, ingredientID: 196 }, // 간장
      { recipeID: 86, ingredientID: 191 }, // 다진마늘

      // 양념두부조림
      { recipeID: 87, ingredientID: 71 },  // 두부
      { recipeID: 87, ingredientID: 30 },  // 양파
      { recipeID: 87, ingredientID: 40 },  // 고추
      { recipeID: 87, ingredientID: 196 }, // 간장
      { recipeID: 87, ingredientID: 181 }, // 고춧가루
      { recipeID: 87, ingredientID: 191 }, // 다진마늘

      // 매운돼지고기볶음
      { recipeID: 88, ingredientID: 63 },  // 돼지고기
      { recipeID: 88, ingredientID: 40 },  // 고추
      { recipeID: 88, ingredientID: 30 },  // 양파
      { recipeID: 88, ingredientID: 199 }, // 고추장
      { recipeID: 88, ingredientID: 196 }, // 간장
      { recipeID: 88, ingredientID: 179 }, // 후추

      // 고추장소스라면
      { recipeID: 89, ingredientID: 124 }, // 라면
      { recipeID: 89, ingredientID: 32 },  // 파
      { recipeID: 89, ingredientID: 196 }, // 간장
      { recipeID: 89, ingredientID: 179 }, // 후추
      { recipeID: 89, ingredientID: 199 }, // 고추장


    // 김치라면
    { recipeID: 90, ingredientID: 124 },  // 라면사리
    { recipeID: 90, ingredientID: 203 },  // 김치
    { recipeID: 90, ingredientID: 32 },   // 대파
    { recipeID: 90, ingredientID: 181 },  // 고춧가루
    { recipeID: 90, ingredientID: 191 },  // 다진마늘

    // 스팸라면
    { recipeID: 91, ingredientID: 124 },  // 라면사리
    { recipeID: 91, ingredientID: 231 },  // 스팸
    { recipeID: 91, ingredientID: 32 },   // 대파
    { recipeID: 91, ingredientID: 196 },  // 간장
    { recipeID: 91, ingredientID: 179 },  // 후추

    // 치즈라면
    { recipeID: 92, ingredientID: 124 },  // 라면사리
    { recipeID: 92, ingredientID: 117 },  // 모짜렐라치즈
    { recipeID: 92, ingredientID: 32 },   // 대파
    { recipeID: 92, ingredientID: 177 },  // 소금
    { recipeID: 92, ingredientID: 179 },  // 후추

    // 낙지전골
    { recipeID: 93, ingredientID: 84 },   // 낙지
    { recipeID: 93, ingredientID: 52 },   // 버섯
    { recipeID: 93, ingredientID: 71 },   // 두부
    { recipeID: 93, ingredientID: 32 },   // 대파
    { recipeID: 93, ingredientID: 30 },   // 양파
    { recipeID: 93, ingredientID: 43 },   // 상추
    { recipeID: 93, ingredientID: 60 },   // 당근
    { recipeID: 93, ingredientID: 61 },   // 애호박
    { recipeID: 93, ingredientID: 199 },  // 고추장
    { recipeID: 93, ingredientID: 191 },  // 다진마늘
    { recipeID: 93, ingredientID: 196 },  // 간장

    // 육회
    { recipeID: 94, ingredientID: 62 },   // 소고기
    { recipeID: 94, ingredientID: 75 },   // 계란노른자
    { recipeID: 94, ingredientID: 12 },   // 배
    { recipeID: 94, ingredientID: 196 },  // 간장
    { recipeID: 94, ingredientID: 218 },  // 참기름
    { recipeID: 94, ingredientID: 179 },  // 후추

    // 명란젓비빔밥
    { recipeID: 95, ingredientID: 1 },    // 쌀 (밥)
    { recipeID: 95, ingredientID: 95 },   // 명란젓
    { recipeID: 95, ingredientID: 75 },   // 계란
    { recipeID: 95, ingredientID: 32 },   // 대파
    { recipeID: 95, ingredientID: 30 },   // 양파
    { recipeID: 95, ingredientID: 43 },   // 상추
    { recipeID: 95, ingredientID: 60 },   // 당근
    { recipeID: 95, ingredientID: 61 },   // 애호박
    { recipeID: 95, ingredientID: 199 },  // 고추장
    { recipeID: 95, ingredientID: 218 },  // 참기름

    // 황태국
    { recipeID: 96, ingredientID: 233 },  // 황태
    { recipeID: 96, ingredientID: 54 },   // 무
    { recipeID: 96, ingredientID: 32 },   // 대파
    { recipeID: 96, ingredientID: 177 },  // 소금
    { recipeID: 96, ingredientID: 179 },  // 후추

    // 동태탕
    { recipeID: 97, ingredientID: 234 },  // 동태
    { recipeID: 97, ingredientID: 54 },   // 무
    { recipeID: 97, ingredientID: 32 },   // 대파
    { recipeID: 97, ingredientID: 181 },  // 고춧가루
    { recipeID: 97, ingredientID: 196 },  // 간장

    // 두부스테이크
    { recipeID: 98, ingredientID: 71 },   // 두부
    { recipeID: 98, ingredientID: 6 },    // 밀가루
    { recipeID: 98, ingredientID: 177 },  // 소금
    { recipeID: 98, ingredientID: 179 },  // 후추
    { recipeID: 98, ingredientID: 171 },  // 스테이크소스
    { recipeID: 98, ingredientID: 216 },  // 식용유

    // 오징어덮밥
    { recipeID: 99, ingredientID: 83 },  // 오징어
    { recipeID: 99, ingredientID: 1 },   // 쌀 (밥)
    { recipeID: 99, ingredientID: 30 },  // 양파
    { recipeID: 99, ingredientID: 60 },  // 당근
    { recipeID: 99, ingredientID: 41 },  // 피망
    { recipeID: 99, ingredientID: 49 },  // 브로콜리
    { recipeID: 99, ingredientID: 43 },  // 상추
    { recipeID: 99, ingredientID: 196 }, // 간장
    { recipeID: 99, ingredientID: 179 }, // 후추

    // 순대볶음
    { recipeID: 100, ingredientID: 104 }, // 순대
    { recipeID: 100, ingredientID: 30 },  // 양파
    { recipeID: 100, ingredientID: 40 },  // 고추
    { recipeID: 100, ingredientID: 196 }, // 간장
    { recipeID: 100, ingredientID: 181 }, // 고춧가루


    // 북엇국
    { recipeID: 101, ingredientID: 233 },  // 북어
    { recipeID: 101, ingredientID: 54 },   // 무
    { recipeID: 101, ingredientID: 32 },   // 대파
    { recipeID: 101, ingredientID: 177 },  // 소금
    { recipeID: 101, ingredientID: 179 },  // 후추

    // 샐러드파스타
    { recipeID: 102, ingredientID: 131 },  // 파스타
    { recipeID: 102, ingredientID: 30 },   // 양파
    { recipeID: 102, ingredientID: 60 },   // 당근
    { recipeID: 102, ingredientID: 41 },   // 피망
    { recipeID: 102, ingredientID: 49 },   // 브로콜리
    { recipeID: 102, ingredientID: 43 },   // 상추
    { recipeID: 102, ingredientID: 177 },  // 소금
    { recipeID: 102, ingredientID: 179 },  // 후추
    { recipeID: 102, ingredientID: 162 },  // 드레싱

    // 달걀프라이
    { recipeID: 103, ingredientID: 75 },   // 계란
    { recipeID: 103, ingredientID: 177 },  // 소금
    { recipeID: 103, ingredientID: 179 },  // 후추

    // 새우튀김
    { recipeID: 104, ingredientID: 87 },   // 새우
    { recipeID: 104, ingredientID: 6 },    // 밀가루
    { recipeID: 104, ingredientID: 75 },   // 계란
    { recipeID: 104, ingredientID: 135 },  // 빵가루
    { recipeID: 104, ingredientID: 177 },  // 소금
    { recipeID: 104, ingredientID: 179 },  // 후추

    // 크림파스타
    { recipeID: 105, ingredientID: 131 },  // 파스타
    { recipeID: 105, ingredientID: 114 },  // 크림
    { recipeID: 105, ingredientID: 31 },   // 마늘
    { recipeID: 105, ingredientID: 177 },  // 소금
    { recipeID: 105, ingredientID: 179 },  // 후추

    // 새우샐러드
    { recipeID: 106, ingredientID: 87 },   // 새우
    { recipeID: 106, ingredientID: 30 },   // 양파
    { recipeID: 106, ingredientID: 60 },   // 당근
    { recipeID: 106, ingredientID: 41 },   // 피망
    { recipeID: 106, ingredientID: 49 },   // 브로콜리
    { recipeID: 106, ingredientID: 43 },   // 상추
    { recipeID: 106, ingredientID: 177 },  // 소금
    { recipeID: 106, ingredientID: 179 },  // 후추
    { recipeID: 106, ingredientID: 162 },  // 드레싱

    // 가지무침
    { recipeID: 107, ingredientID: 35 },   // 가지
    { recipeID: 107, ingredientID: 40 },   // 고추
    { recipeID: 107, ingredientID: 30 },   // 양파
    { recipeID: 107, ingredientID: 196 },  // 간장
    { recipeID: 107, ingredientID: 181 },  // 고춧가루

    // 토마토샐러드
    { recipeID: 108, ingredientID: 29 },   // 토마토
    { recipeID: 108, ingredientID: 30 },   // 양파
    { recipeID: 108, ingredientID: 177 },  // 소금
    { recipeID: 108, ingredientID: 179 },  // 후추
    { recipeID: 108, ingredientID: 217 },  // 올리브유

    // 핫도그
    { recipeID: 109, ingredientID: 104 },  // 소세지
    { recipeID: 109, ingredientID: 228 },  // 빵
    { recipeID: 109, ingredientID: 166 },  // 머스타드
    { recipeID: 109, ingredientID: 150 },  // 케첩

    // 피자빵
    { recipeID: 110, ingredientID: 228 },  // 피자도우
    { recipeID: 110, ingredientID: 120 },  // 치즈
    { recipeID: 110, ingredientID: 217 },  // 올리브유
    { recipeID: 110, ingredientID: 153 },  // 토마토소스

    // 야채튀김
    { recipeID: 111, ingredientID: 8 },    // 튀김가루
    { recipeID: 111, ingredientID: 75 },   // 계란
    { recipeID: 111, ingredientID: 30 },   // 양파
    { recipeID: 111, ingredientID: 60 },   // 당근
    { recipeID: 111, ingredientID: 41 },   // 피망
    { recipeID: 111, ingredientID: 49 },   // 브로콜리
    { recipeID: 111, ingredientID: 43 },   // 상추
    { recipeID: 111, ingredientID: 177 },  // 소금

    // 만두국
    { recipeID: 112, ingredientID: 135 },  // 만두
    { recipeID: 112, ingredientID: 223 },  // 육수
    { recipeID: 112, ingredientID: 32 },   // 대파
    { recipeID: 112, ingredientID: 196 },  // 간장
    { recipeID: 112, ingredientID: 179 },  // 후추

    // 계란국
    { recipeID: 113, ingredientID: 75 },   // 계란
    { recipeID: 113, ingredientID: 223 },  // 육수
    { recipeID: 113, ingredientID: 32 },   // 대파
    { recipeID: 113, ingredientID: 177 },  // 소금
    { recipeID: 113, ingredientID: 179 },  // 후추

    // 어묵볶음
    { recipeID: 114, ingredientID: 235 }, // 어묵
    { recipeID: 114, ingredientID: 30 },   // 양파
    { recipeID: 114, ingredientID: 40 },   // 고추
    { recipeID: 114, ingredientID: 196 },  // 간장
    { recipeID: 114, ingredientID: 181 },  // 고춧가루

    // 스팸볶음밥
    { recipeID: 115, ingredientID: 1 },    // 밥
    { recipeID: 115, ingredientID: 231 },  // 스팸
    { recipeID: 115, ingredientID: 30 },   // 양파
    { recipeID: 115, ingredientID: 60 },   // 당근
    { recipeID: 115, ingredientID: 41 },   // 피망
    { recipeID: 115, ingredientID: 49 },   // 브로콜리
    { recipeID: 115, ingredientID: 43 },   // 상추
    { recipeID: 115, ingredientID: 196 },  // 간장
    { recipeID: 115, ingredientID: 179 },  // 후추

    // 간장게장비빔밥
    { recipeID: 116, ingredientID: 1 },    // 밥
    { recipeID: 116, ingredientID: 43 },   // 상추
    { recipeID: 116, ingredientID: 32 },   // 대파
    { recipeID: 116, ingredientID: 30 },   // 양파
    { recipeID: 116, ingredientID: 60 },   // 당근
    { recipeID: 116, ingredientID: 61 },   // 호박
    { recipeID: 116, ingredientID: 218 },  // 참기름
    { recipeID: 116, ingredientID: 297 },   // 게장 

    // 매운불고기
    { recipeID: 117, ingredientID: 62 },   // 소고기
    { recipeID: 117, ingredientID: 40 },   // 고추
    { recipeID: 117, ingredientID: 30 },   // 양파
    { recipeID: 117, ingredientID: 199 },  // 고추장
    { recipeID: 117, ingredientID: 196 },  // 간장
    { recipeID: 117, ingredientID: 178 }, // 설탕 (ingredientID not in the list)

    // 짜장면
    { recipeID: 118, ingredientID: 239 },  // 면
    { recipeID: 118, ingredientID: 30 },   // 양파
    { recipeID: 118, ingredientID: 40 },   // 고추
    { recipeID: 118, ingredientID: 173 },  // 짜장소스

    // 짬뽕
    { recipeID: 119, ingredientID: 239 },  // 면
    { recipeID: 119, ingredientID: 87 },   // 새우
    { recipeID: 119, ingredientID: 83 },   // 오징어
    { recipeID: 119, ingredientID: 93 },   // 조개
    { recipeID: 119, ingredientID: 30 },   // 양파
    { recipeID: 119, ingredientID: 60 },   // 당근
    { recipeID: 119, ingredientID: 41 },   // 피망
    { recipeID: 119, ingredientID: 49 },   // 브로콜리
    { recipeID: 119, ingredientID: 43 },   // 상추
    { recipeID: 119, ingredientID: 181 },  // 고춧가루
    { recipeID: 119, ingredientID: 196 },  // 간장

    // 마파두부
    { recipeID: 120, ingredientID: 71 },   // 두부
    { recipeID: 120, ingredientID: 259 }, // 다진고기 
    { recipeID: 120, ingredientID: 30 },   // 양파
    { recipeID: 120, ingredientID: 199 },  // 고추장
    { recipeID: 120, ingredientID: 196 },  // 간장
    { recipeID: 120, ingredientID: 179 },  // 후추

    // 계란찜
    { recipeID: 121, ingredientID: 75 },   // 계란
    { recipeID: 121, ingredientID: 32 }, // 다진파 
    { recipeID: 121, ingredientID: 177 },  // 소금

    // 곱창전골
    { recipeID: 122, ingredientID: 236 }, // 곱창 
    { recipeID: 122, ingredientID: 223 },  // 육수
    { recipeID: 122, ingredientID: 30 },   // 양파
    { recipeID: 122, ingredientID: 60 },   // 당근
    { recipeID: 122, ingredientID: 41 },   // 피망
    { recipeID: 122, ingredientID: 49 },   // 브로콜리
    { recipeID: 122, ingredientID: 43 },   // 상추
    { recipeID: 122, ingredientID: 196 },  // 간장
    { recipeID: 122, ingredientID: 191 },  // 다진마늘
    { recipeID: 122, ingredientID: 181 },  // 고춧가루
    { recipeID: 122, ingredientID: 199 },  // 고추장

    // 돼지갈비
    { recipeID: 123, ingredientID: 68 },   // 돼지갈비
    { recipeID: 123, ingredientID: 30 },   // 양파
    { recipeID: 123, ingredientID: 32 },   // 대파
    { recipeID: 123, ingredientID: 196 },  // 간장
    { recipeID: 123, ingredientID: 178 }, // 설탕 
    { recipeID: 123, ingredientID: 191 },  // 다진마늘

    // 소갈비
    { recipeID: 124, ingredientID: 70 },   // 소갈비
    { recipeID: 124, ingredientID: 54 },   // 무
    { recipeID: 124, ingredientID: 32 },   // 대파
    { recipeID: 124, ingredientID: 196 },  // 간장
    { recipeID: 124, ingredientID: 179 },  // 후추

    // 치즈떡볶이 
    { recipeID: 125, ingredientID: 137 },  //  떡
    { recipeID: 125, ingredientID: 116 },  // 치즈
    { recipeID: 125, ingredientID: 178 },  // 설탕
    { recipeID: 125, ingredientID: 181 },  // 고춧가루
    { recipeID: 125, ingredientID: 199 },  // 고추장

    // 치즈김밥 
    { recipeID: 126, ingredientID: 224 },   //김
    { recipeID: 126, ingredientID: 1 },   //밥
    { recipeID: 126, ingredientID: 295 }, // 단무지
    { recipeID: 126, ingredientID: 116 },  //치즈
    { recipeID: 126, ingredientID: 30 },   //양파
    { recipeID: 126, ingredientID: 60 },   //당근
    { recipeID: 126, ingredientID: 39 },   //피망
    { recipeID: 126, ingredientID: 49 },   //브로콜리
    { recipeID: 126, ingredientID: 43 },   //상추
    { recipeID: 126, ingredientID: 177 },  //소금

    // 튀김김밥
    { recipeID: 127, ingredientID: 224 },   //김
    { recipeID: 127, ingredientID: 1 },   //밥
    { recipeID: 127, ingredientID: 8 },    //튀김가루
    { recipeID: 127, ingredientID: 177 },  //소금
    { recipeID: 128, ingredientID: 71 },   //밥
    { recipeID: 128, ingredientID: 19 },   //참치
    { recipeID: 128, ingredientID: 151 },  //마요네즈
    { recipeID: 128, ingredientID: 177 },  //소금

    // 새우김밥
    { recipeID: 129, ingredientID: 224 },   //김
    { recipeID: 129, ingredientID: 1 },   //밥
    { recipeID: 129, ingredientID: 87 },   //새우
    { recipeID: 129, ingredientID: 30 },   //양파
    { recipeID: 129, ingredientID: 60 },   //당근
    { recipeID: 129, ingredientID: 39 },   //피망
    { recipeID: 129, ingredientID: 49 },   //브로콜리
    { recipeID: 129, ingredientID: 43 },   //상추
    { recipeID: 129, ingredientID: 177 },  //소금

    // 유부초밥 
    { recipeID: 130, ingredientID: 296 },   //유부
    { recipeID: 130, ingredientID: 1 },   //밥
    { recipeID: 130, ingredientID: 30 },   //양파
    { recipeID: 130, ingredientID: 60 },   //당근
    { recipeID: 130, ingredientID: 39 },   //피망
    { recipeID: 130, ingredientID: 49 },   //브로콜리
    { recipeID: 130, ingredientID: 43 },   //상추
    { recipeID: 130, ingredientID: 196 },  //간장

    // 초밥 
    { recipeID: 131, ingredientID: 1 },   //초밥용 밥
    { recipeID: 131, ingredientID: 20 },   //생선
    { recipeID: 131, ingredientID: 29 },   //김
    { recipeID: 131, ingredientID: 196 },  //간장
    { recipeID: 131, ingredientID: 158 },  //와사비

    // 장어덮밥 
    { recipeID: 132, ingredientID: 9 },    // 장어
    { recipeID: 132, ingredientID: 1 },   // 밥
    { recipeID: 132, ingredientID: 34 },   // 다진마늘
    { recipeID: 132, ingredientID: 218 },  // 참기름
    { recipeID: 132, ingredientID: 196 },  // 간장

    // 부추전 
    { recipeID: 133, ingredientID: 46 },   // 부추
    { recipeID: 133, ingredientID: 6 },    // 밀가루
    { recipeID: 133, ingredientID: 75 },   // 계란
    { recipeID: 133, ingredientID: 196 },  // 간장

    // 달걀빵
    { recipeID: 134, ingredientID: 75 },   // 계란
    { recipeID: 134, ingredientID: 6 },    // 밀가루
    { recipeID: 134, ingredientID: 179 },  // 후추
    { recipeID: 134, ingredientID: 177 },  // 소금

    // 감자튀김 
    { recipeID: 135, ingredientID: 37 },   // 감자
    { recipeID: 135, ingredientID: 8 },    // 튀김가루
    { recipeID: 135, ingredientID: 150 },   // 케첩
    { recipeID: 135, ingredientID: 177 },  // 소금

    // 미트볼스파게티 
    { recipeID: 136, ingredientID: 130 },  // 스파게티면
    { recipeID: 136, ingredientID: 72 },   // 미트볼
    { recipeID: 136, ingredientID: 115 },  // 파마산치즈
    { recipeID: 136, ingredientID: 153 },  // 토마토소스

    // 새우감바스 
    { recipeID: 137, ingredientID: 87 },   // 새우
    { recipeID: 137, ingredientID: 31 },   // 마늘
    { recipeID: 137, ingredientID: 177 },  // 소금
    { recipeID: 137, ingredientID: 179 },  // 후추
    { recipeID: 137, ingredientID: 217 },  // 올리브유

    // 오징어순대 
    { recipeID: 138, ingredientID: 83 },   // 오징어
    { recipeID: 138, ingredientID: 134 },  // 찹쌀가루
    { recipeID: 138, ingredientID: 30 },   // 양파
    { recipeID: 138, ingredientID: 60 },   // 당근
    { recipeID: 138, ingredientID: 41 },   // 피망


    // 명란파스타
{ recipeID: 139, ingredientID: 131 },  // 파스타면
{ recipeID: 139, ingredientID: 189 },  // 명란젓
{ recipeID: 139, ingredientID: 114 },  // 크림
{ recipeID: 139, ingredientID: 217 },  // 올리브유
{ recipeID: 139, ingredientID: 213 },  // 파슬리

// 바질파스타
{ recipeID: 140, ingredientID: 131 },  // 파스타면
{ recipeID: 140, ingredientID: 215 },  // 바질
{ recipeID: 140, ingredientID: 29 },   // 토마토
{ recipeID: 140, ingredientID: 217 },  // 올리브유

// 닭고기스프
{ recipeID: 141, ingredientID: 64 },   // 닭고기
{ recipeID: 141, ingredientID: 60 },   // 당근
{ recipeID: 141, ingredientID: 30 },   // 양파
{ recipeID: 141, ingredientID: 177 },  // 소금
{ recipeID: 141, ingredientID: 179 },  // 후추

// 샌드위치
{ recipeID: 142, ingredientID: 237 },  // 식빵 (재료 없음)
{ recipeID: 142, ingredientID: 105 },   // 햄
{ recipeID: 142, ingredientID: 120 },   // 치즈
{ recipeID: 142, ingredientID: 30 },    // 양파
{ recipeID: 142, ingredientID: 60 },    // 당근
{ recipeID: 142, ingredientID: 41 },    // 피망
{ recipeID: 142, ingredientID: 49 },    // 브로콜리
{ recipeID: 142, ingredientID: 43 },    // 상추
{ recipeID: 142, ingredientID: 151 },   // 마요네즈

// 토스트
{ recipeID: 143, ingredientID: 237 },  // 식빵 (재료 없음)
{ recipeID: 143, ingredientID: 112 },   // 버터
{ recipeID: 143, ingredientID: 178 },   // 설탕
{ recipeID: 143, ingredientID: 175 },   // 잼

// 카스테라
{ recipeID: 144, ingredientID: 6 },     // 밀가루
{ recipeID: 144, ingredientID: 75 },    // 계란
{ recipeID: 144, ingredientID: 177 },   // 소금
{ recipeID: 144, ingredientID: 178 },   // 설탕

// 하와이안무스비
{ recipeID: 145, ingredientID: 1 },     // 밥
{ recipeID: 145, ingredientID: 231 },    // 스팸
{ recipeID: 145, ingredientID: 34 },    // 오이
{ recipeID: 145, ingredientID: 75 },    // 계란
{ recipeID: 145, ingredientID: 218 },    // 참기름
{ recipeID: 145, ingredientID: 220  },    // 참깨
{ recipeID: 145, ingredientID: 224 },   // 김
{ recipeID: 145, ingredientID: 177 },   // 소금

// 장조림
{ recipeID: 146, ingredientID: 62 },    // 소고기
{ recipeID: 146, ingredientID: 54 },    // 무
{ recipeID: 146, ingredientID: 178 },   // 설탕
{ recipeID: 146, ingredientID: 191 },   // 다진마늘
{ recipeID: 146, ingredientID: 196 },   // 간장

// 순대국밥
{ recipeID: 147, ingredientID: 238 },  // 순대 (재료 없음)
{ recipeID: 147, ingredientID: 223 },  // 국물 (재료 없음)
{ recipeID: 147, ingredientID: 32 },    // 대파
{ recipeID: 147, ingredientID: 177 },   // 소금
{ recipeID: 147, ingredientID: 179 },   // 후추

// 돼지국밥
{ recipeID: 148, ingredientID: 63 },    // 돼지고기
{ recipeID: 148, ingredientID: 223 },  // 국물 (재료 없음)
{ recipeID: 148, ingredientID: 32 },    // 대파
{ recipeID: 148, ingredientID: 177 },   // 소금
{ recipeID: 148, ingredientID: 179 },   // 후추

// 나가사키짬뽕
{ recipeID: 149, ingredientID: 130 },  // 면
{ recipeID: 149, ingredientID: 87 },   // 새우
{ recipeID: 149, ingredientID: 83 },   // 오징어
{ recipeID: 149, ingredientID: 94 },   // 조개
{ recipeID: 149, ingredientID: 30 },   // 양파
{ recipeID: 149, ingredientID: 60 },   // 당근
{ recipeID: 149, ingredientID: 41 },   // 피망
{ recipeID: 149, ingredientID: 49 },   // 브로콜리
{ recipeID: 149, ingredientID: 43 },   // 상추
{ recipeID: 149, ingredientID: 181 },  // 고춧가루
{ recipeID: 149, ingredientID: 196 },  // 간장

// 새우덮밥
{ recipeID: 150, ingredientID: 1 },    // 밥
{ recipeID: 150, ingredientID: 87 },   // 새우
{ recipeID: 150, ingredientID: 30 },   // 양파
{ recipeID: 150, ingredientID: 60 },   // 당근
{ recipeID: 150, ingredientID: 41 },   // 피망
{ recipeID: 150, ingredientID: 49 },   // 브로콜리
{ recipeID: 150, ingredientID: 43 },   // 상추
{ recipeID: 150, ingredientID: 196 },  // 간장
{ recipeID: 150, ingredientID: 179 },  // 후추

// 돈부리
{ recipeID: 151, ingredientID: 1 },    // 밥
{ recipeID: 151, ingredientID: 63 },   // 돼지고기
{ recipeID: 151, ingredientID: 75 },   // 계란
{ recipeID: 151, ingredientID: 196 },  // 간장
{ recipeID: 151, ingredientID: 191 },  // 다진마늘

// 냉우동
{ recipeID: 152, ingredientID: 128 },  // 우동면
{ recipeID: 152, ingredientID: 34 },   // 오이
{ recipeID: 152, ingredientID: 32 },   // 파
{ recipeID: 152, ingredientID: 196 },  // 간장
{ recipeID: 152, ingredientID: 180 },  // 식초

// 김치볶음면
{ recipeID: 153, ingredientID: 130 },  // 면
{ recipeID: 153, ingredientID: 203 },  // 김치
{ recipeID: 153, ingredientID: 30 },   // 양파
{ recipeID: 153, ingredientID: 181 },  // 고춧가루
{ recipeID: 153, ingredientID: 196 },  // 간장

// 짬뽕라면
{ recipeID: 154, ingredientID: 124 },  // 면
{ recipeID: 154, ingredientID: 87 },   // 새우
{ recipeID: 154, ingredientID: 83 },   // 오징어
{ recipeID: 154, ingredientID: 94 },   // 조개
{ recipeID: 154, ingredientID: 30 },   // 양파
{ recipeID: 154, ingredientID: 60 },   // 당근
{ recipeID: 154, ingredientID: 41 },   // 피망
{ recipeID: 154, ingredientID: 49 },   // 브로콜리
{ recipeID: 154, ingredientID: 43 },   // 상추
{ recipeID: 154, ingredientID: 181 },  // 고춧가루
{ recipeID: 154, ingredientID: 196 },  // 간장

// 비빔라면
{ recipeID: 155, ingredientID: 124 },  // 라면
{ recipeID: 155, ingredientID: 30 },   // 양파
{ recipeID: 155, ingredientID: 60 },   // 당근
{ recipeID: 155, ingredientID: 41 },   // 피망
{ recipeID: 155, ingredientID: 49 },   // 브로콜리
{ recipeID: 155, ingredientID: 43 },   // 상추
{ recipeID: 155, ingredientID: 218 },  // 참기름
{ recipeID: 155, ingredientID: 199 },  // 고추장

// 참깨라면
{ recipeID: 156, ingredientID: 124 },  // 라면
{ recipeID: 156, ingredientID: 32 },   // 파
{ recipeID: 156, ingredientID: 196 },  // 간장
{ recipeID: 156, ingredientID: 179 },  // 후추
{ recipeID: 156, ingredientID: 220 },  // 참깨

// 해물짬뽕
{ recipeID: 157, ingredientID: 239 },  // 중화면
{ recipeID: 157, ingredientID: 87 },   // 새우
{ recipeID: 157, ingredientID: 83 },   // 오징어
{ recipeID: 157, ingredientID: 94 },   // 조개
{ recipeID: 157, ingredientID: 30 },   // 양파
{ recipeID: 157, ingredientID: 60 },   // 당근
{ recipeID: 157, ingredientID: 41 },   // 피망
{ recipeID: 157, ingredientID: 49 },   // 브로콜리
{ recipeID: 157, ingredientID: 43 },   // 상추
{ recipeID: 157, ingredientID: 181 },  // 고춧가루
{ recipeID: 157, ingredientID: 196 },  // 간장

// 초콜릿케이크
{ recipeID: 158, ingredientID: 6 },    // 밀가루
{ recipeID: 158, ingredientID: 75 },   // 계란
{ recipeID: 158, ingredientID: 112 },  // 버터
{ recipeID: 158, ingredientID: 208 },  // 초콜릿
{ recipeID: 158, ingredientID: 178 },  // 설탕

// 크로와상
{ recipeID: 159, ingredientID: 6 },   // 밀가루
{ recipeID: 159, ingredientID: 112 }, // 버터
{ recipeID: 159, ingredientID: 178 }, // 설탕
{ recipeID: 159, ingredientID: 177 }, // 소금

// 초코칩쿠키
{ recipeID: 160, ingredientID: 6 },    // 밀가루
{ recipeID: 160, ingredientID: 240 }, // 초코칩 
{ recipeID: 160, ingredientID: 75 },   // 계란
{ recipeID: 160, ingredientID: 112 },  // 버터
{ recipeID: 160, ingredientID: 178 },  // 설탕

// 마카롱
{ recipeID: 161, ingredientID: 241 }, // 아몬드가루 (ingredient 테이블에 없음)
{ recipeID: 161, ingredientID: 75 },   // 계란흰자 (계란으로 대체)
{ recipeID: 161, ingredientID: 112 },  // 버터
{ recipeID: 161, ingredientID: 207 },  // 다크초콜릿
{ recipeID: 161, ingredientID: 178 },  // 설탕

// 모히또
{ recipeID: 162, ingredientID: 214 },  // 민트
{ recipeID: 162, ingredientID: 242 }, // 라임 (ingredient 테이블에 없음)
{ recipeID: 162, ingredientID: 210 },  // 럼주
{ recipeID: 162, ingredientID: 211 },  // 탄산수
{ recipeID: 162, ingredientID: 178 },  // 설탕



// ----------------------------------------------------------------------//
// 바나나스무디
{ recipeID: 163, ingredientID: 14 },   // 바나나
{ recipeID: 163, ingredientID: 108 },  // 우유
{ recipeID: 163, ingredientID: 182 },  // 꿀
{ recipeID: 163, ingredientID: 243 }, // 얼음 (ingredient 테이블에 없음)

// 딸기쉐이크
{ recipeID: 164, ingredientID: 24 },   // 딸기
{ recipeID: 164, ingredientID: 108 },  // 우유
{ recipeID: 164, ingredientID: 243 }, // 얼음 (ingredient 테이블에 없음)
{ recipeID: 164, ingredientID: 178 },  // 설탕

// 복숭아아이스티
{ recipeID: 165, ingredientID: 16 },   // 복숭아
{ recipeID: 165, ingredientID: 244 }, // 홍차 (ingredient 테이블에 없음)
{ recipeID: 165, ingredientID: 165 },  // 레몬즙
{ recipeID: 165, ingredientID: 178 },  // 설탕

// 딸기타르트
{ recipeID: 166, ingredientID: 245 }, // 타르트지 (ingredient 테이블에 없음)
{ recipeID: 166, ingredientID: 24 },   // 딸기
{ recipeID: 166, ingredientID: 114 },  // 크림
{ recipeID: 166, ingredientID: 178 },  // 설탕

// 레몬마들렌
{ recipeID: 167, ingredientID: 6 },    // 밀가루
{ recipeID: 167, ingredientID: 112 },  // 버터
{ recipeID: 167, ingredientID: 165 },  // 레몬즙
{ recipeID: 167, ingredientID: 178 },  // 설탕

// 티라미수
{ recipeID: 168, ingredientID: 246 }, // 마스카포네치즈 (ingredient 테이블에 없음)
{ recipeID: 168, ingredientID: 247 }, // 커피 (ingredient 테이블에 없음)
{ recipeID: 168, ingredientID: 209 },  // 카카오가루
{ recipeID: 168, ingredientID: 178 },  // 설탕

// 치즈케이크
{ recipeID: 169, ingredientID: 118 },  // 크림치즈
{ recipeID: 169, ingredientID: 248 }, // 비스킷 (ingredient 테이블에 없음)
{ recipeID: 169, ingredientID: 112 },  // 버터
{ recipeID: 169, ingredientID: 178 },  // 설탕

// 마들렌
{ recipeID: 170, ingredientID: 6 },    // 밀가루
{ recipeID: 170, ingredientID: 75 },   // 계란
{ recipeID: 170, ingredientID: 112 },  // 버터
{ recipeID: 170, ingredientID: 177 },  // 소금
{ recipeID: 170, ingredientID: 178 },  // 설탕

// 에클레어
{ recipeID: 171, ingredientID: 6 },    // 밀가루
{ recipeID: 171, ingredientID: 75 },   // 계란
{ recipeID: 171, ingredientID: 108 },  // 우유
{ recipeID: 171, ingredientID: 114 },  // 크림
{ recipeID: 171, ingredientID: 208 },  // 초콜릿

// 초코타르트
{ recipeID: 172, ingredientID: 208 },  // 초콜릿
{ recipeID: 172, ingredientID: 114 },  // 크림
{ recipeID: 172, ingredientID: 178 },  // 설탕

// 샤베트
{ recipeID: 173, ingredientID: 249 }, // 레몬, 오렌지 (ingredient 테이블에 없음)
{ recipeID: 173, ingredientID: 165 },  // 레몬즙
{ recipeID: 173, ingredientID: 178 },  // 설탕

// 치즈볼
{ recipeID: 174, ingredientID: 120 },  // 치즈
{ recipeID: 174, ingredientID: 230 },  // 빵가루
{ recipeID: 174, ingredientID: 75 },   // 계란
{ recipeID: 174, ingredientID: 177 },  // 소금
{ recipeID: 174, ingredientID: 179 },  // 후추

// 카페라떼
{ recipeID: 175, ingredientID: 247 }, // 커피 (ingredient 테이블에 없음)
{ recipeID: 175, ingredientID: 108 },  // 우유
{ recipeID: 175, ingredientID: 178 },  // 설탕

// 캐러멜마끼아또
{ recipeID: 176, ingredientID: 247 }, // 커피 (ingredient 테이블에 없음)
{ recipeID: 176, ingredientID: 108 },  // 우유
{ recipeID: 176, ingredientID: 250 }, // 카라멜 (ingredient 테이블에 없음)
{ recipeID: 176, ingredientID: 178 },  // 설탕

// 비빔국수
{ recipeID: 177, ingredientID: 133 },  // 국수
{ recipeID: 177, ingredientID: 32 },   // 대파
{ recipeID: 177, ingredientID: 30 },   // 양파
{ recipeID: 177, ingredientID: 43 },   // 상추
{ recipeID: 177, ingredientID: 60 },   // 당근
{ recipeID: 177, ingredientID: 38 },   // 호박
{ recipeID: 177, ingredientID: 218 },  // 참기름
{ recipeID: 177, ingredientID: 199 },  // 고추장

// 콩국수
{ recipeID: 178, ingredientID: 74 },   // 콩
{ recipeID: 178, ingredientID: 133 },  // 국수
{ recipeID: 178, ingredientID: 177 },  // 소금
{ recipeID: 178, ingredientID: 196 },  // 간장
{ recipeID: 178, ingredientID: 220 },  // 참깨

// 잔치국수
{ recipeID: 179, ingredientID: 133 },  // 국수
{ recipeID: 179, ingredientID: 223 },  // 육수
{ recipeID: 179, ingredientID: 30 },   // 양파
{ recipeID: 179, ingredientID: 60 },   // 당근
{ recipeID: 179, ingredientID: 41 },   // 피망
{ recipeID: 179, ingredientID: 49 },   // 브로콜리
{ recipeID: 179, ingredientID: 43 },   // 상추
{ recipeID: 179, ingredientID: 196 },  // 간장
{ recipeID: 179, ingredientID: 179 },  // 후추

// 멸치국수
{ recipeID: 180, ingredientID: 133 },  // 국수
{ recipeID: 180, ingredientID: 100 },  // 멸치
{ recipeID: 180, ingredientID: 32 },   // 대파
{ recipeID: 180, ingredientID: 177 },  // 소금
{ recipeID: 180, ingredientID: 179 },  // 후추

// 고기국수
{ recipeID: 181, ingredientID: 133 },  // 국수
{ recipeID: 181, ingredientID: 62 },   // 소고기
{ recipeID: 181, ingredientID: 30 },   // 양파
{ recipeID: 181, ingredientID: 60 },   // 당근
{ recipeID: 181, ingredientID: 41 },   // 피망
{ recipeID: 181, ingredientID: 49 },   // 브로콜리
{ recipeID: 181, ingredientID: 43 },   // 상추
{ recipeID: 181, ingredientID: 196 },  // 간장
{ recipeID: 181, ingredientID: 179 },  // 후추

// 닭칼국수
{ recipeID: 182, ingredientID: 129 },  // 칼국수면
{ recipeID: 182, ingredientID: 64 },   // 닭고기
{ recipeID: 182, ingredientID: 30 },   // 양파
{ recipeID: 182, ingredientID: 60 },   // 당근
{ recipeID: 182, ingredientID: 41 },   // 피망
{ recipeID: 182, ingredientID: 49 },   // 브로콜리
{ recipeID: 182, ingredientID: 43 },   // 상추
{ recipeID: 182, ingredientID: 196 },  // 간장
{ recipeID: 182, ingredientID: 179 },  // 후추

// 해물칼국수
{ recipeID: 183, ingredientID: 129 },  // 칼국수면
{ recipeID: 183, ingredientID: 87 },   // 새우
{ recipeID: 183, ingredientID: 83 },   // 오징어
{ recipeID: 183, ingredientID: 94 },   // 조개
{ recipeID: 183, ingredientID: 30 },   // 양파
{ recipeID: 183, ingredientID: 60 },   // 당근
{ recipeID: 183, ingredientID: 41 },   // 피망
{ recipeID: 183, ingredientID: 49 },   // 브로콜리
{ recipeID: 183, ingredientID: 43 },   // 상추
{ recipeID: 183, ingredientID: 196 },  // 간장
{ recipeID: 183, ingredientID: 179 },  // 후추

// 감자옹심이
{ recipeID: 184, ingredientID: 37 },   // 감자
{ recipeID: 184, ingredientID: 6 },    // 밀가루
{ recipeID: 184, ingredientID: 223 },  // 육수
{ recipeID: 184, ingredientID: 177 },  // 소금

// 칼제비
{ recipeID: 185, ingredientID: 129 },  // 칼국수면
{ recipeID: 185, ingredientID: 6 }, // 밀가루반죽 (ingredient 테이블에 없음)
{ recipeID: 185, ingredientID: 223 },  // 육수
{ recipeID: 185, ingredientID: 177 },  // 소금

// 메밀국수
{ recipeID: 186, ingredientID: 298 },    // 메밀면
{ recipeID: 186, ingredientID: 30 },   // 양파
{ recipeID: 186, ingredientID: 60 },   // 당근
{ recipeID: 186, ingredientID: 41 },   // 피망
{ recipeID: 186, ingredientID: 49 },   // 브로콜리
{ recipeID: 186, ingredientID: 43 },   // 상추
{ recipeID: 186, ingredientID: 196 },  // 간장
{ recipeID: 186, ingredientID: 181 },  // 고춧가루
{ recipeID: 186, ingredientID: 178 }, // 설탕
{ recipeID: 186, ingredientID: 191 }, // 다진마늘
{ recipeID: 186, ingredientID: 218 }, // 참기름


// 우동
{ recipeID: 187, ingredientID: 128 },  // 우동면
{ recipeID: 187, ingredientID: 223 },  // 육수
{ recipeID: 187, ingredientID: 30 },   // 양파
{ recipeID: 187, ingredientID: 60 },   // 당근
{ recipeID: 187, ingredientID: 41 },   // 피망
{ recipeID: 187, ingredientID: 49 },   // 브로콜리
{ recipeID: 187, ingredientID: 43 },   // 상추
{ recipeID: 187, ingredientID: 196 },  // 간장

// 쌀국수
{ recipeID: 188, ingredientID: 142 },  // 쌀국수면
{ recipeID: 188, ingredientID: 223 },  // 육수
{ recipeID: 188, ingredientID: 30 },   // 양파
{ recipeID: 188, ingredientID: 60 },   // 당근
{ recipeID: 188, ingredientID: 41 },   // 피망
{ recipeID: 188, ingredientID: 49 },   // 브로콜리
{ recipeID: 188, ingredientID: 43 },   // 상추
{ recipeID: 188, ingredientID: 196 },  // 간장
{ recipeID: 188, ingredientID: 181 },  // 고춧가루

// 비빔냉면
{ recipeID: 189, ingredientID: 251 },  // 냉면 
{ recipeID: 189, ingredientID: 32 },    // 대파
{ recipeID: 189, ingredientID: 30 },    // 양파
{ recipeID: 189, ingredientID: 43 },    // 상추
{ recipeID: 189, ingredientID: 60 },    // 당근
{ recipeID: 189, ingredientID: 38 },    // 호박
{ recipeID: 189, ingredientID: 218 },   // 참기름
{ recipeID: 189, ingredientID: 169 },   // 비빔소스

// 평양냉면
{ recipeID: 190, ingredientID: 251 },   // 면
{ recipeID: 190, ingredientID: 223 },   // 육수
{ recipeID: 190, ingredientID: 34 },    // 오이
{ recipeID: 190, ingredientID: 196 },   // 간장
{ recipeID: 190, ingredientID: 180 },   // 식초

// 회냉면
{ recipeID: 191, ingredientID: 251 },  // 냉면 
{ recipeID: 191, ingredientID: 252 },  // 회 
{ recipeID: 191, ingredientID: 32 },    // 대파
{ recipeID: 191, ingredientID: 30 },    // 양파
{ recipeID: 191, ingredientID: 43 },    // 상추
{ recipeID: 191, ingredientID: 60 },    // 당근
{ recipeID: 191, ingredientID: 38 },    // 호박
{ recipeID: 191, ingredientID: 196 },   // 간장
{ recipeID: 191, ingredientID: 218 },   // 참기름

// 막국수
{ recipeID: 192, ingredientID: 298 },     // 메밀면
{ recipeID: 192, ingredientID: 32 },    // 대파
{ recipeID: 192, ingredientID: 30 },    // 양파
{ recipeID: 192, ingredientID: 43 },    // 상추
{ recipeID: 192, ingredientID: 60 },    // 당근
{ recipeID: 192, ingredientID: 38 },    // 호박
{ recipeID: 192, ingredientID: 196 },   // 간장
{ recipeID: 192, ingredientID: 169 },   // 비빔소스

// 소면
{ recipeID: 193, ingredientID: 133 },   // 소면
{ recipeID: 193, ingredientID: 223 },   // 육수
{ recipeID: 193, ingredientID: 34 },    // 오이
{ recipeID: 193, ingredientID: 196 },   // 간장
{ recipeID: 193, ingredientID: 190 },   // 고추

// 밀면
{ recipeID: 194, ingredientID: 194 },   // 밀면
{ recipeID: 194, ingredientID: 223 },   // 육수
{ recipeID: 194, ingredientID: 196 },   // 간장
{ recipeID: 194, ingredientID: 190 },   // 고추
{ recipeID: 194, ingredientID: 181 },  // 고춧가루
{ recipeID: 194, ingredientID: 178 }, // 설탕
{ recipeID: 194, ingredientID: 196 }, // 간장, 
{ recipeID: 194, ingredientID: 191 }, // 다진마늘,
{ recipeID: 194, ingredientID: 218 }, // 참기름,
{ recipeID: 194, ingredientID: 181 }, //  고춧가루

// 쫄면
{ recipeID: 195, ingredientID: 135 },   // 쫄면
{ recipeID: 195, ingredientID: 32 },    // 대파
{ recipeID: 195, ingredientID: 30 },    // 양파
{ recipeID: 195, ingredientID: 43 },    // 상추
{ recipeID: 195, ingredientID: 60 },    // 당근
{ recipeID: 195, ingredientID: 38 },    // 호박
{ recipeID: 195, ingredientID: 218 },   // 참기름
{ recipeID: 195, ingredientID: 169 },   // 비빔소스

// 잔치비빔국수
{ recipeID: 196, ingredientID: 133 },   // 국수
{ recipeID: 196, ingredientID: 30 },    // 양파
{ recipeID: 196, ingredientID: 60 },    // 당근
{ recipeID: 196, ingredientID: 41 },    // 피망
{ recipeID: 196, ingredientID: 49 },    // 브로콜리
{ recipeID: 196, ingredientID: 43 },    // 상추
{ recipeID: 196, ingredientID: 218 },   // 참기름
{ recipeID: 196, ingredientID: 169 },   // 비빔소스

// 고기말이
{ recipeID: 197, ingredientID: 63 },    // 돼지고기
{ recipeID: 197, ingredientID: 60 },    // 당근
{ recipeID: 197, ingredientID: 30 },    // 양파
{ recipeID: 197, ingredientID: 196 },   // 간장
{ recipeID: 197, ingredientID: 179 },   // 후추

// 오리고기구이
{ recipeID: 198, ingredientID: 66 },    // 오리
{ recipeID: 198, ingredientID: 179 },   // 후추
{ recipeID: 198, ingredientID: 191 },   // 다진마늘
{ recipeID: 198, ingredientID: 196 },   // 간장
{ recipeID: 198, ingredientID: 177 },   // 소금

// 돼지갈비구이
{ recipeID: 199, ingredientID: 68 },    // 돼지갈비
{ recipeID: 199, ingredientID: 179 },   // 후추
{ recipeID: 199, ingredientID: 196 },   // 간장
{ recipeID: 199, ingredientID: 191 },   // 다진마늘
{ recipeID: 199, ingredientID: 177 },   // 소금

// 삼치구이
{ recipeID: 200, ingredientID: 253 },  // 삼치 (ingredient 테이블에 없음)
{ recipeID: 200, ingredientID: 165 },   // 레몬
{ recipeID: 200, ingredientID: 179 },   // 후추
{ recipeID: 200, ingredientID: 177 },   // 소금

// 갈치구이
{ recipeID: 201, ingredientID: 78 },    // 갈치
{ recipeID: 201, ingredientID: 179 },   // 후추
{ recipeID: 201, ingredientID: 191 },   // 다진마늘
{ recipeID: 201, ingredientID: 177 },   // 소금

// 황태구이
{ recipeID: 202, ingredientID: 233 },   // 황태
{ recipeID: 202, ingredientID: 179 },   // 후추
{ recipeID: 202, ingredientID: 177 },   // 소금

// 홍어무침
{ recipeID: 203, ingredientID: 101 },   // 홍어
{ recipeID: 203, ingredientID: 54 },    // 무
{ recipeID: 203, ingredientID: 30 },    // 양파
{ recipeID: 203, ingredientID: 181 },   // 고춧가루
{ recipeID: 203, ingredientID: 196 },   // 간장

// 꼬막무침
{ recipeID: 204, ingredientID: 254 },  // 꼬막 (ingredient 테이블에 없음)
{ recipeID: 204, ingredientID: 181 },   // 고춧가루
{ recipeID: 204, ingredientID: 178 },   // 설탕
{ recipeID: 204, ingredientID: 196 },   // 간장
{ recipeID: 204, ingredientID: 299 },   // 맛술
{ recipeID: 204, ingredientID: 218 },   // 참기름 
{ recipeID: 204, ingredientID: 191 },   // 다진마늘
{ recipeID: 204, ingredientID: 32 },   // 다진파
{ recipeID: 204, ingredientID: 220 },   // 깨

// 무말랭이무침
{ recipeID: 205, ingredientID: 54 },    // 무
{ recipeID: 205, ingredientID: 191 },   // 다진마늘
{ recipeID: 205, ingredientID: 218 },   // 참기름
{ recipeID: 205, ingredientID: 196 },   // 간장
{ recipeID: 205, ingredientID: 181 },   // 고춧가루

// 두부조림
{ recipeID: 206, ingredientID: 71 },    // 두부
{ recipeID: 206, ingredientID: 30 },    // 양파
{ recipeID: 206, ingredientID: 40 },    // 고추
{ recipeID: 206, ingredientID: 196 },   // 간장
{ recipeID: 206, ingredientID: 178 },   // 설탕
{ recipeID: 206, ingredientID: 191 },   // 다진마늘

// 꽁치조림
{ recipeID: 207, ingredientID: 79 },    // 꽁치
{ recipeID: 207, ingredientID: 54 },    // 무
{ recipeID: 207, ingredientID: 32 },    // 대파
{ recipeID: 207, ingredientID: 196 },   // 간장
{ recipeID: 207, ingredientID: 181 },   // 고춧가루

// 생선조림
{ recipeID: 208, ingredientID: 227 },   // 생선
{ recipeID: 208, ingredientID: 54 },    // 무
{ recipeID: 208, ingredientID: 30 },    // 양파
{ recipeID: 208, ingredientID: 196 },   // 간장
{ recipeID: 208, ingredientID: 179 },   // 후추

// 청국장찌개
{ recipeID: 209, ingredientID: 202 },   // 청국장
{ recipeID: 209, ingredientID: 71 },    // 두부
{ recipeID: 209, ingredientID: 30 },    // 양파
{ recipeID: 209, ingredientID: 181 },   // 고춧가루
{ recipeID: 209, ingredientID: 191 },   // 다진마늘

// 호박찌개
{ recipeID: 210, ingredientID: 61 },   // 호박
{ recipeID: 210, ingredientID: 71 },   // 두부
{ recipeID: 210, ingredientID: 30 },   // 양파
{ recipeID: 210, ingredientID: 181 },  // 고춧가루
{ recipeID: 210, ingredientID: 191 },  // 다진마늘

// 참치찌개
{ recipeID: 211, ingredientID: 143 },  // 참치캔
{ recipeID: 211, ingredientID: 71 },   // 두부
{ recipeID: 211, ingredientID: 30 },   // 양파
{ recipeID: 211, ingredientID: 181 },  // 고춧가루
{ recipeID: 211, ingredientID: 196 },  // 간장

// 두부김치찌개
{ recipeID: 212, ingredientID: 71 },   // 두부
{ recipeID: 212, ingredientID: 203 },  // 김치
{ recipeID: 212, ingredientID: 30 },   // 양파
{ recipeID: 212, ingredientID: 181 },  // 고춧가루
{ recipeID: 212, ingredientID: 196 },  // 간장

// 동태찌개
{ recipeID: 213, ingredientID: 234 },  // 동태
{ recipeID: 213, ingredientID: 54 },   // 무
{ recipeID: 213, ingredientID: 32 },   // 대파
{ recipeID: 213, ingredientID: 181 },  // 고춧가루
{ recipeID: 213, ingredientID: 196 },  // 간장

// 생선찌개
{ recipeID: 214, ingredientID: 227 },  // 생선
{ recipeID: 214, ingredientID: 54 },   // 무
{ recipeID: 214, ingredientID: 30 },   // 양파
{ recipeID: 214, ingredientID: 181 },  // 고춧가루
{ recipeID: 214, ingredientID: 179 },  // 후추

// 고등어김치찌개
{ recipeID: 215, ingredientID: 77 },   // 고등어
{ recipeID: 215, ingredientID: 203 },  // 김치
{ recipeID: 215, ingredientID: 30 },   // 양파
{ recipeID: 215, ingredientID: 181 },  // 고춧가루
{ recipeID: 215, ingredientID: 196 },  // 간장

// 해물김치찌개
{ recipeID: 216, ingredientID: 87 },   // 새우
{ recipeID: 216, ingredientID: 83 },   // 오징어
{ recipeID: 216, ingredientID: 94 },   // 조개
{ recipeID: 216, ingredientID: 203 },  // 김치
{ recipeID: 216, ingredientID: 30 },   // 양파
{ recipeID: 216, ingredientID: 181 },  // 고춧가루
{ recipeID: 216, ingredientID: 196 },  // 간장

// 아욱국
{ recipeID: 217, ingredientID: 255 }, // 아욱 
{ recipeID: 217, ingredientID: 71 },   // 두부
{ recipeID: 217, ingredientID: 32 },   // 대파
{ recipeID: 217, ingredientID: 196 },  // 간장
{ recipeID: 217, ingredientID: 177 },  // 소금

// 시래기국
{ recipeID: 218, ingredientID: 256 }, // 시래기
{ recipeID: 218, ingredientID: 71 },   // 두부
{ recipeID: 218, ingredientID: 32 },   // 대파
{ recipeID: 218, ingredientID: 196 },  // 간장
{ recipeID: 218, ingredientID: 177 },  // 소금


// 육개장
{ recipeID: 219, ingredientID: 62 },   // 소고기
{ recipeID: 219, ingredientID: 32 },   // 대파
{ recipeID: 219, ingredientID: 257 }, // 고사리 
{ recipeID: 219, ingredientID: 181 },  // 고춧가루
{ recipeID: 219, ingredientID: 196 },  // 간장

// 수제비
{ recipeID: 220, ingredientID: 6 },    // 밀가루
{ recipeID: 220, ingredientID: 30 },   // 양파
{ recipeID: 220, ingredientID: 60 },   // 당근
{ recipeID: 220, ingredientID: 41 },   // 피망
{ recipeID: 220, ingredientID: 49 },   // 브로콜리
{ recipeID: 220, ingredientID: 43 },   // 상추
{ recipeID: 220, ingredientID: 196 },  // 간장
{ recipeID: 220, ingredientID: 179 },  // 후추

// 된장밥
{ recipeID: 221, ingredientID: 1 },    // 밥
{ recipeID: 221, ingredientID: 71 },   // 두부
{ recipeID: 221, ingredientID: 218 },  // 참기름
{ recipeID: 221, ingredientID: 177 },  // 소금
{ recipeID: 221, ingredientID: 201 },  // 된장

// 멸치볶음밥
{ recipeID: 222, ingredientID: 1 },    // 밥
{ recipeID: 222, ingredientID: 100 },  // 멸치
{ recipeID: 222, ingredientID: 30 },   // 양파
{ recipeID: 222, ingredientID: 60 },   // 당근
{ recipeID: 222, ingredientID: 41 },   // 피망
{ recipeID: 222, ingredientID: 49 },   // 브로콜리
{ recipeID: 222, ingredientID: 43 },   // 상추
{ recipeID: 222, ingredientID: 196 },  // 간장
{ recipeID: 222, ingredientID: 179 },  // 후추

// 피자
{ recipeID: 223, ingredientID: 228 },  // 피자도우
{ recipeID: 223, ingredientID: 120 },  // 치즈
{ recipeID: 223, ingredientID: 217 },  // 올리브유
{ recipeID: 223, ingredientID: 153 },  // 토마토소스

// 피자롤
{ recipeID: 224, ingredientID: 228 },  // 피자도우
{ recipeID: 224, ingredientID: 120 },  // 치즈
{ recipeID: 224, ingredientID: 104 },  // 소시지
{ recipeID: 224, ingredientID: 153 },  // 토마토소스

// 시래기볶음
{ recipeID: 225, ingredientID: 256 }, // 시래기
{ recipeID: 225, ingredientID: 31 },   // 마늘
{ recipeID: 225, ingredientID: 218 },  // 참기름
{ recipeID: 225, ingredientID: 196 },  // 간장

// 소고기타다끼
{ recipeID: 226, ingredientID: 62 },   // 소고기
{ recipeID: 226, ingredientID: 30 },   // 양파
{ recipeID: 226, ingredientID: 31 },   // 마늘
{ recipeID: 226, ingredientID: 196 },  // 간장
{ recipeID: 226, ingredientID: 179 },  // 후추

// 해물덮밥
{ recipeID: 227, ingredientID: 87 },   // 새우
{ recipeID: 227, ingredientID: 83 },   // 오징어
{ recipeID: 227, ingredientID: 94 },   // 조개
{ recipeID: 227, ingredientID: 1 },    // 밥
{ recipeID: 227, ingredientID: 30 },   // 양파
{ recipeID: 227, ingredientID: 60 },   // 당근
{ recipeID: 227, ingredientID: 41 },   // 피망
{ recipeID: 227, ingredientID: 49 },   // 브로콜리
{ recipeID: 227, ingredientID: 43 },   // 상추
{ recipeID: 227, ingredientID: 196 },  // 간장
{ recipeID: 227, ingredientID: 179 },  // 후추

// 마늘빵
{ recipeID: 228, ingredientID: 258 }, // 빵 
{ recipeID: 228, ingredientID: 31 },   // 마늘
{ recipeID: 228, ingredientID: 112 },  // 버터
{ recipeID: 228, ingredientID: 213 },  // 파슬리

// 카레
{ recipeID: 229, ingredientID: 37 },   // 감자
{ recipeID: 229, ingredientID: 60 },   // 당근
{ recipeID: 229, ingredientID: 30 },   // 양파
{ recipeID: 229, ingredientID: 185 },  // 카레가루
{ recipeID: 229, ingredientID: 177 },  // 소금

// 카츠동
{ recipeID: 230, ingredientID: 232 },  // 돈까스
{ recipeID: 230, ingredientID: 1 },    // 밥
{ recipeID: 230, ingredientID: 75 },   // 계란
{ recipeID: 230, ingredientID: 30 },   // 양파
{ recipeID: 230, ingredientID: 196 },  // 간장
{ recipeID: 230, ingredientID: 193 },  // 미림

// 두부된장국
{ recipeID: 231, ingredientID: 71 },   // 두부
{ recipeID: 231, ingredientID: 32 },   // 대파
{ recipeID: 231, ingredientID: 191 },  // 다진마늘
{ recipeID: 231, ingredientID: 201 },  // 된장

// 생선튀김
{ recipeID: 232, ingredientID: 227 },  // 생선
{ recipeID: 232, ingredientID: 8 },    // 튀김가루
{ recipeID: 232, ingredientID: 75 },   // 계란
{ recipeID: 232, ingredientID: 177 },  // 소금

// 비빔막국수
{ recipeID: 233, ingredientID: 298 },  // 메밀면
{ recipeID: 233, ingredientID: 32 },   // 대파
{ recipeID: 233, ingredientID: 30 },   // 양파
{ recipeID: 233, ingredientID: 43 },   // 상추
{ recipeID: 233, ingredientID: 60 },   // 당근
{ recipeID: 233, ingredientID: 38 },   // 호박
{ recipeID: 233, ingredientID: 218 },  // 참기름
{ recipeID: 233, ingredientID: 169 },  // 비빔소스

// 매운콩나물국
{ recipeID: 234, ingredientID: 72 },   // 콩나물
{ recipeID: 234, ingredientID: 32 },   // 대파
{ recipeID: 234, ingredientID: 40 },   // 고추
{ recipeID: 234, ingredientID: 196 },  // 간장
{ recipeID: 234, ingredientID: 177 },  // 소금

// 오리훈제
{ recipeID: 235, ingredientID: 66 },   // 오리
{ recipeID: 235, ingredientID: 179 },  // 후추
{ recipeID: 235, ingredientID: 31 },   // 마늘
{ recipeID: 235, ingredientID: 196 },  // 간장
{ recipeID: 235, ingredientID: 177 },  // 소금

// 명란젓
{ recipeID: 236, ingredientID: 189 },  // 명란
{ recipeID: 236, ingredientID: 177 },  // 소금

// 우동면
{ recipeID: 237, ingredientID: 128 },  // 우동면
{ recipeID: 237, ingredientID: 223 },  // 육수
{ recipeID: 237, ingredientID: 32 },   // 대파
{ recipeID: 237, ingredientID: 30 },   // 양파
{ recipeID: 237, ingredientID: 43 },   // 상추
{ recipeID: 237, ingredientID: 60 },   // 당근
{ recipeID: 237, ingredientID: 38 },   // 호박
{ recipeID: 237, ingredientID: 196 },  // 간장

// 하이라이스
{ recipeID: 238, ingredientID: 1 },    // 밥
{ recipeID: 238, ingredientID: 259 }, //  다짐육
{ recipeID: 238, ingredientID: 30 },   // 양파
{ recipeID: 238, ingredientID: 60 },   // 당근
{ recipeID: 238, ingredientID: 152 },  // 돈가스소스

// 포케
{ recipeID: 239, ingredientID: 1 },    // 밥
{ recipeID: 239, ingredientID: 227 },  // 생선
{ recipeID: 239, ingredientID: 32 },   // 대파
{ recipeID: 239, ingredientID: 30 },   // 양파
{ recipeID: 239, ingredientID: 43 },   // 상추
{ recipeID: 239, ingredientID: 60 },   // 당근
{ recipeID: 239, ingredientID: 38 },   // 호박
{ recipeID: 239, ingredientID: 162 },  // 드레싱

// 회덮밥
{ recipeID: 240, ingredientID: 1 },    // 밥
{ recipeID: 240, ingredientID: 252 }, // 회 
{ recipeID: 240, ingredientID: 32 },   // 대파
{ recipeID: 240, ingredientID: 30 },   // 양파
{ recipeID: 240, ingredientID: 43 },   // 상추
{ recipeID: 240, ingredientID: 60 },   // 당근
{ recipeID: 240, ingredientID: 38 },   // 호박
{ recipeID: 240, ingredientID: 199 },  // 고추장
{ recipeID: 240, ingredientID: 218 },  // 참기름

// 아귀찜
{ recipeID: 241, ingredientID: 103 },  // 아귀
{ recipeID: 241, ingredientID: 260 }, // 미나리 
{ recipeID: 241, ingredientID: 72 },   // 콩나물
{ recipeID: 241, ingredientID: 199 },  // 고추장
{ recipeID: 241, ingredientID: 196 },  // 간장
{ recipeID: 241, ingredientID: 218 },  // 참기름

// 동태전
{ recipeID: 242, ingredientID: 234 },  // 동태
{ recipeID: 242, ingredientID: 6 },    // 밀가루
{ recipeID: 242, ingredientID: 75 },   // 계란
{ recipeID: 242, ingredientID: 177 },  // 소금

// 두부두루치기
{ recipeID: 243, ingredientID: 71 },   // 두부
{ recipeID: 243, ingredientID: 40 },   // 고추
{ recipeID: 243, ingredientID: 30 },   // 양파
{ recipeID: 243, ingredientID: 199 },  // 고추장
{ recipeID: 243, ingredientID: 191 },  // 다진마늘

// 미역줄기
{ recipeID: 244, ingredientID: 261 }, // 미역줄기 
{ recipeID: 244, ingredientID: 40 },   // 고추
{ recipeID: 244, ingredientID: 191 },  // 다진마늘
{ recipeID: 244, ingredientID: 196 },  // 간장

// 해물샤브샤브
{ recipeID: 245, ingredientID: 87 },   // 새우
{ recipeID: 245, ingredientID: 83 },   // 오징어
{ recipeID: 245, ingredientID: 94 },   // 조개
{ recipeID: 245, ingredientID: 53 },   // 배추
{ recipeID: 245, ingredientID: 52 },   // 버섯
{ recipeID: 245, ingredientID: 32 },   // 파
{ recipeID: 245, ingredientID: 196 },  // 간장
{ recipeID: 245, ingredientID: 191 },  // 다진마늘

// 쇠고기스튜
{ recipeID: 246, ingredientID: 62 },   // 소고기
{ recipeID: 246, ingredientID: 37 },   // 감자
{ recipeID: 246, ingredientID: 60 },   // 당근
{ recipeID: 246, ingredientID: 30 },   // 양파
{ recipeID: 246, ingredientID: 31 },   // 마늘
{ recipeID: 246, ingredientID: 177 },  // 소금
{ recipeID: 246, ingredientID: 179 },  // 후추

// 오징어구이
{ recipeID: 247, ingredientID: 83 },   // 오징어
{ recipeID: 247, ingredientID: 179 },  // 후추
{ recipeID: 247, ingredientID: 249 }, // 레몬 
{ recipeID: 247, ingredientID: 177 },  // 소금

// 카레우동
{ recipeID: 248, ingredientID: 128 },  // 우동면
{ recipeID: 248, ingredientID: 30 },   // 양파
{ recipeID: 248, ingredientID: 60 },   // 당근
{ recipeID: 248, ingredientID: 196 },  // 간장
{ recipeID: 248, ingredientID: 179 },  // 후추
{ recipeID: 248, ingredientID: 185 },  // 카레가루

// 스테이크
{ recipeID: 249, ingredientID: 62 },   // 소고기
{ recipeID: 249, ingredientID: 179 },  // 후추
{ recipeID: 249, ingredientID: 112 },  // 버터
{ recipeID: 249, ingredientID: 177 },  // 소금
{ recipeID: 249, ingredientID: 217 },  // 올리브유

// 파스타
{ recipeID: 250, ingredientID: 131 },  // 파스타면
{ recipeID: 250, ingredientID: 191 },  // 마늘
{ recipeID: 250, ingredientID: 34 },   // 토마토
{ recipeID: 250, ingredientID: 215 },  // 바질
{ recipeID: 250, ingredientID: 177 },  // 소금
{ recipeID: 250, ingredientID: 179 },  // 후추
{ recipeID: 250, ingredientID: 217 },  // 올리브유

// 타코
{ recipeID: 251, ingredientID: 262 }, // 타코쉘 
{ recipeID: 251, ingredientID: 259 }, // 다진고기 
{ recipeID: 251, ingredientID: 43 },   // 상추
{ recipeID: 251, ingredientID: 34 },   // 토마토
{ recipeID: 251, ingredientID: 120 },  // 치즈
{ recipeID: 251, ingredientID: 170 },  // 살사소스

// 핫윙
{ recipeID: 252, ingredientID: 69 },   // 닭날개
{ recipeID: 252, ingredientID: 179 },  // 후추
{ recipeID: 252, ingredientID: 176 },  // 핫소스
{ recipeID: 252, ingredientID: 177 },  // 소금

// 만두
{ recipeID: 253, ingredientID: 136 },  // 만두피
{ recipeID: 253, ingredientID: 63 },   // 돼지고기
{ recipeID: 253, ingredientID: 46 },   // 부추
{ recipeID: 253, ingredientID: 30 },   // 양파
{ recipeID: 253, ingredientID: 31 },   // 마늘
{ recipeID: 253, ingredientID: 196 },  // 간장
{ recipeID: 253, ingredientID: 179 },  // 후추

// 오리백숙
{ recipeID: 254, ingredientID: 66 },   // 오리
{ recipeID: 254, ingredientID: 32 },   // 대파
{ recipeID: 254, ingredientID: 31 },   // 마늘
{ recipeID: 254, ingredientID: 195 },  // 생강
{ recipeID: 254, ingredientID: 177 },  // 소금
{ recipeID: 254, ingredientID: 179 },  // 후추

// 뼈해장국
{ recipeID: 255, ingredientID: 70 },   // 소갈비
{ recipeID: 255, ingredientID: 54 },   // 무
{ recipeID: 255, ingredientID: 32 },   // 대파
{ recipeID: 255, ingredientID: 31 },   // 마늘
{ recipeID: 255, ingredientID: 177 },  // 소금
{ recipeID: 255, ingredientID: 179 },  // 후추

// 사골국밥
{ recipeID: 256, ingredientID: 223 }, // 육수
{ recipeID: 256, ingredientID: 1 },    // 밥
{ recipeID: 256, ingredientID: 32 },   // 대파
{ recipeID: 256, ingredientID: 31 },   // 마늘
{ recipeID: 256, ingredientID: 177 },  // 소금
{ recipeID: 256, ingredientID: 179 },  // 후추

// 닭가슴살샐러드
{ recipeID: 257, ingredientID: 145 },  // 닭가슴살
{ recipeID: 257, ingredientID: 43 },   // 상추
{ recipeID: 257, ingredientID: 34 },   // 토마토
{ recipeID: 257, ingredientID: 34 },   // 오이
{ recipeID: 257, ingredientID: 162 },  // 드레싱

// 대구탕
{ recipeID: 258, ingredientID: 263 }, // 대구
{ recipeID: 258, ingredientID: 54 },   // 무
{ recipeID: 258, ingredientID: 32 },   // 대파
{ recipeID: 258, ingredientID: 31 },   // 마늘
{ recipeID: 258, ingredientID: 181 },  // 고춧가루
{ recipeID: 258, ingredientID: 196 },  // 간장

// 삼계탕
{ recipeID: 259, ingredientID: 64 }, // 닭고기
{ recipeID: 259, ingredientID: 57 },   // 인삼
{ recipeID: 259, ingredientID: 31 },   // 마늘
{ recipeID: 259, ingredientID: 32 },   // 대파
{ recipeID: 259, ingredientID: 177 },  // 소금
{ recipeID: 259, ingredientID: 179 },  // 후추

// 돼지찜
{ recipeID: 260, ingredientID: 63 },   // 돼지고기
{ recipeID: 260, ingredientID: 54 },   // 무
{ recipeID: 260, ingredientID: 30 },   // 양파
{ recipeID: 260, ingredientID: 60 },   // 당근
{ recipeID: 260, ingredientID: 196 },  // 간장
{ recipeID: 260, ingredientID: 191 },  // 다진마늘

// 바지락술찜
{ recipeID: 261, ingredientID: 94 },   // 바지락
{ recipeID: 261, ingredientID: 32 },   // 대파
{ recipeID: 261, ingredientID: 40 },   // 고추
{ recipeID: 261, ingredientID: 177 },  // 소금
{ recipeID: 261, ingredientID: 196 },  // 간장

// 조기조림
{ recipeID: 262, ingredientID: 102 },  // 조기
{ recipeID: 262, ingredientID: 30 },   // 양파
{ recipeID: 262, ingredientID: 54 },   // 무
{ recipeID: 262, ingredientID: 196 },  // 간장
{ recipeID: 262, ingredientID: 181 },  // 고춧가루

// 홍합찜
{ recipeID: 263, ingredientID: 93 },   // 홍합
{ recipeID: 263, ingredientID: 32 },   // 대파
{ recipeID: 263, ingredientID: 40 },   // 고추
{ recipeID: 263, ingredientID: 196 },  // 간장
{ recipeID: 263, ingredientID: 191 },  // 다진마늘

// 연어스테이크
{ recipeID: 264, ingredientID: 80 },   // 연어
{ recipeID: 264, ingredientID: 179 },  // 후추
{ recipeID: 264, ingredientID: 249 }, // 레몬 
{ recipeID: 264, ingredientID: 217 },  // 올리브유
{ recipeID: 264, ingredientID: 177 },  // 소금

// 미트로프
{ recipeID: 265, ingredientID: 259 }, // 다짐육
{ recipeID: 265, ingredientID: 30 },   // 양파
{ recipeID: 265, ingredientID: 75 },   // 계란
{ recipeID: 265, ingredientID: 230 },  // 빵가루
{ recipeID: 265, ingredientID: 177 },  // 소금
{ recipeID: 265, ingredientID: 179 },  // 후추
{ recipeID: 265, ingredientID: 150 },  // 케찹

// 햄버거
{ recipeID: 266, ingredientID: 107 },  // 햄버거패티
{ recipeID: 266, ingredientID: 257 }, // 빵 
{ recipeID: 266, ingredientID: 43 },   // 상추
{ recipeID: 266, ingredientID: 34 },   // 토마토
{ recipeID: 266, ingredientID: 120 },  // 치즈
{ recipeID: 266, ingredientID: 171 },  // 스테이크소스

// 나시레마
{ recipeID: 267, ingredientID: 1 },    // 밥
{ recipeID: 267, ingredientID: 64 },   // 치킨
{ recipeID: 267, ingredientID: 264 }, // 사테이
{ recipeID: 267, ingredientID: 164 },  // 땅콩소스
{ recipeID: 267, ingredientID: 206 },  // 피시소스

// 스프링롤
{ recipeID: 268, ingredientID: 265 }, // 스프링롤피 
{ recipeID: 268, ingredientID: 87 },   // 새우
{ recipeID: 268, ingredientID: 32 },   // 대파
{ recipeID: 268, ingredientID: 30 },   // 양파
{ recipeID: 268, ingredientID: 43 },   // 상추
{ recipeID: 268, ingredientID: 60 },   // 당근
{ recipeID: 268, ingredientID: 38 },   // 호박
{ recipeID: 268, ingredientID: 160 },  // 느억맘소스


// 채소스틱
{ recipeID: 269, ingredientID: 60 },   // 당근
{ recipeID: 269, ingredientID: 34 },   // 오이
{ recipeID: 269, ingredientID: 266 }, // 셀러리 
{ recipeID: 269, ingredientID: 163 },  // 디핑소스

// 완자탕
{ recipeID: 270, ingredientID: 267 }, // 완자
{ recipeID: 270, ingredientID: 54 },   // 무
{ recipeID: 270, ingredientID: 32 },   // 대파
{ recipeID: 270, ingredientID: 177 },  // 소금
{ recipeID: 270, ingredientID: 179 },  // 후추

// 키조개조림
{ recipeID: 271, ingredientID: 268 }, // 키조개 
{ recipeID: 271, ingredientID: 30 },   // 양파
{ recipeID: 271, ingredientID: 40 },   // 고추
{ recipeID: 271, ingredientID: 196 },  // 간장
{ recipeID: 271, ingredientID: 181 },  // 고춧가루

// 소고기무국
{ recipeID: 272, ingredientID: 62 },   // 소고기
{ recipeID: 272, ingredientID: 54 },   // 무
{ recipeID: 272, ingredientID: 32 },   // 대파
{ recipeID: 272, ingredientID: 177 },  // 소금
{ recipeID: 272, ingredientID: 179 },  // 후추

// 묵사발
{ recipeID: 273, ingredientID: 269 }, // 묵 
{ recipeID: 273, ingredientID: 34 },   // 오이
{ recipeID: 273, ingredientID: 60 },   // 당근
{ recipeID: 273, ingredientID: 32 },   // 파
{ recipeID: 273, ingredientID: 196 },  // 간장
{ recipeID: 273, ingredientID: 180 },  // 식초

// 감자전
{ recipeID: 274, ingredientID: 37 },   // 감자
{ recipeID: 274, ingredientID: 6 },    // 밀가루
{ recipeID: 274, ingredientID: 30 },   // 양파
{ recipeID: 274, ingredientID: 177 },  // 소금
{ recipeID: 274, ingredientID: 216 },  // 식용유

// 동태조림
{ recipeID: 275, ingredientID: 234 },  // 동태
{ recipeID: 275, ingredientID: 54 },   // 무
{ recipeID: 275, ingredientID: 32 },   // 대파
{ recipeID: 275, ingredientID: 30 },   // 양파
{ recipeID: 275, ingredientID: 196 },  // 간장
{ recipeID: 275, ingredientID: 181 },  // 고춧가루

// 아귀회
{ recipeID: 276, ingredientID: 103 },  // 아귀
{ recipeID: 276, ingredientID: 40 },   // 고추
{ recipeID: 276, ingredientID: 196 },  // 간장
{ recipeID: 276, ingredientID: 177 },  // 소금

// 차돌박이
{ recipeID: 277, ingredientID: 270 }, // 차돌박이 
{ recipeID: 277, ingredientID: 32 },   // 대파
{ recipeID: 277, ingredientID: 31 },   // 마늘
{ recipeID: 277, ingredientID: 177 },  // 소금
{ recipeID: 277, ingredientID: 179 },  // 후추

// 육회비빔밥
{ recipeID: 278, ingredientID: 1 },    // 밥
{ recipeID: 278, ingredientID: 270 }, // 육회 
{ recipeID: 278, ingredientID: 32 },   // 대파
{ recipeID: 278, ingredientID: 30 },   // 양파
{ recipeID: 278, ingredientID: 43 },   // 상추
{ recipeID: 278, ingredientID: 60 },   // 당근
{ recipeID: 278, ingredientID: 38 },   // 호박
{ recipeID: 278, ingredientID: 199 },  // 고추장
{ recipeID: 278, ingredientID: 218 },  // 참기름


// 찐빵
{ recipeID: 279, ingredientID: 6 },     // 밀가루
{ recipeID: 279, ingredientID: 219 },   // 효모
{ recipeID: 279, ingredientID: 221 },   // 팥소
{ recipeID: 279, ingredientID: 178 },   // 설탕

// 순대국
{ recipeID: 280, ingredientID: 238 },  // 순대 
{ recipeID: 280, ingredientID: 223 },  // 국물 
{ recipeID: 280, ingredientID: 32 },    // 대파
{ recipeID: 280, ingredientID: 177 },   // 소금
{ recipeID: 280, ingredientID: 179 },   // 후추

// 자장밥
{ recipeID: 281, ingredientID: 1 },     // 밥
{ recipeID: 281, ingredientID: 40 },    // 고추
{ recipeID: 281, ingredientID: 30 },    // 양파
{ recipeID: 281, ingredientID: 173 },   // 짜장소스

// 연어초밥
{ recipeID: 282, ingredientID: 1 },  // 밥
{ recipeID: 282, ingredientID: 80 },    // 연어
{ recipeID: 282, ingredientID: 224 },   // 김
{ recipeID: 282, ingredientID: 196 },   // 간장
{ recipeID: 282, ingredientID: 159 },   // 와사비
{ recipeID: 282, ingredientID: 178 },   // 설탕
{ recipeID: 282, ingredientID: 180 },   // 식초
{ recipeID: 282, ingredientID: 177 },   // 소금
{ recipeID: 282, ingredientID: 272 },   // 다시마

// 양배추스테이크
{ recipeID: 283, ingredientID: 47 },    // 양배추
{ recipeID: 283, ingredientID: 179 },   // 후추
{ recipeID: 283, ingredientID: 177 },   // 소금
{ recipeID: 283, ingredientID: 217 },   // 올리브유

// 대파전
{ recipeID: 284, ingredientID: 32 },    // 대파
{ recipeID: 284, ingredientID: 6 },     // 밀가루
{ recipeID: 284, ingredientID: 75 },    // 계란
{ recipeID: 284, ingredientID: 196 },   // 간장
{ recipeID: 284, ingredientID: 180 },   // 식초

// 가지전
{ recipeID: 285, ingredientID: 35 },    // 가지
{ recipeID: 285, ingredientID: 6 },     // 밀가루
{ recipeID: 285, ingredientID: 75 },    // 계란
{ recipeID: 285, ingredientID: 177 },   // 소금
{ recipeID: 285, ingredientID: 179 },   // 후추

// 햄볶음밥
{ recipeID: 286, ingredientID: 1 },     // 밥
{ recipeID: 286, ingredientID: 105 },   // 햄
{ recipeID: 286, ingredientID: 30 },    // 양파
{ recipeID: 286, ingredientID: 60 },    // 당근
{ recipeID: 286, ingredientID: 41 },    // 피망
{ recipeID: 286, ingredientID: 49 },    // 브로콜리
{ recipeID: 286, ingredientID: 43 },    // 상추
{ recipeID: 286, ingredientID: 196 },   // 간장
{ recipeID: 286, ingredientID: 179 },   // 후추

// 연어구이
{ recipeID: 287, ingredientID: 80 },    // 연어
{ recipeID: 287, ingredientID: 179 },   // 후추
{ recipeID: 287, ingredientID: 165 },   // 레몬
{ recipeID: 287, ingredientID: 177 },   // 소금

// 미역국밥
{ recipeID: 288, ingredientID: 1 },     // 밥
{ recipeID: 288, ingredientID: 273 },  // 미역
{ recipeID: 288, ingredientID: 62 },    // 소고기
{ recipeID: 288, ingredientID: 196 },   // 간장
{ recipeID: 288, ingredientID: 179 },   // 후추

// 메추리알장조림
{ recipeID: 289, ingredientID: 76 },    // 메추리알
{ recipeID: 289, ingredientID: 31 },    // 마늘
{ recipeID: 289, ingredientID: 179 },   // 후추
{ recipeID: 289, ingredientID: 178 },   // 설탕
{ recipeID: 289, ingredientID: 196 },   // 간장

// 유린기
{ recipeID: 290, ingredientID: 64 },    // 닭고기
{ recipeID: 290, ingredientID: 8 },     // 튀김가루
{ recipeID: 290, ingredientID: 30 },    // 양파
{ recipeID: 290, ingredientID: 172 },   // 유린기소스

// 소고기미역국
{ recipeID: 291, ingredientID: 62 },    // 소고기
{ recipeID: 291, ingredientID: 273 },  // 미역 
{ recipeID: 291, ingredientID: 32 },    // 대파
{ recipeID: 291, ingredientID: 196 },   // 간장
{ recipeID: 291, ingredientID: 179 },   // 후추

// 낙지국수
{ recipeID: 292, ingredientID: 133 },   // 국수
{ recipeID: 292, ingredientID: 84 },    // 낙지
{ recipeID: 292, ingredientID: 30 },    // 양파
{ recipeID: 292, ingredientID: 196 },   // 간장
{ recipeID: 292, ingredientID: 181 },   // 고춧가루

// 간장떡볶이
{ recipeID: 293, ingredientID: 137 },   // 떡
{ recipeID: 293, ingredientID: 235 },   // 어묵
{ recipeID: 293, ingredientID: 30 },    // 양파
{ recipeID: 293, ingredientID: 196 },   // 간장
{ recipeID: 293, ingredientID: 178 },   // 설탕

// 짬뽕국물
{ recipeID: 294, ingredientID: 124 },   // 면
{ recipeID: 294, ingredientID: 87 },  // 새우
{ recipeID: 294, ingredientID: 83 },  // 오징어, 
{ recipeID: 294, ingredientID: 275 },  //  조개
{ recipeID: 294, ingredientID: 30 },    // 양파
{ recipeID: 294, ingredientID: 53 },    // 배추
{ recipeID: 294, ingredientID: 181 },   // 고춧가루
{ recipeID: 294, ingredientID: 196 },   // 간장

// 마늘간장치킨
{ recipeID: 295, ingredientID: 64 },    // 닭고기
{ recipeID: 295, ingredientID: 31 },    // 마늘
{ recipeID: 295, ingredientID: 178 },   // 설탕
{ recipeID: 295, ingredientID: 179 },   // 후추
{ recipeID: 295, ingredientID: 196 },   // 간장

// 버섯볶음
{ recipeID: 296, ingredientID: 52 },    // 버섯
{ recipeID: 296, ingredientID: 30 },    // 양파
{ recipeID: 296, ingredientID: 32 },    // 대파
{ recipeID: 296, ingredientID: 196 },   // 간장
{ recipeID: 296, ingredientID: 218 },   // 참기름

// 양송이스프
{ recipeID: 297, ingredientID: 274 },  // 양송이버섯 
{ recipeID: 297, ingredientID: 113 },   // 생크림
{ recipeID: 297, ingredientID: 30 },    // 양파
{ recipeID: 297, ingredientID: 177 },   // 소금
{ recipeID: 297, ingredientID: 179 },   // 후추

// 샤브샤브국물
{ recipeID: 298, ingredientID: 62 },    // 소고기
{ recipeID: 298, ingredientID: 32 },    // 대파
{ recipeID: 298, ingredientID: 30 },    // 양파
{ recipeID: 298, ingredientID: 60 },    // 당근
{ recipeID: 298, ingredientID: 41 },    // 피망
{ recipeID: 298, ingredientID: 49 },    // 브로콜리
{ recipeID: 298, ingredientID: 43 },    // 상추
{ recipeID: 298, ingredientID: 196 },   // 간장
{ recipeID: 298, ingredientID: 177 },   // 소금

// 매운닭발
{ recipeID: 299, ingredientID: 276 },  // 닭발 
{ recipeID: 299, ingredientID: 196 },   // 간장
{ recipeID: 299, ingredientID: 191 },   // 다진마늘
{ recipeID: 299, ingredientID: 199 },   // 고추장
{ recipeID: 299, ingredientID: 181 },   // 고춧가루

// 닭봉구이
{ recipeID: 300, ingredientID: 69 },    // 닭봉
{ recipeID: 300, ingredientID: 179 },   // 후추
{ recipeID: 300, ingredientID: 217 },   // 올리브유
{ recipeID: 300, ingredientID: 177 },   // 소금

// 바지락칼국수
{ recipeID: 301, ingredientID: 141 },   // 칼국수면
{ recipeID: 301, ingredientID: 94 },    // 바지락
{ recipeID: 301, ingredientID: 30 },    // 양파
{ recipeID: 301, ingredientID: 196 },   // 간장
{ recipeID: 301, ingredientID: 191 },   // 다진마늘

// 두부샐러드
{ recipeID: 302, ingredientID: 71 },    // 두부
{ recipeID: 302, ingredientID: 43 },    // 상추
{ recipeID: 302, ingredientID: 24 },    // 토마토
{ recipeID: 302, ingredientID: 162 },   // 드레싱

// 타코야끼
{ recipeID: 303, ingredientID: 277 },  // 타코야끼믹스 
{ recipeID: 303, ingredientID: 83 },    // 오징어
{ recipeID: 303, ingredientID: 32 },    // 파
{ recipeID: 303, ingredientID: 174 },   // 타코야끼소스

// 파프리카볶음
{ recipeID: 304, ingredientID: 42 },    // 파프리카
{ recipeID: 304, ingredientID: 30 },    // 양파
{ recipeID: 304, ingredientID: 31 },    // 마늘
{ recipeID: 304, ingredientID: 177 },   // 소금
{ recipeID: 304, ingredientID: 179 },   // 후추

// 파리크라상
{ recipeID: 305, ingredientID: 6 },     // 밀가루
{ recipeID: 305, ingredientID: 112 },   // 버터
{ recipeID: 305, ingredientID: 219 },   // 이스트
{ recipeID: 305, ingredientID: 178 },   // 설탕

// 바나나빵
{ recipeID: 306, ingredientID: 14 },    // 바나나
{ recipeID: 306, ingredientID: 6 },     // 밀가루
{ recipeID: 306, ingredientID: 75 },    // 계란
{ recipeID: 306, ingredientID: 178 },   // 설탕

// 스위트포테이토
{ recipeID: 307, ingredientID: 36 },    // 고구마
{ recipeID: 307, ingredientID: 112 },   // 버터
{ recipeID: 307, ingredientID: 177 },   // 소금
{ recipeID: 307, ingredientID: 178 },   // 설탕

// 애호박전
{ recipeID: 308, ingredientID: 61 },    // 애호박
{ recipeID: 308, ingredientID: 6 },     // 밀가루
{ recipeID: 308, ingredientID: 75 },    // 계란
{ recipeID: 308, ingredientID: 177 },   // 소금

// 복숭아죽
{ recipeID: 309, ingredientID: 16 },    // 복숭아
{ recipeID: 309, ingredientID: 278 },  // 쌀가루 
{ recipeID: 309, ingredientID: 192 },   // 물엿
{ recipeID: 309, ingredientID: 178 },   // 설탕

// 고구마스프
{ recipeID: 310, ingredientID: 36 },   // 고구마
{ recipeID: 310, ingredientID: 30 },   // 양파
{ recipeID: 310, ingredientID: 113 },  // 생크림
{ recipeID: 310, ingredientID: 177 },  // 소금
{ recipeID: 310, ingredientID: 179 },  // 후추

// 퓨전김치
{ recipeID: 311, ingredientID: 203 },  // 김치
{ recipeID: 311, ingredientID: 11 }, // 사과 
{ recipeID: 311, ingredientID: 12 }, // 배
{ recipeID: 311, ingredientID: 13 }, // 귤 
{ recipeID: 311, ingredientID: 181 },  // 고춧가루
{ recipeID: 311, ingredientID: 177 },  // 소금

// 장어구이덮밥
{ recipeID: 312, ingredientID: 81 },   // 장어
{ recipeID: 312, ingredientID: 1 },    // 밥
{ recipeID: 312, ingredientID: 191 },  // 다진마늘
{ recipeID: 312, ingredientID: 218 },  // 참기름
{ recipeID: 312, ingredientID: 196 },  // 간장

// 조개찜
{ recipeID: 313, ingredientID: 94 },   // 조개
{ recipeID: 313, ingredientID: 31 },   // 마늘
{ recipeID: 313, ingredientID: 32 },   // 대파
{ recipeID: 313, ingredientID: 196 },  // 간장
{ recipeID: 313, ingredientID: 177 },  // 소금

// 부추김치
{ recipeID: 314, ingredientID: 46 },   // 부추
{ recipeID: 314, ingredientID: 191 },  // 다진마늘
{ recipeID: 314, ingredientID: 181 },  // 고춧가루
{ recipeID: 314, ingredientID: 177 },  // 소금

// 고추잡채
{ recipeID: 315, ingredientID: 40 },   // 고추
{ recipeID: 315, ingredientID: 63 },   // 돼지고기
{ recipeID: 315, ingredientID: 30 },   // 양파
{ recipeID: 315, ingredientID: 196 },  // 간장
{ recipeID: 315, ingredientID: 179 },  // 후추

// 쫄면무침
{ recipeID: 316, ingredientID: 134 },  // 쫄면
{ recipeID: 316, ingredientID: 34 },   // 오이
{ recipeID: 316, ingredientID: 60 },   // 당근
{ recipeID: 316, ingredientID: 199 },  // 고추장
{ recipeID: 316, ingredientID: 180 },  // 식초

// 김치전
{ recipeID: 317, ingredientID: 203 },  // 김치
{ recipeID: 317, ingredientID: 6 },    // 밀가루
{ recipeID: 317, ingredientID: 75 },   // 계란
{ recipeID: 317, ingredientID: 177 },  // 소금

// 당면샐러드
{ recipeID: 318, ingredientID: 132 },  // 당면
{ recipeID: 318, ingredientID: 32 },   // 대파
{ recipeID: 318, ingredientID: 30 },   // 양파
{ recipeID: 318, ingredientID: 43 },   // 상추
{ recipeID: 318, ingredientID: 60 },   // 당근
{ recipeID: 318, ingredientID: 61 },   // 호박
{ recipeID: 318, ingredientID: 196 },  // 간장
{ recipeID: 318, ingredientID: 162 },  // 드레싱

// 햄버거스테이크
{ recipeID: 319, ingredientID: 62 },   // 소고기
{ recipeID: 319, ingredientID: 30 },   // 양파
{ recipeID: 319, ingredientID: 31 },   // 마늘
{ recipeID: 319, ingredientID: 177 },  // 소금
{ recipeID: 319, ingredientID: 179 },  // 후추

// 쌈밥
{ recipeID: 320, ingredientID: 1 },   // 밥
{ recipeID: 320, ingredientID: 43 },  // 상추
{ recipeID: 320, ingredientID: 63 },  // 돼지고기
{ recipeID: 320, ingredientID: 205 }, // 쌈장

// 전복구이
{ recipeID: 321, ingredientID: 90 },  // 전복
{ recipeID: 321, ingredientID: 31 },  // 마늘
{ recipeID: 321, ingredientID: 112 }, // 버터
{ recipeID: 321, ingredientID: 177 }, // 소금

// 바지락국수
{ recipeID: 322, ingredientID: 133 }, // 소면
{ recipeID: 322, ingredientID: 94 },  // 바지락
{ recipeID: 322, ingredientID: 32 },  // 대파
{ recipeID: 322, ingredientID: 196 }, // 간장
{ recipeID: 322, ingredientID: 179 }, // 후추

// 해물뼈다귀탕
{ recipeID: 323, ingredientID: 279 }, // 돼지등뼈
{ recipeID: 323, ingredientID: 87 },   // 새우
{ recipeID: 323, ingredientID: 83 },   // 오징어
{ recipeID: 323, ingredientID: 94 },   // 조개
{ recipeID: 323, ingredientID: 30 },   // 양파
{ recipeID: 323, ingredientID: 181 },  // 고춧가루
{ recipeID: 323, ingredientID: 177 },  // 소금

// 닭똥집볶음
{ recipeID: 324, ingredientID: 280 }, // 닭똥집 
{ recipeID: 324, ingredientID: 30 },   // 양파
{ recipeID: 324, ingredientID: 40 },   // 고추
{ recipeID: 324, ingredientID: 196 },  // 간장
{ recipeID: 324, ingredientID: 179 },  // 후추

// 두부전
{ recipeID: 325, ingredientID: 71 },   // 두부
{ recipeID: 325, ingredientID: 6 },    // 밀가루
{ recipeID: 325, ingredientID: 75 },   // 계란
{ recipeID: 325, ingredientID: 177 },  // 소금
{ recipeID: 325, ingredientID: 179 },  // 후추

// 돼지수육
{ recipeID: 326, ingredientID: 63 },   // 돼지고기
{ recipeID: 326, ingredientID: 32 },   // 대파
{ recipeID: 326, ingredientID: 31 },   // 마늘
{ recipeID: 326, ingredientID: 177 },  // 소금
{ recipeID: 326, ingredientID: 179 },  // 후추

// 조개구이
{ recipeID: 327, ingredientID: 94 },   // 조개
{ recipeID: 327, ingredientID: 31 },   // 마늘
{ recipeID: 327, ingredientID: 217 },  // 올리브유
{ recipeID: 327, ingredientID: 177 },  // 소금

// 홍합국
{ recipeID: 328, ingredientID: 93 },   // 홍합
{ recipeID: 328, ingredientID: 32 },   // 대파
{ recipeID: 328, ingredientID: 31 },   // 마늘
{ recipeID: 328, ingredientID: 196 },  // 간장
{ recipeID: 328, ingredientID: 177 },  // 소금

// 연어덮밥
{ recipeID: 329, ingredientID: 1 },    // 밥
{ recipeID: 329, ingredientID: 80 },   // 연어
{ recipeID: 329, ingredientID: 34 },   // 오이
{ recipeID: 329, ingredientID: 281 }, // 아보카도 
{ recipeID: 329, ingredientID: 196 },  // 간장
{ recipeID: 329, ingredientID: 218 },  // 참기름






// 쭈꾸미샤브샤브
{ recipeID: 330, ingredientID: 85 },   // 쭈꾸미
{ recipeID: 330, ingredientID: 53 },   // 배추
{ recipeID: 330, ingredientID: 52 },   // 버섯
{ recipeID: 330, ingredientID: 32 },   // 파
{ recipeID: 330, ingredientID: 196 },  // 간장
{ recipeID: 330, ingredientID: 181 },  // 고춧가루

// 물회
{ recipeID: 331, ingredientID: 252 }, // 회 
{ recipeID: 331, ingredientID: 34 },   // 오이
{ recipeID: 331, ingredientID: 54 },   // 무
{ recipeID: 331, ingredientID: 32 },   // 대파
{ recipeID: 331, ingredientID: 30 },   // 양파
{ recipeID: 331, ingredientID: 43 },   // 상추
{ recipeID: 331, ingredientID: 60 },   // 당근
{ recipeID: 331, ingredientID: 61 },   // 호박
{ recipeID: 331, ingredientID: 200 },  // 초고추장

// 멍게비빔밥
{ recipeID: 332, ingredientID: 1 },    // 밥
{ recipeID: 332, ingredientID: 282 }, // 멍게 
{ recipeID: 332, ingredientID: 30 },   // 양파
{ recipeID: 332, ingredientID: 60 },   // 당근
{ recipeID: 332, ingredientID: 41 },   // 피망
{ recipeID: 332, ingredientID: 49 },   // 브로콜리
{ recipeID: 332, ingredientID: 43 },   // 상추
{ recipeID: 332, ingredientID: 218 },  // 참기름
{ recipeID: 332, ingredientID: 199 },  // 고추장

// 쑥갓무침
{ recipeID: 333, ingredientID: 283 }, // 쑥갓
{ recipeID: 333, ingredientID: 191 },  // 다진마늘
{ recipeID: 333, ingredientID: 218 },  // 참기름
{ recipeID: 333, ingredientID: 196 },  // 간장
{ recipeID: 333, ingredientID: 181 },  // 고춧가루

// 바나나스프
{ recipeID: 334, ingredientID: 14 },   // 바나나
{ recipeID: 334, ingredientID: 108 },  // 우유
{ recipeID: 334, ingredientID: 178 },  // 설탕

// 아보카도샐러드
{ recipeID: 335, ingredientID: 281 }, // 아보카도
{ recipeID: 335, ingredientID: 29 },   // 방울토마토
{ recipeID: 335, ingredientID: 43 },   // 상추
{ recipeID: 335, ingredientID: 30 },   // 양파
{ recipeID: 335, ingredientID: 162 },  // 드레싱

// 멕시칸타코
{ recipeID: 336, ingredientID: 262 }, // 타코쉘
{ recipeID: 336, ingredientID: 62 },   // 다진고기
{ recipeID: 336, ingredientID: 43 },   // 상추
{ recipeID: 336, ingredientID: 30 },   // 토마토
{ recipeID: 336, ingredientID: 120 },  // 치즈
{ recipeID: 336, ingredientID: 170 },  // 살사소스

// 파스타샐러드
{ recipeID: 337, ingredientID: 131 },  // 파스타면
{ recipeID: 337, ingredientID: 34 },   // 오이
{ recipeID: 337, ingredientID: 29 },   // 방울토마토
{ recipeID: 337, ingredientID: 287 }, // 올리브
{ recipeID: 337, ingredientID: 162 },  // 드레싱

// 퀘사디아
{ recipeID: 338, ingredientID: 284 }, // 또띠아
{ recipeID: 338, ingredientID: 120 },  // 치즈
{ recipeID: 338, ingredientID: 32 },   // 대파
{ recipeID: 338, ingredientID: 30 },   // 양파
{ recipeID: 338, ingredientID: 43 },   // 상추
{ recipeID: 338, ingredientID: 60 },   // 당근
{ recipeID: 338, ingredientID: 61 },   // 호박
{ recipeID: 338, ingredientID: 170 },  // 살사소스

// 고르곤졸라피자
{ recipeID: 339, ingredientID: 228 },  // 피자도우
{ recipeID: 339, ingredientID: 285 }, // 고르곤졸라치즈
{ recipeID: 339, ingredientID: 286 }, // 호두 
{ recipeID: 339, ingredientID: 217 },  // 올리브유





// 스파게티볼로네제
{ recipeID: 340, ingredientID: 130 },  // 스파게티면
{ recipeID: 340, ingredientID: 62 },   // 다진소고기
{ recipeID: 340, ingredientID: 30 },   // 양파
{ recipeID: 340, ingredientID: 60 },   // 당근
{ recipeID: 340, ingredientID: 30 },   // 토마토
{ recipeID: 340, ingredientID: 177 },  // 소금
{ recipeID: 340, ingredientID: 179 },  // 후추

// 초리조
{ recipeID: 341, ingredientID: 288 }, // 초리조소시지
{ recipeID: 341, ingredientID: 42 },   // 파프리카
{ recipeID: 341, ingredientID: 30 },   // 양파
{ recipeID: 341, ingredientID: 217 },  // 올리브유

// 고기튀김
{ recipeID: 342, ingredientID: 63 },   // 돼지고기
{ recipeID: 342, ingredientID: 8 },    // 튀김가루
{ recipeID: 342, ingredientID: 75 },   // 계란
{ recipeID: 342, ingredientID: 177 },  // 소금

// 매운치킨너겟
{ recipeID: 343, ingredientID: 64 },   // 닭고기
{ recipeID: 343, ingredientID: 8 },    // 튀김가루
{ recipeID: 343, ingredientID: 177 },  // 소금
{ recipeID: 343, ingredientID: 179 },  // 후추
{ recipeID: 343, ingredientID: 287 }, // 매운소스


// 칠리새우
{ recipeID: 344, ingredientID: 87 },   // 새우
{ recipeID: 344, ingredientID: 31 },   // 마늘
{ recipeID: 344, ingredientID: 177 },  // 소금
{ recipeID: 344, ingredientID: 157 },  // 칠리소스

// 닭껍질튀김
{ recipeID: 345, ingredientID: 290 }, // 닭껍질 
{ recipeID: 345, ingredientID: 179 },  // 후추
{ recipeID: 345, ingredientID: 196 },  // 간장
{ recipeID: 345, ingredientID: 177 },  // 소금

// 브라우니
{ recipeID: 346, ingredientID: 6 },    // 밀가루
{ recipeID: 346, ingredientID: 75 },   // 계란
{ recipeID: 346, ingredientID: 208 },  // 초콜릿
{ recipeID: 346, ingredientID: 112 },  // 버터
{ recipeID: 346, ingredientID: 178 },  // 설탕

// 토마토소스
{ recipeID: 347, ingredientID: 30 },   // 토마토
{ recipeID: 347, ingredientID: 30 },   // 양파
{ recipeID: 347, ingredientID: 31 },   // 마늘
{ recipeID: 347, ingredientID: 215 },  // 바질
{ recipeID: 347, ingredientID: 217 },  // 올리브유

// 애플파이
{ recipeID: 348, ingredientID: 11 },   // 사과
{ recipeID: 348, ingredientID: 75 },   // 계란
{ recipeID: 348, ingredientID: 291 }, // 파이크러스트
{ recipeID: 348, ingredientID: 178 },  // 설탕

// 누들볼
{ recipeID: 349, ingredientID: 124 },  // 면
{ recipeID: 349, ingredientID: 64 },   // 닭고기
{ recipeID: 349, ingredientID: 32 },   // 대파
{ recipeID: 349, ingredientID: 30 },   // 양파
{ recipeID: 349, ingredientID: 43 },   // 상추
{ recipeID: 349, ingredientID: 60 },   // 당근
{ recipeID: 349, ingredientID: 61 },   // 호박


// 닭가슴살구이
{ recipeID: 350, ingredientID: 64 },   // 닭가슴살
{ recipeID: 350, ingredientID: 179 },  // 후추
{ recipeID: 350, ingredientID: 167 },  // 바베큐소스
{ recipeID: 350, ingredientID: 177 },  // 소금

// 카프레제
{ recipeID: 351, ingredientID: 117 },  // 모짜렐라치즈
{ recipeID: 351, ingredientID: 30 },   // 토마토
{ recipeID: 351, ingredientID: 215 },  // 바질
{ recipeID: 351, ingredientID: 168 },  // 발사믹소스

// 포카치아
{ recipeID: 352, ingredientID: 6 },    // 밀가루
{ recipeID: 352, ingredientID: 219 },  // 이스트
{ recipeID: 352, ingredientID: 212 },  // 로즈마리
{ recipeID: 352, ingredientID: 177 },  // 소금
{ recipeID: 352, ingredientID: 217 },  // 올리브유

// 프리타타
{ recipeID: 353, ingredientID: 75 },   // 계란
{ recipeID: 353, ingredientID: 42 },   // 파프리카
{ recipeID: 353, ingredientID: 30 },   // 양파
{ recipeID: 353, ingredientID: 120 },  // 치즈
{ recipeID: 353, ingredientID: 177 },  // 소금
{ recipeID: 353, ingredientID: 179 },  // 후추

// 부리또
{ recipeID: 354, ingredientID: 284 }, // 또띠아 
{ recipeID: 354, ingredientID: 62 },   // 다진고기
{ recipeID: 354, ingredientID: 1 },    // 쌀
{ recipeID: 354, ingredientID: 32 },   // 대파
{ recipeID: 354, ingredientID: 30 },   // 양파
{ recipeID: 354, ingredientID: 43 },   // 상추
{ recipeID: 354, ingredientID: 60 },   // 당근
{ recipeID: 354, ingredientID: 61 },   // 호박
{ recipeID: 354, ingredientID: 122 },  // 사워크림

// 단호박죽
{ recipeID: 355, ingredientID: 36 },   // 단호박
{ recipeID: 355, ingredientID: 113 },  // 생크림
{ recipeID: 355, ingredientID: 177 },  // 소금
{ recipeID: 355, ingredientID: 178 },  // 설탕

// 아몬드빵
{ recipeID: 356, ingredientID: 240 }, // 아몬드가루 
{ recipeID: 356, ingredientID: 75 },   // 계란
{ recipeID: 356, ingredientID: 112 },  // 버터
{ recipeID: 356, ingredientID: 178 },  // 설탕

// 차돌박이국밥
{ recipeID: 357, ingredientID: 270 },  // 차돌박이
{ recipeID: 357, ingredientID: 1 },    // 밥
{ recipeID: 357, ingredientID: 32 },   // 대파
{ recipeID: 357, ingredientID: 177 },  // 소금
{ recipeID: 357, ingredientID: 196 },  // 간장
{ recipeID: 357, ingredientID: 191 },  // 다진마늘
{ recipeID: 357, ingredientID: 179 },  // 후추

// 파스타마늘볶음
{ recipeID: 358, ingredientID: 131 },  // 파스타면
{ recipeID: 358, ingredientID: 31 },   // 마늘
{ recipeID: 358, ingredientID: 158 }, // 바질페스토
{ recipeID: 358, ingredientID: 217 },  // 올리브유

// 쌈무
{ recipeID: 359, ingredientID: 54 },   // 무
{ recipeID: 359, ingredientID: 199 },  // 고추장
{ recipeID: 359, ingredientID: 180 },  // 식초
{ recipeID: 359, ingredientID: 177 },  // 소금


// 상추쌈
{ recipeID: 360, ingredientID: 43 },   // 상추
{ recipeID: 360, ingredientID: 63 },   // 돼지고기
{ recipeID: 360, ingredientID: 31 },   // 마늘
{ recipeID: 360, ingredientID: 205 },  // 쌈장

// 마리네이드
{ recipeID: 361, ingredientID: 64 },   // 닭고기
{ recipeID: 361, ingredientID: 56 },   // 허브류
{ recipeID: 361, ingredientID: 168 },  // 발사믹소스
{ recipeID: 361, ingredientID: 217 },  // 올리브유

// 수박화채
{ recipeID: 362, ingredientID: 21 },   // 수박
{ recipeID: 362, ingredientID: 165 },  // 레몬즙
{ recipeID: 362, ingredientID: 178 },  // 설탕
{ recipeID: 362, ingredientID: 214 },  // 민트

// 애플망고스무디
{ recipeID: 363, ingredientID: 15 },   // 애플망고
{ recipeID: 363, ingredientID: 109 },  // 요거트
{ recipeID: 363, ingredientID: 108 },  // 우유
{ recipeID: 363, ingredientID: 178 },  // 설탕

// 구운브로콜리
{ recipeID: 364, ingredientID: 49 },   // 브로콜리
{ recipeID: 364, ingredientID: 217 },  // 올리브유
{ recipeID: 364, ingredientID: 177 },  // 소금
{ recipeID: 364, ingredientID: 179 },  // 후추

// 단호박스프
{ recipeID: 365, ingredientID: 36 },   // 단호박
{ recipeID: 365, ingredientID: 30 },   // 양파
{ recipeID: 365, ingredientID: 113 },  // 생크림
{ recipeID: 365, ingredientID: 177 },  // 소금
{ recipeID: 365, ingredientID: 179 },  // 후추

// 크림스프
{ recipeID: 366, ingredientID: 30 },   // 양파
{ recipeID: 366, ingredientID: 37 },   // 감자
{ recipeID: 366, ingredientID: 113 },  // 생크림
{ recipeID: 366, ingredientID: 177 },  // 소금
{ recipeID: 366, ingredientID: 179 },  // 후추

// 리조또
{ recipeID: 367, ingredientID: 10 },   // 아르보리오 쌀
{ recipeID: 367, ingredientID: 30 },   // 양파
{ recipeID: 367, ingredientID: 115 },  // 파마산 치즈
{ recipeID: 367, ingredientID: 222 },  // 화이트와인

// 조리된카프레제
{ recipeID: 368, ingredientID: 117 },  // 모짜렐라치즈
{ recipeID: 368, ingredientID: 30 },   // 토마토
{ recipeID: 368, ingredientID: 215 },  // 바질
{ recipeID: 368, ingredientID: 217 },  // 올리브유

// 소고기리조또
{ recipeID: 369, ingredientID: 10 },   // 아르보리오 쌀
{ recipeID: 369, ingredientID: 62 },   // 소고기
{ recipeID: 369, ingredientID: 30 },   // 양파
{ recipeID: 369, ingredientID: 115 },   // 파마산 치즈

// 전자레인지치킨
{ recipeID: 370, ingredientID: 64 },   // 닭고기
{ recipeID: 370, ingredientID: 179 },  // 후추
{ recipeID: 370, ingredientID: 167 },  // 바베큐소스
{ recipeID: 370, ingredientID: 177 },  // 소금

// 전자레인지계란찜
{ recipeID: 371, ingredientID: 75 },   // 계란
{ recipeID: 371, ingredientID: 177 },  // 소금
{ recipeID: 371, ingredientID: 179 },  // 후추

// 두부전골
{ recipeID: 372, ingredientID: 71 },   // 두부
{ recipeID: 372, ingredientID: 52 },   // 버섯
{ recipeID: 372, ingredientID: 30 },   // 양파
{ recipeID: 372, ingredientID: 60 },   // 당근
{ recipeID: 372, ingredientID: 41 },   // 피망
{ recipeID: 372, ingredientID: 49 },   // 브로콜리
{ recipeID: 372, ingredientID: 43 },   // 상추
{ recipeID: 372, ingredientID: 199 },  // 고추장
{ recipeID: 372, ingredientID: 196 },  // 간장

// 참치전
{ recipeID: 373, ingredientID: 143 },  // 참치
{ recipeID: 373, ingredientID: 6 },    // 밀가루
{ recipeID: 373, ingredientID: 75 },   // 계란
{ recipeID: 373, ingredientID: 177 },  // 소금

// 가자미조림
{ recipeID: 374, ingredientID: 102 },  // 가자미
{ recipeID: 374, ingredientID: 54 },   // 무
{ recipeID: 374, ingredientID: 32 },   // 대파
{ recipeID: 374, ingredientID: 196 },  // 간장
{ recipeID: 374, ingredientID: 181 },  // 고춧가루

// 낙지전
{ recipeID: 375, ingredientID: 84 },   // 낙지
{ recipeID: 375, ingredientID: 6 },    // 밀가루
{ recipeID: 375, ingredientID: 75 },   // 계란
{ recipeID: 375, ingredientID: 177 },  // 소금
{ recipeID: 375, ingredientID: 179 },  // 후추

// 매운새우젓
{ recipeID: 376, ingredientID: 194 },  // 새우젓
{ recipeID: 376, ingredientID: 181 },  // 고춧가루

// 해물수프
{ recipeID: 377, ingredientID: 87 },   // 새우
{ recipeID: 377, ingredientID: 83 },   // 오징어
{ recipeID: 377, ingredientID: 94 },   // 조개
{ recipeID: 377, ingredientID: 30 },   // 양파
{ recipeID: 377, ingredientID: 196 },  // 간장

// 스키야키
{ recipeID: 378, ingredientID: 62 },   // 소고기
{ recipeID: 378, ingredientID: 130 },  // 면
{ recipeID: 378, ingredientID: 30 },   // 양파
{ recipeID: 378, ingredientID: 60 },   // 당근
{ recipeID: 378, ingredientID: 41 },   // 피망
{ recipeID: 378, ingredientID: 49 },   // 브로콜리
{ recipeID: 378, ingredientID: 43 },   // 상추
{ recipeID: 378, ingredientID: 196 },  // 간장
{ recipeID: 378, ingredientID: 178 },  // 설탕

// 매운감자조림
{ recipeID: 379, ingredientID: 37 },   // 감자
{ recipeID: 379, ingredientID: 40 },   // 고추
{ recipeID: 379, ingredientID: 30 },   // 양파
{ recipeID: 379, ingredientID: 196 },  // 간장
{ recipeID: 379, ingredientID: 181 },   // 고춧가루

// 표고버섯볶음
{ recipeID: 380, ingredientID: 50 },   // 표고버섯
{ recipeID: 380, ingredientID: 30 },   // 양파
{ recipeID: 380, ingredientID: 32 },   // 대파
{ recipeID: 380, ingredientID: 196 },  // 간장
{ recipeID: 380, ingredientID: 218 },  // 참기름

// 우유젤리
{ recipeID: 381, ingredientID: 108 },  // 우유
{ recipeID: 381, ingredientID: 292 }, // 젤라틴
{ recipeID: 381, ingredientID: 178 },  // 설탕

// 누들샐러드
{ recipeID: 382, ingredientID: 130 },  // 면
{ recipeID: 382, ingredientID: 30 },   // 양파
{ recipeID: 382, ingredientID: 60 },   // 당근
{ recipeID: 382, ingredientID: 41 },   // 피망
{ recipeID: 382, ingredientID: 49 },   // 브로콜리
{ recipeID: 382, ingredientID: 43 },   // 상추
{ recipeID: 382, ingredientID: 164 }, // 땅콩소스
{ recipeID: 382, ingredientID: 162 },  // 드레싱

// 이탈리안샐러드
{ recipeID: 383, ingredientID: 43 },   // 상추
{ recipeID: 383, ingredientID: 29 },   // 토마토
{ recipeID: 383, ingredientID: 34 },   // 오이
{ recipeID: 383, ingredientID: 287 },  // 올리브
{ recipeID: 383, ingredientID: 168 },  // 발사믹소스

// 양상추샐러드
{ recipeID: 384, ingredientID: 48 },   // 양상추
{ recipeID: 384, ingredientID: 29 },   // 토마토
{ recipeID: 384, ingredientID: 34 },   // 오이
{ recipeID: 384, ingredientID: 162 },  // 드레싱

// 해물볶음면
{ recipeID: 385, ingredientID: 130 },  // 면
{ recipeID: 385, ingredientID: 87 },   // 새우
{ recipeID: 385, ingredientID: 83 },   // 오징어
{ recipeID: 385, ingredientID: 30 },   // 양파
{ recipeID: 385, ingredientID: 60 },   // 당근
{ recipeID: 385, ingredientID: 196 },  // 간장
{ recipeID: 385, ingredientID: 181 },  // 고춧가루

// 매운볶음면
{ recipeID: 386, ingredientID: 130 },  // 면
{ recipeID: 386, ingredientID: 30 },   // 양파
{ recipeID: 386, ingredientID: 60 },   // 당근
{ recipeID: 386, ingredientID: 177 },  // 소금
{ recipeID: 386, ingredientID: 179 },  // 후추
{ recipeID: 386, ingredientID: 199 },  // 고추장

// 간장계란밥
{ recipeID: 387, ingredientID: 1 },    // 밥
{ recipeID: 387, ingredientID: 75 },   // 계란
{ recipeID: 387, ingredientID: 196 },  // 간장

// 미역줄기볶음
{ recipeID: 388, ingredientID: 261 }, // 미역줄기
{ recipeID: 388, ingredientID: 40 },   // 고추
{ recipeID: 388, ingredientID: 31 },   // 마늘
{ recipeID: 388, ingredientID: 196 },  // 간장
{ recipeID: 388, ingredientID: 218 },  // 참기름

// 연어샐러드
{ recipeID: 389, ingredientID: 80 },   // 연어
{ recipeID: 389, ingredientID: 43 },   // 상추
{ recipeID: 389, ingredientID: 29 },   // 토마토
{ recipeID: 389, ingredientID: 34 },   // 오이
{ recipeID: 389, ingredientID: 162 },  // 드레싱

// 시금치샐러드
{ recipeID: 390, ingredientID: 45 },   // 시금치
{ recipeID: 390, ingredientID: 30 },   // 양파
{ recipeID: 390, ingredientID: 281 },  // 아보카도
{ recipeID: 390, ingredientID: 162 },  // 드레싱

// 한우불고기
{ recipeID: 391, ingredientID: 62 },   // 한우
{ recipeID: 391, ingredientID: 30 },   // 양파
{ recipeID: 391, ingredientID: 60 },   // 당근
{ recipeID: 391, ingredientID: 196 },  // 간장
{ recipeID: 391, ingredientID: 178 }   // 설탕


    ]);
  },







  // 나중에 데이터가 필요없을 떄 전체 삭제 
  // down: async (queryInterface, Sequelize) => {
  //   await queryInterface.bulkDelete('FridgeType', null, {});
  //   await queryInterface.bulkDelete('FridgeTypeSection', null, {});
  //   await queryInterface.bulkDelete('Category', null, {});
  //   await queryInterface.bulkDelete('Ingredient', null, {});
  // }
}
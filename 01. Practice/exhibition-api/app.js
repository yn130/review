//  한국문화정보원_공연전시정보조회서비스 (from 공공데이터포털)
// https://www.culture.go.kr/industry/apiGuideA.do
//  데이터 확인 완료
//  데이터양 너무 적음
// 데이터 요청 파라미터 확인하기 




const express = require('express');
const axios = require('axios');
const app = express();

// const url = 'http://www.culture.go.kr/openapi/rest/publicperformancedisplays/period';
const url = 'http://www.culture.go.kr/openapi/rest/publicperformancedisplays/area';
const serviceKey = "d3Jnvn9QmGvseTVfx2owiE7EXsphREEnfPKIRdJ+pBAMQ+hKFt28fS/2PICwmJySB6aOU/NXeAfI9fV4aXiXVA==";

// 호출 요청 파라미터
const params = {
    serviceKey: serviceKey,  // 서비스 키를 URL 파라미터로 전달
    keyword: '전시',  // 검색 키워드
    sortStdr: 1,  // 등록일 기준으로 정렬
    from: '20240101',  // 시작일 (YYYYMMDD 형식으로 변경)
    to: '20241231',  // 종료일 (YYYYMMDD 형식으로 변경)
    cPage: 2,  // 현재 페이지
    rows: 100,  // 한 페이지당 결과 수 (3~100)
    // sido: '서울'  // 서울 지역 필터링
    // place: '서울'

};

// 요청 보내기
axios.get(url, {
    params: params,

})
.then(response => {
    if (response.status === 200) {
        const data = response.data;
        console.log(data);
    } else {
        console.log("요청 실패: %d", response.status);
    }
})
.catch(error => {
    console.error("API 요청 에러:", error.message);
});




const PORT =  3500;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




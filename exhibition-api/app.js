// 한국문화원 api 
// api 키 확인 됨 


// const express = require('express');
// const axios = require('axios');
// const app = express();

// // // const serviceKey = 'd3Jnvn9QmGvseTVfx2owiE7EXsphREEnfPKIRdJ+pBAMQ+hKFt28fS/2PICwmJySB6aOU/NXeAfI9fV4aXiXVA==';  // 여기에 자신의 서비스 키를 입력하세요
// // const serviceKey = 'd3Jnvn9QmGvseTVfx2owiE7EXsphREEnfPKIRdJ+pBAMQ+hKFt28fS/2PICwmJySB6aOU/NXeAfI9fV4aXiXVA==';  // 인코딩된 키

// // app.get('/', async (req, res) => {
// //     const url = 'http://www.culture.go.kr/openapi/rest/publicperformancedisplays/period';
// //     let queryParams = '?' + encodeURIComponent('serviceKey') + '=' + encodeURIComponent(serviceKey);
// //     queryParams += '&' + encodeURIComponent('keyword') + '=' + encodeURIComponent('전시');
// //     queryParams += '&' + encodeURIComponent('sortStdr') + '=' + encodeURIComponent('1');  // 등록일 기준으로 정렬
// //     queryParams += '&' + encodeURIComponent('from') + '=' + encodeURIComponent('20240101');  // 2024년 1월 1일부터
// //     queryParams += '&' + encodeURIComponent('to') + '=' + encodeURIComponent('20241231');  // 2024년 12월 31일까지
// //     queryParams += '&' + encodeURIComponent('cPage') + '=' + encodeURIComponent('1');
// //     queryParams += '&' + encodeURIComponent('rows') + '=' + encodeURIComponent('100');  // 한 페이지당 100개의 데이터
// //     queryParams += '&' + encodeURIComponent('area') + '=' + encodeURIComponent('서울');  // 서울 지역 필터링

// //     try {
// //         const response = await axios.get(url + queryParams);
// //         res.status(200).send(response.data);  // XML 포맷의 데이터를 그대로 반환
// //     } catch (error) {
// //         res.status(500).send('Error occurred: ' + error.message);
// //     }
// // });


// const url = 'http://www.culture.go.kr/openapi/rest/publicperformancedisplays/period';
// const serviceKey = "d3Jnvn9QmGvseTVfx2owiE7EXsphREEnfPKIRdJ+pBAMQ+hKFt28fS/2PICwmJySB6aOU/NXeAfI9fV4aXiXVA==";

// // 호출 요청 파라미터
// const params = {
//     serviceKey: serviceKey,  // 서비스 키를 URL 파라미터로 전달
//     keyword: '전시',  // 검색 키워드
//     sortStdr: 1,  // 등록일 기준으로 정렬
//     from: '20240101',  // 시작일 (YYYYMMDD 형식으로 변경)
//     to: '20241231',  // 종료일 (YYYYMMDD 형식으로 변경)
//     cPage: 1,  // 현재 페이지
//     rows: 100,  // 한 페이지당 결과 수 (3~100)
//     place: '서울'  // 서울 지역 필터링
// };

// // 요청 보내기
// axios.get(url, {
//     params: params,

// })
// .then(response => {
//     if (response.status === 200) {
//         const data = response.data;
//         console.log(data);
//     } else {
//         console.log("요청 실패: %d", response.status);
//     }
// })
// .catch(error => {
//     console.error("API 요청 에러:", error.message);
// });




// const PORT =  3500;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });




// ---------------------------------------------------------------------------
const express = require('express');
const axios = require('axios');
const { URL, URLSearchParams } = require('url');
const app = express();

// 인코딩된 서비스 키
const  encodedServiceKey = "d3Jnvn9QmGvseTVfx2owiE7EXsphREEnfPKIRdJ%2BpBAMQ%2BhKFt28fS%2F2PICwmJySB6aOU%2FNXeAfI9fV4aXiXVA%3D%3D";

// 서비스 키를 디코딩
const serviceKey = decodeURIComponent(encodedServiceKey);


// API 요청 URL
const baseUrl = 'http://www.culture.go.kr/openapi/rest/publicperformancedisplays/period';

// 호출 요청 파라미터를 URLSearchParams를 사용하여 추가합니다.
const params = new URLSearchParams({
    serviceKey: serviceKey,  // 디코딩된 서비스 키를 URL 파라미터로 전달
    keyword: '전시',  // 검색 키워드
    sortStdr: 1,  // 등록일 기준으로 정렬
    from: '20240101',  // 시작일 (YYYYMMDD 형식으로 변경)
    to: '20241231',  // 종료일 (YYYYMMDD 형식으로 변경)
    cPage: 1,  // 현재 페이지
    rows: 10,  // 한 페이지당 결과 수 (3~100)
    place: '서울'  // 서울 지역 필터링
});

// URL 객체 생성 및 파라미터 추가
const requestUrl = new URL(baseUrl);
requestUrl.search = params.toString(); // URLSearchParams 객체를 사용하여 인코딩된 쿼리 스트링 생성

// 요청 보내기
axios.get(requestUrl.toString())
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

const PORT = 3500;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

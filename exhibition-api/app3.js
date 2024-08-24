// 문화포털이랑 같은 api

const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

const serviceKey = '90cbe143-332b-48ed-b450-76c9c132ea71'; 

// 전시 정보 API 요청 함수
async function getSeoulExhibitions() {
    const url = 'http://api.kcisa.kr/openapi/CNV_060/request';

    try {
        const response = await axios.get(url, {
            params: {
                serviceKey: serviceKey,  // 서비스 키
                dtype: '전시',  // 분류명 - 전시
                title: '',  // 제목에 '서울'이 포함된 전시
                numOfRows: '100',  // 한 페이지에 불러올 데이터 개수
                pageNo: '1' , // 첫 번째 페이지
                // eventSite: '서울'
            },
            headers: {
                'Accept': 'application/json'
            },
            timeout: 30000  // 타임아웃 설정
        });

        // API 응답에서 필요한 데이터 추출
        return response.data.response.body.items.item || [];
    } catch (error) {
        console.error('API 요청 에러:', error.message);
        throw error;
    }
}

// API 엔드포인트 설정
app.get('/', async (req, res) => {
    try {
        const data = await getSeoulExhibitions(); // 서울에서 열리는 전시 정보 요청
        res.json(data);
    } catch (error) {
        if (error.code === 'ECONNABORTED') {
            res.status(504).send('요청 시간이 초과되었습니다.');
        } else if (error.response) {
            res.status(error.response.status).send(error.response.statusText);
        } else {
            res.status(500).send('API 요청 중 오류가 발생했습니다.');
        }
    }
});

app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
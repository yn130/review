const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;


const API_KEY = 'G%2FCRKPuYXW3wLWEcbHyjVSEFPrpG4mf4q93ubhcoO%2F2c1h9yyu6eX%2FnPw0%2BO4lSmJMWRkQmy40XrslCaMq6w6A%3D%3D';  
const API_URL = 'http://www.culture.go.kr/openapi/rest/publicperformancedisplays/period';  

// 모든 전시 데이터
async function fetchAllExhibitions() {
    try {
        const params = {
            serviceKey: API_KEY,
            sido: '서울',
            gugun: '동작구',
            from: '20240101',
            to: '20241231',
            cPage: 1,
            rows: 10, 
            sortStdr: 1, 
        };

        const response = await axios.get(API_URL, { params });
        return response.data;
    } catch (error) {
        console.error('API 요청 중 오류 발생:', error);
        return null;
    }
}

// API 경로 설정
app.get('/openapi/rest/publicperformancedisplays/area', async (req, res) => {
    const exhibitions = await fetchAllExhibitions();
    if (exhibitions) {
        res.json(exhibitions);
    } else {
        res.status(500).json({ error: '데이터를 가져오는 중 오류가 발생했습니다.' });
    }
});


app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});

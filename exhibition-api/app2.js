const express = require('express');
const axios = require('axios');

const app = express();
const port = 6000;

const serviceKey = 'a36f6211-1e3b-4ee0-8482-3ea3c79594ce'; 

// 전시 정보 API 요청 함수
async function getRecentExhibitionData(limit = 50) {
    const url = `http://api.kcisa.kr/openapi/API_CCA_145/request`;
    let allData = [];
    let pageNo = 1;
    let hasMoreData = true;

    try {
        while (hasMoreData && allData.length < limit) {
            const response = await axios.get(url, {
                params: {
                    serviceKey: serviceKey,
                    numOfRows: 100, // 한 번에 가져올 데이터 개수
                    pageNo: pageNo // 페이지 번호
                },
                headers: {
                    'Accept': 'application/json'
                },
                timeout: 30000
            });

            const items = response.data.response.body.items.item || [];
            console.log('API 응답 데이터:', JSON.stringify(response.data, null, 2));

            if (items.length > 0) {
                allData = allData.concat(items);
                pageNo++;
            } else {
                hasMoreData = false; // 더 이상 가져올 데이터가 없으면 종료
            }
        }

        // 50개로 잘라서 반환
        return allData.slice(0, limit);
    } catch (error) {
        console.error('API 요청 에러:', error.message);
        throw error;
    }
}

// API 엔드포인트 설정
app.get('/api/exhibitions', async (req, res) => {
    try {
        const data = await getRecentExhibitionData(50); // 최근 50개의 데이터를 요청
        console.log('전송할 데이터:', JSON.stringify(data, null, 2)); // 브라우저로 전송할 데이터 확인
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

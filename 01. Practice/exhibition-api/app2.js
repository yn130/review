//한국문화정보원 외_전시정보(통합)
//https://www.culture.go.kr/data/openapi/openapiView.do?id=598&gubun=A
// 데이터 확인 완료
// http://api.kcisa.kr/openapi/API_CCA_145/request?serviceKey=a36f6211-1e3b-4ee0-8482-3ea3c79594ce&numOfRows=100&pageNo=1



const express = require('express');
const axios = require('axios');
const app = express();
const port = 4000;

const serviceKey = 'a36f6211-1e3b-4ee0-8482-3ea3c79594ce'; 

// 전시 정보 API 요청 함수
async function getRecentExhibitionData(limit = 50) {
    const url = `http://api.kcisa.kr/openapi/API_CCA_145/request`;
    let allData = [];
    let pageNo = 1;
    let hasMoreData = true;

    try {
        // 데이터를 계속해서 요청하는 루프 (limit에 도달할 때까지)
        while (hasMoreData && allData.length < limit) {
            const response = await axios.get(url, {
                params: {
                    serviceKey: serviceKey,
                    numOfRows: 100, // 한 페이지당 가져올 데이터 개수
                    pageNo: pageNo // 페이지 번호
                },
                headers: {
                    'Accept': 'application/json' // JSON 데이터 요청
                },
                timeout: 10000 // 타임아웃 설정
            });

            // API에서 받은 데이터 확인
            const items = response.data.response.body.items.item || [];
            console.log('API 응답 데이터:', JSON.stringify(response.data, null, 2));

            // 데이터를 배열에 추가
            if (items.length > 0) {
                allData = allData.concat(items);
                pageNo++; // 페이지 번호 증가
            } else {
                hasMoreData = false; // 더 이상 데이터가 없으면 반복 종료
            }
        }

        // 요청된 제한 수(limit)에 맞게 데이터를 잘라서 반환
        return allData.slice(0, limit);
    } catch (error) {
        console.error('API 요청 에러:', error.message);
        throw error;
    }
}

// API 엔드포인트 설정
app.get('/api/exhibitions', async (req, res) => {
    try {
        // 데이터 요청 (limit 기본값: 50)
        const data = await getRecentExhibitionData(50);
        console.log('전송할 데이터:', JSON.stringify(data, null, 2)); // 확인을 위해 콘솔에 데이터 출력
        res.json(data); // 데이터를 JSON 형식으로 응답
    } catch (error) {
        // 에러 처리
        if (error.code === 'ECONNABORTED') {
            res.status(504).send('요청 시간이 초과되었습니다.');
        } else if (error.response) {
            res.status(error.response.status).send(error.response.statusText);
        } else {
            res.status(500).send('API 요청 중 오류가 발생했습니다.');
        }
    }
});

// 서버 실행
app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
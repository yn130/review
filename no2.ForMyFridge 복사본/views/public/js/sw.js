// Service Worker 설치 시 이벤트 처리
self.addEventListener('install', event => {
    console.log('Service Worker 설치 완료');
    self.skipWaiting();  // 새 서비스 워커가 설치되면 즉시 활성화
});

// Service Worker 활성화 시 이벤트 처리
self.addEventListener('activate', event => {
    console.log('Service Worker 활성화 완료');
});

// 푸시 알림을 수신할 때 발생하는 'push' 이벤트 리스너
self.addEventListener('push', event => {
    // 푸시 메시지의 데이터가 있는지 확인
    let data = {};
    if (event.data) {
        data = event.data.json();  // 푸시 메시지 데이터가 JSON 형태일 때
    }

    // 알림 제목과 옵션 설정
    const options = {
        body: data.body || '새로운 알림이 있습니다.',
        data: {
            url: data.url || '/selectFridge'  // 알림을 클릭했을 때 이동할 URL
        }
    };

    // 알림 표시
    event.waitUntil(
        self.registration.showNotification(data.title || '알림', options)
    );
});

// 사용자가 알림을 클릭했을 때 이벤트 처리
self.addEventListener('notificationclick', event => {
    const notification = event.notification;
    const urlToOpen = notification.data.url;

    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientList => {
            // 이미 해당 URL을 열고 있는 클라이언트가 있는지 확인
            for (let i = 0; i < clientList.length; i++) {
                const client = clientList[i];
                if (client.url === urlToOpen && 'focus' in client) {
                    return client.focus();  // 이미 열린 창이 있다면 포커스
                }
            }
            // 해당 URL을 열고 있는 창이 없다면 새 창을 열기
            if (clients.openWindow) {
                return clients.openWindow(urlToOpen);
            }
        })
    );

    notification.close();  // 알림 창 닫기
});

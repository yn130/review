const myModal = new bootstrap.Modal(document.getElementById('myModal'));

if (document.cookie.indexOf('popup=hide') === -1) {
    myModal.show();
}
function closeModal() {

    if (document.getElementById('cookie').checked) {
        axios.post('/setCookie').then((res) => {
            console.log('res.data는 진입점 파일에서 보낸 메시지!', res.data);
        });
    }
    myModal.hide();
}

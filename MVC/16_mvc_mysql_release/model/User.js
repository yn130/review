// TODO: DB(mysql) 연결
const mysql = require('mysql');
const conn = mysql.createConnection({
$    host: 'localhost',
    user: 'user',
    password: '12345678',
    database: 'codingon'
  });
// TODO: 모델 코드
//회원가입
exports.signupDone = (data, cb) => {
    conn.query(`INSERT INTO user (userid, name, pw) VALUES ('${data.userid}', '${data.name}', '${data.pw}')`,
        (err,rows)=>{
            if(err){
                throw err;
            }
            // console.log('model/User.js >>', rows); //model/User.js >> ResultSetHeader {~~~}
            cb(rows.insertId) 
        }
    );
};

// 로그인 시도 떄 회원 조회
exports.aboutRoginInfo = (data, cb) => {
    conn.query(`SELECT * FROM user WHERE userid='${data.userid}' limit 1`, 
        (err, rows)=>{
            if (err) {
                throw err;
            }
            cb(rows[0]);
        }
    );
};

// 회원 정보 조회 (회원 정보 수정 페이지)
exports.profile = (data, cb) => {
    conn.query(`SELECT * FROM user WHERE userid='${data.userid}' limit 1`, 
        (err, rows)=>{
            if (err) {
                throw err;
            }
            cb(rows[0]);
        }
    );
};

// 회원 정보 수정 
exports.editProfile = (updateData, cb) => {
    const { id, pw, name } = updateData;
    conn.query(`UPDATE user SET pw ='${pw}', name='${name}' WHERE id=${id}`, (err, rows) => {
      if (err) {
        throw err;
      }
    //   console.log('모델에서 row 값이 뭐야? ', rows); //모델에서 row 값이 뭐야?  ResultSetHeader {~~~}
      cb(true);
    });
  };

// 회원정보 삭제
exports.deleteProfile = (targetId, cb) => {
    conn.query(`DELETE FROM user WHERE id=${targetId}`, (err, rows) => {
      if (err) {
        throw err;
      }
      cb(true);
    })
  }
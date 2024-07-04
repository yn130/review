// TODO: DB(mysql) 연결
require('dotenv').config()

const mysql = require('mysql2');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: process.env.DB_PW,
    database: 'codingon'
  });
// TODO: 모델 코드

// 로그인 시도 떄 회원 조회
exports.aboutRoginInfo = (data, cb) => {
    conn.query(`SELECT * FROM user WHERE userid='${data.userid}' limit 1`, 
        (err, rows)=>{
            if (err) {
                throw err;
            }
            cb(rows[0]); // Mysql{ userid: 'sean', username: 'Sean', pw: '1234' }
        }
    );
};

// 회원 정보 조회 (회원 정보 수정 페이지)
// exports.profile = (data, cb) => {
//     conn.query(`SELECT * FROM user WHERE userid='${data.userid}' limit 1`, 
//         (err, rows)=>{
//             if (err) {
//                 throw err;
//             }
//             cb(rows[0]);
//         }
//     );
// };

// TODO: DB(mysql) 연결
require('dotenv').config()

const mysql = require('mysql2');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: process.env.DB_PW,
    database: 'codingon'
  });

// 내 프로필
exports.profile = (data, cb) => {
  conn.query(`SELECT * FROM user WHERE userid='${data.userid}' LIMIT 1`, 
    (err, rows)=>{
      if (err) {
          throw err;
      }
      cb(rows[0]);
  }
);
};


// 로그인 시도 때 회원 조회
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

//회원가입
exports.signupDone = (data, cb) => {
    conn.query(`INSERT INTO user (userid, name, pw) VALUES ('${data.userid}', '${data.name}', '${data.pw}')`,
        (err,rows)=>{
            if(err){
                throw err;
            }
            console.log('model/User.js >>', rows); //model/User.js >> ResultSetHeader {~~~}
            cb(rows.insertId) 
        }
    );
};


// 회원 정보 수정 
exports.editProfile = (updateData, cb) => {
    const { userid, pw, name } = updateData;
    conn.query(`UPDATE user SET pw ='${pw}', name='${name}' WHERE userid='${userid}'`, (err, rows) => {
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

// 유저 정보 조회
exports.userList = (callback) => {
  conn.query('SELECT * FROM user', 
    (err, results) => {
      if (err) {
          callback(err, null);
      } else {
          callback(null, results);
          console.log(results);
      }
  });
};


// TODO: 컨트롤러 코드
const User = require('../model/User');

// 시작 화면 
exports.main = (req,res) => { res.render('index'); };




// 회원가입
exports.signup = (req, res) => { res.render('signup'); };

//새로운 회원 생성
exports.signupDone = (req, res) => {
    // console.log(req.body); // { userid: 'dddasd', name: 'ddasd', pw: 'ddasd' } > 입력값
    User.signupDone(req.body, (result)=>{
        // console.log('controller/Cuser.js >', result); // controller/Cuser.js > 76
        res.send({ 
            id: result,
            userid: req.body.userid,
            name: req.body.name,
            pw: req.body.pw
        });
    });
}




// 로그인 페이지 
exports.signin = (req, res) => { res.render('signin'); };

// 로그인 회원 조회
exports.aboutRoginInfo = (req, res) => {
    // console.log(req.body); // { userid: 'ㅇㅁㄴㅇㅁ', pw: 'ㅁㄴㅇsad' } > 입력값
    const { userid, pw } = req.body;

    User.aboutRoginInfo({ userid : userid }, (result) => {
        if (!result) {
            return res.send({ result, flag: false });
        } else {
            if (pw !== result.pw) {
                return res.send({ result, flag: false});
            } else {
                return res.send({ result, flag: true });
            }
        }
    });
};



// 로그인 성공 시 회원 정보 수정 페이지
exports.profile = (req, res) => { 
    User.profile(req.body, (result)=> {
        // console.log('로그인 성공 후 회원정보에서 난 뭐야???', req.body);
        // console.log( '로그인 성공 후 회원정보에서 이건 또 뭐야?' ,{data: result}); > model/User.js에서 가져온 값 = cb(rows[0]);
        res.render('profile', {data: result})
    })
}

// 회원정보 수정
exports.editProfile = (req, res) => {
    // console.log('정보 수정에서 난 뭐야? ', req.body); // { id: '1', pw: '1234', name: 'seannn' }
    User.editProfile(req.body, (result) => {
    //   console.log('객체 result 는?', { result }); // { result: true }
      res.send({ result });
    });
  };


// 회원 삭제 
exports.deleteProfile = (req,res) => {
    User.deleteProfile(req.body.id, (result)=> {
        res.send({ result })
    });
};

const User = require('../model/User');

// 시작화면
exports.main = (req, res) => {
    const user = req.session.user;
    res.render('index', { user: user }); 
};

// 로그인 페이지
exports.signin = (req, res) => {
     res.render('signin');
 };

// 로그인 회원 조회 
exports.aboutRoginInfo = (req, res) => {
    const { userid, pw } = req.body;

    User.aboutRoginInfo({ userid: userid }, (result) => {

        if (!result) {
            return res.send({ result, flag: false });
        } else {
            if (pw !== result.pw) {
                return res.send({ result, flag: false });
            } else {
                req.session.user = {
                    userid: result.userid,
                    name: result.name,
                    pw: result.pw
                };
                return res.send({ result, flag: true });
            }
        }

    });
};

// 로그아웃
exports.logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.redirect('/');
        }
        res.clearCookie('connect.sid');
        res.redirect('/');
    });
};

// 회원가입
exports.signup = (req, res) => { res.render('signup'); 
    
};

//새로운 회원 생성
exports.signupDone = (req, res) => {
    User.signupDone(req.body, (result)=>{
        res.send({ 
            id: result,
            userid: req.body.userid,
            name: req.body.name,
            pw: req.body.pw
        });
    });
}

// 내 프로필 
exports.profile = (req, res) => {
    if (req.session.user) {
        const userid = req.session.user.userid;
        User.profile({ userid }, (result) => {
            if (result) {
                res.render('profile', { data: result });
            } else {
                res.send({ result: false });
            }
        });
    }
};

// 회원정보 수정
exports.editProfile = (req, res) => {
    User.editProfile(req.body, (result) => {
      res.send({ result });
    });
  };

// 회원 삭제 
exports.deleteProfile = (req,res) => {
    User.deleteProfile(req.body.id, (result)=> {
        res.send({ result })
    });
};


// 회원 조회
exports.userList = (req, res) => {
    const name = req.session.user.name;
    User.userList((err, users) => {
        if (err) {
            return res.status(500).send('Error retrieving user list');
        }

        res.render('user', { name: name , users});
    });
};
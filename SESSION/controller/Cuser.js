// Cuser.js
const User = require('../model/User');

exports.main = (req, res) => {
    const user = req.session.user;
    res.render('index', { user: user }); 
};

exports.signin = (req, res) => { res.render('signin'); };

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
                    name: result.name
                };
                return res.send({ result, flag: true });
            }
        }

    });
};

exports.logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.redirect('/');
        }
        res.clearCookie('connect.sid');
        res.redirect('/');
    });
};

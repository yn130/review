const { User } = require('../models/index')
const bcrypt = require('bcrypt');
const saltRounds = 10;

// 내 프로필
exports.profile = async (data, cb) => {
  try {
    const user = await User.findOne({ where: { userid: data.userid } });
    cb(user);
  } catch (err) {
    throw err;
  }
};


// 로그인 시도 때 회원 조회
exports.aboutRoginInfo = async (data, cb) => {
  try {
    const user = await User.findOne({ where: { userid: data.userid } });
    cb(user);
  } catch (err) {
    throw err;
  }
};

//회원가입
exports.signupDone = async (data, cb) => {
  try {
    const hashedPw = await bcrypt.hashSync(data.pw, saltRounds); 
    const user = await User.create({ userid: data.userid, name: data.name, pw: hashedPw });
    cb(user.id);
  } catch (err) {
    throw err;
  }
};


// 회원 정보 수정 
exports.editProfile = async (updateData, cb) => {
  const { userid, pw, name } = updateData;
  try {
    const hashedPw = await bcrypt.hashSync(pw, saltRounds); 
    await User.update({ pw: hashedPw, name }, { where: { userid } });
    cb(true);
  } catch (err) {
    throw err;
  }
};

// 회원정보 삭제
exports.deleteProfile = async (targetId, cb) => {
  try {
    await User.destroy({ where: { id: targetId } });
    cb(true);
  } catch (err) {
    throw err;
  }
};

// 유저 정보 조회
exports.userList = async (callback) => {
  try {
    const users = await User.findAll();
    callback(null, users);
  } catch (err) {
    callback(err, null);
  }
};


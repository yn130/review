module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    userId: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      validate: { 
        // 중복체크를 위한 유효성 검사 > 일관성을 위해 validate 옵션 내에서 custom validator 사용 
        // 이전에는 beforeValidate 후크를 사용해서 중복검사를 했지만 코드의 일관성, 간결성, 자연스러운 흐름을 위해 validate 옵션 사용
        // 컨트롤러는 주로 HTTP 요청을 처리하고 비즈니스 로직을 실행하는 데 집중해야 함
        // 유효성 검사는 데이터의 무결성을 보장하기 위한 작업으로, 모델에서 수행하는 것이 자연스러움 
        async isUnique(value, next) {
          const existingUser = await User.findOne({ where: { userId: value } });
          if (existingUser && existingUser.ID !== this.ID) {
            return next('이미 존재하는 아이디입니다.');
          }
          return next();
        },
        noSpaceFirst(value) {
          if (value.startsWith(' ')) {
            throw new Error('아이디는 공백으로 시작할 수 없습니다.');
          }
        },
      }
    },
    userName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        noSpaceFirst(value) { // 첫글자 공백 검사 
          if (value.startsWith(' ')) {
            throw new Error('이름은 공백으로 시작할 수 없습니다.');
          }
        },
      }
    },
    userEmail: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      validate: {
        async isUnique(value, next) {
          const existingEmail = await User.findOne({ where: { userEmail: value } });
          if (existingEmail && existingEmail.ID !== this.ID) {
            return next('이미 사용 중인 이메일입니다.');
          }
          return next();
        },
        noSpaceFirst(value) {
          if (value.startsWith(' ')) {
            throw new Error('이메일은 공백으로 시작할 수 없습니다.');
          }
        }
      }
    },
    userPassword: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        noSpaceFirst(value) {
          if (value.startsWith(' ')) {
            throw new Error('비밀번호는 공백으로 시작할 수 없습니다.');
          }
        }
           // 비밀번호 해시화 문제로 (모델에서 정규식 검사를 실시하면 해시화된 후에 적용되서 오류가 발생함 ) 정규식 검사 컨트롤러에서 실시 
//         isStrongPassword(value) {
//           // 영문자와 숫자를 포함하며, 최소 6자 이상의 비밀번호를 허용하는 정규식
//           const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
//           if (!passwordRegex.test(value)) {
//               throw new Error('비밀번호는 최소 6자, 영문자와 숫자를 포함해야 합니다.');
//           }
//         }
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
  
    },
  }, {
      tableName: 'user', // 실제 테이블 이름
      freezeTableName: true, 
      timestamps: true, // createdAt과 updatedAt 자동으로 관리
    });
  
    return User;
  };
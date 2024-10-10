module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
      categoryID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      categoryName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true, // 카테고리 이름의 고유성 보장
      },
      categoryImg: {
        type: DataTypes.STRING(2048), 
        allowNull: true, 
      },
    }, {
      tableName: 'category', 
      freezeTableName: true, // 테이블 이름을 복수형으로 자동 변환하지 않도록 설정
      timestamps: true,
    });

  
    return Category;
  };
  
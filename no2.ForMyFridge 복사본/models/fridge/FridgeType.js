module.exports = (sequelize, DataTypes) => {
    // 냉장고 타입 정보 (일반형 / 양문형 / 4도어 / 김치냉장고) 
    const FridgeType = sequelize.define('FridgeType', {
        fridgeTypeID: {
            type: DataTypes.TINYINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        fridgeTypeName: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
    }, {
        tableName: 'fridgeType',
        freezeTableName: true,
        timestamps: false
    });

    return FridgeType;
};

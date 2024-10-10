module.exports = (sequelize, DataTypes) => {
    // 냉장고 기본 위치 정보 :  냉장고 타입별로 기본 섹션 구성 정의 / 템플릿 역할 
    const FridgeTypeSection = sequelize.define('FridgeTypeSection', {
        TypeSectionID: {
            type: DataTypes.TINYINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        fridgeTypeID: {
            type: DataTypes.TINYINT,
            allowNull: false,
            references: {
                model: 'fridgeType',
                key: 'fridgeTypeID'
            }
        },
        storageTypeID: {
            type: DataTypes.TINYINT,
            allowNull: false,
            references: {
                model: 'storageType',
                key: 'storageTypeID'
            }
        },
        sectionName: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        positionOrder: {
            type: DataTypes.TINYINT,
            allowNull: true
        },
    }, {
        tableName: 'fridgeTypeSection',
        freezeTableName: true,
        timestamps: false
    });

    return FridgeTypeSection;
};

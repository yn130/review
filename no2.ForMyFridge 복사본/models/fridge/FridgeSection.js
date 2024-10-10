module.exports = (sequelize, DataTypes) => {
    const FridgeSection = sequelize.define('FridgeSection', {
        // 유저의 각 냉장고 실제 위치 정보 
        sectionID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        fridgeID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'fridge',
                key: 'fridgeID'
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
        tableName: 'fridgeSection',
        freezeTableName: true,
        timestamps: false,
         // 여러 컬럼을 조합하여 유일한 값을 가지도록 강제함
         // 두 개 이상의 컬럼이 있을 때, 각 컬럼별로는 중복이 허용되지만, 이 컬럼들의 조합으로는 중복이 허용되지 않음
         // 이 설정은 FridgeSection 테이블에서 fridgeID, storageTypeID, sectionName 세 컬럼의 조합이 유일해야 한다는 것을 의미함. 
            // fridgeID: 냉장고의 고유 ID (어떤 냉장고인지를 식별)
            // storageTypeID: 보관 위치 타입 ID (냉장인지, 냉동인지 등)
            // sectionName: 섹션의 이름 (상단 좌측, 하단 우측 등)
        indexes: [
            {
                unique: true,
                fields: ['fridgeID', 'storageTypeID', 'sectionName'] // 복합 unique 인덱스
            }
        ]
    });

    return FridgeSection;
};

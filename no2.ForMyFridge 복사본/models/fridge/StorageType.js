module.exports = (sequelize, DataTypes) => {
    // 보관위치 타입 이름 : 냉장 / 냉동 / 상온 
    const StorageType = sequelize.define('StorageType', {
        storageTypeID: {
            type: DataTypes.TINYINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        typeName: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
    }, {
        tableName: 'storageType',
        freezeTableName: true,
        timestamps: false,
    });

    return StorageType;
};

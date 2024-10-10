module.exports = (sequelize, DataTypes) => {
    const Fridge = sequelize.define('Fridge', {
        fridgeID: {
            type: DataTypes.INTEGER,
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
        fridgeName: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
    }, {
        tableName: 'fridge',
        freezeTableName: true,
        timestamps: true
    });

    return Fridge;
};

module.exports = (sequelize, DataTypes) => {
    const UserFridgeMapping = sequelize.define('UserFridgeMapping', {
        userFridgeID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        ID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'ID'
            }
        },
        fridgeID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'fridge',
                key: 'fridgeID'
            }
        },
        inviteStatus: {
            type: DataTypes.ENUM('pending', 'accepted', 'declined'),
            defaultValue: 'pending'
        },
        inviteDate: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
    }, {
        tableName: 'userFridgeMapping',
        freezeTableName: true,
        timestamps: true
    });

    return UserFridgeMapping;
};

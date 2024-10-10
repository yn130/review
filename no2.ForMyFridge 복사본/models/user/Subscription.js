module.exports = (sequelize, DataTypes) => {
    const Subscription = sequelize.define('Subscription', {
        subscriptionID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',  // 'user' 테이블과 연관
                key: 'ID'
            },
            onDelete: 'CASCADE'
        },
        endpoint: {
            type: DataTypes.STRING,
            allowNull: false
        },
        keys_p256dh: {
            type: DataTypes.STRING,
            allowNull: false
        },
        keys_auth: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'subscription',
        freezeTableName: true,
        timestamps: true
    });

    return Subscription;
};

module.exports = (sequelize, DataTypes) => {
    const FridgeItem = sequelize.define('FridgeItem', {
        fridgeItemID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        sectionID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'fridgeSection',
                key: 'sectionID'
            }
        },
        ingredientID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'ingredient',
                key: 'ingredientID'
            }
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        registrationDate: {
            type: DataTypes.DATE,
            allowNull: true
        },
        expirationDate: {
            type: DataTypes.DATE,
            allowNull: true
        },
        memo: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
    }, {
        tableName: 'fridgeItem',
        freezeTableName: true,
        timestamps: true,
        indexes: [
            {
                fields: ['expirationDate']
            }
        ]
    });

    return FridgeItem;
};

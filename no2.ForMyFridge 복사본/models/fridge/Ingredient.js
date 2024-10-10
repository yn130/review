module.exports = (sequelize, DataTypes) => {
    const Ingredient = sequelize.define('Ingredient', {
        ingredientID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        ingredientName: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        ingredientImg: {
            type: DataTypes.STRING(2048),
            allowNull: true
        },
        categoryID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'category',
                key: 'categoryID'
            }
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        ingredientType: {
            type: DataTypes.ENUM('real', 'condiment'), // 재료 유형 추가
            allowNull: false,
            defaultValue: 'real' // 기본값은 'real'로 설정
        },
    }, {
        tableName: 'ingredient',
        freezeTableName: true,
        timestamps: true
    });

    return Ingredient;
};

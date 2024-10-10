
// 중간테이블

module.exports = (sequelize, DataTypes) => {
    const RecipeIngredient = sequelize.define('RecipeIngredient', {
        recipeIngID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        recipeID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'recipe',
                key: 'recipeID'
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
    }, {
        tableName: 'recipeIngredient',
        freezeTableName: true,
        timestamps: false
    });

    return RecipeIngredient;
};

module.exports = (sequelize, DataTypes) => {
    const Recipe = sequelize.define('Recipe', {
        recipeID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        recipeTitle: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        recipeDescription: {
            type: DataTypes.TEXT,
            allowNull: true
        },
    }, {
        tableName: 'recipe',
        freezeTableName: true,
        timestamps: true
    });

    return Recipe;
};

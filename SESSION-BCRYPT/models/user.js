const UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User', 
        {
            id: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            pw: {
                type: DataTypes.STRING(511),
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING(15),
                allowNull: false,
            },
            userid: {
                type: DataTypes.STRING(15),
                allowNull: false,
            }
        },
        {
            freezeTableName: true,
            timestamps: false
        }
    );
    return User;
};

module.exports = UserModel;

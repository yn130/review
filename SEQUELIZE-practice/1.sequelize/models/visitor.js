const VisitorModel = (sequelize, DataTypes) => {
    const Visitor = sequelize.define(
        'Visitor',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            comment: {
                type: DataTypes.TEXT('medium')
            }
        },
        { 
            freezeTableName: true,
            timestapms: false,
            createdAt: false,
            updatedAt: false,
        }
    );
    
    return Visitor; 
};

module.exports = VisitorModel;
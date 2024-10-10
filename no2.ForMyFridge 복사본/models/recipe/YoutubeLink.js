// module.exports = (sequelize, DataTypes) => {
//     const YouTubeLink = sequelize.define('YouTubeLink', {
//         youTubeLinkID: {
//             type: DataTypes.INTEGER,
//             primaryKey: true,
//             autoIncrement: true,
//             allowNull: false
//         },
//         recipeID: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             references: {
//                 model: 'recipe',
//                 key: 'recipeID'
//             }
//         },
//         URL: {
//             type: DataTypes.STRING(2048),
//             allowNull: false
//         },
//         views: {
//             type: DataTypes.BIGINT,
//             allowNull: true
//         },
//     }, {
//         tableName: 'youtubeLink',
//         freezeTableName: true,
//         timestamps: true
//     });

//     return YouTubeLink;
// };

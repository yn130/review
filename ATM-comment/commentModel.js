// const db = require('../config/database');

// const Comment = {
//     create: (data, callback) => {
//         const query = 'INSERT INTO comment (comment_contents, user_id, card_id) VALUES (?, ?, ?)';
//         db.query(query, [data.comment_contents, data.user_id, data.card_id], callback);
//     },
//     findById: (id, callback) => {
//         const query = 'SELECT * FROM comment WHERE comment_id = ?';
//         db.query(query, [id], callback);
//     },
//     findAll: (callback) => {
//         const query = 'SELECT * FROM comment';
//         db.query(query, callback);
//     },
//     update: (id, data, callback) => {
//         const query = 'UPDATE comment SET comment_contents = ?, card_id = ?, last_modified_at = CURRENT_TIMESTAMP WHERE comment_id = ?';
//         db.query(query, [data.comment_contents, data.card_id, id], callback);
//     },
//     delete: (id, callback) => {
//         const query = 'DELETE FROM comment WHERE comment_id = ?';
//         db.query(query, [id], callback);
//     }
// };


module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('comment', {
        comment_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        comment_contents: {
            type: DataTypes.TEXT,
        }
    }, {
        freezeTableName: true, 
        timestamps: true,
    });

    return Comment;
};
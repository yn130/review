const Comment = require('../models/commentModel');

exports.createComment = (req, res) => {
    const newComment = {
        comment_contents: req.body.comment_contents,
        user_id: req.body.user_id,
        card_id: req.body.card_id
    };

    Comment.create(newComment, (err, data) => {
        if (err) return res.status(500).send(err);
        res.status(201).send(data);
    });
};

exports.getCommentById = (req, res) => {
    Comment.findById(req.params.id, (err, data) => {
        if (err) return res.status(500).send(err);
        if (data.length === 0) return res.status(404).send('Comment not found');
        res.status(200).send(data);
    });
};

exports.getAllComments = (req, res) => {
    Comment.findAll((err, data) => {
        if (err) return res.status(500).send(err);
        res.status(200).send(data);
    });
};

exports.updateComment = (req, res) => {
    const updatedComment = {
        comment_contents: req.body.comment_contents,
        card_id: req.body.card_id
    };

    Comment.update(req.params.id, updatedComment, (err, data) => {
        if (err) return res.status(500).send(err);
        if (data.affectedRows === 0) return res.status(404).send('Comment not found');
        res.status(200).send('Comment updated successfully');
    });
};

exports.deleteComment = (req, res) => {
    Comment.delete(req.params.id, (err, data) => {
        if (err) return res.status(500).send(err);
        if (data.affectedRows === 0) return res.status(404).send('Comment not found');
        res.status(200).send('Comment deleted successfully');
    });
};

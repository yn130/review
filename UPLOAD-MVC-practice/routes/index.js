const express = require('express');
const controller = require('../controller/Cfile');
const {UploadSingle, UploadArray, Uploadfields } = require('../middlewares/upload-middleware')

const router = express.Router();


router.post("/upload", UploadSingle, controller.uploadSingle );

router.post('/upload/array', UploadArray, controller.UploadArray );

router.post('/upload/fields', Uploadfields, controller.Uploadfields );

router.get('/', controller.getMain);

module.exports = router;
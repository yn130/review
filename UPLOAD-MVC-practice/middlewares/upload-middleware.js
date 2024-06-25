const multer = require('multer');
const path = require('path');

const uploadDetail = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads/'); 
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext); // 저장할 파일명
        }
    }),
    limits: { fileSize: 5 * 1024 * 1024 } 
})

exports.UploadSingle = uploadDetail.single('userfile');
exports.UploadArray = uploadDetail.array('banana');
exports.Uploadfields = uploadDetail.fields([{ name: 'kiwi' }, { name: 'orange' }]);



exports.getMain = (req,res)=>{
    res.render('index', {title : '파일 업로드 와 MVC '});
};

exports.uploadSingle = (req, res) => {
    console.log(req.body); 
    console.log(req.file); 
    res.render('result', { title: req.body.title, src: req.file.path });
}

exports.UploadArray = (req, res) => {
    console.log(req.body); 
    console.log(req.files); 
    res.send('Success Upload!! (multiple)');
}

exports.Uploadfields = (req, res) => {
    console.log(req.body); 
    console.log(req.files); 
    res.send('Success Upload!! (multiple2)');
}
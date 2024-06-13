// 형식 : fs.mkdir(path, mode, callback)

const fs = require('fs');

////////////// 파일 생성 ////////////// 
const path = require('path');
fs.mkdir(path.join(__dirname,'test'), (err)=> {
    if(err) {
        return console.error(err);
    } 
    console.log('디렉토리 생성완료');
})

////////////// 파일 삭제 ////////////// 
fs.rmdir(path.join(__dirname,'test'), (err)=> {
    if(err) {
        return console.error(err);
    } 
    console.log('디렉토리 삭제완료');
})

//////////////  디렉토리 읽기 ////////////// 

fs.readdir('./', function(err, files){
    if(err) console.log('에러', err)
    else console.log("결과는", files);  
})  //결과는 [ '.DS_Store', '1.app.js', '2.app.js', 'demo', 'pratice.js' ]


////////////// 파일 생성 (내용이 있는 파일) ////////////// 

fs.writeFile('myNewFile1.txt', 'Hello world', function(err){
    if(err) throw err;
    console.log('파일이 생성됨');
})

/////////////// open(), w를 이용해서 파일 생성 (내용이 없는 빈 파일) ////////////// 

fs.open('myNewFile2.txt', 'w', function (err, file) {  // w => 컨텐츠가 없는 빈 파일 
    if(err) throw err;
    console.log('파일이 생성됨');
    
})

//////////////  파일 생성 appendFile() : 기존 파일을 전제로 파일 추가 ////////////// 

fs.appendFile('myNewFile1.txt', 'seo', function(err){
    if(err) throw err;
    console.log('파일이 생성됨');  
})  ///// myNewFile1.txt파일에 내용이 추가됨 



//////////////  파일 삭제  ////////////// 
fs.unlink('myNewFile2.txt', function(){
    console.log('파일 삭제 완료')
})


//////////////  파일 이름 변경 ////////////// 
fs.rename('myNewFile1.txt', 'renameFile1.txt', function(err){
    if(err) throw err;
    console.log('파일이름 변경 완료');
})

////////////////  파일 생성 //////////////

fs.readFile('./input.txt', 'utf-8',function (err, data) {
    console.log(data)
})
console.log(('파일 읽기 완료'));

fs.readFile('./input.txt',function (err, data) {
    console.log(data)
})
console.log(('파일 읽기 완료'));


const data = fs.readFileSync('./input.txt','utf-8')
console.log((data));
console.log(('파일 읽기 완료'));   /// 파일 읽는 순서 먼저 처리 x, 블로킹
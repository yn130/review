const { log } = require('console');
const os = require('os');
// console.log(os);
// console.log(os.totalmem());

let totalMemory = os.totalmem();
let freeMemory = os.freemem();
console.log(`total memory : ${totalMemory}`);
console.log(`free memory : ${freeMemory}`); 

// path.join() : 여러 인자를 넣으면 하나의 경로로 합쳐준다. // 상대경로
// path.resolve() : path.join()과 비슷하지만 약간의 차이 // 절대경로 
// path.parse() : 파일 경로를 root, dir, base, ext, name으로 구분
// path.format(): path.parse()한 객체를 파일 경로로 합친다
// console.log(path.extname('/home/user/dir/file.txt'));  /// 확장자 이름
// console.log(path.basename('/home/user/dir/file.txt'));  /// 파일 이름
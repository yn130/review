
// function call(name) {
//     return new Promise(function(resolve, reject){
//         setTimeout(function() {
//             console.log(name);
//             resolve(name);
//         }, 1000);

//     })
// }

// function back() {
//     return new Promise(function(resolve, reject){
//         setTimeout(function() {
//             console.log('back');
//             resolve('back');
//         }, 1000)
//     })
// }

// function hell() {
//     return new Promise(function(resolve,reject){
//         setTimeout(function() {
//             resolve('callback hell');
//         }, 1000);
//     })
// }





// call('kim')
//     .then((name)=>{
//         console.log(name + '반가워');
//         return back()
//     })
//     .then((txt)=>{
//         console.log(txt + '을 실행했구나');
//         return hell()
//     })
//     .then((message)=>{
//         console.log('여기는' + message);
//     });

///////////////////////////////////////////////


function changeColor(color) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            // document.body.style.backgroundColor = color;
            console.log(`무슨색? ${color}`);
            resolve();
        },1000);
    });
}


async function changeBackgroundColor(){
    await changeColor('red');
    await changeColor('orange');
    await changeColor('yellow');
    await changeColor('green');
    await changeColor('blue');
}
changeBackgroundColor();
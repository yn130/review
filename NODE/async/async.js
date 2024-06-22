
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


// async function exec(){
//     let name =  await call('kim')
//     console.log(name + '반가워');
//     let txt = await back()
//     console.log(txt + '을 실행했구나');
//     let message =  await hell()
//     console.log('여기는' + message);
// };

// exec()


////////////////

let product, price;

function goMart() {
  console.log(`마트에 가서 어떤 음료를 살지 고민한다..`);
}

function pickDrink() {
    return new Promise((res,rej)=>{
        setTimeout(function () {
            console.log(`고민 끝`);
            product = `제로콜라`;
            price = `3000원`;
            res()
          }, 3000);
    })
}

function pay(product, price) {
    return new Promise ((res)=>{
        setTimeout(function () {
            console.log(`상품명: ${product} // 가격: ${price}`);
            res()
          }, 5000);
    })
}

async function exec() {
        goMart();
        await pickDrink(); 
        await pay(product, price);
}
exec();
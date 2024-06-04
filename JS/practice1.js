//자료형 실습
let profile = {
    name: "이몽룡",
    age: 18,
    grilfreind: {
        name: "성춘향",
        age: 16
    },
    isMarried: true,
    like: ["강아지", "고양이"]
};
// console.log(profile);



let mathScore = "77";
let engScore = "88";
let avgScore = (Number(mathScore) + Number(engScore))/2;

// console.log(avgScore);


///////////////////////////////////////////////

//함수 만들기 실습

function multifly(a, b) {
    return a * b;
}
// console.log(multifly(3,7));
// console.log(multifly(2,2));


// // 식1
 
const square = function (x) {
    // return x * x;
    console.log(x * x);
}

// // // 식2 
// const square = (x) => x * x;

// square(4)
// square(11)
// square(5)

///////////////////////////////////////////////

//조건문 실습

// let age = prompt();
// if (age >= 20) {
//     console.log("성인");
// } else if (age >= 17) {
//     console.log("고등학생");
// } else if (age >= 14) {
//     console.log("중학생");
// } else if (age >= 8) {
//     console.log("초등학생");
// } else if(age >=0) {
//     console.log("유아");
// } else {
//     console.log("잘못 입력된 값");
// };


let now = new Date().getHours();
// now < 12 ? console.log("오전") : console.log("오후"); 

// let number = parseInt(prompt(), 10);

// for (i = 0; i <= number; i++){ 
//     if(i % 13 === 0 && i % 2 === 1) {
//         console.log(i);
//     };
// };

// for (let i=2; i<10;i++){
//     for (let j=1; j<10; j++){
//         console.log(`${i}x ${j} = ${i*j}`);
//     };
//     b = 1;
// };

let sum = 0;
for (let a = 0; a <=100; a++){
    if (a % 2 ===0 || a % 5 === 0) {
        sum += a;
    };
} console.log(sum);
let age = prompt("나이를 입력하세요!");

if(age > 20) {
    console.log("성인");
}else if (age > 17) {
    console.log("고등학생");
}else if (age > 14) {
    console.log("중학생");
}else if (age > 8) {
    console.log("초등학생");
}else if (age > 0) {
    console.log("유아");
}

////////////////////////////////


// let now = new Date().getHours();

// now > 0 && now < 12 ? console.log("지금은 오전입니다") : console.log("지금은 오후입니다")



//////////////////////////

// const square = function(x) {
//     const result = x**2;
//     return result;
// };
// console.log(square(4));

// const square = function(x) {
//     return x**2;
// };
// console.log(square(4));

// const square = (x) => x**2;
// console.log(square(4));
// console.log(square(11));
// console.log(square(5));





/////////////////////////////


// // 일반형 (단일 표현식)
// // function square(x) {
// //     return x * x;
// // }
// // 축약형
// const square = (x) => x * x;
// console.log(square(3)); // 9

// // 일반형 (여러줄)
// // function triangle(base, height) {
// //     const area = (base * height) / 2;
// //     return area;
// // }

// // 축약형
// const triangle = (base, height) => {
//     const area = (base * height) / 2;
//     return area;
// }
// console.log(triangle(3, 4)); // 6
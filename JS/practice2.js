//for문으로 배열 만들기 

let arr = [];
 
for(let i = 0; 	i < 100;  i++) { 
        arr[i] = i + 1; 
} console.log(arr);
        

// 배열의 합 

//for문 
let sum1 = 0;
for (let num1 = 1; num1 <=100; num1++){ 
    sum1 += num1;
} console.log(sum1);

// for of 문 
let sum2 = 0;
for (num2 of arr) {
    sum2 += num2;
}; console.log(sum2);

// forEach 문 
let sum3 = 0;
arr.forEach(function(num3){
    sum3 +=num3;
}); console.log(sum3);

/////////////////////////////////////////////
// 내장 메소드 실습

let fruits1 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고"];
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

const same = fruits1.filter(function(fruit){
    return fruits2.includes(fruit)
});
console.log(same);

const diff = fruits1.filter(function(fruit){
    return !fruits2.includes(fruit)
});
console.log(diff);

/////////////////////////////////////////////
// 내장 객체 실습- 주말과 평일

let now =new Date().getDay();
now === 0 || now === 6 ? console.log("주말") :console.log("평일");


/////////////////////////////////////////////
// 내장 객체 실습 - 난수 생성

console.log(Math.floor(Math.random()*11));


/////////////////////////////////////////////
// HTML 내용 변경해보기 

let span = document.querySelector('span');
span.innerText = "맛없다__;;"
span.style.color ='red';
span.style.fontWeight= 'bold';

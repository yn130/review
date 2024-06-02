// // 문자열 매서드 
// let str = "Happy day~! ";

// console.log(str.length); //12
// console.log(str.toUpperCase()); // HAPPY DAY~! 
// console.log(str.toLowerCase()); // happy day~!

// console.log(str.indexOf("p"));  // 2
// console.log(str.slice(5, 9));  // day
// console.log(str.slice(2));  // ppy day~!

// console.log(str.replace("p", "a")); // Haapy day~! 
// console.log(str.replaceAll("p", "a")); // Haaay day~!

// console.log(str.repeat(3)); //Happy day~! Happy day~! Happy day~!
// console.log(str.trim()); // Happy day~!(공백 제거)
// console.log(str.split("")); // (12) ['H','a','p','p','y',' ', 'd', 'a', 'y', '~', '!', ' ']
// console.log(str.split(" ")); // (3) ['Happy', 'day~!', ' ']

// //배열 매서드 
// let days = ["월", "화", "수", "목"];

// days.push("금");
// console.log(days); // [ '월', '화', '수', '목', '금' ]

// days.pop(); 
// console.log(days); // [ '월', '화', '수' ]


// days.unshift("일");
// console.log(days); // [ '일', '월', '화', '수', '목' ]


// days.shift();
// console.log(days); // [ '월', '화', '수', '목' ]


// console.log(days.includes("화")); // true
// console.log(days.includes("토")); // false

// let numbers = [1, 2, 3, 4, 5];

// console.log(numbers.includes(1)); // true
// console.log(numbers.includes(7)); // false


// console.log(days.reverse()) // ['목', '수', '화', '월']
// console.log(days.join(",")); // 월,화,수,목
// console.log(days.join("")); // 월화수목

// //

// const array = [1,2,3,4,5];

// console.log(array.length);  // 5
// console.log(array.indexOf(2));  // 1

// // 매서드 체이닝

// let hello = "Hello~";

// helloArr = hello.split("");
// console.log(helloArr);
// let reverseHello = helloArr.reverse();
// console.log(reverseHello);
// let helloAgain = reverseHello.join("");
// console.log(helloAgain);

// ///////메서드 체이닝을 실행하면? 
// console.log(hello.split("").reverse().join(""));


////////////////////////////////////

// let numbers = [1, 2, 3, 4, 5, 6];
// let fruits = ["사과", "바나나", "수박", "포도", "파인애플"];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

////////////////
// let numbers = [1, 2, 3, 4, 5, 6];
// let fruits = ["사과", "바나나", "수박", "포도", "파인애플"];

// for (let number of numbers) {
//   console.log(number);
// }
// for (let fruit of fruits) {
//   console.log(fruit);
// }

/////////////

let numbers = [1, 2, 3, 4, 5, 6];
let fruits = ["사과", "바나나", "수박", "포도", "파인애플"];

numbers.forEach(function (number, index, array) {
  console.log(number, index, array);
});
numbers.forEach((number, index, array) => {
  console.log(number, index, array);
});
fruits.forEach(function (fruit, i, arr) {
  console.log(fruit, i, arr);
});
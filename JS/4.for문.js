// for문

// for (let num = 1; num < 1000; num++) {
//     if (num % 13 == 0 && num % 2 == 1) {
//         console.log(num);
//     }
// }

////////////////////////////////

// while문

// let a = 2, b = 1;
// while (a < 10) { 
//     while (b < 10) {
//         console.log(`${a} x ${b} = ${a * b}`); 
//         b++; 
//     }
//     a++;
//     b = 1;
// }
////////////////////////////////////

// break

// for (let i = 0; i < 100; i++) {
//     if (i == 10) {
//       console.log("멈춰!");
//       break;
//     }
//     console.log(i);
//   }

//////////////////////////////////////

// continue

// let sum = 0;

// for (let i = 0; i < 100; i++) {
//   if (i % 2 == 0) {
//     continue;
//   }
//   sum += i;
// }
// console.log(sum);  // 2500
  

/////////////////////////////////

/// while + break 문

// let sum = 0;
// let n = 1;
// while (true) {
//   if (n % 2 == 0 || n % 3 == 0) {
//     if(n == 100) break;
//     sum += n;
//   }
//   n++;
// }
// console.log(sum);

////////////////////////////////

//for + continue 문

let sum = 0;

for (let n = 1; n < 100; n++) {
    if (n % 6 == 0) {
        if ( n % 4 == 0) {
            continue;
        }
        sum += n;
    }
}
console.log(sum);

/////////////////////////////////

  
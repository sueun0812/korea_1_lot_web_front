// # array03.js

// ! 자바스크립트 배열의 기능

// 배열과 문자열 사이의 변환 *****

// 1) join() - 연결하다
// : 배열이 모든 요소를 연결하여 하나의 문자열로 변환
// : 구분자를 전달(제공하지 않을 경우 쉼표가 기본값)
let fruits = ['사과' , '바나나', '망고'];

let result1 = fruits.join();  // ','
let result2 = fruits.join(' ');
let result3 = fruits.join('-');
console.log(result1);
console.log(result2);
console.log(result3);

// 2) split() - 분리하다
// : 문자열을 특정 구분자를 기준으로 분리하여 배열로 변환

let result4 = result1.split(',');
let result5 = result2.split(' ');
let result6 = result3.split('-');

console.log(result4);
console.log(result5);
console.log(result6);

// # 다차원 배열
// : 배열의 요소로 또 다른 배열을 포함하는 구조
// >> 중첩 배열

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
// 3 X 3 크기의 2차원 배열

console.log(matrix[0]); // 1, 2, 3
console.log(matrix[0][1]);  // 2

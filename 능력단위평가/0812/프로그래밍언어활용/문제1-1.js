// # 문제 1-1.js

// 합계 구하기
let num1 = prompt('첫번째 숫자를 입력하세요.');
let num2 = prompt('두번째 숫자를 입력하세요.');
let num3 = prompt('세번째 숫자를 입력하세요.');

let value1 = Number(num1);
let value2 = Number(num2);
let value3 = Number(num3);

let sum = value1 + value2 + value3;
console.log(sum);

// 평균 구하기
let average = sum / 3;
console.log(average);

// 최대값 구하기
console.log(Math.max(value1, value2, value3));




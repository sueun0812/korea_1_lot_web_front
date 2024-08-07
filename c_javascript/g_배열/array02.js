// # array02.js

// == 일반 자료형 ==
// 일반 자료형은 원본 데이터와 복사된 데이터가 별도로 저장
// : 서로 영향을 미치지 않음
let num1 = 10;
let num2 = num1;

console.log(num2);  // 10
num2 = 20;
console.log(num1);  // 10
console.log(num2);  // 20

// == 참조 자료형 (객체) ==
let array01 = [11, 22, 33];
let array02 = array01;

// array02 = [1, 2, 3];
// console.log(array01);
// console.log(array02);

array01[1] = 55;
console.log(array02); // [11, 55, 33]

array02[2] = 66;
console.log(array01); // [11, 55, 66]

// ? 원본과 복사본의 독립성을 보장
// 스프레드 연산자(...)
// : 배열 또는 객체의 요소를 개별 요소로 확장하거나
//   , 여러 요소를 하나의 형태로 결합할 때 사용

// 1) 개별 요소 확장
let sports = ['축구', '야구', '농구'];
let copy = ['배구', ...sports, '펜싱'];  // 독립적인 주소 체계를 가짐

copy[1] = 'baseball';
console.log(sports);  // ['축구', '야구, '농구']
console.log(copy);  // ['축구', baseball', '농구']

// 2) 하나의 형태로 결합
let mergeSports1 = [...sports, ...copy];
let mergeSports2 = [...copy, ...sports];

console.log(mergeSports1);
console.log(mergeSports2);



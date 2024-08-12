// # func02.js

// ! 콜백 함수를 활용하는 자바스크립트의 '내장 함수'

// '배열'이 가지는 콜백 함수의 활용
// >> 메서드의 형태

// 배열.키워드 : 속성
// 배열.키워드() : 기능동작 >> 메서드 : 어딘가에 소속된 함수

// * 배열의 콜백 함수의 형태
// 배열.메서드(콜백함수)
// 배열의 콜백 함수를 가지는 배열의 메서드의 공통된 기능은 배열을 "순회"
// >> 콜백 함수는 3가지 함수 선언 방식 모두 사용 가능

// * 배열 콜백 함수의 '인자값'
function callback(value, index, array) {}

// 1) value
//    : 배열에서 순회되는 각 요소의 값

// 2) index
//    : 배열에서 순회되는 각 요소의 인덱스 번호

// 3) array
//    : 배열 그 자체

// >> 콜백함수의 인자값은 필수 아님 (value만 사용하는 경우가 많음)
//    : 사용하지 않는 인자값은 생략 가능

// function (value) {}
// function (value, index) {}
// function (, index) {}
// function (, , array) {}

// : 매개변수는 함수 내부의 로컬 변수이기 때문에 이름 변경 가능

// # 배열의 콜백 함수를 가지는 메서드 종류
// & 1. forEach()
// : 각 요소에 대해 동일한 함수를 실행
// : 배열 내부의 요소를 매개변수로 사용하여 콜백 함수를 호출

console.log('=== forEach() ===');

const numbers = [23, 41, 19, 7, 36];

// 배열명.forEach(각 요소들에게 적용할 함수를 콜백 함수로 지정);

numbers.forEach(function (value, index, array) {    // array를 사용하지 않았으므로 흐리게 출력됨 (사용하지 않는 경우 지워도 무방)
  // 모든 요소들에 동일한 기능 적용
  // : 단순한 기능 적용에 불과
  console.log(`${index + 1}번째 요소 : ${value}`);
});

// & 2. map() **********
// : 배열의 각 요소에 대해 함수를 적용하고 '새로운 배열을 생성하여 반환'
// : 콜백 함수에서 리턴한 값들을 기반으로 새로운 배열을 생성
// >> 전체 배열의 요소 개수의 변화가 없음

console.log('=== map() ===');
console.log(numbers); // [23, 41, 19, 7, 36]

const newNumbers = numbers.map(function(value) {
  let square = value * value;
  return square;
});
// : 배열의 메서드로 반환되는 값은 자동으로 배열 내에 저장

// 화살표 함수 사용시
const arrowMap = numbers.map((value) => {
  return value * value;
});

// 화살표 함수 축약시
// const arrowMap = numbers.map(value =>  value * value);

console.log(newNumbers);  // [529, 1681, 361, 49, 1296]

// & 3. filter() *********
// : 콜백 함수에서 리턴하는 값이 true인 것들만 모아서 '새로운 배열을 만드는 함수'
// >> 기존의 배열과 요소의 수가 일치하지 않을 수도 있음

const basicArray = [0, 1, 2, 3, 4, 5];

const evenNumbers = basicArray.filter(function(value) {
  return value % 2 === 0; // 해당 조건식이 true인 값만 새로운 배열에 저장
});

// 화살표 함수 사용 시
const arrowFilter = basicArray.filter((value) => {
  return value & 2 === 0;
});

console.log(`원래 배열 : ${basicArray}`);   // 원래 배열 : 0, 1, 2, 3, 4, 5
console.log(`짝수만 추출한 배열 : ${evenNumbers}`);   // 짝수만 추출한 배열 : 0, 2, 4


// # === 배열을 활용한 콜백 함수 예제 ===
let cars = ['audi', 'bmw', 'volvo', 'hyundai'];

// 1. 전체 배열의 요소를 순회하여 출력 - forEach (콘솔 출력)
cars.forEach(function(value, index) {
  console.log(`${index + 1}. ${value}`);
});   
/*
  1. audi
  2. bmw
  3. volvo
  4. hyundai
*/

// 화살표 함수 사용
// cars.forEach((car) => {
//   console.log(car);
// })

// 2. 전체 배열의 요소를 대문자(영문자)로 변환 - map
// >> 문자열데이터.toUpperCase()
const bigEnglish = cars.map(function(value) {
  let big = value.toUpperCase();
  return big;
});
console.log(bigEnglish);  // [ 'AUDI', 'BMW', 'VOLVO', 'HYUNDAI' ]

// 화살표 함수 사용
// let carsUpperCase = cars.map(car => car.toUpperCase());
// console.log(carsUpperCase);

// 3. 전체 배열의 요소 중 문자열의 길이가 4보다 큰 요소만 반환 - filter
// >>문자열데이터.length
const strLength = cars.filter(function(value) {
  if (value.length > 4) {
    return value;
  }
});
console.log(strLength); ['volvo', 'hyundai']

// 화살표 함수 사용
// let longNameCars = cars.filter(car => car.length > 4);
// console.log(longNameCars);

// & 메서드 체이닝
// : 메서드를 연속적으로 호출하는 프로그래밍 패턴
// >> 어떤 메서드(기능)이 반환(리턴)하는 값을 기반으로 또 다른 메서드(기능)을 줄줄이 사용하는 것

let numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// numbersArray의 값들 중
// - 짝수만 선택 (filter)
// - 해당 값들을 제곱 (map)
// - 콘솔에 출력 (forEach)

numbersArray
  .filter(value => value % 2 === 0)
  .map(value => value * value)
  .forEach(value => console.log(value));
  /*
    0
    4
    16
    36
    64
   */

// # array01.js

// ! 자바스크립트의 배열

// # 1. 배열이란?
// '여러 개'의 데이터를 '순차적'으로 나열한 자료 구조
// : 다양한 타입을 하나의 배열에 저장 가능
// : 0부터 시작하는 인덱스 번호를 가짐(1씩 증가)

// - 각각의 데이터를 "요소"라고 부름
// - 크기가 고정되지 않음 / 프로그램 실행 중 동적으로 사용 가능

// # 2. 배열 사용 목적
// : 집합적 제이터 관리 용이
// : 순차적 접근
// : 다양한 데이터 타입을 함께 저장

// # 3. 배열 생성
// 1) 리터럴(literal, 문자 그대로의) 방식
// : 가장 직관적이고 간편함
// [](대괄호) 안에 원하는 요소들을 ,(콤마)로 구분하여 나열

let fruits = ['사과', '오렌지', '포도'];
let numbers = [1, 2, 3, 4, 5];
let emptyArray = [];  // 빈 배열 선언 가능
let variableArray = ['문자', 123, true, undefined, null];

// 2) Array 생성자 사용 방식
// : 새로운 베열 생성 시 배열의 크기나 초기값을 지정하는 방법

let arrayFruits = new Array(3);
let arrayFruits2 = new Array('사과', '바나나', '자몽');

// # 4. 배열 요소 접근 & 수정
// 각 요소는 고유한 인덱스를 통해 접근 & 수정 가능
const sports = ['축구', '야구', '농구'];
const basketball = '농구';
// basketball = 'basketball'; - Error (상수 재활용 불가)


// 1) 요소 접근
// 배열명[인덱스 번호]
console.log(sports[1]);

// 2) 요소 수정
// 배열명[인덱스 번호] = 수정 데이터 할당
sports[2] = 'basketball';
console.log(sports);  // ['축구', '야구', 'basketball']

// cf) 참조 자료형
// : 함수, 배열, 객체 등 (복합 자료형)
// >> 변수에 값이 아닌 '메모리 주소를 저장하여 참조'

// ? 배열의 길이
// : 배열명.length 속성
// >> 배열의 마지막 요소 인덱스 번호 === 배열의 길이 - 1
console.log(sports.length); // 3

sports.length = 6;
// undefined - 배열의 길이를 늘리면 새 요소는 'undefined'로 초기화
console.log(sports[3]);
console.log(sports);

sports[5] = '배구';
console.log(sports);

// # 5. 배열 탐색 및 정보 확인
// 자바 스크립트의 배열이 가지는 기본 기능(함수)
// 배열명.기능명();

let snacks = ['칸쵸', '초코송이', '포테토칩', '초코송이'];

// 1) indexOf() ***
// : 배열의 지정된 요소를 찾고 그 요소의 첫 번째 인덱스를 반환 (없으면 -1 반환)
console.log(snacks.indexOf('초코송이'));  // 1
console.log(snacks.indexOf('꼬깔콘'));  // -1

// 2) lastIndexOf() **
// 배열의 끝부터 시작하여 요소를 탐색 (없으면 -1 반환)
console.log(snacks.lastIndexOf('초코송이'));  // 3

// 3) includes() *****
// : 배열에 특정 요소가 존재하는지 확인
// : 해당 결과를 불리언 값으로 반환
let hasPotato = snacks.includes('포테토칩');
console.log(hasPotato); // true

// # 6. 배열 조작 함수(기능)
fruits = ['Apple', 'Banana'];

// 1) 요소 추가
// push(): 배열의 끝에 하나 이상의 요소를 추가 *****
// >> 수정된 배열의 길이를 반환
let newLength = fruits.push('Cherry');
console.log(newLength); // 3

// 2) 요소 삭제
// pop() : 배열의 마지막 요소를 제거, 그 제거된 요소를 반환(빈 배열은 undefined 반환) *****
let lastFruit = fruits.pop();
console.log(lastFruit); // Cherry

// +) shift()
// : 배열의 첫 번째 요소를 제거, 반환
let firstFruit = fruits.shift();
console.log(firstFruit);  // Apple

// +) unshift()
// : 배열의 시작 부분에 하나 이상의 요소를 추가 - 수정된 배열의 길이 반환
newLength = fruits.unshift('Strawberry');
console.log(newLength); // 2

// +) splice() ***

// splice(삭제할 요소 시작 인덱스, 삭제할 요소의 개수) - 삭제
let removedFruit = fruits.splice(1, 1);
console.log(removedFruit);  // 바나나

// splice(시작 인덱스, 0, 아이템 나열, ...) - 추가
fruits.splice(1, 0, 'Mango', 'Peach');
console.log(fruits);  // ['Strawberry', 'Mango', 'Peach']

// 3) 요소 정렬 & 순서 변경

// sort() : 배열 요소 정렬 (오름차순) *****
console.log(fruits.sort()); // ['Mango', 'Peach', 'Strawberry']

// reverse() : 배열 요소 정렬 (내림차순)
console.log(fruits.reverse());  // ['Strawberry', 'Peach', 'Mango']

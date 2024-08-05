// # func03.js

// ! 함수의 매개변수 (기본 매개변수 & 나머지 매개변수)

// # 1. 기본 매개변수 (default)
// : 함수에 인자를 전달하지 않았을 때 사용되는 기본값을 정의
// : 함수 호출 시 특정 매개변수(기본 매개변수) 생략이 가능

// * 구현 방법
function defaultFunce(param1=vlaue1, param2=value2) {
}

// 데이터 전달에 대한 선택이 있는 파라미터의 경우
// , 무조건적인 값이 필요한 데이터보다 뒤에 작성
function greet1(age, name='비회원고객') {
  console.log(`안녕하세요 ${name}님, ${age}세입니다.`);
}

greet1(50);
greet1(50, '정수은');

// # 2. 가변 매개변수
// : 함수가 받을 수 있는 매개변수의 수가 변할 수 있다는 것을 의미
// >> 함수 호출 시 인자의 수가 정해져있지 않고, 함수 내부에서 유동적으로 처리

// # 3. 나머지 매개변수
// JS에서는 나머지 매개변수를 사용하여 가변 매개변수를 구현
// : 함수에 전달된 인자들을 배열의 형태로 받음

// * 구현 방법
// : 매개변수명 앞에 ...(spread 연산자)를 붙여 정의
// : 데이터가 지정될 변수가 있는 매개변수 목록의 마지막에 위치
function spreadFunc(num1, num2, ...nums) {
  // 매개 변수명 앞에 ...연산자를 붙이는 경우 해당 데이터는 배열의 형태
}

function print(num1, num2, ...nums) {
  // nums : 배열
  console.log(nums);
}

print(1, 2, 3); // [3]
print(1, 2, 3, 4, 5); // [3, 4, 5]
print(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // [3, 4, 5, 6, 7, 8, 9, 10]

// Math.min()함수
// : 복수의 인자를 받아 그 중 최솟값을 반환

function findMin(...numbers) {
  let minNumber = Math.min(...numbers); // 배열의 요소만 전달 (배열의 형태 X)
  return minNumber;
}

console.log(findMin(31, 25, 63, 36, 24)); // 24
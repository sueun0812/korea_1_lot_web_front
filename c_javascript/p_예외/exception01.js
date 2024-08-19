// # exception01.js

//! 자바스크립트 예외

//? cf) 오류(Error, 에러)
// : 부정확하거나 유효하지 않은 동작

//? 1. 오류의 종류
// 1) '구문' 오류
// : 프로그램 실행 전에 발생
// >> 코드를 작성할 때 발생하는 오류
// >> 문법이 언어의 정의된 규칙을 따르지 않을 때 발생

// EX) 괄호를 닫지 X, 잘못된 키워드 사용
console.log('=== 구문 오류 예제 ===');
// console.log('프로그램이 시작되었습니다.' - Error

// 2) '런타임' 오류
// : 프로그램 실행 중에 발생
// >> 예측 가능한 비정상적인 조건 또는 예외적인 사건을 의미
// >> 코드가 순차적으로 실행되다가 오류가 위치하는 부분 이후에 실행이 중단

// EX) 파일을 찾을 수 X, 입력이 잘못 이루어진 경우, 네트워크 연결 오류 등
console.log('=== 런타임 오류 예제 ===');
// console.rog('log를 rog로 잘못 입력했습니다.'); 
// : 오타 수정만으로 해결 가능한 오류가 많음
// >> 그 외의 오류도 존재 O

console.log('런타임 오류 발생 이후의 코드');

// cf) 자바스크립트는 SyntaxError라고 출력되는 오류 이외의 모든 오류가 예외(런타임 오류)로 분류
// EX) TypeError, ReferenceError, RangeError 등

//# JS 실행 중 발생하는 예외를 다루는 방법
// : 예외 처리

//? 1. 기본 예외 처리
// : 조건문을 사용해서 예외가 발생하지 않도록 지정
// (권장하지 X)

document.addEventListener('DOMContentLoaded', () => {
  // HTML에 존재하지 않는 요소를 불러오는 경우
  const h1 = document.querySelector('h1');
  // h1.textContent = '안녕하세요';

  if (h1) { // h1 요소가 존재하는 경우에만
    h1.textContent = '안녕하세요';
  } else {
    console.log('h1 태그는 존재하지 않습니다.');
  }

  console.log('다음 로직을 실행합니다.');
});

//? 2. 고급 예외 처리
// : try catch 블럭을 사용 (+ finally)

// try 블록
// : 블록 내에서 실행된 코드는 예외 발생 여부를 감지
// >> 예외가 발생하면 즉시 실행이 중단되고 catch 블록으로 제어가 이동

// catch 블록
// : 예외가 발생했을 때 실행되는 블록
// >> catch 블록 내에 전달되는 예외 객체를 통해 오류 정보를 식별하고 처리

// finally 블록
// : 예외 발생 여부와 상관없이 실행되는 블록
// >> 주로 자원을 정리하는 코드(예. 파일 닫기 등)

/*
try {
  : 예외 발생 가능성이 있는 로직
  >> 일반 로직 흐름
  >> 외부의 데이터를 가져오거나 HTML의 요소에 접근
} catch (e, exception, error) {
  : 예외가 발생했을 때 실행할 코드
} finally {
  : 무조건 실행 (선택사항)
}
*/

function randomException() {
  if (Math.random() < 0.5) {
    // 50%의 확률로 조건문 실행
    throw new Error('무언가 잘못되었습니다!');
  }

  return '성공적으로 실행되었습니다.';
}

try {
  const result = randomException();

  console.log(result);
  console.log('try 구문의 마지막 줄');
} catch(exception) {
  console.log('catch 구문');
  console.log(exception.message); // 무언가 잘못되었습니다!
} finally {
  console.log('finally 구문');
}
// # func04.js

// 자바스크립트의 내장 함수 - 콜백 함수 활용 {고차 함수}

// ! 타이머 함수
// : 특정한 시간이 지난 후 함수를 실행
//   or 일정 간격으로 함수를 반복 실행하는 기능

// & 1. setTimeout(콜백함수, 시간);
// 지정된 시간이 지난 후, 주어진 콜백 함수를 단 한 번 실행
// - (지연) 시간 : 밀리초(ms, 1000밀리초 === 1초)

// * 기본 사용법
function greet(name='정수은') {
  console.log(`hello, ${name}`);
}

greet();

// 2초 뒤에 실행
// >> 콜백함수로 함수를 전달
// >> 콜백함수의 인자 전달은 세 번째 인자부터 나열되는 값이 함수의 매개변수로 전달
setTimeout(greet, 2000);    // 2초 뒤 실행
setTimeout(greet, 3000, '쪼꼬');    // 3초 뒤 실행

// * 익명함수 사용
setTimeout(function() {
  console.log('4초 뒤에 실행됩니다.');
}, 4000);

setTimeout(function() {
  console.log('5초 뒤에 실행됩니다.');
}, 5000);

// cf) 타이머 취소
// : clearTimeout(타이머_ID) 
// : setTimeout으로 설정한 타이머 제거

// >> setTimeout()은 타이머 ID를 자동 반환

const timeID = setTimeout(greet, 2000, '수은정');

clearTimeout(timeID);

// & 2. setInterval(콜백함수, 시간);
// '지정된 시간 간격마다' 함수를 반복해서 실행
// : 사용법 setTimeout()과 유사

let count = 1;

let id = setInterval(() => {
  console.log(`3초 마다 실행됩니다. ${count}번째`);
  count++;
}, 3000); // 3000밀리초 (3초)

setTimeout(() => {
  console.log(`타이머를 종료합니다.`);
  clearInterval(id);
}, 15000);  // 15000밀리초(15초)

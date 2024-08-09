// # mathModule.js

// 사칙 연산의 함수를 정의
// >> 각 함수는 인자값 2개를 받아 연산 후 값을 반환
// : add(더하기), subtract(빼기), multiply(곱하기), divide(나누기)
export function add(a, b) {
  return a + b;
}

export default function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export let divide = (a, b) => {

  if (b !== 0) {
    return a / b;
  } else {
    console.log('0으로 나눌 수 없습니다.');
  }
}
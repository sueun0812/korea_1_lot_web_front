// # a_동기.ts
export const tmp = '';

// ! 동기 처리 프로그래밍

// # 1. 정의
// : 코듣가 순차적으로 실행되는 것
// >> 한 작업이 완료될때까지 다음 작업은 대기(시작하지 않음)

// # 2. 특징
// - 순차적 실행 : 코드 흐름 예측이 용이
// - 간단성 : 프로그램의 이해가 쉬움

function syncFunc01() {
  // 시간 지연을 위한 계산식
  let sum = 0;

  for (let i = 0; i < 9999999000; i++) {
    sum += i; // sum = sum + i
  }
  return sum;
}

function syncFunc02() {
  // 시간 지연을 위한 계산식
  let sum = 0;

  for (let i = 0; i < 100; i++) {
    sum += i; // sum = sum + i
  }
  return sum;
}

function example() {
  console.log(`첫 번째 작업 시작`);
  let result = syncFunc01();  // 시간이 오래 걸리는 작업
  console.log(`첫 번째 작업 완료 : ${result}`);

  console.log(`두 번째 작업 시작`);
  let result2 = syncFunc02();
  console.log(`두 번째 작업 완료 : ${result2}`);
}

example();

// # 3. 동기 프로그래밍의 장단점
// 장점 
// - 간단성, 명확성
// - 디버깅 용이

// 단점
// - 응답성 저하, 코드의 활용(사용)도가 저하
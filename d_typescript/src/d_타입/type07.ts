// # type07.ts
export const tmp = '';

// ! 타입스크립트의 함수

// ? 함수의 선언과 호출
// : 매개변수와 반환 값의 타입 지정 가능

function greet(name: string): string {
  return `Hello ${name}`;
}

// ? 함수에 타입 별칭을 사용하는 경우 
// >> 화살표 함수의 체계를 사용

type ArrowFuncType = (name: string) => string;

const arrowFunc: ArrowFuncType = (name) => {
  return `Hi ${name}`
}

console.log(arrowFunc('선하영')); // Hi 선하영
console.log(arrowFunc('장지민')); // Hi 장지민

// ? 선택적 매개변수와 기본 매개변수
// 1) 선택적 매개변수
// : 함수 호출 시 생략 가능
// : 변수명 뒤에 ? 작성

// 2) 기본 매개변수
// : 기본값을 할당
// : 함수 호출 시 생략하는 경우에 기본값을 자동 할당
// : 매개변수명 = '기본값'

function select(name?: string, greeting: string = '안녕') {
  if (name) {
    console.log(`${greeting}, ${name}`);
  } else {
    console.log(`${greeting}, guest`);
  }
}

select(); // 안녕, guest
select('정수은'); // 안녕, 정수은
select('반가워'); // 안녕, 반가워 **
// >> 선택적 매개변수와 기본 매개변수 사용 시
// : 선택적 매개변수는 반드시 필수 매개변수(인자로 전달) 뒤에 작성
// : 기본 매개변수는 필수와 선택적 매개변수 양쪽에 작성 가능 (어디든)
// : 기본 매개변수가 앞서는 경우 생략하려면 반드시 undefined를 전달
select(undefined, '반가워');  // 반가워, guest

select('쪼꼬', '보구밍')  // 보구밍, 쪼꼬

// ! Rest(나머지) 매개변수
// : 함수에 전달하는 여러개의 매개변수를 그룹화하여 배열로 전달하는 기능
// ...연산자(spread 연산자)를 사용하여 매개변수명 앞에 사용
function sum(a: number, b: number, ...c: number[]) {
  return c.reduce((c1, c2) => c1 + c2, 0); //c1 += c2
}

console.log(sum(1, 2, 3, 4, 5));  // 12
console.log(sum(1, 2)); // 0
console.log(sum(1, 2, 10, 20, 30)); // 60

// ? Rest 매개변수의 주의점
// : 항상 매개변수 리스트의 마지막에 위치
// >> 타입 명시를 배열로 작성
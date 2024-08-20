// # type03.ts
export const tmp = '';

// ! 타입 별칭 (Type Alias)
// : 새로운 타입 이름을 생성하여 기존 타입을 참조할 수 있게 하는 기능
// >> 코드의 재사용성과 가독성 향상

// ? 기본 사용 방법
// : type 키워드를 사용하여 정의
// >> type 타입별칭 = 타입;

// # 1. 변수 타입 별칭

type TextType = string;
// >> 타입 별칭은 다른 코드와의 식별을 위해 대문자로 시작

let textMsg: string = '텍스트 문자열입니다.';

type NumberType = number;
let num: NumberType = 1023;

// >> 변수의 경우 별칭 사용을 거의 하지 않음

// # 2. 객체 타입 별칭
// : 타입 별칭 내에서도 선택적 프로퍼티 & 읽기 전용 속성 사용 가능

type UserType = {
  name?: string;
  readonly height: number;
};

const user1: UserType = {
  name: '정수은',
  height: 165
};

// user1.height = 170;  - Error

const user2: UserType = {
  // name: '수은',
  height: 155
};

// # 3. 함수 타입 별칭
// : User 타입인 매개변수를 받아 boolean 타입의 반환값을 생성하는 함수

type User = {
  id: string;
  password: string;
}

type ValidUser = (user: User) => boolean;

// const isValidUser: ValidUser = (user: User) => {
//   return user.id !== '';
// }
const isValidUser: ValidUser = (user) => user.id !== '';

let userA: User = {
  id: 'qwerty',
  password: 'qwe123'
}

let userB: User = {
  id: '',
  password: 'qweqwe123'
}

console.log(isValidUser(userA));  // true
console.log(isValidUser(userB));  // false

// +) 함수 타입 지정 시 반환 값이 없는 경우의 타입 : void
// type VoidFunc = () => void;

// 함수의 타입 별칭 예제
// - 함수 표현식
// - 화살표 함수 *
type FuncType = (num: number) => number;

const exampleFunc1 = (num)

// 함수의 타입 별칭을 사용하는 함수는 반드시 화살표 함수의 체계를 가져야 함
const exampleFunc: FuncType = (num) =>{
  num *= 2; // num = num * 2;
  return num;
}
const exampleFunc2 = (num: number): number[] => {
  num *= 2; // num = num * 2;
  return [num, num];
}


// === 타입 별칭 사용 ===

//! 문제 1: 타입 어노테이션 사용
// 변수 age를 선언하고 숫자 타입으로 어노테이션을 지정
// 변수 isStudent를 선언하고 불리언 타입으로 어노테이션을 지정
// 위 두 변수에 적절한 값을 할당하고, 콘솔에 출력
let age: number;
let isStudent: boolean;

age = 10;
isStudent = true;

console.log(`Age : ${age}, IsStudent : ${isStudent}`);  // Age : 10, IsStudent : true

//! 문제 2: 타입 별칭 사용
// ProductType이라는 타입 별칭을 생성
// 객체, id (문자열 타입), name (문자열 타입), price (숫자 타입) 속성 포함
type ProductType = {
  id: string;
  name: string;
  price: number;
}

// ProductType 타입을 사용하여 product라는 이름의 변수를 선언하고, 적절한 값을 할당
let product: ProductType = {
  id: 'qwe123',
  name: '정수은',
  price: 15000
}

// product 객체의 내용을 콘솔에 출력
console.log(`${product.id} - ${product.name} - ${product.price}`);  // qwe123 - 정수은 - 15000
// # generic01.ts

// ! 제네릭(Generic, 일반적인)

// # 1. 제네릭 정의
// : 재사용 가능한 컴포넌트(코드 단위)를 만드는데 사용
// >> 해당 컴포넌트가 처리할 데이터 타입을 미리 지정하지 않고 
//    , 해당 컴포넌트를 사용하는 시점에서 원하는 데이터 타입 지정

// # 제네릭 필요성
// - 코드의 중복을 줄임
// - 재사용 가능한 컴포넌트를 생성
// - 타입 안정성 보장
//   >> '컴파일' 시점에서 타입을 체크 ('런타임' 환경에서 발생할 수 있는 에러를 방지)

// ? '컴파일'타임
// : 소스코드를 작성하고 편집하는 과정

// ? '런타임'
// : 컴파일 과정을 마친 프로그램이 사용자에 의해 실행되어 동작되어지는 때

// # 3. 제네릭 기본 문법
// : 사용할 컴포넌트(변수, 함수, 클래스 등)의 이름 뒤에 꺽쇠괄호(<>) 안에 "타입 변수"를 지정
// >> 함수나 클래스 등을 사용할 때 활용할 타입을 명시

// "타입 변수"
// : 임의의 키워드를 사용하여 명시
// : 일반적으로 대문자 알파벳 하나를 사용 (T: type, U, ...)
// >> 해당 타입 변수는 컴포넌트 내에서 실제 데이터 타입의 자리를 대신함

function generic<T>(arg: T): T { // 함수 정의 시 타입 변수 지정
  // 타입 변수 T (단일 타입 변수)
  return arg;
}

let str1 = generic<string>('안녕하세요');  // 함수 호출 시 타입 변수에 활용할 타입을 명시
let str2 = generic('hello');  // 오류X - 제네릭의 경우 타입 변수에 값을 유추 가능
// let str3 = generic<string>(100); - Error

generic<number>(123); 
generic<boolean>(true);

// ? +) 여러 제네릭 타입 변수 지정
// : 여러 개의 독립적인 타입을 처리할 경우 사용

function pair<T, U>(first: T, second: U): [T, U] {

  return [first, second]
}

let pairOutput = pair<string, number>('안녕', 345);
let pairOutput2 = pair<number, string>(345, '안녕');

function pair2<T, U>(first: T,  second: T): U { // U를 T[]로 작성 가능
  return [first, second] as U;
}

let pair2Output = pair2<string, string[]>('hello', 'hi');
// ['hello', 'hi]

// # 4. 제네릭을 사용하는 컴포넌트들 예시

// 1) 변수
let a;

a = 10;
a = '안녕';

// 2) 제네릭 함수
// : 매개변수의 타입을 지정하는 경우가 많음

function genericFunc<T>(args: T[]): T[] { // string[], number[]
  console.log(`배열의 길이 : ${args.length}`);
  return args;
}

let resultFunc = genericFunc<boolean>([true, false, false]);  // 배열의 길이 : 3
console.log(`함수의 반환값 : ${resultFunc}`); // 함수의 반환값 : true,false,false

// 3) 제네릭 인터페이스
// : 타입 매개변수 T를 가지는 인터페이스

interface IGeneric<T> {
  (key: T): T;  // 인터페이스 내부의 속성 타입을 명시
}

function example<T>(arg: T): T {
  return arg;
}

let myGeneric: IGeneric<number> = example;

console.log(example(5));
console.log(myGeneric(5));

// 4) 제네릭 클래스
class GenericClass<T> {
  value: T;
  add: (x: T, y: T) => T;

  constructor(value: T, addFunc: (x: T, y: T) => T) {
    this.value = value;
    this.add = addFunc;
  }
}


let myGenericNumber = new GenericClass<number>(0, function (x, y) { return x + y })
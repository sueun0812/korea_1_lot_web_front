// # c_dataType.js

// 자료형 (data type)
// - 기본 자료형, 참조 자료형

// ? 기본 자료형 (string, number, boolean, null & undefined)

// ! string (문자열)
// 작은 따옴표, 큰 따옴표, 백틱(``)

let str1 = 'hello';
let str2 = "Hello";


let str3 = `hello, world`;

// +) 탬플릿 문자열

let name = '정수은'

// 문자열 내에 변수나 표현식을 사용할 수 있도록 하는 문자열
console.log('안녕하세요', name, '입니다.');
console.log(`안녕하세요 ${name} 입니다.`);

console.log(`3 + 7 = ${3 + 7}`);

// let multiLine = '안녕하세요
// 반갑습니다.'; - Error : 일반 따옴표는 줄바꿈을 인식하지 못함

let multiLine = `
  안녕하세요
  만나서 반갑습니다.
  :)`

console.log(multiLine);

// ! 2. number (숫자형)
// : 정수 및 실수를 포함하는 자료형

// +) typeof 연산자
// : 자료형을 출력하는 연산자

let num = 10;
let float = 10.5;

console.log(typeof num);  // number
console.log(typeof float);  // number

// ! 3. boolean (논리형)
// : 참(true), 거짓(flase) 값만을 가지는 자료형

let bool1 = true;
let bool2 = false;

console.log(bool1); // true
console.log(typeof bool1);  // boolean

console.log(bool2); // false
console.log(typeof bool2);  //boolean

// ! 4. null & undefined 자료형

// 4-1. null : 아무것도 없다
// >> 변수의 데이터가 유효하지 않은 경우

let value = null;
console.log(typeof value);

console.log(
  // value 변수의 타입이 'object'이면서(and) 값이 존재하지 않을 경우 'null'을 출력
  // , 그것이 아니라면 'not null'을 출력
  (typeof value === 'object' && !value) ? 'null' : 'not null'
);

// 4-2. undefined : 정의되지 않았다.
// >> 변수가 선언되었으나, 아직 어떠한 값도 할당되지 않았을 때의 기본값

let hello; // 변수 선언

// clg: console.log()의 코드 스니펫(축약 단축키)
console.log(hello);

// ? === 자료형 변환 ===
// 문자열로 변환, 숫자형으로 변환, 논리형으로 변환

// 1. String() 함수
let num1 = 123;
let num2 = 456;

console.log(num1 + num2); // 579

// 123456
let stringNum1 = String(num1);
let stringNum2 = String(num2);
console.log(stringNum1 + stringNum2); // 123456

// 2. Number() 함수

let notANumber = '안녕하세요.';
console.log(Number(notANumber));  //NaN : Not A Number - 숫자로 변환할 수 없는 값을 변환 시도할 경우 나타나는 자료형

console.log(Number(stringNum1));  // 123
console.log(typeof Number(stringNum1));  // number


// 3. Boolean() 함수

// false : false, 0, '', null, undefined, NaN
// true : 위의 값을 제외한 모든 데이터를 true로 간주

console.log(Boolean('hello'));  // true
console.log(Boolean('')); // false

console.log(Boolean(123)); // true
console.log(Boolean(0)); // false

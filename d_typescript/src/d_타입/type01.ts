// # type01.ts
export const tmp = '';

// ! 타입스크립트의 타입
// : 타입 명시(작성)가 필수 사항은 아님
// >> 프로그램의 안정성과 가독성을 높이는 역할

// ? 타입 명시 방법
// : 타입 어노테이션 (type annotation - 타입 주석)
// >> 변수명 뒤에 콜론을 사용하여 JS 코드에 타입을 정의

// ? 타입의 종류
// # 1. 기본 타입 (원시 타입 - string, number, boolean 등)
// : 변수명 뒤에 콜론 사용
// >> typeof 연산자 사용 시 나타내는 변환값과 동일한 이름으로 명시 (소문자)

let name: string = '정수은';
// 권장) let 변수명: 타입명 = 값;
let age: number = 50;
let isStudent: boolean = false;

let anydata = '문자열'; // 타입 명시 생략 가능 >> 타입 체킹 생략 X

// name = 123; - Error (타입 체킹)
// anyData = 123; - 타입을 명시하지 않아도 초기 할당하는 데이터로 타입 지정

// # 2. 배열 (list, array) 타입
// : 순서가 있는 요소의 모음을 나타내는 자료 구조

// - 변수명 뒤에 콜론 사용 * 
// : 기본 타입명 뒤에 배열을 나타내는 []를 첨부
let list1: string[] = ['1', '2', '3'];


// - 제네릭 타입
// : Array<기본타입>
let list2: Array<number> = [4, 5, 6];

// # 3. void 타입
// : 아무런 값이 없다.
// >> 주로 함수에서 반환값이 없거나
//    , return 키워드가 있더라도 반환하는 값이 없을 때 사용되는 타입

function voidType(parameter: number): void {
  // 함수의 타입 정의
  // >> 파라미터(매개변수)와 반환값(return값) 정의 가능
  // >> ts에서 "파라미터"에 타입을 명시하지 않으면 오류 발생
  //    : 함수 내에서 사용할 변수에 대한 안정성을 요구
  //    : 변수의 타입 명시와 동일

  // >> 반환값의 타입 명시는 파라미터를 정의하는 ()소괄호 뒤에
  //    콜론을 붙여 정의
  console.log(parameter);
  return;
}

voidType(10); // 10

function stringReturn(str1: string, str2: string): string {
  return '안녕하세요';
}

console.log(stringReturn('1', '2'));  // 안녕하세요

// # 4. null & undefined 타입
// null
// : 아무것도 없음, 데이터가 잘못된 경우

// undefined
// : 변수 생성은 했지만 안에 값이 없을 경우

// ? JS / TS 에서의 차이점
// JS : 각각의 타입에 다른 타입의 값 할당이 가능

// let a;
// console.log(typeof a); // undefined
// a = 10;
// console.log(typeof a); // number

// TS : 각각의 타입으로 지정된 변수에는 각 타입만 할당 가능
// >> 어노테이션 사용하는 경우에만!

let nullType: null;
// nullType = 3;
// nullType = '안녕하세요';

let undefinedType: undefined;
// undefinedType = 5;
// undefinedType = '반갑습니다';

// # 5. any 타입 (모든)
// : 모든 타입에 대해 허용하는 타입
// >> 타입 검사 오류가 발생하는 것을 방지 (모든 타입과 호환 가능)
// >> ts를 js처럼 사용

// >> 사전에 오류 타입을 계산할 수 없음 (에러 방지 X - 사용 권장 X)

let anyType: any = 3;
anyType = '문자열';
anyType = false;
anyType = {};
anyType = [];

let unknownData;  // let unknownData: any
// >> 타입을 직접적으로 명시하지 않을 경우 값이 할당되기 전까지 자동으로 any 타입으로 인식

// # 6. never 타입
// : 절대 발생하지 않는 값의 타입
// >> 함수가 예외를 발생시키거나 끝나지 않을 때 사용

function error(message: string): never {
  throw new Error(message);
};

// error('에러 발생!!!'); - Error

// === 타입 어노테이션 사용 ===
//? 문제 1: 기본 타입 정의하기
// username은 문자열, userAge는 숫자, isSubscribed는 불리언 값으로 타입을 정의
let username: string = '정수은';
let userAge: number = 10;
let isSubscribed: boolean = true;

//? 문제 2: 배열 타입 정의하기
// 문자열 배열 fruits와 숫자 배열 numbers를 정의
let fruits: string[] = ['사과', '딸기', '오렌지'];
let numbers: number[] = [1, 2, 3];

//? 문제 3: void 타입을 사용하는 함수 정의하기
// 아무런 값을 반환하지 않고, 매개변수로 받은 메시지를 콘솔에 출력하는 함수 printMessage를 정의
function printMessage(message: string): void {
  console.log(message);
}

printMessage('월요일');
// # b_variable.js

// ! 변수
// : 데이터를 저장하기 위한 공간

// 변수 선언
// - 명명규칙

// * 필수 변수 명명규칙
// 첫문자로 영문자, 언더스코어, 달러만 사용 가능 (이후 숫자 사용 가능)
// 띄어쓰기 사용 불가
// 기호는 _, $만 사용 가능
// 영어 대소문자를 구별 (number, Number는 각각 다른 변수)
// 예약어 사용 불가

// let 1num; - Error
// let num ber; - Error

// * 선택 변수 명명규칙 - 권장
// lowerCamelCase 사용을 권장
// : 시작은 소문자로 시작, 이어지는 단어의 시작만 대문자로 작성

// cf. UpperCamelCase
// : 시작을 포함하여 이어지는 단어의 시작만 대문자로 작성

// now, _now, now$25, now_25 (사용 가능)
// 25now, now 25, *now (사용 불가)

// ? 변수명 지정 시 의미 있는 단어 사용을 권장
// 올해 연도 : currentYear
// 태어난 연도 : birthYear

// 나이 : age

// age = currentYear - birthYear

// ! JS 변수 선언 방식 (2가지 - let, var)

// - 변수 선언 방법
// 변수종류 변수명;

// - 변수 할당(대입)
// 변수명 = 데이터(값);

// ! JS 변수 선언과 초기화
// 변수종류 변수명 = 데이터(값);

let letVariable;
var varVariable;

letVariable = 10;
varVariable = 'Hello World';

// 호이스팅 효과로 선언 전에 값 할당이 가능
// letVariable2 = 10;
varVariable2 = '안녕';

let letVariable2 = 20;
var varVariable2 = '안녕 변수';

// ! let VS var
// 공통점
// : 재할당 가능 (변수의 특성), 호이스팅 가능

// 차이점
// let : 동일한 영역 내에서 가튼 이름으로 재선언 불가
// var : 동일한 영역 내에서 가튼 이름으로 재선언 가능 (사용 x)

// let letVariable2;
// - 블록 범위 변수 'letVariable2'을(를) 다시 선언할 수 없습니다. Error

var varVariable2; // 사용 x

// * 나이 계산 프로그램 만들기

// 올해 연도, 태어난 연도, 나이에 대한 변수 선언
// 올해 연도를 나타내는 변수에는 2024 값 할당

let currentYear = 2024;
let birthYear;
let age;


// 태어난 연도는 prompt 창에서 값을 할당 받아옴
birthYear = prompt('태어난 연도를 입력해주세요.')

// 나이 변수에 올해 연도 - 태어난 연도 변수를 사용하여 식 완성
age = currentYear - birthYear;

// 변수와 문자열을 동시 출력
// : +(연산자)를 사용하여 연결 가능
document.write(birthYear + '년에 태어난 사람의 나이는 ' + age + '세 입니다.');

// ! 상수(constant)
// : 변하지 않는 수
// : 한 번 할당된 값을 변경할 수 없음 (재할당 불가)

// ? 상수 명명 규칙 (필수 - 변수와 동일)
// * 권장 사항
// : UPPER_SNAKE_CASE
// : 모든 영문자를 대문자, 이어지는 단어는 언더스코어(_)로 구분

// 상수 선언과 초기화 - 반드시 선언과 동시에! 할당!!
// const 변수명 = 데이터(값);

const PI = 3.14;

// PI = 2.14; - Eroor : 상수에 재할당 불가!

let radius = prompt('반지름을 입력해주세요.')

console.log('반지름 : ', radius * radius * PI);
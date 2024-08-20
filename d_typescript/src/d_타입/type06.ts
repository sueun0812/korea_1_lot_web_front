// # type06.ts
export const tmp = '';

// ! 리터럴 타입 (Literal, 문자 그대로의)
// : 특정 '값'만을 가질 수 있는 타입을 정의할 때 사용
// >> 특정 '값'으로 제한

// ? 리터럴 타입의 종류
// - 해당 값만을 가지는 상수
// - 해당 값을 타입으로 지정한 변수
// >> 다른 값을 할당하려고 하면 타입 에러가 발생

// 1) const 키워드를 사용하여 직접 리터럴 값을 할당(초기화)
let str1 = '안녕하세요';  // string 타입
str1 = 'hello';
str1 = '곤니치와';

const str2 = '반갑습니다.'; // "반갑습니다."타입
// str2 = 'hi'; - 상수이므로 'str2'에 할당할 수 없습니다.
// str2 = '니하오';
// >> 해당 값을 자동으로 리털러 값으로 유추

// ? 2) 변수에 타입 명시를 리터럴 값으로 명시
let num1: 123 = 123;  // 123 타입
// num1 = 234;
// num1 = 345;

let bool1: true = true; // true 타입
// bool1 = false;

// ! 리터럴 타입의 활용
// : 주로 type 키워드(타입 별칭)와 함께 사용
// >> 유니언 타입과 함께 사용하여 다양한 값을 표현함과 동시에 제한 가능
// >> 변수 혹은 매개변수가 특정 값들 중 하나만을 가질 수 있도록 제한

// ? 리터럴 타입 예시
// 1) Directions(방향) 타입을 정의
type Directions = 'up' | 'down' | 'left' | 'right';

let moveUp: Directions;
moveUp = 'up';
// moveUp = '위';

// 2) 함수의 인자로 리터럴 타입을 지정하여 특정 값으로 제한
function setAlignment(align: 'left' | 'center' | 'right') {
  // 함수 내용
  // let container = document.querySelector('#contianer');
  // container.style.textAlign = align;
}

setAlignment('center');
// setAlignment('중앙');  - Error

// 3) IoT 국비반 학생 관리 시스템

type Students = '정수은' | '정쪼꼬' | '이승아';
let students: Students;

// students = '김준일' - Error

// +) 리터럴 타입의 경우 여러 타입의 혼합이 가능
type mixedType = 'yes' | 'no' | 1 | 2 | 3;

let gameState: mixedType;
gameState = 'yes';
gameState = 3;
gameState = 2;
gameState = 1;
// gameState = 123; - Error
// gameState = '노우';  - Error
gameState = 'no';

// # =====================================
// ! 객체 리터럴 타입
// : 실제 객체 데이터 정의

type UserType = {
  name: '정수은';
  height: 165;
};

let user: UserType = {
  name: '정수은',
  // height: 170  // '170' 형식은 '165' 형식에 할당할 수 없습니다.
  height: 165
};

// user.name = '정쪼꼬';  

// ! 객체의 구조적 타이핑(덕 타이핑)
// : 객체의 타입을 실제 값보다는 그 구조나 멤버에 의해 결정하는 방식
// >> 객체의 형태가 같다면, 같은 타입으로 간주

type Person = {
  name: string;
  age: number;
}

function greet(person: Person) {
  console.log(`Name : ${person.name}, Age : ${person.age}`);
}

// Person 타입이 명시적으로 구현되지 않은 객체 생성
const p1 = {
  name: '정수은',
  age: 10
}

const p2 = {
  name: '정쪼꼬',
  age: 12,
  hobby: '산책'
}

const p3 = {
  name: '박규병'
}

greet(p1);  // Person과 구조가 일치하기 때문에 Person 취급
greet(p2);  // 구조적 타이핑에 의해 Person 취급 (hobby 속성을 무시)
// greet(p3);  // >> Person 타입 속성 구조와 일치하지 않음

// ! 중첩된 객체 타입 정의

type Address = {
  street: string;
  readonly city: string;
  zipCode?: string; // 선택적 프로퍼티 (옵셔널)
}

type UserProfile = {
  username: string;
  email: string;
  address: Address;
}

let userA: UserProfile = {
  username: '수은',
  email: 'qwe123',
  address: {
    street: '123 St',
    city: 'Busan',
  }
}

// userA.address.city = '대전';
userA.address.street = '중앙대로';

// ! 객체의 인덱스 서명
// : 객체의 모든 속성에 대해 타입을 정의하지 않고
// >> 키와 값의 타입만 정의하여 구조를 유연하게 적용하는 방법

type UserDataType = {
  name: string; // - 일반적인 객체 속성 타입 명시

  // ? 인덱스 서명 사용 방법
  // [propertyName: indexType]: valueType;
  // 키의 타입과 값의 타입을 미리 명시
  [key: string]: string | number | boolean;  // 키는 string 사용을 권장
  // >> valueType에는 어떤 타입이든 가능
}

let user1: UserDataType = {
  name: '정수은',
  height: '123',
  age: 50,
  isTeacher: false
}

// user1.email = [123, 234];
user1.email = 'qwe123';






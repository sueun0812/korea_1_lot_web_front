// # obj02.js

// ! 객체의 멤버 접근 방법

// ? cf) 배열(리스트)은 각 요소 접근 시 인덱스 번호를 사용
let array = [1, 2, 3, 4];
array[0] = 5;
console.log(array); // [ 5, 2, 3, 4 ]

// 객체는 각 요소값에 대해 '키'로 접근
// 객체명.속성명(키)
// 객체명.메서드명
// >> 점표기법 사용 (거의 사용)

// 객체명[속성명]
// 객체명[메서드명]
// >> 대괄효 표기법 사용

let dog = {
  name: {
    last: 'choco',
    first: 'coco'
  },

  age: 3,
  color: 'white',
  favoriteToy: ['곰인형', '탱탱볼'],

  bark: function() { // bark : 짖다
    console.log('멍멍');
  },

  greet: function() {
    // 해당 객체가 가진 속성에 접근을 하는 경우 this를 사용
    console.log(`Hello, ${this.name.last}`);
  }
}

// 1) 점 표기법 사용 (프로퍼티 접근)
console.log(dog.age);
console.log(dog.name.first);
console.log(dog.favoriteToy[1]);

// +) 함수 호출
dog.greet();

// 2) 대괄호 표기법 사용
// 객체명['키'] (키값을 문자열로 전달)
console.log(dog['age']);  // 3

// ! 객체 프로퍼티 (속성) 추가
// 객체명.프로퍼티명 = 값(데이터);
dog.speed = 10;
console.log(dog);

// # JS의 this 키워드
console.log('=== this ===');

// 객체
// : 지금 동작(호출)하고 있는 코드를 가지고 있는 객체를 가리킴

// ? 1. 전역 컨텍스트
// : 전체 실행 상태
console.log(this);  // {} : 해당 파일의 전역 스코프(전역 상태)

// - Node.js에서는 global(전역) 객체
// - 브라우저 환경에서는 window

// ? 2. 함수 컨텍스트

// 1) 일반 함수의 this
// : 전역 객체를 의미 (전역 컨텍스트와 동일)

function showThis() {
  console.log(this);
}

showThis(); // 전역 상태에 대한 정의

// 2) 메서드로 쓰이는 함수 내부의 this
// : 객체의 메서드로 함수를 호출할 경우
//   , this는 해당 메서드를 호출한 객체에 바인딩(bind: 묶다, 고정하다)

const myObject = {
  name: 'object',
  showThis: function() {
    console.log(this);
  }
}

myObject.showThis();  // { name: 'object', showThis: [Function: showThis] }

// 리터럴 객체 사용 시
// this 값이 고정

// 생성자 함수 사용한 객체 생성 시
// : this 값은 현재 쓰이는 객체에 바인딩 (어떠한 객체를 호출하느냐에 따라 달라짐)

function Person(name) {
  // this는 Person 생성자 함수로 생성되는 각각의 객체를 의미
  // this.name은 각 객체의 속성

  // 우항의 name은 생성자 함수 호출 시 전달되는 인자값
  this.name = name;
}

const person1 = new Person('정수은');
const person2 = new Person('쪼꼬');

console.log(person1.name);
console.log(person2.name);

// # 화살표 함수에서의 this

const arrowObject = {
  name: 'object',
  showTins: () => { //# 화살표 함수 사용
    // 화살표 함수가 정의되는 객체의 생성 스코프를 this가 받아옴
    // >> 화살표 함수가 들어있는 객체 전역을 가져옴
    console.log(this);
  }
}

arrowObject.showTins(); //# {} : 전역 컨텍스트의 this와 동일 - 전역 객체

// ! 객체 내부의 this에서 현재 쓰이는 객체를 가져오기 위해서 
// , this값 활용 시 일정한 형태의 함수 사용을 권장

// >> 선언적 함수, 함수 표현식 등 function 키워드 사용
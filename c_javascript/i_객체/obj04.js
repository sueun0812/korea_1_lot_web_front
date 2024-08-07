// # obj04.js

// ! 객체의 참조 타입 이해

// '원시' 타입 (기본 자료형)

// '참조' 타입 (참조 자료형)
// : 메모리에 저장된 객체의 주소를 저장 (변수에 주소값이 저장)

let computer1 = {
  name: '삼성 노트북 북3'
}

let computer2 = computer1;  // computer2에는 computer1의 주소값이 저장

computer1.name = '맥북';

console.log(computer2); // { name: '맥북' }

function changeName(computer) {
  computer.name = '아이패드';
}

changeName(computer2);  // 16번째 줄과 동일

console.log(computer1.name);  // 아이패드

// # == 객체의 복사(깊은 복사 & 얕은 복사) ==

// 1) 얕은 복사
// >> 할당을 통한 복사

// : 속성값이 원시 타입인 경우 그 값이 직접 복사
// : 속성값이 참조 타입인 경우 해당 참조(메모리 주소)만 복사

let animal1 = {
  name: 'choco',  // 원시 타입 속성
  owner: {  // 참조 타입 속성
    name: '정수은',
    job: 'developer'
  }
}

let animal2 = animal1;  // 동일한 객체를 참조

// ? 복사된 객체의 값을 변경
animal2.name = '쪼꼬';
animal2.owner.name = '박규병';

// ? 복사된 객체를 출력
console.log(animal1.name);  // 쪼꼬
console.log(animal1.owner.name);  // 박규병

console.log(animal2); // { name: '쪼꼬', owner: { name: '박규병', job: 'developer' } }

// 2) 깊은 복사
// : 원본 객체의 값을 완전히 복제하여 새로운 객체를 생성
// : 원복 객체와 복사본이 서로 독립적

// JSON.parse(JSON.stringfy(object))

// JSON.stringfy(obj)
// : 전달받은 객체를 JSON 문자열로 변환

// JSON.parse(json)
// : JSON 문자열을 JS 객체로 변환 : 새로운 메모리 위치에 할당

let book1 = {
  title: '어린왕자',
  author: '생택쥐페리',
  publishYear: 2024
}

let book2 = JSON.parse(JSON.stringify(book1));

book2.title = 'litlle prince'
book2.publishYear = 2023;

console.log(book2); // { title: 'litlle prince', author: '생택쥐페리', publishYear: 2023 }
console.log(book1); // { title: '어린왕자', author: '생택쥐페리', publishYear: 2024 }

// JSON 형식
// JavaScript Object Notation (자바스크립트 객체 표기법)

// # 객체의 속성 확인 연산자

// { title: '어린왕자', author: '생택쥐페리', publishYear: 2024 }

// : 속성이 객체에 존재하는지 확인을 위해 in 연산자를 사용
// >> 여부를 boolean 값으로 반환

console.log('title' in book1);  // true
console.log('author' in book1); // true
console.log('publishYear' in book1);  // true
console.log('hello' in book1);  // false

// 속성 삭제
// : delete 연산자 사용
// >> 속성 삭제 시 값이 자동 삭제

delete book1.author;
console.log('author' in book1); // false
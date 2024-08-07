// # event01.js

//! === 1. 이벤트 정의 ===
// : 웹 페이지에서 발생하는 대부분의 일(사건)을 의미
// EX) 사용자가 버튼을 클릭, 웹 페이지가 로드, input 필드에 입력하는 것 등

//! === 2. 이벤트 핸들링 (handle: 다루다) ===
// : 특정 이벤트에 반응해서 특정 동작을 실행하는 것을 의미
// >> 이벤트 핸들러(이벤트 리스너)는 특정 이벤트가 발생했을 때 호출되는 함수

//? JS 이벤트의 종류

// 1) 마우스 이벤트
/*
! click: 요소를 클릭할 때 발생
dblclick: 요소를 더블 클릭할 때 발생
mousedown: 마우스 버튼을 누를 때 발생
mouseup: 마우스 버튼을 뗄 때 발생
mouseover: 요소 위로 마우스를 올릴 때 발생
mouseout: 요소 밖으로 마우스를 뺄 때 발생
mousemove: 마우스가 움직일 때 발생
*/

// 2) 키보드 이벤트
/*
! keydown: 키를 누를 때 발생
keyup: 키를 뗄 때 발생
keypress: 키를 누르고 있을 때 발생
*/

// 3) 폼 이벤트
/*
! submit: 폼을 제출할 때 발생
! change: 폼 요소의 값이 변경될 때 발생
focus: 폼 요소가 포커스를 받을 때 발생
blur: 폼 요소가 포커스를 잃을 때 발생
*/

// 4) 문서/윈도우 이벤트
/*
load: 페이지나 이미지 등이 모두 로드될 때 발생
resize: 윈도우 크기가 변경될 때 발생
scroll: 스크롤할 때 발생
*/

//! === 3. 이벤트 핸들러 '등록' 방법 ===

// 예시 함수 정의 (이벤트 활용 시 사용 될 "랜덤 색상 생성 함수")
// rgb(r, g, b); >> 0 ~ 255까지의 정수가 지정

//* random 함수 정의: 랜덤 숫자 생성
function random(number) {
  // 1. Math.random()
  // : 0이상 1미만의 부동 소수점 난수(랜덤 실수(소수점))를 생성하고 반환

  // 2. Math.floor()
  // : 괄호 안의 수를 내림하여 가장 가까운 정수를 생성하고 반환
  
  // EX) 0 이상 101 미만의 정수를 생성
  // : 0부터 100까지의 정수 생성
  return Math.floor(Math.random() * (number + 1));
}

// console.log(Math.random()); // 0 <= x < 1
// console.log(Math.random()* 100); // 0 <= x < 100
// console.log(Math.random()* 101); // 0 <= x < 101 (100을 포함)

//* randomColor 함수 정의: 랜덤 색상 생성
function randomColorFunc() {
  // 'rgb(x, y, z)' 형식과 동일
  // : x, y, z에 각각 0부터 255까지의 무작위 정수를 사용

  // EX) rgb(244, 31, 59);
  return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}

//? 1) HTML 이벤트 핸들러 속성(프로퍼티)
// >> HTML 요소에 직접 이벤트 핸들러 속성을 설정
// : HTML 요소를 JS의 객체로 가져와서 핸들러 속성을 설정

const bgButton = document.querySelector('#bgChange'); // html 요소를 '참조'

//& on- 키워드
// : 이벤트의 종류를 연결시켜주는 키워드
// >> HTML 요소에 함수를 할당해서 이벤트를 연결

bgButton.onmouseout = function() {
  const randomColor = randomColorFunc();

  // document.body.style.backgroundColor = randomColor;
  bgButton.style.backgroundColor = randomColor;
}

//? 2) 인라인 이벤트 핸들러
// : 사용하지 않는 것을 권장
// >> 코드를 파싱(분석)과 유지보수의 어려움

const textButton = document.querySelector('#textChange');

function textChangeFunc() {
  const randomColor = randomColorFunc();
  textButton.style.color = randomColor;
}

//& HTML 요소의 참조를 가지고 오는 방법

// cf) JS 내에서의 HTML 인식
// : 자바스크립트의 객체로 인식 
// >> DOM으로 인식 (Document Object Model)

// 1. document.querySelector('선택자');
// : 같은 선택자 여러 개일 경우 첫 번째 요소만 가져옴

const btnButton = document.querySelector('.btn');
btnButton.onclick = function() {
  console.log('버튼이 클릭되었습니다.');
}

// 2. document.querySelectorAll('선택자');
// : 여러 개의 요소의 참조를 모두 가져와서 한 번에 이벤트 핸들러를 추가
// >> 해당 참조값들이 배열(리스트)로 저장

const divs = document.querySelectorAll('div');

divs.forEach(div => div.onclick = function() {
  this.style.backgroundColor = randomColorFunc();
});

//? 3) addEventListener 메서드
// : 표준 이벤트 모델
// HTML 요소에 addEventListener 메서드를 사용하여 이벤트를 등록하는 방법
// >> 한 요소에 여러 개의 이벤트 핸들러 등록 가능

// "addEventLister 메서드는 HTML 요소(객체)에 사용"

const btnsButton = document.querySelectorAll('.btnsChange');

// addEventListener()는 인자로 이벤트와 콜백함수를 받음

// 이벤트: 이벤트의 종류를 문자열로 전달
// 콜백함수: 요소에 연결할 함수 (이벤트 발생 시 실행될 함수)

btnsButton.forEach(btn => {
  // btn은 DOM 요소 (HTML 요소를 객체로 변환)
  btn.addEventListener('click', function() {
    const randomColor = randomColorFunc();
    btn.style.backgroundColor = randomColor;
  });
});

//? === 4) 이벤트 제거하는 방법 ===
// : removeEventListener() 메서드 사용
// >> 이벤트 핸들러를 제거하는 메서드

const removeButton = document.querySelector('#remove');

let removeChange = () => {
  const randomColor = randomColorFunc();
  removeButton.style.color = randomColor;
};

// cf) 함수 호출 VS 함수 등록
// 함수 호출: 함수명()
// >> 코드를 읽는 즉시 함수가 실행

// 함수 등록: 함수명
// >> 부가적인 발생, 함수를 전달하여 실행

// 이벤트 리스너 등록
removeButton.addEventListener('click', removeChange);

// 이벤트 리스너 제거
removeButton.removeEventListener('click', removeChange);

// # event02.js

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

// 이벤트 객체를 전달받아
// : '이벤트가 발생된 요소'의 배경을 변경
// >> event(이벤트 객체).target
function bgChange(event) {
  const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

  // event.target: HTML 요소 (JS DOM 요소 - 객체)
  event.target.style.backgroundColor = randomColor;
}

//! 1. 이벤트 '객체'
// : 이벤트 핸들러가 호출될 때
//   , 브라우저가 자동으로 이벤트 객체를 생성하여 이벤트 핸들러에 전달
// >> 이벤트와 관련된 다양한 속성과 메서드가 포함

//? 이벤트 객체의 속성과 메서드

// 1. type
// : 이벤트 유형을 지정 ('click', 'change' 등)

// 2. target
// : 이벤트가 발생한 요소를 참조 
// >> 실질적으로 이벤트가 발생한 요소
// >> 이벤트 발생 시 변경을 적용할 요소를 결정하는 데 유용

// 3. currentTarget
// : 이벤트 리스너가 실제로 첨부된 요소를 참조

// 4. preventDefault()
// : 브라우저가 해당 이벤트에 대해 기본적으로 수행하는 동작을 방지

// 5. stopPropagation()
// : 이벤트가 전파되는 것을 방지

// 예) 마우스 이벤트 - 마우스의 위치, 버튼 상태 등
//     키보드 이벤트 - 눌려진 키에 대한 정보를 포함

//? 이벤트 객체 사용 방법
// : 이벤트가 발생하는 함수에 매개변수로 전달
// >> 매개변수의 명을 event, evt, e 등으로 명명을 권장

const colorChangeButton = document.querySelector('#colorChangeButton');

colorChangeButton.addEventListener('click', bgChange);

const divs = document.querySelectorAll('.colorDiv');

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bgChange);
}

// === 이벤트 객체 실습 ===
// 16개의 타일 세트
// querySelectorAll()을 사용 >> 16개의 참조를 tiles 상수에 할당
// >> 반복문 사용으로 16개의 타일에 이벤트 핸들러 등록

const tiles = document.querySelectorAll('.tile');

function tileChange() {
  const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

  return randomColor;
}

for (let i = 0; i < tiles.length; i++) {
  tiles[i].onclick = function(e) {
    e.target.style.backgroundColor = tileChange();
  }
}

//! 2. 이벤트의 기본 행동 방지
// form 태그의 경우 submit 버튼 실행 시
// , 내부의 데이터가 서버에 전송되고 페이지가 리로드
// >> 기본 행동을 방지 메서드: preventDefault()

const form = document.querySelector('form');
const fname = document.querySelector('#fname');
const email = document.querySelector('#email');
const p = document.querySelector('p');

// onsumbit 이벤트 등록
// : form 요소의 전송에 대한 이벤트를 감지

form.onsubmit = function(e) {
  // 이름과 이메일을 반드시 작성하도록 설정
  // 참조된 요소의 값(내용) 가져오기
  // : 참조값.value 속성을 사용

  if (fname.value === '' || email.value === '') {
    e.preventDefault();
    
    p.textContent = '이름과 이메일을 모두 입력해주세요 :)'; 
  }
}

//! 3. 이벤트 전파 방지
let parentDiv = document.querySelector('#parentDiv');
let childButton = document.querySelector('#childButton');

parentDiv.addEventListener('click', function() {
  console.log('부모 요소 클릭');
});

childButton.addEventListener('click', function(e) {
  console.log('자식 요소 클릭');

  // 이벤트 버블링은 자식에서 부모로 진행
  // : 이벤트객체.stopPropagation() 메서드를 사용하여 전파를 중지

  e.stopPropagation(); // 자식 요소에서 지정
});

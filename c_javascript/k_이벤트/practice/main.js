// # main.js

// ! 간단한 todo 리스트 만들기

/*
  - input 태그에 할 일을 입력
  - 추가 버튼 클릭으로 할 일을 추가
  - 할 일은 ul태그 내에 li태그로 저장
*/

let todoInput = document.querySelector('#todo-input');
let addButton = document.querySelector('#add-button');
let todoList = document.querySelector('#todo-list');

// 추가 버튼 클릭 시
addButton.addEventListener('click', () => {
  // input 태그에 입력값이 있는 경우
  if (todoInput.value !== '') {
    // 동적으로 li태그 생성
    let newItem = document.createElement('li');
    newItem.textContent = todoInput.value;
    
    // HTML요소.classList.add('클래스명')
    // : 해당 요소의 class 속성응로 클래스명을 추가
    newItem.classList.add('todo-item');

    // 생성된 li태그를 ul태그 내에 삽입
    // 부모요소.appendChild(자식요소);
    todoList.appendChild(newItem);

    // ? input 등과 같이 상호작용된 데이터를 사용하고나면
    // , 해당 데이터를 초기화
    todoInput.value = '';
  }
});

todoList.addEventListener('click', (e) => {
  // e 이벤트 객체
  // : 실제 이벤트가 발생되는 요소 target

  // +) DOM 요소의 태그명을 가져오기
  // HTML요소.tagName >> 태그명의 알파벳이 모두 대문자표기
  if (e.target.tagName === 'LI') {

    // HTML요소.classList: HTML 요소의 class 속성에 접근

    // .toggle('클래스명') 속성
    // >> classList 중에서 해당 클래스명이 토글
    //    : 작성되어 있는 경우 - 삭제
    //    : 작성되어 있지않은 경우 - 명시
    e.target.classList.toggle('completed');
  }
});

// ! 남은 글자 수 출력하기
document.addEventListener('DOMContentLoaded', () => {
  const wordInput = document.querySelector('#word-input');
  const p = document.querySelector('#para');

  wordInput.addEventListener('keyup', (e) => {
    const length = wordInput.value.length;
    p.textContent = `글자 수 : ${length}`;
  });
});
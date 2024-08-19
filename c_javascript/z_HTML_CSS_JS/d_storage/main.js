// # main.js

/*
  ! 프로그램 로직 정의
  
  1) 할일 추가
  >> 로컬 스토리지에 새로운 데이터 추가

  2) 할일 목록 렌더링
  >> 로컬 스토리지에 데이터가 있을 경우 불러오기

  3) 할일 삭제
  >> 로컬 스토리지에 해당 데이터 삭제
*/

// # 1. 할일 목록을 저장할 빈 배열
let todos = [];

// 문서 로딩 완료 시 콜백 함수 실행
document.addEventListener('DOMContentLoaded', () => {
  // 'todos' 데이터를 JSON으로 파싱하고, 값이 없으면 빈 배열 사용
  todos = JSON.parse(localStorage.getItem('todos')) || [];
  renderTodos(todos); // 할일 목록을 화면에 렌더링
});

// # 2. 할일을 추가하는 함수
function addTodo() {
  const input = document.getElementById('todo-input');
  const newTodo = input.value.trim();

  if (newTodo) {
    // 값이 존재하는 경우
    todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos(todos);
    input.value = '';
  }
}

// # 할일 목록을 렌더링하는 함수
function renderTodos(todos) {
  const list = document.getElementById('todo-list');
  list.innerHTML = '';

  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.textContent = todo;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '삭제';

    // HTML 요소에 on 이벤트 등록
    deleteBtn.onclick = () => removeTodo(index);

    deleteBtn.classList.add('deleteBtn')

    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}

// # 할일을 삭제하는 함수
function removeTodo(index) {
  // 배열.splice(삭제할 요소의 시작 인덱스, 제거할 요소의 수);
  todos.splice(index, 1);
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos(todos);
}

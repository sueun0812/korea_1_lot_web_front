// # review01.js

// ! Todo 리스트 만들기 (할 일 목록 관리 시스템)

// # Todo 객체 구성

// - id : 각 할 일의 고유 식별자, 주로 숫자나 문자열로 표현
// - content : 할 일의 내용을 문자열로 저장
// - completed : 할 일의 완료 상태를 나타내는 boolean 데이터

/*
  # todo 객체 예시
  let todo = {
    id: 1,
    content: 'sqld 공부하기',
    completed: false
  }
*/

// # 프로젝트 구조
// 1. 할 일 추가 : 객체를 사용하여 할 일을 저장하고 배열에 객체를 추가
// >> 새로운 할 일(객체)을 목록(배열)에 추가

// 2. 할 일 수정 : 완료된 할 일의 completed값을 전환(토글, toggle)
// >> 할 일의 완료 상태를 변경

// 3. 할 일 삭제 : 원하는 할 일을 목록에서 제거

// 4. 할일 목록 출력 : 현재 목록의 상태를 콘솔에 출력

// >> 'CRUD' 프로그램의 기본 기능
// Create(생성, 1), Read(읽기, 4), Update(수정, 2), Delete(삭제, 3)

// # 프로젝트 구현

let todos = []; // 할 일 목록을 저장할 배열 초기화

// ? 1. 할 일을 추가하는 함수
// : 고유 ID, 내용, 완료 상태를 가지는 객체를 생성
// >> 배열에 추가
function addTodo(content) {  // 함수 호출 시 인자로 할 일의 내용을 전달받음
 // 새로운 할 일 생성
  const newTodo = {
    id: todos.length + 1, // 이전 배열의 길이 + 1 === 마지막 인덱스 번호 + 1
    content: content,
    completed: false
  };

  todos.push(newTodo);
  displayTodos();
}

// ? 2. 할 일의 완료 상태를 변경하는 함수
// : 주어진 id를 가진 할 일의 '완료 상태를 전환(토글)'
function toggleTodo(id) {
  todos = todos.map((todo) => {
    // 순회되는 할 일(todo)의 id와 매개변수로 전달받은 id가 '일치한다면'
    if (todo.id === id) {
      // 해당 할 일의 완료 상태를 토글시키고 새로운 객체로 반환
      // >> 스프레드 연산자(...)

      // let arr1 = [1, 2, 3];
      // let arr2 = [...arr1];  >> arr1의 요소만 가져와서 새로운 배열을 생성 (메모리 주소가 다름)

      // completed : false
      // 객체명.속성키 = 속성값; >> 객체 속성값 재할당
      // 속성키: 새로운속성값; >> 객체 내부에서 속성값 재할당
      return {...todo, completed: !todo.completed}; //: todo는 현재 순회되는 객체(할 일)) 값
    }

    return todo;  // id가 일치하지 않는 데이터는 기존 객체를 그대로 반환
  });

  displayTodos();
}


// ? 3. 할 일을 삭제하는 함수
// : 주어진 id를 가진 할 일을 todos 배열에서 제거
// >> 배열 내부 요소의 개수 변화 O (filter)
function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
  displayTodos();
}

// ? 4. 현재의 할 일 목록을 출력하는 함수
function displayTodos() {
  console.log(`현재의 할 일 목록`);
  todos.forEach(todo => {
    // todo.completed는 boolean 값
    // >> 조건식 중에 연산자를 활용하는 '삼항 연산자' (조건식 ? 참 : 거짓)
    console.log(`${todo.id}: ${todo.content} - ${todo.completed ? '완료됨' : '완료되지 않음'}`);
  });
};

// # 프로젝트 실행
addTodo('sqld 공부하기');
addTodo('기술 블로그 작성하기');
addTodo('자기소개서 작성하기');

toggleTodo(1);
toggleTodo(3);

deleteTodo(3);

addTodo('자바스크립트 복습하기');

toggleTodo(1);
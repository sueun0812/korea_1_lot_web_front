// # todo01상세.ts
export const tmp = '';

//! 타입스크립트 TODO 리스트 구현

/*
# 데이터 구조 
배열 >> 객체
EX) 회원들 >> 회원 
/ 상품들 >> 상품 
/ 게시글들 >> 게시글
/ 할 일들(ITodoITem[]) >> 할 일(객체 - 인터페이스, ITodoITem)

- 배열 타입 정의
문자열 요소 배열: string[]
숫자형 요소 배열: number[]

! 요구사항 (기능 정리)
- Todo(할 일, 객체) 항목의 인터페이스 정의(ITodoItem)
  : id(number), task(string), completed(boolean) 3가지 속성
>> 각각의 할 일을 todos 배열로 관리

- 할 일 리스트를 관리할 수 있는 함수 구현
  1. addTodo: 새로운 할 일을 추가
  2. completedTodo: Todo 항목의 completed 상태를 true로 변경
  3. deleteTodo: Todo 항목을 삭제

  >> 각 함수는 Todo 항목 배열(todos)를 입력받고, 변경된 배열을 반환
*/

//? 할 일 객체의 인터페이스 명시
interface ITodoItem {
  id: number;
  task: string;
  completed: boolean;
}

// 할 일 목록(리스트) 타입
// : ITodoItem[]
// >> 배열 메서드

//# 할 일을 추가하는 함수
// 매개변수: 전체 할 일 목록(리스트), 할 일 내용
function addTodo(todos: ITodoItem[], task: string): ITodoItem[] {
  // 1) 새로운 할 일 생성
  const newTodo: ITodoItem = {
    // 기존의 Todo 항목들 중에서 가장 큰 id에 1을 더해 새로운 ID 생성
    
    //? Math.max() 사용
    // >> 매개변수로 주어진 숫자 중에서 가장 큰 수를 반환
    // +) 배열이 포함된 경우 배열 요소 중 가장 큰 값을 반환
    // Math.max(가장 큰 id값을 가져옴)

    //? ...todos.map(todo => todo.id)
    // >> 현재의 할 일 목록을 순회

    /*
    [
      { id: 1, task: '타입스크립트 복습', completed: false },
      { id: 2, task: '자바스크립트 복습', completed: false },
      { id: 3, task: 'SQLD 공부', completed: true }
    ]

    >> // [1, 2, 3]배열을 반환
    */
  
    //? Math.max(0, ...todos.map(todo => todo.id))

    // 0, ...todos.map(todo => todo.id)
    // >> 0, 1, 2, 3
    id: Math.max(0, ...todos.map(todo => todo.id)) + 1, 
    task: task,
    completed: false
  }

  // 기존 할 일 목록에 새로운 할 일 추가
  // : 스프레드 연산자 (기존 리스트의 요소 + 새로운 요소 >> 새로운 배열을 생성)
  const newTodos = [...todos, newTodo];

  // 배열의 불변성
  // >> 기존의 배열에 요소를 추가하는 경우 배열의 변화를 리액트에서 인지하지 X
  // todos.push(newTodo);

  // 변경된 할 일 목록 반환
  return newTodos;
}

//# 특정 Todo 항목을 완료 상태로 변경하는 함수
// 매개변수: 이전의 todos 배열, 완료 상태를 변경할 요소의 id

//* 콜백함수
/*
forEach((value, index, array) => {})
>> 모든 요소에 같은 기능 적용

map((value, index, array)) => {})
>> 모든 요소에 같은 기능 적용 + 적용 후 새로운 배열로 반환

filter((value, index, array)) => {})
>> 모든 요소를 순회하면서 해당 조건에 맞는 요소만 새로운 배열로 반환
*/

// let changeTodo; // todo01.ts 의 전역 변수

function completedTodo(todos: ITodoItem[], id: number): ITodoItem[] {
  // 현재 할 일 목록을 순회 (map 배열 메서드)
  // : 매개변수로 전달받은 id값이 일치 할 경우
  // : 해당 요소의 completed 속성을 변경

  // map((value, index, array) => {}) 메서드

  // changeTodo 변수: 함수 내의 지역 변수
  const changeTodo: ITodoItem[] = todos.map(todo => 
    // 순회되는 각 요소의 id === 매개변수의 id가 
    // >> 같을 경우 순회되는 요소의 completed 속성만 변경
    // >> 다를 경우 변경없이 반환

    // 화살표 함수를 콜백함수로 사용 시 (함수의 인자로 전달할 경우)
    // : 한 줄의 코드는 return 키워드와 중괄호를 함께 삭제 가능
    /*
    { ...todo, completed: !todo.completed }
    {
      id: 1,
      task: '자바스크립트 공부',
      completed: true,

      completed: !todo.completed (!true === false)
    }
    */
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );

  // 변경된 할 일 목록 반환
  return changeTodo;
}

//# 지정한 할 일 요소를 제거하는 함수
// 매개변수: todos 현재 배열, 삭제하고자 하는 요소의 id

function deleteTodo(todos: ITodoItem[], id: number): ITodoItem[] {
  // 현재 할 일 목록을 순회
  // : 매개변수로 전달받은 id값과 일치하지 않는 요소(객체)만 새로운 배열로 반환
  // >> filter 배열 메서드

  // filter((value, index, array) => {}) 메서드
  const changeTodo = todos.filter(todo => todo.id !== id);

  // 변경된 할 일 목록 반환
  return changeTodo;
}

//# 함수 사용 예시
let todos: ITodoItem[] = [];

todos = addTodo(todos, '타입스크립트 복습');
todos = addTodo(todos, '자바스크립트 복습');
todos = addTodo(todos, 'SQLD 공부');
console.log(todos);

todos = completedTodo(todos, 1);
todos = completedTodo(todos, 3);
console.log(todos);

todos = completedTodo(todos, 1);
console.log(todos);

todos = deleteTodo(todos, 1);
todos = deleteTodo(todos, 3);
todos = addTodo(todos, 'HTML/CSS 복습'); // id 값 : 3
console.log(todos);
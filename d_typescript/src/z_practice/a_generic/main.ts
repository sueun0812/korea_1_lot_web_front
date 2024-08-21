// # main.ts

// ! Todo 할 일 목록

// # 요구사항(비즈니스 로직) 정리

// TaskManager 클래스를 정의
// >> 인스턴스화 (할 일 목록을 생성)
// +) 기능(함수 - 메서드) 설계 (할 일 목록을 관리)
//    1. 할 일 추가 Create
//    2. 할 일 제거 Delete
//    3. 할 일 렌더링 Read
//    4. 할 일 수정 Update (할 일 목록에 완료 여부 체크박스 사용)
//    5. 할 일 개수 표시 기능 (화면에 현재 등록된 할 일의 총 개수를 표시)

// # 타입 속성 정의 (로직 내에 쓰일 데이터 타입 정의)
// Task(할 일, 객체) 타입을 제네릭으로 정의

type Task<T> = {
  id: number;
  content: T;
  completed: boolean;
}

class TaskManager<T> {
  // 1. 속성
  private tasks: Task<T>[]; // 할 일 목록을 저장할 배열
  private nextId: number; // 다음 할 일에 할당할 고유 id

  constructor() {
    this.tasks = [];
    this.nextId = 1;
  }

  // 2. 메서드 (기능 정의)

  // * 할 일 추가 메서드
  // 매개변수 : 할 일 내용 (content)
  addTask(content: T): void {
    this.tasks.push({ id: this.nextId, content, completed: false})

    // 다음 id값을 미리 증가
    this.nextId++;

    // ? 할 일 개수를 업데이트
    this.updateTaskCount();
  }

  // * 할 일 제거 메서드
  // 매개변수 : 제거할 요소의 id값
  removeTask(id: number): void {
    // task 배열에서 매개변수로 받은 id와 일치하지 않는 할 일만 필터링
    this.tasks = this.tasks.filter(task => task.id !== id);

    // ? 변경된 할 일 목록을 화면에 다시 렌더링
    this.renderTasks('task-list');

    // ? 할 일 개수를 업데이트
    this.updateTaskCount();
  }

  // * 할 일 렌더링 메서드 (출력)
  // : 렌더링할 컨테이너(ul 태그)의 id를 매개변수로 받음
  // >> task-list
  renderTasks(containerId: string): void {
    const container = document.getElementById(containerId) as HTMLUListElement;

    container.innerHTML = '';

    this.tasks.forEach(task => {
      // 새로운 목록 항목(li)을 생성
      const li = document.createElement('li');

      li.textContent = `${task.content}`;
      
      const deleteButton = document.createElement('button');
      deleteButton.textContent = '삭제';
      deleteButton.onclick = () => {
        this.removeTask(task.id);
      }
      // <li>content의 값 <buttin>삭제</button></li> 

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = task.completed;

      checkbox.onchange = () => {
        task.completed = !task.completed;

        this.renderTasks(containerId);
      }
        // <li>content의 값 <buttin>삭제</button><input type='checkbox' checked /></li> 

      if (task.completed) {
        li.style.textDecoration = 'line-through';
      }

      // 생성된 HTML의 하위 요소에 삽입(제일 마지막)
      li.appendChild(deleteButton);

      // 생성된 HTML의 하위 요소로 삽입(삽입할 요소, 부모요소.firstChild): 제일 처음
      li.insertBefore(checkbox, li.firstChild);

      container.appendChild(li);
    });

    this.updateTaskCount();
  }

  // * 할 일 수정 메서드 (완료 여부 토글)

  // * 할 일 개수 업데이트 메서드
  updateTaskCount() {
    const countElement = document.getElementById('task-count');

    // as 타입 단언을 통해 DOM 요소의 존재 여부 체킹을 하지 않은 경우
    // : 존재 여부를 조건문으로 검증
    if (countElement) {
      countElement.textContent = `할 일 개수 : ${this.tasks.length}`;
    }
  }
}

// # 웹 페이지가 모두 로드되었을 때 실행될 함수
document.addEventListener('DOMContentLoaded', () => {
  // '문자열 타입'의 할 일 관리자 인스턴스를 생성
  const taskManager = new TaskManager<string>();

  const addButton = document.getElementById('add-button') as HTMLButtonElement;
  const newTaskInput = document.getElementById('task-input') as HTMLInputElement;
  const taskList = document.getElementById('task-list') as HTMLUListElement;

  addButton.addEventListener('click', () => {
    if (newTaskInput.value.trim() !== '') {
      taskManager.addTask(newTaskInput.value);
      taskManager.renderTasks('task-list');
      newTaskInput.value = '';
    }
  })
})

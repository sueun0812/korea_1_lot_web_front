{
  interface Task {
    id: number;                       // 할 일의 고유 번호
    description: string;              // 할 일의 설명
    timestamp: Date;                  // 할 일이 기록된 시각
  }
  
  class TaskLogger {
    private tasks: Task[] = [];       // Task 객체를 저장하는 배열
    private taskIdCounter = 0;        // 할 일의 ID를 생성하기 위한 카운터
  
    addTask(description: string): Task {
      const newTask: Task = {         // 새로운 할 일 객체 생성
        id: this.taskIdCounter++,     // 현재 카운터 값을 할 일 ID로 사용하고, 카운터 증가
        description,                  // 매개변수로 받은 설명을 할 일 설명으로 설정
        timestamp: new Date(),        // 현재 날짜 및 시간을 할 일의 타임스탬프로 설정
      };
      this.tasks.push(newTask);       // 생성된 할 일을 tasks 배열에 추가
      this.renderTasks();             // 할 일 목록을 화면에 다시 그림
      return newTask;                 // 생성된 할 일 객체 반환
    }
  
    deleteTask(taskId: number): void {
      this.tasks = this.tasks.filter(task => task.id !== taskId); // 특정 ID를 가진 할 일 제거
      this.renderTasks();             // 변경된 할 일 목록을 화면에 다시 그림
    }
  
    private createTaskElement(task: Task): HTMLElement {
      const taskItem = document.createElement('div');  // 새 div 요소 생성
      taskItem.className = 'task-item';                // 생성된 div에 클래스 이름 설정
      taskItem.innerHTML = `
        <span>${task.description} - ${task.timestamp.toLocaleString()}</span>
        <button data-task-id="${task.id}">Delete</button>
      `;  // 할 일 설명과 삭제 버튼을 포함한 HTML 설정
      return taskItem;  // 생성된 할 일 항목 요소 반환
    }
  
    private renderTasks(): void {
      const taskList = document.getElementById('task-list');  // 할 일 목록을 담는 엘리먼트 찾기
      if (taskList) {
        taskList.innerHTML = '';                             // 할 일 목록 초기화
        this.tasks.forEach(task => {
          const taskItem = this.createTaskElement(task);     // 각 할 일을 위한 요소 생성
          taskList.appendChild(taskItem);                    // 생성된 할 일 요소를 taskList에 추가
        });
  
        this.addDeleteEventListeners();                      // 삭제 버튼에 이벤트 리스너 추가
      }
    }
  
    private addDeleteEventListeners(): void {
      const deleteButtons = document.querySelectorAll('.task-item button');  // 모든 삭제 버튼 선택
      deleteButtons.forEach(button => {
        button.addEventListener('click', (event) => {
          const taskId = parseInt((event.target as HTMLButtonElement).dataset.taskId || '0', 10); // 클릭된 버튼의 데이터에서 task ID 추출
          this.deleteTask(taskId);   // 추출된 ID를 가진 할 일 삭제
        });
      });
    }
  }
  
  const init = (): void => {
    const taskLogger = new TaskLogger();                   // TaskLogger 인스턴스 생성
    const logTaskButton = document.getElementById('log-task-button');  // 할 일 추가 버튼 요소 찾기
    const taskModal = document.getElementById('task-modal');           // 할 일 입력 모달 창 요소 찾기
    const closeModal = document.querySelector('.close');               // 모달 창 닫기 버튼 요소 찾기
    const addTaskButton = document.getElementById('add-task-button');  // 할 일 등록 버튼 요소 찾기
    const taskInput = document.getElementById('task-input') as HTMLInputElement;  // 할 일 입력 필드 요소 찾기
  
    if (logTaskButton) {
      logTaskButton.addEventListener('click', () => {
        if (taskModal) {
          taskModal.style.display = 'block';                // 할 일 추가 버튼 클릭 시 모달 창 표시
        }
      });
    }
  
    if (closeModal) {
      closeModal.addEventListener('click', () => {
        if (taskModal) {
          taskModal.style.display = 'none';                 // 닫기 버튼 클릭 시 모달 창 숨김
        }
      });
    }
  
    window.addEventListener('click', (event) => {
      if (event.target === taskModal) {
        if (taskModal) {
          taskModal.style.display = 'none';                 // 모달 창 바깥 영역 클릭 시 모달 창 숨김
        }
      }
    });
  
    if (addTaskButton) {
      addTaskButton.addEventListener('click', () => {
        const description = taskInput.value;                // 입력 필드에서 할 일 설명 텍스트 추출
        if (description && description.trim() !== '') {
          taskLogger.addTask(description.trim());           // 텍스트가 비어있지 않다면 할 일 추가
          taskInput.value = '';                             // 입력 필드 초기화
          if (taskModal) {
            taskModal.style.display = 'none';               // 할 일 추가 후 모달 창 숨김
          }
        } else {
          alert('Task description cannot be empty.');       // 텍스트가 비어있으면 경고 메시지 표시
        }
      });
    }
  };
  
  document.addEventListener('DOMContentLoaded', init);  // 문서 로딩 완료 시 init 함수 실행
}
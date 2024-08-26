{
  interface User {
    id: number;                         // 사용자의 고유 번호
    name: string;                       // 사용자의 이름
    username: string;                   // 사용자의 사용자 이름
    email: string;                      // 사용자의 이메일 주소
    phone: string;                      // 사용자의 전화번호
    website: string;                    // 사용자의 웹사이트 주소
  }
  
  type Users = User[];                  // User 타입의 배열을 Users라는 타입으로 정의
  
  const fetchUsers = async (): Promise<Users> => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"  // JSONPlaceholder API에서 사용자 데이터를 비동기적으로 요청
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");  // 네트워크 응답이 성공적이지 않으면 예외 발생
      }
      const users: Users = await response.json();  // 응답 데이터를 JSON 형태로 파싱
      return users;  // 사용자 데이터 배열 반환
    } catch (error) {
      console.error("Fetch error:", error);  // 오류 발생 시 콘솔에 오류 메시지 출력
      return [];  // 오류 발생 시 빈 배열 반환
    }
  };
  
  const createUserCard = (user: User): HTMLElement => {
    const userCard = document.createElement("div");  // 사용자 카드를 위한 div 요소 생성
    userCard.className = "user-card";                // 생성된 div에 클래스 이름 설정
    userCard.dataset.userId = user.id.toString();    // 데이터 속성에 사용자 ID 설정
    userCard.innerHTML = `
      <h2>${user.name}</h2>
      <p><strong>Username:</strong> ${user.username}</p>
      <p><strong>Email:</strong> ${user.email}</p>
    `;  // HTML 내용으로 사용자 정보 표시
    return userCard;  // 생성된 사용자 카드 요소 반환
  };
  
  const displayUsers = (users: Users): void => {
    const userList = document.getElementById("user-list");  // 사용자 목록을 표시할 요소 선택
    if (userList) {
      userList.innerHTML = "";  // 사용자 목록 초기화
      users.forEach((user) => {
        const userCard = createUserCard(user);  // 각 사용자에 대한 카드 생성
        userList.appendChild(userCard);  // 사용자 목록에 카드 추가
      });
    }
  };
  
  const showModal = (user: User): void => {
    const modal = document.getElementById("user-modal");  // 모달 창 요소 선택
    const modalContent = document.getElementById("modal-user-details");  // 모달 창 내용을 담을 요소 선택
    if (modal && modalContent) {
      modalContent.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>Website:</strong> ${user.website}</p>
      `;  // 모달 창 내용으로 사용자 상세 정보 표시
      modal.style.display = "block";  // 모달 창 표시
    }
  };
  
  const addEventListeners = (users: Users): void => {
    const userList = document.getElementById("user-list") as HTMLElement;  // 'user-list' 아이디를 가진 HTML 요소를 가져와 HTMLElement 타입으로 캐스팅
    if (userList) {
      userList.addEventListener("click", (event) => {
        const target = event.target as HTMLElement;  // 클릭된 요소를 HTMLElement 타입으로 캐스팅
        const userCard = target.closest(".user-card") as HTMLElement | null;  // 클릭된 요소에서 가장 가까운 '.user-card' 클래스를 가진 조상 요소를 찾아 HTMLElement 타입으로 캐스팅
        if (userCard) {
          const userId = parseInt(userCard.dataset.userId || "0", 10);  // userCard의 데이터 속성에서 'userId' 값을 가져와 정수로 변환, 값이 없으면 '0'을 기본값으로 사용
          const user = users.find((u) => u.id === userId);  // users 배열에서 userId와 일치하는 id를 가진 사용자 객체를 찾음
          if (user) {
            showModal(user);  // 찾은 사용자 객체를 사용하여 상세 정보를 보여주는 모달 창을 표시하는 함수 호출
          }
        }
      });
    }
  
    const modal = document.getElementById("user-modal") as HTMLElement;  // 'user-modal' 아이디를 가진 HTML 요소를 가져와 HTMLElement 타입으로 캐스팅
    const closeModal = document.getElementsByClassName(
      "close"
    )[0] as HTMLElement;  // 'close' 클래스를 가진 첫 번째 HTML 요소를 가져와 HTMLElement 타입으로 캐스팅
    if (modal && closeModal) {
      closeModal.addEventListener("click", () => {
        modal.style.display = "none";  // 닫기 버튼 클릭 시 모달의 display 스타일을 'none'으로 설정하여 모달 창을 숨김
      });
  
      window.addEventListener("click", (event) => {
        if (event.target === modal) {
          modal.style.display = "none";  // 모달 창의 외부(모달 자체)를 클릭할 경우 display 스타일을 'none'으로 설정하여 모달 창을 숨김
        }
      });
    }
  };
  
  const init = async (): Promise<void> => {
    const users = await fetchUsers();  // 사용자 데이터 비동기적으로 불러오기
    displayUsers(users);  // 사용자 데이터로 사용자 목록 표시
    addEventListeners(users);  // 이벤트 리스너 추가
  };
  
  document.addEventListener("DOMContentLoaded", init);  // 문서 로딩 완료 시 init 함수 실행
  
}
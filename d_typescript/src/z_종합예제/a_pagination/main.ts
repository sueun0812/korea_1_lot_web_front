{
  // JSONPlaceholder에서 사용자 데이터를 가져옴
  interface User {
    id: number;
    name: string;
    username: string;
    email: string;
  }

  // 전체 사용자 데이터를 Users의 배열로 관리
  type Users = User[];

  // # 비동기적으로 사용자 데이터를 가져오는 함수
  // : async, await 사용

  // 매개변수
  // - page : 현재 출력되는 페이지
  // - limit : 한 페이지 당 출력되는 사용자 데이터의 개수 (3으로 고정)

  // 반환 타입 : Promise<Users>
  // >> async, await도 Promise를 기반으로 하기 때문에
  //    : Promise로 반환되는 데이터에 제네릭을 사용하여 원하고자하는 데이터 형식으로 반환
  const fetchUsers = async (
    page: number,
    limit: number = 3
  ): Promise<Users> => {
    try {
      // JSONPlaceholder의 옵션
      // : _page옵션 - 대량의 데이터를 호출할 때 특정 페이지의 데이터를 가져옴
      // : _limit옵션 - 데이터를 조회할 때 한 번에 가져올 수 있는 항목의 최대 수를 지정

      // >> _page 옵션을 사용하는 경우 기본적으로 각 페이지에 한 개의 데이터가 반환

      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`
      );
      // page에 1 : 1, 2, 3
      // page에 2 : 4, 5, 6
      // page에 3 : 7, 8, 9

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const users: Users = await response.json();

      return users;
    } catch (error) {
      console.error("Fetch error:", error);
      return [];
    }
  };

  // # 각 데이터가 나열될 카드를 동적으로 생성하는 함수
  // 매개변수 : User타입(객체)의 데이터

  const createUserCard = (user: User): HTMLElement => {
    const userCard = document.createElement("div");
    // cf) HTML에 이미 해당 div요소가 있는 경우
    //     const userCard = document.querySelectore('.user-card');

    userCard.className = "user-card";
    // >> className 속성 : HTML의 class 속성과 동일 (.클래스명)

    userCard.innerHTML = `
      <h2>${user.name}</h2>
      <p><strong>Username:</strong> ${user.username}</p>
      <p><strong>Email:</strong> ${user.email}</p>
    `;

    return userCard; // div 태그 내에 h2, p태그가 존재
  };

  // # 생성된 카드를 화면에 출력하는 함수
  // 매개변수 : 사용자 배열 전달
  const displayUsers = (users: Users): void => {
    const userList = document.getElementById("user-list");

    if (userList) {
      userList.innerHTML = "";
      // users배열 : 실제 출력될 데이터 배열 (3개의 요소를 포함)
      users.forEach((user) => {
        // 각 배열을 순회하면서 카드가 생성
        const userCard = createUserCard(user);
        // 생성된 요소가 userlist(div)내에 첨부
        userList.appendChild(userCard);
      });
    }
  };

  // 현재 페이지의 수를 기본값 1페이지로 저장
  let currentPage = 1; // 페이지 수가 변경되어야 하기 때문에 let으로 지정해주어야 함

  // # 현재 페이지 정보를 수정하는 함수
  const updatePageInfo = (): void => {
    // 페이지의 정보를 담는 DOM요소 (span)
    const pageInfo = document.getElementById("page-info");
    if (pageInfo) {
      pageInfo.textContent = `Page ${currentPage}`;
    }
  };

  // # 비동기적으로 데이터를 가져와서 각 페이지별 카드를 생성 + 출력하는 함수
  const loadPage = async (page: number): Promise<void> => {
    // 현재의 페이지값을 전달하여 해당하는 데이터를 비동기적으로 가져옴
    const users = await fetchUsers(page);

    // 현재 페이지에 해당하는 3개의 데이터를 displayUsers 함수에 전달
    displayUsers(users);

    // 페이지 번호도 수정
    updatePageInfo();
  };

  // # addEventListeners 함수
  // : 이벤트 리스너를 추가하는 함수
  const addEventListeners = (): void => {
    const prevPageButton = document.getElementById("prev-page");
    const nextPageButton = document.getElementById("next-page");

    if (prevPageButton && nextPageButton) {
      prevPageButton.addEventListener("click", () => {
        if (currentPage > 1) {
          currentPage--;
          loadPage(currentPage);
        }
      });

      nextPageButton.addEventListener("click", () => {
        currentPage++;
        loadPage(currentPage);
      });
    }
  };

  // # 초기화를 위한 함수
  // : 프로젝트 초기 실행 시 동작
  const init = (): void => {
    addEventListeners();
    loadPage(currentPage);
  };

  document.addEventListener("DOMContentLoaded", init);
}

// # async02.js
// >> asynchronous : 비동기적인

// ! 비동기 프로그래밍 - 콜백 함수
// : 다른 함수에 인자로 전달되어, 해당 함수에 의해 어느 시점에 호출되는 함수

// ? 콜백함수
function greet(name) {
  console.log(`Hello, ${name}`);
}

// ? 메인함수
// 사용자의 입력을 처리하는 함수
function getUserInput(callback) {
  let name = prompt('이름을 입력해주세요.');
  callback(name);
}

getUserInput(greet);

// # 콜백 함수를 사용하는 비동기 요청 예시
// : 서버와의 통신

// cf) fetch (가져오다)
// : 데이터를 가져오다 

function fetchUserData(userId, callback) {
  // 시간에 대한 소요를 setTimeout() 함수를 사용 구현
  setTimeout(() => {
    // 서버로부터 가져온 데이터 (가정)
    const userData = {
      // 가상의 사용자 데이터
      id: userId,
      name: '정수은',
      email: 'qwe1234'
    };

    // 사용자의 데이터를 받아온 후에 작업할 콜백 함수
    callback(userData);
  }, 3000);
}

// 사용자 데이터 처리 함수(콜백 함수)
function handleUserData(user, callback) {
  console.log(`User Data : ${user.name}`);

  // 콜백 함수 내에서 함수 실행 후 동작시킬 코드
  // : 중첩된 콜백함수
  callback();
}

// fetchUserData 함수 호출
fetchUserData(1, handleUserData); // 비동기 처리 로직

console.log('비동기적인 출력'); // 메인 로직

// # 콜백 함수의 중첩 : 콜백 지옥(callback hell)
// >> Promise 기반의 비동기 처리 프로그래밍을 통한 방지

function a() {
  console.log('a');

  function b() {
    console.log('b');

    function c() {
      console.log('c');
    }
  }
}
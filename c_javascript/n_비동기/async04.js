// # async04.js

// ! 자바스크립트 비동기 프로그래밍 - async(비동기적인) / await(기다리다)
// : 'async' 함수 내에서 'await' 키워드를 사용
// >> 비동기 작업이 완료될 때까지 await 실행을 일시적으로 멈춤

// ? async 함수 구조
// : 함수 자체를 비동기 함수로 정의하는 키워드
// : async function 함수명() {}
// >> 항상 Promise 객체를 반환

// - async 함수 내부에서 await 키워드를 사용
// >> Promise의 결과를 기다림

async function fechData() {
  // 비동기 작업을 수행
}

// # async await 비동기 예시
// : 사용자의 정보를 가져오는 함수

async function fetchUserData() {
  // fetch('url')함수
  // : 해당 url을 사용하여 서버와 통신을 하는 메서드
  // >> Response 객체를 반환

  let data = await fetch('https://api.example.com/data'); // 시간이 걸리는 작업

  let jsonData = await data.json();

  console.log(jsonData);
}

// : await 키워드는 async 내부에서만 사용 가능
// >> Promise가 완료될 때까지 기다림

// # 비동기 작업과 예외 처리
// : 예외 처리 코드와 함께 사용 '권장'
async function fetchCustomerData() {
  try {
    // ? 실제 로직이 구현되는 블록
    // : 해당 블록에서 에러 발생 시 즉시 catch 블록으로 이동

    let data = await fetch('url');

    if (!data.ok) {
      throw new Error('네트워크 응답이 실패되었습니다.');
      // 에러 발생 후에는 해당 함수 실행이 종료
    }
    
    // .json() 메서드
    // : json 형식으로 파싱
    // >> 응답 데이터를 js에서 사용할 수 있도록 객체를 반환
    let jsonData = await data.json();
    console.log(jsonData);

  } catch(error) {  // try 블록에서 에러 발생 시 해당 에러를 매개변수로 받아 처리
    console.error(error.message);
    // error.message 속성
    // : 에러 내의 설명이 출력
  }
}

fetchCustomerData();

//& fetch() 함수
// : 네트워크 요청을 비동기적으로 처리
// : fetch는 Promise를 반환하는데, 이 Promise는 HTTP 응답을 나타내는 Response 객체로 해결

// : Response 객체는 요청에 대한 서버의 응답을 포함하며, 여러 가지 유용한 속성과 메서드를 제공

//? Response 객체의 주요 속성
// ok: 이 속성은 HTTP 상태 코드가 200-299 범위에 있을 때 true를 반환
//     >> 요청이 성공적으로 완료되었음을 나타냄

// status: 응답의 HTTP 상태 코드를 반환 (예: 200, 404).

// statusText: HTTP 상태 코드에 대한 텍스트 메시지를 반환 (예: "OK", "Not Found").

// headers: 응답 헤더를 나타내는 Headers 객체. 헤더에서 특정 값을 조회 가능

// body: 응답의 본문을 ReadableStream 형태로 제공 - 이 스트림을 통해 데이터를 읽기 가능
// - 해당 데이터를 json()을 사용하여 JSON 형식으로 파싱

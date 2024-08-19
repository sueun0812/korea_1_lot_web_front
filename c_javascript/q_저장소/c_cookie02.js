// # c_cookie02.js

// ! 쿠키 설정
document.cookie = "cookie02=안녕; path=/;"

// ! 쿠키 값 가져오는 방법
// 1) document.cookie에서 반환된 문자열을 분석
// 2) 특정 쿠키 이름을 찾아 해당 값을 추출 

// ? 쿠키 문자열 분리
// : 웹 문서에 저장된 쿠키로부터 문자열을 세미콜론을 기준으로 분리해서 개별 쿠키를 배열로 변환

function getCookieValue(cookieName) {
  let cookies = document.cookie.split(';');

  let lenght = cookies.length;
  
  for(let i = 0; i < lenght; i++) {
    let cookie = cookies[i];  // 배열을 순회하며 각 쿠키를 변수에 저장

    let parts = cookie.split('=');  // 쿠키를 이름과 값으로 분리
    let name = parts[0].trim(); // 공백 제거
    if(name === cookieName) {
      return parts[1] || '';  // 값이 있으면 반환하고, 해당 이름에 값이 없으면 빈 문자열을 반환
    }
  }

  return '';  // 일치하는 쿠키 이름이 없으면 빈 문자열 반환
}

let username = getCookieValue('username');
console.log(username);

let userAge = getCookieValue('userAge');
console.log(userAge);

// cf) 쿠키값 변경
// : 실질적으로 새로운 값을 가진 쿠키를
// >> 변경하고자하는 이름으로 재설정

// document.cookie = "변경할 쿠키명=수정된값;";

// cf) 쿠키값 삭제
// : 만료 날짜를 과거로 설정
// >> 브라우저가 쿠키를 유효하지 않음으로 인식하여 삭제를 처리

function deleteCookie(cookieName) {
  document.cookie = cookieName + "=; expires=Fri, 17 May 2024 00:00:00 GMT; path=/;"
}

deleteCookie('username');
deleteCookie('userAge');
deleteCookie('username');
deleteCookie('cookie02');
deleteCookie('oneDate');

// 원하는 쿠키 이름, 쿠키 값 > 전체 프로젝트 경로에서 접근 가능한 쿠키 설정
// +) 만료 날짜 1시간 뒤

let date = new Date();
date.setTime(date.getTime() + (1 * 60 * 60 * 1000));
let expires = "expires=" + date.toUTCString();
document.cookie = "jse=이름;" + expires + "; path=/;"

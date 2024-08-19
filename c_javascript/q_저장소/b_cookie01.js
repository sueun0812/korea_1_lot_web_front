// # b_cookie01.js

/*
  ! 쿠키(cookie)
  : 웹 사이트가 사용자의 브라우저에 저장하는 작은 텍스트 파일

  & 쿠키의 구조
  - 이름 : 각 쿠키를 식별하는 고유한 이름 (중복 불가)
  - 값 : 각 쿠키에 저장하는 정보의 문자열
  - 만료 날짜 : 쿠키의 수명

  - 경로
  - 도메인
  - Secure 플래그
  - HttpOnly 플래그

  & 쿠키의 한계
  - 용량 제한(4KB), 보안에 취약(개인 정보 보호 문제)
*/

// & 쿠키 생성 및 수정

// 1. 쿠키 생성 및 수정
// : document.cookie 속성
// >> 웹 브라우저에 쿠키를 생성하고 관리 (쿠키 설정, 읽기, 수정 및 삭제)

// >> document.cookie에 문자열을 할당하면 생성과 수정이 가능
// (필수) 쿠키의 이름, 값
// (선택, 추가 사항) 만료 날짜, 경로, 도메인, 보안

// ? 기본 형식
// document.cookie = '쿠키이름=쿠키값; expires=날짜; path=경로; domain=도메인; secure";

// EX) 사용자 이름 쿠키 설정
// "username"이라는 쿠키에 "LSA"라는 값을 저장
// - 경로값 : 해당 웹 페이지에서 쿠키값에 접근할 수 있는 경로를 지정
// >> '/' 빈 슬래시 사용 : 어떤 경로에서든지 쿠키값에 접근 가능
document.cookie = "username=lsa; path=/;"

// - 만료 날짜 : expires 속성을 설정
// >> 만료 날짜를 설정하지 않는 경우 세션 쿠키로 자동 설정되어 브라우저가 닫힐 때 자동 삭제
// >> 만료 날짜는 UTC(협정 세계시) 시간 단위를 가짐
//    : KST(한국 표준시) 시간 단위보다 9시간 느림 (한국이 UTC보다 9시간 빠름)

let date = new Date();  // 현재 날짜, 시간을 저장
// >> Date 객체에 .getTime()속성 : 시간 데이터를 가져오기 (밀리초)
// >> Date 객체에 .setTime()속성 : 시간 데이터를 설정

date.setTime(date.getTime() + (1 * 60 * 60 * 1000));  // 현재 시간에 1시간을 추가 (1위치에 24를 곱하면 하루)

let expires = "expires=" + date.toUTCString();  // 시간을 협정 세계시 문자열로 변환
/*
  현재 한국 14일 09:54
  세계 협정시 14일 00:54 (-9)
  >> 1시간 뒤 만료 01:54
*/

// "expires=시간문자열"

document.cookie = "userAge=50;" + expires + "; path=/;"
// "userAge=50; expires=시간문자열; path=/;"

let date2 = new Date();
date2.setTime(date2.getTime() + (24 * 60 * 60 * 1000));

let expires2 = "expires=" + date2.toUTCString();

document.cookie = "oneDay=하루;" + expires2 + "; path=/;"
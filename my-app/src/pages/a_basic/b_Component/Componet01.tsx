import React from 'react'
// # 리액트 이미지 사용 방법
// : import 키워드를 사용하여 이미지 파일을 가져오기
import puppy01 from '../../../assets/dog01.jpg';

/*
  ! 상대 경로 지정 방법
  1) ../
  : 해당 폴더 단위를 벗어남

  2) ./
  : 해당 폴더와 같은 위치
*/

// rfc, rfce >> 함수형 컴포넌트 생성
// : 파일 명으로 컴포넌트 함수 생성

/*
! 컴포넌트 (Component)
: 사용자 인커페이스(UI)를 구축하는 기본 요소

? 컴포넌트 사용 방법
1) 컴포넌트 내보내기 (export default)

2) 컴포넌트 가져오기
: 불러오는 환경에서 상대경로를 지정
>> 기존의 컴포넌트 함수명에서 변경 가능 (default)

? 특징
1) 파일명이 대문자로 시작 (UpperCamelCase 사용)
: JS의 일반 함수 형태와 구분
>> rfc, rfce 스니펫 사용 시
  - 파일명이 함수명으로 구현
  - 각 폴더의 메인이 되는 파일 : index.tsx(소문자)
    >> 컴포넌트명은 대문자로 수정
*/

// ! 컴포넌트 생성
// Img 컴포넌트
// : src, alt 속성을 가진 img 태그를 반환
export function Img() {

  // HTML 코드 내에서 JS 문법 사용 시
  // : 중괄호 내에 작성

  // JS 코드 내에서 HTML 코드 작성 시
  // : 소괄호 내에 작성
  // >> 컴포넌트 함수에서 렌더링 할 HTML 코드는
  //    return 반환문 내에서 () 소괄호 지정 후 작성
  return(
    <div>
      <img src={puppy01} alt="강아지" width={300} />
    </div>
  )
}

// ! Component01 : 해당 파일의 메인 컴포넌트 (export default)
export default function Componet01() {
  // 컴포넌트 사용 시 함수 컴포넌트 명으로 태그 작성
  // : 대문자로 시작!
  
  // ? JSX 컴포넌트 사용 시
  // 마크업(태그)이 한 개인 경우 () 소괄호 생략 가능
  // , 여러개일 경우 반드시 소괄호로 감싸서 사용

  return (
    <div>
      <h1>Component01 컴포넌트의 시작</h1>
      {/* img 태그 - HTML 기본 태그 */}
      <img src={puppy01} alt="강아지" width={100} />

      {/* Img 컴포넌트 - 사용자 정의 태그 */}
      <Img />
    </div>
  )
}

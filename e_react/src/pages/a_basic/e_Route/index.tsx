import React from 'react'

/*
  # http://localhost:3000/

  ! 리액트 라우터(React Router)
  : 페이지 이동 기능

  ? 라우터(Router)
  : 사용자가 요청한 URL에 따라 해당 URL에 맞는 ㄴ페이지를 보여주는 것
  : react-router-dom 패키지(외부 라이브러리)를 사용하여 라우팅을 구현

  ! 리액트 라우터 설치 방법
  : npm install react-router-dom
  : npm i react-router-dom

  ! 리액트 라우터 사용 방법
  
  1) 프로젝트에 라우터 기능을 적용
  >> 프로젝트 최상단인 src/index.tsx 파일에서
    BrowserRouter를 적용
  >> 자식 컴포넌트들이 라우팅 기능을 사용할 수 있도록 작성

  2) Routes
    : 여러개의 Route를 담을 수 있는 컴포넌트
    >> 여러개의 Route 중 각각의 path(경로)에 일치하는 라우트 단 하나만을
        렌더링 시켜주는 역할

  3) Route
  
*/

function index() {
  return (
    <div>index</div>
  )
}

export default index
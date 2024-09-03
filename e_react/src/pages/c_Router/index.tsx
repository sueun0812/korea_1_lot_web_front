import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Page01 from './Page01'
import Page02 from './Page02'

//! 리액트 라우터 사용 방법
//? 1. 설치
// npm install react-router-dom

//? 2. 프로젝트 설정(typescript)
// tsconfig.json 파일에 아래의 설정 추가
// {
//   "compilerOptions": {
//     "jsx": "react-jsx"
//   }
// }

//? 3. index.tsx 파일에 리액트 라우터 설정 추가
// : 전체 프로젝트에서 라우팅 기능을 사용함을 명시
// <BrowserRouter></BrowserRouter> 컴포넌트로 
// , 전체 컴포넌트(<App />)를 감싸기

//! 라우터 사용 방법
// Route 컴포넌트에 path='경로' element={<컴포넌트 />} 속성을 사용
// : 여러 개의 Route를 하나의 컴포넌트에 적용하는 경우
//   >> Routes 컴포넌트로 반드시 묶어서 사용

export default function Index() {
  return (
    <div >
      <h1 style={{ 
        backgroundColor: 'black',
        color: 'white'}}
      >리액트 라우터 돔</h1>
      <ul>
        <li>
          <Link to='page01'>페이지 01로 이동</Link>
        </li>

        <li>
          <Link to='page02'>페이지 02로 이동</Link>
        </li>
      </ul>
      {/* 
        해당 컴포넌트의 현재 경로 : http://localhost:3000/routerComponent  
      */}
      {/* 중첩된 라우트 설정 */}
      
      <Routes>
        {/* 해당 컴포넌트의 현재 경로를 기준으로 "추가 경로 지정" */}

        {/* 빈 슬래시(/)만 쓰는 경우 : 현재 컴포너트의 경로로 지정 */}
        <Route path='/page01' element={<Page01 />} />
        {/* 경로에 새로운 경로가 추가되는 경우 : 현재 컴포넌트를 기준으로 추가 */}
        <Route path='/page02' element={<Page02 />} />
      </Routes>
    </div>
  )
}

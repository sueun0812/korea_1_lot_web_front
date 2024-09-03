import React from 'react';
import { Route, Routes } from 'react-router-dom';

// # 고정될 컴포넌트
import NaviBar from './components/NaviBar';

// # 경로에 따라 바뀌는 컴포넌트
import Basic from './pages/a_basic';
import Hooks from './pages/b_hooks';
import RouterComponent from './pages/c_Router';

import Todos01 from './pages/z_todos';
import Parent from './pages/c_Router/Parent';
import Example01 from './pages/c_Router/Example01';
import Example02 from './pages/c_Router/Example02';
import RouterHook from './pages/d_RouterHook';

//! 리액트 프로젝트 개발 실행 명령어
// npm run start
// : http://localhost:3000 환경에서 실행

function App() {
  return (
    <div>
      <h1>React Project - 기초 (리액트 개념, 컴포넌트, JSX, Props)</h1>
      <NaviBar />

      {/* Routes 태그 : Route를 감싸는 컴포넌트 */}
      <Routes>
        {/* Route 태그 : 단일 태그 사용 권장 */}
        {/* path 속성 : 해당 Routes 내에서 사용하는 URL */}
        {/* element 속성 : 해당 path 속성과 일치할 경우 보여질 컴포넌트 */}
        <Route path='/basic' element={<Basic />} />
        <Route path='/hooks' element={<Hooks />} />

        {/* 
          해당 컴포넌트에 대한 메인경로/*
          >> 위 컴포넌트에서 라우트 경로에 따라 페이지 전환이 일어남을 명시  
        */}
        <Route path='/routerComponent/*' element={<RouterComponent />} />

        {/* 
          해당 컴포넌트에 대한 메인경로
          >> 하위 컴포넌틀르 추가 경로로 명시
        */}
        <Route path='/parent' >
          {/* 
            index 경로를 사용하여 감싸는 Route 컴포넌트의 경로에 기본적으로
            렌더링될 컴포넌트를 지정
          */}
          <Route index element={<Parent />}/>

          {/* parent 경로에 추가되는 path에 따라 보여지는 컴포넌트가 달라짐 */}
          <Route path='example01' element={<Example01 />}/>
          <Route path='example02' element={<Example02 />}/>
        </Route>

        <Route path='/routerHook' element={<RouterHook />} />

        {/* 예제 참고용 */}
        <Route path='/todos01' element={<Todos01 />} />
      </Routes>
      
    </div>
  );
}

export default App;
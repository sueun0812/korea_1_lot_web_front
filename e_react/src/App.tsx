import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Basic from './pages/a_basic';
import Hooks from './pages/b_hooks';

//! 리액트 프로젝트 개발 실행 명령어
// npm run start
// : http://localhost:3000 환경에서 실행

function App() {
  return (
    <div>
      <h1>React Project - 기초 (리액트 개념, 컴포넌트, JSX, Props)</h1>

      {/* Routes 태그 : Route를 감싸는 컴포넌트 */}
      <Routes>
        {/* Route 태그 : 단일 태그 사용 권장 */}
        {/* path 속성 : 해당 Routes 내에서 사용하는 URL */}
        {/* element 속성 : 해당 path 속성과 일치할 경우 보여질 컴포넌트 */}
        <Route path='/basic' element={<Basic />} />
        <Route path='/hooks' element={<Hooks />} />
      </Routes>
      
    </div>
  );
}

export default App;